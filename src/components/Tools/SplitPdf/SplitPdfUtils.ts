import { getDocument } from "@/lib/pdfjs";
import { PDFDocument } from "pdf-lib";
import { zipSync } from "fflate";
import type { SplitPdfFormState } from "./useSplitPdfReducer";

interface ParsedRange {
  start: number;
  end: number;
  originalValue: string;
  index: number;
}

/**
 * Function to download a zip file
 * @param zipData - The zip file to download
 * @param filename - The filename of the zip file
 */
const downloadZip = (zipData: Uint8Array, filename: string) => {
  const blob = new Blob([zipData.buffer as ArrayBuffer], {
    type: "application/zip",
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

/**
 * Parse and validate page ranges
 */
const parseRanges = (
  ranges: { value: string }[],
  totalPages: number,
): { parsedRanges: ParsedRange[]; errors: string[] } => {
  const filledRanges = ranges.filter((range) => range.value.trim() !== "");
  const parsedRanges: ParsedRange[] = [];
  const errors: string[] = [];

  filledRanges.forEach((range, index) => {
    const value = range.value.trim();
    const parts = value.split("-").map((p) => p.trim());

    // Validate format
    if (parts.length !== 2) {
      errors.push(`Range ${index + 1} "${value}": Use format "1-5"`);
      return;
    }

    const start = parseInt(parts[0], 10);
    const end = parseInt(parts[1], 10);

    // Validate numbers
    if (isNaN(start) || isNaN(end)) {
      errors.push(`Range ${index + 1} "${value}": Invalid numbers`);
      return;
    }

    // Validate order
    if (start > end) {
      errors.push(`Range ${index + 1}: Start (${start}) > End (${end})`);
      return;
    }

    // Validate page bounds
    if (start < 1 || start > totalPages || end < 1 || end > totalPages) {
      errors.push(`Range ${index + 1}: Pages must be between 1-${totalPages}`);
      return;
    }

    parsedRanges.push({ start, end, originalValue: value, index: index + 1 });
  });

  return { parsedRanges, errors };
};

/**
 * Parse and validate page numbers from comma-separated input
 */
const parsePageNumbers = (
  input: string,
  totalPages: number,
): { validPages: number[]; invalidPages: number[] } => {
  const pageNumbers = input
    .split(",")
    .map((num) => num.trim())
    .filter((num) => num !== "")
    .map((num) => parseInt(num, 10));

  const invalidPages: number[] = [];
  const validPages: number[] = [];

  pageNumbers.forEach((pageNum) => {
    if (isNaN(pageNum) || pageNum < 1 || pageNum > totalPages) {
      invalidPages.push(pageNum);
    } else {
      validPages.push(pageNum);
    }
  });

  return { validPages, invalidPages };
};

/**
 * Create a PDF from a range of pages
 */
const createPdfFromRange = async (
  pdfDoc: PDFDocument,
  start: number,
  end: number,
): Promise<Uint8Array> => {
  const newPdf = await PDFDocument.create();
  const pageIndices = Array.from(
    { length: end - start + 1 },
    (_, i) => start + i - 1,
  );
  const copiedPages = await newPdf.copyPages(pdfDoc, pageIndices);
  copiedPages.forEach((page) => newPdf.addPage(page));
  return new Uint8Array(await newPdf.save());
};

/**
 * Create a PDF from a single page
 */
const createPdfFromPage = async (
  pdfDoc: PDFDocument,
  pageNum: number,
): Promise<Uint8Array> => {
  const newPdf = await PDFDocument.create();
  const [copiedPage] = await newPdf.copyPages(pdfDoc, [pageNum - 1]);
  newPdf.addPage(copiedPage);
  return new Uint8Array(await newPdf.save());
};

/**
 * Function to render the pages of a pdf file
 * @param file - The pdf file to render
 * @returns An array of strings representing the pages of the pdf file
 */
export const renderPdfPages = async (file: File): Promise<string[]> => {
  const buffer = await file.arrayBuffer();
  const pdf = await getDocument(buffer).promise;

  const previews: string[] = [];

  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const viewport = page.getViewport({ scale: 1 });

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d")!;

    canvas.width = viewport.width;
    canvas.height = viewport.height;

    await page.render({ canvasContext: ctx, viewport, canvas }).promise;

    previews.push(canvas.toDataURL("image/png"));
  }

  return previews;
};

/**
 * Handle splitting by ranges
 */
const handleRangeSplit = async (
  pdfDoc: PDFDocument,
  ranges: { value: string }[],
  totalPages: number,
  baseName: string,
  onError?: (message: string) => void,
): Promise<void> => {
  const { parsedRanges, errors } = parseRanges(ranges, totalPages);

  if (parsedRanges.length === 0) {
    const errorMsg =
      errors.length > 0
        ? errors.join("; ")
        : "Please enter at least one page range";
    onError?.(errorMsg);
    throw new Error(errorMsg);
  }

  if (errors.length > 0) {
    const errorMsg = errors.join("; ");
    onError?.(errorMsg);
    throw new Error(errorMsg);
  }

  const pdfFiles: Record<string, Uint8Array> = {};
  for (const range of parsedRanges) {
    const pdfBytes = await createPdfFromRange(pdfDoc, range.start, range.end);
    pdfFiles[`${baseName}_pages_${range.start}-${range.end}.pdf`] = pdfBytes;
  }

  const zipData = zipSync(pdfFiles);
  downloadZip(zipData, `${baseName}_ranges.zip`);
};

/**
 * Handle splitting all pages
 */
const handleAllPagesSplit = async (
  pdfDoc: PDFDocument,
  totalPages: number,
  baseName: string,
): Promise<void> => {
  const pdfFiles: Record<string, Uint8Array> = {};

  for (let i = 1; i <= totalPages; i++) {
    const pdfBytes = await createPdfFromPage(pdfDoc, i);
    pdfFiles[`${baseName}_page_${i}.pdf`] = pdfBytes;
  }

  const zipData = zipSync(pdfFiles);
  downloadZip(zipData, `${baseName}_split.zip`);
};

/**
 * Handle splitting selected pages
 */
const handleSelectedPagesSplit = async (
  pdfDoc: PDFDocument,
  input: string,
  totalPages: number,
  baseName: string,
  onError?: (message: string) => void,
): Promise<void> => {
  if (!input.trim()) {
    const errorMsg = "Please enter page numbers";
    onError?.(errorMsg);
    throw new Error(errorMsg);
  }

  const { validPages, invalidPages } = parsePageNumbers(input, totalPages);

  if (invalidPages.length > 0) {
    const errorMsg = `Invalid page(s): ${invalidPages.join(", ")}. Use pages 1-${totalPages}`;
    onError?.(errorMsg);
    throw new Error(errorMsg);
  }

  if (validPages.length === 0) {
    const errorMsg = "No valid page numbers found";
    onError?.(errorMsg);
    throw new Error(errorMsg);
  }

  const uniquePages = [...new Set(validPages)].sort((a, b) => a - b);
  const pdfFiles: Record<string, Uint8Array> = {};

  for (const pageNum of uniquePages) {
    const pdfBytes = await createPdfFromPage(pdfDoc, pageNum);
    pdfFiles[`${baseName}_page_${pageNum}.pdf`] = pdfBytes;
  }

  const zipData = zipSync(pdfFiles);
  downloadZip(zipData, `${baseName}_selected_pages.zip`);
};

/**
 * Function to split a pdf file
 * @param file - The pdf file to split
 * @param formState - The form state of user input
 * @param onError - Optional callback to show error notifications
 */
export const splitPdf = async (
  file: File,
  formState: SplitPdfFormState,
  onError?: (message: string) => void,
): Promise<void> => {
  if (!file) {
    const errorMsg = "Error reading file";
    onError?.(errorMsg);
    throw new Error(errorMsg);
  }

  const buffer = await file.arrayBuffer();
  const pdfDoc = await PDFDocument.load(buffer);
  const totalPages = pdfDoc.getPageCount();
  const baseName = file.name.replace(/\.pdf$/i, "");

  if (formState.splitType === "ranges") {
    await handleRangeSplit(
      pdfDoc,
      formState.ranges,
      totalPages,
      baseName,
      onError,
    );
  } else if (formState.splitType === "pages") {
    if (formState.extractType === "all") {
      await handleAllPagesSplit(pdfDoc, totalPages, baseName);
    } else {
      await handleSelectedPagesSplit(
        pdfDoc,
        formState.inputValue,
        totalPages,
        baseName,
        onError,
      );
    }
  }
};

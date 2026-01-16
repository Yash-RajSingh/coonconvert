import { getDocument } from "@/lib/pdfjs";
import { createAndDownloadZip } from "@/utils/fileUtils";

/**
 * Convert a data URL to Uint8Array
 */
const dataUrlToUint8Array = (dataUrl: string): Uint8Array => {
  const base64 = dataUrl.split(",")[1];
  const binaryString = atob(base64);
  const bytes = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
};

/**
 * Render all pages of a PDF file as PNG data URLs
 * @param file - The PDF file to render
 * @returns An array of data URL strings representing each page
 */
const renderPdfPages = async (file: File): Promise<string[]> => {
  const buffer = await file.arrayBuffer();
  const pdf = await getDocument(buffer).promise;

  const previews: string[] = [];

  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const viewport = page.getViewport({ scale: 2 });

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    if (!ctx) {
      throw new Error("Could not get canvas context");
    }

    canvas.width = viewport.width;
    canvas.height = viewport.height;

    await page.render({ canvasContext: ctx, viewport, canvas }).promise;

    previews.push(canvas.toDataURL("image/png"));
  }

  return previews;
};

/**
 * Convert PDFs to PNG images and download as ZIP
 * @param files - Array of PDF files to convert
 * @param onProgress - Optional callback for progress updates
 */
export const convertPdfsToPngs = async (
  files: File[],
  onProgress?: (current: number, total: number) => void
): Promise<void> => {
  if (files.length === 0) {
    throw new Error("No files to convert");
  }

  const zipFiles: Record<string, Uint8Array> = {};

  for (let fileIndex = 0; fileIndex < files.length; fileIndex++) {
    const file = files[fileIndex];
    onProgress?.(fileIndex + 1, files.length);

    const pageDataUrls = await renderPdfPages(file);

    const baseName = file.name.replace(/\.pdf$/i, "");

    const folderPrefix = files.length > 1 ? `${baseName}/` : "";

    pageDataUrls.forEach((dataUrl, pageIndex) => {
      const pageNumber = pageIndex + 1;
      const fileName = pageDataUrls.length === 1
        ? `${folderPrefix}${baseName}.png`
        : `${folderPrefix}${baseName}_page_${pageNumber}.png`;

      zipFiles[fileName] = dataUrlToUint8Array(dataUrl);
    });
  }

  const zipName = files.length === 1
    ? `${files[0].name.replace(/\.pdf$/i, "")}_converted.zip`
    : `CoonConvert_pdf_to_png_${Date.now()}.zip`;

  createAndDownloadZip(zipFiles, zipName);
};

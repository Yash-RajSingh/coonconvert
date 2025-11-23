import { PDFDocument } from "pdf-lib";

export async function mergePDFs(files: File[]) {
  if (!files?.length) return null;

  const mergedPdf = await PDFDocument.create();

  for (const file of files) {
    const pdf = await PDFDocument.load(await file.arrayBuffer());
    const pages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
    pages.forEach((page) => mergedPdf.addPage(page));
  }

  const pdfBytes = await mergedPdf.save();
  return new Blob([new Uint8Array(pdfBytes)], { type: "application/pdf" });
}

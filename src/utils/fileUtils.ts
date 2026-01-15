import { zipSync } from "fflate";

/**
 * Download a file
 * @param data - File data as Uint8Array
 * @param filename - Name of the file
 * @param mimeType - MIME type of the file
 */
export const downloadFile = (
  data: Uint8Array,
  filename: string,
  mimeType: string
) => {
  const blob = new Blob([data.buffer as ArrayBuffer], { type: mimeType });
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
 * Create a zip file from multiple files and trigger download
 * @param files - Record of filename to file data
 * @param zipFilename - Name of the zip file
 */
export const createAndDownloadZip = (
  files: Record<string, Uint8Array>,
  zipFilename: string
) => {
  const zipData = zipSync(files);
  downloadFile(zipData, zipFilename, "application/zip");
};

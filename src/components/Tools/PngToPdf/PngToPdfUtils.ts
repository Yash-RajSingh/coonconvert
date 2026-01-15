import { PDFDocument } from "pdf-lib";
import { downloadFile, createAndDownloadZip } from "@/utils/fileUtils";

/**
 * Create a lightweight thumbnail from an image file
 * @param file - The image file to create a thumbnail from
 * @param maxSize - Maximum dimension (width or height) for the thumbnail
 * @param quality - JPEG compression quality (0-1)
 * @returns Promise with the thumbnail data URL
 */
export const createThumbnail = (
  file: File,
  maxSize: number = 300,
  quality: number = 0.7
): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    
    reader.onerror = () => reject(new Error("Failed to read file"));
    
    reader.onload = (e) => {
      const img = new Image();
      
      img.onerror = () => reject(new Error("Failed to load image"));
      
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d", { alpha: true });
        
        if (!ctx) {
          reject(new Error("Failed to get canvas context"));
          return;
        }
        
        let width = img.width;
        let height = img.height;
        
        // Calculate new dimensions maintaining aspect ratio
        if (width > height && width > maxSize) {
          height = (height * maxSize) / width;
          width = maxSize;
        } else if (height > maxSize) {
          width = (width * maxSize) / height;
          height = maxSize;
        }
        
        canvas.width = width;
        canvas.height = height;
        
        // Fill with white background for PNG transparency support
        // This ensures transparent areas become white instead of black
        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(0, 0, width, height);
        
        // Draw resized image
        ctx.drawImage(img, 0, 0, width, height);
        
        // Convert to data URL with compression
        resolve(canvas.toDataURL("image/jpeg", quality));
      };
      
      img.src = e.target?.result as string;
    };
    
    reader.readAsDataURL(file);
  });
};

/**
 * Generate thumbnails for multiple image files
 * @param files - Array of image files
 * @param maxSize - Maximum dimension for thumbnails
 * @param quality - JPEG compression quality
 * @returns Promise with array of thumbnail data URLs
 */
export const generateThumbnails = async (
  files: File[],
  maxSize: number = 300,
  quality: number = 0.7
): Promise<string[]> => {
  return Promise.all(files.map((file) => createThumbnail(file, maxSize, quality)));
};

/**
 * Load image from file
 * @param file - Image file
 * @returns Promise with HTMLImageElement
 */
const loadImage = (file: File): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    
    reader.onerror = () => reject(new Error("Failed to read file"));
    
    reader.onload = (e) => {
      const img = new Image();
      
      img.onerror = () => reject(new Error("Failed to load image"));
      img.onload = () => resolve(img);
      img.src = e.target?.result as string;
    };
    
    reader.readAsDataURL(file);
  });
};

/**
 * Convert image to PNG data URL with proper orientation
 * @param file - Image file
 * @param orientation - Portrait or landscape
 * @returns Promise with PNG data URL
 */
const convertImageToPng = async (
  file: File,
  orientation: "portrait" | "landscape"
): Promise<string> => {
  const img = await loadImage(file);
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d", { alpha: true })!;

  // Set canvas dimensions based on orientation
  if (orientation === "portrait") {
    canvas.width = img.width;
    canvas.height = img.height;
  } else {
    // For landscape, swap if image is taller than wide
    if (img.height > img.width) {
      canvas.width = img.height;
      canvas.height = img.width;
    } else {
      canvas.width = img.width;
      canvas.height = img.height;
    }
  }

  // Fill with white background
  ctx.fillStyle = "#FFFFFF";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Center the image
  const x = (canvas.width - img.width) / 2;
  const y = (canvas.height - img.height) / 2;
  ctx.drawImage(img, x, y);

  return canvas.toDataURL("image/png");
};

/**
 * Convert images to PDF
 * @param files - Array of image files
 * @param orientation - Page orientation
 * @param mergeIntoOne - Whether to merge all images into one PDF
 */
export const convertImagesToPdf = async (
  files: File[],
  orientation: "portrait" | "landscape",
  mergeIntoOne: boolean
): Promise<void> => {
  if (files.length === 0) {
    throw new Error("No files to convert");
  }

  if (mergeIntoOne) {
    // Create one PDF with all images
    const pdfDoc = await PDFDocument.create();

    for (const file of files) {
      const imageDataUrl = await convertImageToPng(file, orientation);
      const imageBytes = await fetch(imageDataUrl).then((res) => res.arrayBuffer());
      const image = await pdfDoc.embedPng(imageBytes);

      const page = pdfDoc.addPage([image.width, image.height]);
      page.drawImage(image, {
        x: 0,
        y: 0,
        width: image.width,
        height: image.height,
      });
    }

    const pdfBytes = await pdfDoc.save();
    const fileName = files.length === 1 
      ? files[0].name.replace(/\.[^/.]+$/, ".pdf")
      : "merged_images.pdf";
    
    downloadFile(new Uint8Array(pdfBytes), fileName, "application/pdf");
  } else {
    // Create individual PDFs and zip them
    const pdfFiles: Record<string, Uint8Array> = {};

    for (const file of files) {
      const pdfDoc = await PDFDocument.create();
      const imageDataUrl = await convertImageToPng(file, orientation);
      const imageBytes = await fetch(imageDataUrl).then((res) => res.arrayBuffer());
      const image = await pdfDoc.embedPng(imageBytes);

      const page = pdfDoc.addPage([image.width, image.height]);
      page.drawImage(image, {
        x: 0,
        y: 0,
        width: image.width,
        height: image.height,
      });

      const pdfBytes = await pdfDoc.save();
      const pdfFileName = file.name.replace(/\.[^/.]+$/, ".pdf");
      pdfFiles[pdfFileName] = new Uint8Array(pdfBytes);
    }

    createAndDownloadZip(pdfFiles, "converted_images.zip");
  }
};

import { mergePDFs } from "@/utils/mergePdf";
export const handleMerge = async (files: File[], setIsLoading: (isLoading: boolean) => void, success: (message: string) => void, error: (message: string) => void) => {
  if (!files || files.length < 2) {
    error("Please upload at least 2 PDF files to merge");
    return;
  }

  setIsLoading(true);
  try {
    const mergedBlob = await mergePDFs(files);

    if (!mergedBlob) {
      error("Failed to merge PDFs");
      return;
    }

    const url = URL.createObjectURL(mergedBlob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `CoonConvert-merged-${Date.now()}.pdf`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    success("PDFs merged successfully!");
  } catch (err) {
    error("Error merging PDFs. Please try again.");
    console.error(err);
  } finally {
    setTimeout(() => {  
      setIsLoading(false);
    }, 300);
  }
};

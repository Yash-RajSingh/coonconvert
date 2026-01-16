import { useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import FileUploader from "@components/FileUploader/FileUploader";
import {
  CloseIcon,
  UploadedFileCard,
  UploadedFilesWrapper,
  UploadedFileCardWrapper,
  PdfOperationButton,
} from "../common";
import PdfIcon from "@assets/pdf.svg";
import { removeFile } from "@/store/slices/filesSlice";
import { useNotification } from "@/hooks/useNotification";
import { convertPdfsToPngs } from "./PdfToPngUtils";

const PdfToPng = () => {
  const toolTheme = useMemo(
    () => sessionStorage.getItem("toolTheme") || undefined,
    []
  );
  const dispatch = useAppDispatch();
  const files = useAppSelector((state) => state?.files?.uploadedFiles);
  const [isLoading, setIsLoading] = useState(false);
  const { success, error: showError } = useNotification(3000);
  
  const handleRemoveFile = (index: number) => {
    dispatch(removeFile(index));
  };

  const handleConvert = async () => {
    if (files.length === 0) {
      showError("Please upload at least one PDF file");
      return;
    }

    setIsLoading(true);
    try {
      await convertPdfsToPngs(files, (current, total) => {
        console.log(`Converting ${current}/${total} PDFs...`);
      });
      const message = files.length === 1 
        ? "1 PDF converted successfully!" 
        : `${files.length} PDFs converted successfully!`;
      success(message);
    } catch (error) {
      showError("Error converting PDFs. Please try again.");
      console.error("Conversion error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <FileUploader accept="application/pdf" multiple />
      <UploadedFilesWrapper>
        {files?.map((file, index) => (
          <UploadedFileCardWrapper
            key={`${file.name}-${file.size}-${index}`}
            $theme={toolTheme}
          >
            <UploadedFileCard $theme={toolTheme}>
              <CloseIcon onClick={() => handleRemoveFile(index)} />
              <img src={PdfIcon} alt={file.name} />
              <p>{file.name}</p>
            </UploadedFileCard>
          </UploadedFileCardWrapper>
        ))}
      </UploadedFilesWrapper>
      <PdfOperationButton 
        onClick={handleConvert}
        $theme={toolTheme} 
        disabled={files.length === 0 || isLoading}
      >
        {isLoading ? "Converting..." : "Convert to PNG"}
      </PdfOperationButton>
    </>
  );
};

export default PdfToPng;

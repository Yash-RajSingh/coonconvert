import { useMemo, useState, lazy, Suspense } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { removeFile } from "@/store/slices/filesSlice";
import { useNotification } from "@/hooks/useNotification";
import { convertPdfsToPngs } from "./PdfToPngUtils";
import PdfIcon from "@assets/pdf.svg";
import {
  CloseIcon,
  UploadedFileCard,
  UploadedFilesWrapper,
  ToolActionBar,
  UploadedFileCardWrapper,
  PdfOperationButton,
} from "../common";
import SkeletonLoader from "@/components/SkeletonLoader/SkeletonLoader";

const FileUploader = lazy(
  () => import("@components/FileUploader/FileUploader"),
);
const PdfToPng = () => {
  const toolTheme = useMemo(
    () => sessionStorage.getItem("toolTheme") || undefined,
    [],
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
      const message =
        files.length === 1
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
      <Suspense fallback={<SkeletonLoader />}>
        <FileUploader accept="application/pdf" multiple />
      </Suspense>
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
      <ToolActionBar>
        <PdfOperationButton
          onClick={handleConvert}
          $theme={toolTheme}
          disabled={files.length === 0 || isLoading}
        >
          {isLoading ? "Converting..." : "Convert to PNG"}
        </PdfOperationButton>
      </ToolActionBar>
    </>
  );
};

export default PdfToPng;

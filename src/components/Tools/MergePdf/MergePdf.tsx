import { useState } from "react";
import FileUploader from "@components/FileUploader/FileUploader.tsx";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  CloseIcon,
  PdfOperationButton,
  UploadedFileCard,
  UploadedFilesWrapper,
} from "../common";
import PdfIcon from "@assets/pdf.svg";
import { removeFile } from "@/store/slices/filesSlice";
import useNotification from "@/hooks/useNotification";
import { handleMerge } from "./mergePdfUtil";
const MergePdf = () => {
  const files = useAppSelector((state) => state?.files?.uploadedFiles);
  const dispatch = useAppDispatch();
  const { success, error } = useNotification();
  const [isLoading, setIsLoading] = useState(false);

 
  return (
    <>  
      <FileUploader accept="application/pdf" multiple />
      <UploadedFilesWrapper>
        {files?.map((file, index) => (
          <UploadedFileCard key={index}>
            <CloseIcon onClick={() => dispatch(removeFile(index))} />
            <img src={PdfIcon} alt={file.name} />
            <p>{file.name}</p>
          </UploadedFileCard>
        ))}
      </UploadedFilesWrapper>
      <PdfOperationButton onClick={() => handleMerge(files, setIsLoading, success, error)} disabled={isLoading || files.length < 2}>
        {isLoading ? "Merging..." : "Merge"}
      </PdfOperationButton>
    </>
  );
};

export default MergePdf;

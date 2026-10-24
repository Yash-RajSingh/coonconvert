import { useState, useMemo, useCallback, lazy, Suspense } from "react";
import SkeletonLoader from "@components/SkeletonLoader/SkeletonLoader";

const FileUploader = lazy(() => import("@components/FileUploader/FileUploader"));
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  CloseIcon,
  PdfOperationButton,
  UploadedFileCard,
  UploadedFilesWrapper,
  ToolActionBar,
  UploadedFileCardWrapper,
} from "../common";
import PdfIcon from "@assets/pdf.svg";
import { removeFile, reorderFiles } from "@/store/slices/filesSlice";
import useNotification from "@/hooks/useNotification";
import { handleMerge } from "./mergePdfUtil";

const MergePdf = () => {
  const files = useAppSelector((state) => state?.files?.uploadedFiles);
  const dispatch = useAppDispatch();
  const { success, error } = useNotification();
  const [isLoading, setIsLoading] = useState(false);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);

  const toolTheme = useMemo(
    () => sessionStorage.getItem("toolTheme") || undefined,
    [],
  );

  const handleDragStart = useCallback((index: number) => {
    setDraggedIndex(index);
  }, []);

  const handleDragOver = useCallback(
    (e: React.DragEvent, index: number) => {
      e.preventDefault();
      if (draggedIndex !== index) {
        setDragOverIndex(index);
      }
    },
    [draggedIndex],
  );

  const handleDrop = useCallback(
    (toIndex: number) => {
      if (draggedIndex !== null && draggedIndex !== toIndex) {
        dispatch(reorderFiles({ fromIndex: draggedIndex, toIndex }));
      }
      setDraggedIndex(null);
      setDragOverIndex(null);
    },
    [draggedIndex, dispatch],
  );

  const handleDragEnd = useCallback(() => {
    setDraggedIndex(null);
    setDragOverIndex(null);
  }, []);

  const handleRemoveFile = useCallback(
    (index: number) => {
      dispatch(removeFile(index));
    },
    [dispatch],
  );

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
            $isDragging={draggedIndex === index}
            $isDragOver={dragOverIndex === index}
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragOver={(e) => handleDragOver(e, index)}
            onDrop={() => handleDrop(index)}
            onDragEnd={handleDragEnd}
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
          onClick={() => handleMerge(files, setIsLoading, success, error)}
          disabled={isLoading || files.length < 2}
          $theme={toolTheme}
        >
          {isLoading ? "Merging..." : "Merge PDFs"}
        </PdfOperationButton>
      </ToolActionBar>
    </>
  );
};

export default MergePdf;

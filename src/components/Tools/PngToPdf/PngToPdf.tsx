import { useMemo, useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import FileUploader from "@components/FileUploader/FileUploader";
import {
  PngToPdfUploadedFilesContainer,
  PngToPdfPreviewCard,
  PngToPdfFormContainer,
  PngToPdfCloseIcon,
} from "./PngToPdfElements";
import { generateThumbnails } from "./PngToPdfUtils";
import PngToPdfForm, { type PngToPdfFormState } from "./PngToPdfForm/PngToPdfForm";
import { removeFile } from "@/store/slices/filesSlice";
import { useNotification } from "@/hooks/useNotification";

const PngToPdf = () => {
  const toolTheme = useMemo(
    () => sessionStorage.getItem("toolTheme") || undefined,
    []
  );
  const dispatch = useAppDispatch();
  const files = useAppSelector((state) => state?.files?.uploadedFiles);
  const [previews, setPreviews] = useState<string[]>([]);
  const [formState, setFormState] = useState<PngToPdfFormState>({
    orientation: "portrait",
    mergeIntoOne: false,
  });
  const { error: showError } = useNotification(3000);

  const handleRemoveFile = (index: number) => {
    dispatch(removeFile(index));
  };

  useEffect(() => {
    if (files.length > 0) {
      const loadPreviews = async () => {
        try {
          const thumbnails = await generateThumbnails(files, 300, 0.7);
          setPreviews(thumbnails);
          setTimeout(() => {
            document
              .querySelector(".uploaded-files-preview")
              ?.scrollIntoView({ behavior: "smooth" });
          }, 500);
        } catch (error) {
          console.error("Failed to generate thumbnails:", error);
        }
      };
      loadPreviews();
    } else {
      setPreviews([]);
    }
  }, [files]);

  return (
    <>
      <FileUploader accept="image/png, image/jpeg, image/jpg" multiple />
      {previews.length > 0 && (
        <PngToPdfUploadedFilesContainer $theme={toolTheme}>
          <div className="uploaded-files-preview">
            {previews.map((src, index) => (
              <PngToPdfPreviewCard key={`preview-png-to-pdf-${index}`} $orientation={formState.orientation}>
                <PngToPdfCloseIcon onClick={() => handleRemoveFile(index)} />
                <img src={src} alt={files[index]?.name} />
              </PngToPdfPreviewCard>
            ))}
          </div>
          <PngToPdfFormContainer $theme={toolTheme}>
            <PngToPdfForm 
              filesCount={files.length}
              formState={formState}
              setFormState={setFormState}
              files={files}
              onError={showError}
            />
          </PngToPdfFormContainer>
        </PngToPdfUploadedFilesContainer>
      )}
    </>
  );
};

export default PngToPdf;

import FileUploader from "@components/FileUploader/FileUploader";
import { useAppSelector } from "@/store/hooks";
import { PdfOperationButton } from "../common";
import { useMemo, useState, lazy, Suspense } from "react";
import {
  SplitPdfUploadedFilesContainer,
  SplitPdfPreviewCard,
  SplitPdfFormContainer,
  SplitPdfButtonGroup,
  SplitPdfButton,
  SplitPdfDFormActionWrapper,
} from "./SplitPdfElements";
import { renderPdfPages, splitPdf } from "./SplitPdfUtils";
import { useEffect } from "react";
import { useSplitPdfReducer } from "./useSplitPdfReducer";
import { useNotification } from "@/hooks/useNotification";

const SplitPdfRangeForm = lazy(
  () => import("./SplitPdfRangeForm/SplitPdfRangeForm"),
);
const SplitPdfPageForm = lazy(
  () => import("./SplitPdfPageForm/SplitPdfPageForm"),
);
const SplitPdf = () => {
  const toolTheme = useMemo(
    () => sessionStorage.getItem("toolTheme") || undefined,
    [],
  );
  const files = useAppSelector((state) => state?.files?.uploadedFiles);
  const [isLoading, setIsLoading] = useState(false);
  const [previews, setPreviews] = useState<string[]>([]);
  const [formState, dispatch] = useSplitPdfReducer();
  const { error: showError } = useNotification(3000);

  useEffect(() => {
    if (files.length > 0) {
      (async () => {
        setPreviews([]);
        dispatch({ type: "RESET" });
        const file = files[0];
        const images = await renderPdfPages(file);
        setPreviews(images);
        setTimeout(() => {
          document
            .querySelector(".uploaded-file-preview")
            ?.scrollIntoView({ behavior: "smooth" });
        }, 500);
      })();
    }
  }, [files]);

  return (
    <>
      <FileUploader accept="application/pdf" multiple={false} />
      {previews.length > 0 && (
        <SplitPdfUploadedFilesContainer $theme={toolTheme}>
          <div className="uploaded-file-preview" key={files?.[0]?.name}>
            {previews.map((src, index) => (
              <SplitPdfPreviewCard key={`uploaded-file-preview-${index}`}>
                <img src={src} alt={`Page ${index}`} />
                <span>{index + 1}</span>
              </SplitPdfPreviewCard>
            ))}
          </div>
          <SplitPdfFormContainer $theme={toolTheme} key={files?.[0]?.name}>
            <p className="uploaded-file-name">
              <span>Split -</span> {files?.[0]?.name}
            </p>
            <SplitPdfButtonGroup>
              <SplitPdfButton
                $active={formState.splitType === "ranges"}
                onClick={() => {
                  dispatch({ type: "SET_SPLIT_TYPE", payload: "ranges" });
                  dispatch({ type: "RESET_RANGES" });
                }}
                $theme={toolTheme}
              >
                Ranges
              </SplitPdfButton>
              <SplitPdfButton
                $active={formState.splitType === "pages"}
                onClick={() => {
                  dispatch({ type: "SET_SPLIT_TYPE", payload: "pages" });
                  dispatch({ type: "SET_EXTRACT_TYPE", payload: "all" });
                  dispatch({ type: "RESET_INPUT_VALUE" });
                }}
                $theme={toolTheme}
              >
                Pages
              </SplitPdfButton>
            </SplitPdfButtonGroup>

            <SplitPdfDFormActionWrapper>
              {formState.splitType === "ranges" && (
                <Suspense fallback={<span>Loading...</span>}>
                  <SplitPdfRangeForm
                    formState={formState}
                    dispatch={dispatch}
                  />
                </Suspense>
              )}
              {formState.splitType === "pages" && (
                <Suspense fallback={<span>Loading...</span>}>
                  <SplitPdfPageForm formState={formState} dispatch={dispatch} />
                </Suspense>
              )}
            </SplitPdfDFormActionWrapper>
            <PdfOperationButton
              $theme={toolTheme}
              disabled={isLoading || previews.length === 0}
              onClick={()=> splitPdf(files[0], formState, showError, setIsLoading)}
            >
              {isLoading ? "Splitting..." : "Split PDF"}
            </PdfOperationButton>
          </SplitPdfFormContainer>
        </SplitPdfUploadedFilesContainer>
      )}
    </>
  );
};

export default SplitPdf;

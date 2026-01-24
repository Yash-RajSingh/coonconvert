import FileUploader from "@components/FileUploader/FileUploader";
import { useAppSelector } from "@/store/hooks";
import { PdfOperationButton } from "../common";
import { useMemo, useState, useEffect } from "react";
import {
  ProtectPdfUploadedFilesContainer,
  ProtectPdfPreviewCard,
  ProtectPdfFormContainer,
  ProtectPdfFormActionWrapper,
  ProtectPdfField,
  ProtectPdfInput,
} from "./ProtectPdfElements";
import { renderPdfPages } from "../SplitPdf/SplitPdfUtils";
import { validatePasswordFields } from "./ProtectPdfUtils";
import { useNotification } from "@/hooks/useNotification";

const ProtectPdf = () => {
  const toolTheme = useMemo(
    () => sessionStorage.getItem("toolTheme") || undefined,
    [],
  );
  const files = useAppSelector((state) => state?.files?.uploadedFiles);
  const [isLoading, setIsLoading] = useState(false);
  const [preview, setPreview] = useState<string>("");
  const [passwordData, setPasswordData] = useState({
    password: "",
    confirmPassword: "",
  });
  const { error: showError } = useNotification(3000);

  useEffect(() => {
    if (files.length > 0) {
      (async () => {
        setPreview("");
        setPasswordData({ password: "", confirmPassword: "" });
        const file = files[0];
        console.log(file);
        // Render only the first page as preview
        const images = await renderPdfPages(file);
        setPreview(images[0]);
        setTimeout(() => {
          document
            .querySelector(".uploaded-file-preview")
            ?.scrollIntoView({ behavior: "smooth" });
        }, 500);
      })();
    }
  }, [files]);

  const handleProtect = async () => {
    // Validate password fields
    const validation = validatePasswordFields(passwordData);
    
    if (!validation.isValid) {
      showError(validation.error || "Password Validation failed");
      return;
    }

  };

  return (
    <>
      <FileUploader accept="application/pdf" multiple={false} />
      {preview && (
        <ProtectPdfUploadedFilesContainer $theme={toolTheme}>
          <div className="uploaded-file-preview" key={files?.[0]?.name}>
            <ProtectPdfPreviewCard>
              <img src={preview} alt="PDF Preview" />
              <span>{files?.[0]?.name}</span>
            </ProtectPdfPreviewCard>
          </div>
          <ProtectPdfFormContainer $theme={toolTheme} key={files?.[0]?.name}>
            <p className="uploaded-file-name">
              <span>Protect -</span> {files?.[0]?.name}
            </p>

            <ProtectPdfFormActionWrapper>
              <ProtectPdfField $label="Password">
                <ProtectPdfInput
                  id="password"
                  type="password"
                  placeholder="Enter password"
                  value={passwordData.password}
                  onChange={(e) =>
                    setPasswordData((prev) => ({
                      ...prev,
                      password: e.target.value,
                    }))
                  }
                  $theme={toolTheme}
                />
              </ProtectPdfField>

              <ProtectPdfField $label="Confirm Password">
                <ProtectPdfInput
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm password"
                  value={passwordData.confirmPassword}
                  onChange={(e) =>
                    setPasswordData((prev) => ({
                      ...prev,
                      confirmPassword: e.target.value,
                    }))
                  }
                  $theme={toolTheme}
                />
              </ProtectPdfField>
            </ProtectPdfFormActionWrapper>

            <PdfOperationButton
              $theme={toolTheme}
              disabled={
                isLoading ||
                !preview ||
                !passwordData.password ||
                !passwordData.confirmPassword
              }
              onClick={handleProtect}
            >
              {isLoading ? "Protecting..." : "Protect PDF"}
            </PdfOperationButton>
          </ProtectPdfFormContainer>
        </ProtectPdfUploadedFilesContainer>
      )}
    </>
  );
};

export default ProtectPdf;

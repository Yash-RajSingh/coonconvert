import { useMemo, useState } from "react";
import { PdfOperationButton } from "../../common";
import {
  FormSection,
  FormLabel,
  OrientationGroup,
  OrientationOption,
  CheckboxContainer,
  Checkbox,
} from "./PngToPdfFormElements";
import { convertImagesToPdf } from "../PngToPdfUtils";

export type Orientation = "portrait" | "landscape";

export interface PngToPdfFormState {
  orientation: Orientation;
  mergeIntoOne: boolean;
}

interface PngToPdfFormProps {
  filesCount: number;
  formState: PngToPdfFormState;
  setFormState: React.Dispatch<React.SetStateAction<PngToPdfFormState>>;
  files: File[];
  onError?: (message: string) => void;
}

const PngToPdfForm = ({ filesCount, formState, setFormState, files, onError }: PngToPdfFormProps) => {
  const toolTheme = useMemo(
    () => sessionStorage.getItem("toolTheme") || undefined,
    []
  );
  const [isLoading, setIsLoading] = useState(false);

  const handleConvert = async () => {
    setIsLoading(true);
    try {
      await convertImagesToPdf(files, formState.orientation, formState.mergeIntoOne);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Failed to convert images to PDF";
      onError?.(errorMessage);
      console.error("Conversion error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <p className="uploaded-files-count">
        <span>Convert to PDF -</span> {filesCount} file{filesCount > 1 ? 's' : ''}
      </p>

      <FormSection>
        <FormLabel>Page Orientation</FormLabel>
        <OrientationGroup>
          <OrientationOption
            $selected={formState.orientation === "portrait"}
            $theme={toolTheme}
            $orientation="portrait"
            onClick={() => setFormState((prev) => ({ ...prev, orientation: "portrait" }))}
          />
          <OrientationOption
            $selected={formState.orientation === "landscape"}
            $theme={toolTheme}
            $orientation="landscape"
            onClick={() => setFormState((prev) => ({ ...prev, orientation: "landscape" }))}
          />
        </OrientationGroup>
      </FormSection>

      <CheckboxContainer>
        <Checkbox
          $theme={toolTheme}
          checked={formState.mergeIntoOne}
          onChange={(e) => setFormState((prev) => ({ ...prev, mergeIntoOne: e.target.checked }))}
        />
      </CheckboxContainer>

      <PdfOperationButton
        $theme={toolTheme}
        disabled={isLoading || filesCount === 0}
        onClick={handleConvert}
      >
        {isLoading ? "Converting..." : "Convert to PDF"}
      </PdfOperationButton>
    </>
  );
};

export default PngToPdfForm;
import {
  SplitPdfFormHelperText,
  SplitPdfFormInput,
  SplitPdfFormNote,
} from "../commonElements";
import { SplitPdfButton } from "../SplitPdfElements";
import { SplitPdfButtonGroup } from "../SplitPdfElements";
import { useMemo, type Dispatch } from "react";
import type {
  SplitPdfFormState,
  SplitPdfFormAction,
} from "../useSplitPdfReducer";

interface SplitPdfPageFormProps {
  formState: SplitPdfFormState;
  dispatch: Dispatch<SplitPdfFormAction>;
}

const SplitPdfPageForm = ({ formState, dispatch }: SplitPdfPageFormProps) => {
  const toolTheme = useMemo(
    () => sessionStorage.getItem("toolTheme") || undefined,
    [],
  );
  return (
    <div>
      <SplitPdfFormHelperText>Extract</SplitPdfFormHelperText>
      <SplitPdfButtonGroup>
        <SplitPdfButton
          $active={formState.extractType === "all"}
          onClick={() => dispatch({ type: "SET_EXTRACT_TYPE", payload: "all" })}
          $theme={toolTheme}
        >
          All Pages
        </SplitPdfButton>
        <SplitPdfButton
          $active={formState.extractType === "selected"}
          onClick={() =>
            dispatch({ type: "SET_EXTRACT_TYPE", payload: "selected" })
          }
          $theme={toolTheme}
        >
          Selected Pages
        </SplitPdfButton>
      </SplitPdfButtonGroup>
      {formState.extractType === "selected" && (
        <SplitPdfFormInput
          placeholder="Example: 1,2,5,6"
          $theme={toolTheme}
          value={formState.inputValue}
          onChange={(e) =>
            dispatch({ type: "SET_INPUT_VALUE", payload: e.target.value })
          }
        />
      )}
      <SplitPdfFormNote>
        {formState.extractType === "selected"
          ? "Selected pages will be converted into separate PDF files."
          : "All pages will be converted into separate PDF files."}
      </SplitPdfFormNote>
    </div>
  );
};

export default SplitPdfPageForm;

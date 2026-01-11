import { useMemo, type Dispatch } from "react";
import type {
  SplitPdfFormState,
  SplitPdfFormAction,
} from "../useSplitPdfReducer";
import { SplitPdfFormHelperText, SplitPdfFormInput } from "../commonElements";
import { PdfOperationButton } from "../../common";

interface SplitPdfRangeFormProps {
  formState: SplitPdfFormState;
  dispatch: Dispatch<SplitPdfFormAction>;
}

const SplitPdfRangeForm = ({ formState, dispatch }: SplitPdfRangeFormProps) => {
  const toolTheme = useMemo(
    () => sessionStorage.getItem("toolTheme") || undefined,
    [],
  );

  return (
    <div>
      <SplitPdfFormHelperText>
        Enter page ranges (e.g., 1-5, 7-10):
      </SplitPdfFormHelperText>
      {formState.ranges.map((range, index) => (
        <div
          key={range.id}
          style={{
            display: "flex",
            gap: "0.5rem",
            alignItems: "center",
            marginBottom: "0.5rem",
            justifyContent: "space-between",
          }}
        >
          <SplitPdfFormInput
            placeholder={`Range ${index + 1}: 1-5`}
            $theme={toolTheme}
            value={range.value}
            $marginTop={index > 0 ? "0" : "1rem"}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_RANGE",
                payload: { id: range.id, value: e.target.value },
              })
            }
          />
          {formState.ranges.length > 1 && (
            <PdfOperationButton
              $left="0"
              $theme={toolTheme}
              $marginTop="0"
              onClick={() =>
                dispatch({ type: "REMOVE_RANGE", payload: range.id })
              }
            >
              ✕
            </PdfOperationButton>
          )}
        </div>
      ))}
      <PdfOperationButton
        type="button"
        onClick={() => dispatch({ type: "ADD_RANGE" })}
        $theme={toolTheme}
        style={{ marginTop: "0.5rem" }}
      >
        + Add Range
      </PdfOperationButton>
    </div>
  );
};

export default SplitPdfRangeForm;

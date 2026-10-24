import { useMemo, type Dispatch } from "react";
import type {
  SplitPdfFormState,
  SplitPdfFormAction,
} from "../useSplitPdfReducer";
import { SplitPdfFormHelperText, SplitPdfFormInput } from "../commonElements";
import { SecondaryOperationButton } from "../../common";

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
          }}
        >
          <SplitPdfFormInput
            placeholder={`Range ${index + 1}: 1-5`}
            $theme={toolTheme}
            value={range.value}
            $marginTop="0"
            onChange={(e) =>
              dispatch({
                type: "UPDATE_RANGE",
                payload: { id: range.id, value: e.target.value },
              })
            }
          />
          {formState.ranges.length > 1 && (
            <SecondaryOperationButton
              $left="0"
              $theme={toolTheme}
              $marginTop="0"
              aria-label={`Remove range ${index + 1}`}
              onClick={() =>
                dispatch({ type: "REMOVE_RANGE", payload: range.id })
              }
            >
              ✕
            </SecondaryOperationButton>
          )}
        </div>
      ))}
      <SecondaryOperationButton
        type="button"
        $left="0"
        onClick={() => dispatch({ type: "ADD_RANGE" })}
        $theme={toolTheme}
        style={{ marginTop: "0.5rem" }}
      >
        + Add range
      </SecondaryOperationButton>
    </div>
  );
};

export default SplitPdfRangeForm;

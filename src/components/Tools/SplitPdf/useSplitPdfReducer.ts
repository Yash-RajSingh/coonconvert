import { useReducer } from "react";

export type SplitType = "ranges" | "pages";
export type ExtractType = "all" | "selected";

export interface RangeInput {
  id: string;
  value: string;
}

export interface SplitPdfFormState {
  splitType: SplitType;
  // For pages mode
  extractType: ExtractType;
  inputValue: string;
  // For ranges mode
  ranges: RangeInput[];
}

export type SplitPdfFormAction =
  | { type: "SET_SPLIT_TYPE"; payload: SplitType }
  | { type: "SET_EXTRACT_TYPE"; payload: ExtractType }
  | { type: "SET_INPUT_VALUE"; payload: string }
  | { type: "RESET_INPUT_VALUE" }
  | { type: "ADD_RANGE" }
  | { type: "REMOVE_RANGE"; payload: string }
  | { type: "UPDATE_RANGE"; payload: { id: string; value: string } }
  | { type: "RESET_RANGES" }
  | { type: "RESET" };

const initialState: SplitPdfFormState = {
  splitType: "ranges",
  extractType: "all",
  inputValue: "",
  ranges: [{ id: `range-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`, value: "" }],
};

const splitPdfFormReducer = (
  state: SplitPdfFormState,
  action: SplitPdfFormAction,
): SplitPdfFormState => {
  switch (action.type) {
    case "SET_SPLIT_TYPE":
      return {
        ...state,
        splitType: action.payload,
      };

    case "SET_EXTRACT_TYPE":
      return {
        ...state,
        extractType: action.payload,
      };

    case "SET_INPUT_VALUE":
      return {
        ...state,
        inputValue: action.payload,
      };
    case "RESET_INPUT_VALUE":
      return {
        ...state,
        inputValue: "",
      };

    case "ADD_RANGE":
      return {
        ...state,
        ranges: [...state.ranges, { id: `range-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`, value: "" }],
      };

    case "REMOVE_RANGE":
      return {
        ...state,
        ranges: state.ranges.filter((range) => range.id !== action.payload),
      };

    case "UPDATE_RANGE":
      return {
        ...state,
        ranges: state.ranges.map((range) =>
          range.id === action.payload.id
            ? { ...range, value: action.payload.value }
            : range,
        ),
      };

    case "RESET_RANGES":
      return {
        ...state,
        ranges: [{ id: `range-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`, value: "" }],
      };

    case "RESET":
      return initialState;

    default:
      return state;
  }
};

export const useSplitPdfReducer = () => {
  return useReducer(splitPdfFormReducer, initialState);
};

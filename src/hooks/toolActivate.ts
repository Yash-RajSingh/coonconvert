import { clearFiles } from "@/store/slices/filesSlice";
import type { AppDispatch } from "@/store/store";

export const toolActivate = (
  toolName: string,
  toolId: string,
  navigate: any,
  color: string,
  dispatch: AppDispatch,
) => {
  sessionStorage.setItem(toolName, toolName);
  sessionStorage.setItem(toolId, toolId);
  sessionStorage.setItem("toolTheme", color);
  dispatch(clearFiles());
  navigate(`/tools/${toolId}`);
  return;
};

export default toolActivate;

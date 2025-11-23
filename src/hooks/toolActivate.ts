export const toolActivate = (
  toolName: string,
  toolId: string,
  navigate: any,
  color: string,
) => {
  sessionStorage.setItem(toolName, toolName);
  sessionStorage.setItem(toolId, toolId);
  sessionStorage.setItem("toolTheme", color);
  navigate(`/tools/${toolId}`);
  return;
};

export default toolActivate;

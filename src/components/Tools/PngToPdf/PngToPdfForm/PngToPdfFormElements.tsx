import styled from "styled-components";

export const FormSection = styled.div`
  margin-top: 1rem;
`;

export const FormLabel = styled.p`
  font: 600 0.875rem "Manrope";
  margin-bottom: 0.625rem;
`;

export const OrientationGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

export const OrientationOption = styled.button.attrs({ type: "button" })<{
  $selected: boolean;
  $theme?: string;
  $orientation: "portrait" | "landscape";
}>`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding: 1rem;
  border: 2px solid
    ${(props) => (props.$selected ? props.$theme || "#125bfb" : "var(--border)")};
  border-radius: 0.875rem;
  background: ${(props) =>
    props.$selected ? `${props.$theme || "#125bfb"}0d` : "var(--white)"};
  color: var(--theme-font-color);
  cursor: pointer;
  transition: all 0.2s;
  position: relative;
  min-height: 120px;

  &:hover {
    border-color: ${(props) => props.$theme || "#125bfb"};
  }

  &::before {
    content: "";
    width: ${(props) => (props.$orientation === "portrait" ? "50px" : "70px")};
    height: ${(props) => (props.$orientation === "portrait" ? "70px" : "50px")};
    border: 2px solid
      ${(props) => (props.$selected ? props.$theme || "#125bfb" : "#94a3b8")};
    border-radius: 0.375rem;
    background: var(--white);
    margin-bottom: 0.75rem;
  }

  &::after {
    content: "${(props) => (props.$orientation === "portrait" ? "Portrait" : "Landscape")}";
    font: 600 0.875rem "Manrope";
    text-align: center;
  }
`;

export const CheckboxContainer = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  cursor: pointer;
  position: relative;

  padding: 0.75rem 0.875rem;
  border: 1px solid var(--border);
  border-radius: 0.75rem;
  &::after {
    content: "Merge all images into one PDF file";
    font: 500 0.875rem "Manrope";
    user-select: none;
  }
`;

export const Checkbox = styled.input.attrs({ type: "checkbox" })<{ $theme?: string }>`
  width: 18px;
  height: 18px;
  cursor: pointer;
  accent-color: ${(props) => props.$theme || "#125bfb"};
`;

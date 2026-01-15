import styled from "styled-components";

export const FormSection = styled.div`
  margin-top: 1rem;
`;

export const FormLabel = styled.label`
  font: 600 0.875rem "Roboto";
  color: #333;
  display: block;
  margin-bottom: 0.75rem;
`;

export const OrientationGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

export const OrientationOption = styled.div<{
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
  border: 2px solid ${(props) => (props.$selected ? props.$theme || "#000" : "#e0e0e0")};
  border-radius: 0.5rem;
  background: #fff;
  cursor: pointer;
  transition: all 0.2s;
  position: relative;
  min-height: 120px;

  &:hover {
    border-color: #000;
  }

  &::before {
    content: "";
    width: ${(props) => (props.$orientation === "portrait" ? "50px" : "70px")};
    height: ${(props) => (props.$orientation === "portrait" ? "70px" : "50px")};
    border: 2px solid #333;
    border-radius: 0.25rem;
    background: #f5f5f5;
    margin-bottom: 0.75rem;
  }

  &::after {
    content: "${(props) => (props.$orientation === "portrait" ? "Portrait" : "Landscape")}";
    font: 400 0.875rem "Roboto";
    color: #333;
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

  &::after {
    content: "Merge all images into one PDF file";
    font: 400 0.875rem "Roboto";
    color: #333;
    user-select: none;
  }
`;

export const Checkbox = styled.input.attrs({ type: "checkbox" })<{ $theme?: string }>`
  width: 18px;
  height: 18px;
  cursor: pointer;
  accent-color: ${(props) => props.$theme || "#000"};
`;

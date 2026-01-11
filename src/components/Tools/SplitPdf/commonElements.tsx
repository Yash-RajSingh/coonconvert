import styled from "styled-components";

export const SplitPdfFormHelperText = styled.p`
  font: 400 1rem/1.5 "Roboto";
  color: #000;
  margin-top: 0.5rem;
`;

export const SplitPdfFormInput = styled.input.attrs<{ placeholder?: string }>(
  (props) => ({
    type: "text",
    placeholder: props.placeholder || "Enter page numbers",
    className: "split-pdf-form-input",
  }),
)<{ $theme?: string; $marginTop?: string }>`
  width: 70%;
  padding: 0.5rem 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 0.25rem;
  font: 400 1rem "Roboto";
  color: #000;
  margin-top: ${(props) => props.$marginTop || "1rem"};
  &:focus,
  &:active {
    outline: none;
    border-color: ${(props) => props.$theme || "#000"};
  }
`;

export const SplitPdfFormNote = styled.p`
  font: 400 0.75rem "Roboto";
  color: #000;
  margin-top: 1rem;
  background-color: #def2ff;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;

  &::before {
    content: "Note:";
    font-weight: 600;
    margin-right: 0.25rem;
  }
`;

import styled from "styled-components";

export const SplitPdfFormHelperText = styled.p`
  font: 600 0.875rem / 1.5 "Manrope";
  color: var(--theme-font-color);
  margin-bottom: 0.625rem;
`;

export const SplitPdfFormInput = styled.input.attrs<{ placeholder?: string }>(
  (props) => ({
    type: "text",
    placeholder: props.placeholder || "Enter page numbers",
    className: "split-pdf-form-input",
  }),
)<{ $theme?: string; $marginTop?: string }>`
  flex: 1;
  width: 100%;
  min-width: 0;
  padding: 0.625rem 0.875rem;
  border: 1px solid var(--border);
  border-radius: 0.625rem;
  font: 500 0.9375rem "Manrope";
  color: var(--theme-font-color);
  margin-top: ${(props) => props.$marginTop || "0.75rem"};
  transition:
    border-color 0.2s,
    box-shadow 0.2s;
  &::placeholder {
    color: #94a3b8;
  }
  &:focus {
    outline: none;
    border-color: ${(props) => props.$theme || "#125bfb"};
    box-shadow: 0 0 0 3px ${(props) => `${props.$theme || "#125bfb"}26`};
  }
`;

export const SplitPdfFormNote = styled.p`
  font: 400 0.8125rem / 1.5 "Manrope";
  color: #1e3a8a;
  margin-top: 1rem;
  background-color: #eff6ff;
  border: 1px solid #dbeafe;
  padding: 0.625rem 0.875rem;
  border-radius: 0.625rem;

  &::before {
    content: "Note:";
    font-weight: 700;
    margin-right: 0.25rem;
  }
`;

import styled from "styled-components";
import {
  SplitPdfUploadedFilesContainer,
  SplitPdfPreviewCard,
  SplitPdfFormContainer,
  SplitPdfDFormActionWrapper,
} from "../SplitPdf/SplitPdfElements";

// Extend existing components instead of duplicating CSS
export const ProtectPdfUploadedFilesContainer = styled(
  SplitPdfUploadedFilesContainer,
)``;

export const ProtectPdfPreviewCard = styled(SplitPdfPreviewCard)`
  width: 170px;
  aspect-ratio: 1/1;

  span {
    word-break: nowrap;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;

export const ProtectPdfFormContainer = styled(SplitPdfFormContainer)``;

export const ProtectPdfFormActionWrapper = styled(SplitPdfDFormActionWrapper)``;

export const ProtectPdfField = styled.div<{ $label?: string }>`
  width: 100%;
  margin-bottom: 1rem;
  position: relative;

  &::before {
    content: "${(props) => props.$label || ''}";
    display: block;
    font: 500 0.875rem "Roboto";
    color: #333;
    line-height: 1.5;
    margin-bottom: 0.5rem;
  }
`;

export const ProtectPdfInput = styled.input<{ $theme?: string }>`
  width: 100%;
  padding: 0.625rem 0.75rem;
  font: 400 1rem "Roboto";
  color: #333;
  border: 1px solid #e0e0e0;
  border-radius: 0.25rem;
  outline: none;
  transition: all 0.2s;

  &:focus {
    border-color: ${(props) => props.$theme || "#000"};
    box-shadow: 0 0 0 2px ${(props) => props.$theme || "#000"}20;
  }

  &::placeholder {
    color: #999;
  }

  &:disabled {
    background-color: #f5f5f5;
    cursor: not-allowed;
  }
`;

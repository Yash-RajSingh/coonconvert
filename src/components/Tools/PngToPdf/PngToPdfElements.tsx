import styled from "styled-components";
import { CloseIcon as BaseCloseIcon } from "../common";
import {
  SplitPdfUploadedFilesContainer,
  SplitPdfFormContainer,
} from "../SplitPdf/SplitPdfElements";

// Same layout as split: previews left, options right.
export const PngToPdfUploadedFilesContainer = styled(
  SplitPdfUploadedFilesContainer,
)`
  div.uploaded-files-preview {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    padding: 1.25rem;
    background: var(--white);
    border: 1px solid var(--border);
    border-radius: 1.25rem;
  }
`;

export const PngToPdfPreviewCard = styled.div<{
  $orientation?: "portrait" | "landscape";
}>`
  width: ${(props) => (props.$orientation === "landscape" ? "11rem" : "8.5rem")};
  padding: 0.5rem;
  background: #f8fafc;
  border: 1px solid var(--border);
  border-radius: 0.75rem;
  position: relative;
  transition: width 0.3s ease;

  img {
    display: block;
    width: 100%;
    height: ${(props) => (props.$orientation === "landscape" ? "7rem" : "10rem")};
    object-fit: cover;
    border-radius: 0.375rem;
    box-shadow: 0 2px 8px -2px #0f172a26;
    pointer-events: none;
    transition: height 0.3s ease;
  }

  @media (max-width: 450px) {
    width: ${(props) => (props.$orientation === "landscape" ? "100%" : "calc(50% - 0.5rem)")};
  }
`;

export const PngToPdfCloseIcon = styled(BaseCloseIcon)`
  top: 0.75rem;
  right: 0.75rem;
  box-shadow: 0 1px 4px #0f172a40;
`;

export const PngToPdfFormContainer = styled(SplitPdfFormContainer).attrs({
  className: "uploaded-files-actions",
})`
  p.uploaded-files-count {
    font: 500 0.8125rem / 1.5 "Manrope";
    color: var(--muted);
    border-bottom: 1px solid var(--border);
    padding-bottom: 1rem;
    margin-bottom: 1rem;

    span {
      display: block;
      font: 700 1.25rem / 1.4 "Manrope";
      color: ${(props) => props.$theme || "#125bfb"};
    }
  }
`;

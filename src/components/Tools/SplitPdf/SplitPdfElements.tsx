import styled from "styled-components";
import { ToolPanel } from "../common";

// Previews on the left, options panel on the right; stacks on small screens.
export const SplitPdfUploadedFilesContainer = styled.div<{ $theme?: string }>`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 22rem;
  gap: 1.5rem;
  align-items: start;
  width: min(100%, 60rem);
  margin: 2rem auto 0;

  div.uploaded-file-preview {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(8.5rem, 1fr));
    gap: 1rem;
    padding: 1.25rem;
    background: var(--white);
    border: 1px solid var(--border);
    border-radius: 1.25rem;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
  @media (max-width: 450px) {
    div.uploaded-file-preview {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      padding: 0.75rem;
    }
  }
`;

export const SplitPdfPreviewCard = styled.div`
  padding: 0.5rem;
  background: #f8fafc;
  border: 1px solid var(--border);
  border-radius: 0.75rem;

  img {
    display: block;
    width: 100%;
    border-radius: 0.375rem;
    box-shadow: 0 2px 8px -2px #0f172a26;
    pointer-events: none;
  }

  span {
    display: block;
    margin-top: 0.375rem;
    font: 600 0.8125rem "Manrope";
    color: var(--muted);
    text-align: center;
  }
`;

export const SplitPdfFormContainer = styled(ToolPanel).attrs({
  className: "uploaded-file-actions",
})`
  position: sticky;
  top: 5rem;

  p.uploaded-file-name {
    font: 500 0.8125rem / 1.5 "Manrope";
    color: var(--muted);
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    border-bottom: 1px solid var(--border);
    padding-bottom: 1rem;
    margin-bottom: 1rem;

    span {
      display: block;
      font: 700 1.25rem / 1.4 "Manrope";
      color: ${(props) => props.$theme || "#125bfb"};
    }
  }

  @media (max-width: 900px) {
    position: static;
    order: -1;
  }
`;

// Segmented control.
export const SplitPdfButtonGroup = styled.div<{ width?: string }>`
  width: ${(props) => props.width || "100%"};
  display: flex;
  gap: 0.25rem;
  padding: 0.25rem;
  background: #f1f5f9;
  border-radius: 0.75rem;
`;

export const SplitPdfButton = styled.button.attrs({ type: "button" })<{
  $active?: boolean;
  $theme?: string;
}>`
  flex: 1;
  padding: 0.5rem 0.75rem;
  border: none;
  border-radius: 0.5rem;
  background: ${(props) => (props.$active ? "var(--white)" : "transparent")};
  box-shadow: ${(props) => (props.$active ? "0 1px 3px #0f172a26" : "none")};
  color: ${(props) =>
    props.$active ? props.$theme || "#125bfb" : "var(--muted)"};
  font: 600 0.9375rem "Manrope";
  white-space: nowrap;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    color: ${(props) => props.$theme || "#125bfb"};
  }
  &:focus-visible {
    outline: 2px solid ${(props) => props.$theme || "#125bfb"};
  }
  @media (max-width: 450px) {
    font-size: 0.8125rem;
  }
`;

export const SplitPdfDFormActionWrapper = styled.div`
  width: 100%;
  margin-top: 1.25rem;
`;

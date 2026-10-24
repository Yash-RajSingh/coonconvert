import styled from "styled-components";
export const UploadedFilesWrapper = styled.div`
  width: min(100%, 60rem);
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  padding: 1rem 0;
  &:empty {
    display: none;
  }
  @media (max-width: 450px) {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0.625rem;
  }
`;

export const UploadedFileCardWrapper = styled.div<{
  $theme?: string;
  $isDragging?: boolean;
  $isDragOver?: boolean;
}>`
  width: 9rem;
  border-radius: 1rem;
  border: 2px solid
    ${(props) => (props.$isDragOver ? props.$theme || "#125bfb" : "transparent")};
  cursor: ${(props) => (props.$isDragging ? "grabbing" : "grab")};
  opacity: ${(props) => (props.$isDragging ? 0.5 : 1)};
  transform: ${(props) => (props.$isDragOver ? "scale(1.04)" : "none")};
  transition: all 0.2s ease;
  @media (max-width: 450px) {
    width: auto;
  }
`;
export const UploadedFileCard = styled.li<{ $theme?: string }>`
  list-style: none;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  padding: 1.5rem 0.75rem 1rem;
  background: var(--white);
  border: 1px solid var(--border);
  border-top: 3px solid ${(props) => props.$theme || "#125bfb"};
  border-radius: 0.875rem;
  transition: box-shadow 0.2s;
  &:hover {
    box-shadow: 0 10px 24px -12px #0f172a40;
  }
  img {
    width: 3rem;
    aspect-ratio: 1/1;
    object-fit: contain;
    pointer-events: none;
  }
  p {
    max-width: 100%;
    font: 600 0.8125rem "Manrope";
    color: var(--theme-font-color);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  @media (max-width: 450px) {
    padding: 1.25rem 0.5rem 0.75rem;
    img {
      width: 2.25rem;
    }
    p {
      font-size: 0.6875rem;
    }
  }
`;

export const CloseIcon = styled.button.attrs({
  type: "button",
  "aria-label": "Remove file",
})`
  position: absolute;
  top: 0.375rem;
  right: 0.375rem;
  z-index: 1;
  width: 1.5rem;
  aspect-ratio: 1/1;
  border: none;
  border-radius: 50%;
  background: #f1f5f9;
  cursor: pointer;
  transition: background 0.2s;
  &:hover,
  &:focus-visible {
    background: #ef4444;
  }
  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 0.625rem;
    height: 2px;
    background: #64748b;
    top: 50%;
    left: 50%;
  }
  &:hover::before,
  &:hover::after,
  &:focus-visible::before,
  &:focus-visible::after {
    background: white;
  }
  &::before {
    transform: translate(-50%, -50%) rotate(45deg);
  }
  &::after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`;

export const PdfOperationButton = styled.button<{
  $theme?: string;
  $left?: string;
  $marginTop?: string;
}>`
  display: block;
  /* right-aligned by default; $left="0" keeps it inline-left */
  margin-left: ${(props) => (props.$left ? "0" : "auto")};
  margin-top: ${(props) => props.$marginTop || "1rem"};
  padding: 0.75rem 1.75rem;
  color: white;
  font: 600 1rem "Manrope";
  white-space: nowrap;
  background-color: ${(props) => props.$theme || "#125bfb"};
  border: 1px solid ${(props) => props.$theme || "#125bfb"};
  border-radius: 0.75rem;
  box-shadow: 0 8px 20px -10px ${(props) => props.$theme || "#125bfb"};
  cursor: pointer;
  transition:
    filter 0.2s,
    box-shadow 0.2s;
  &:hover:not(:disabled) {
    filter: brightness(1.08);
    box-shadow: 0 10px 24px -8px ${(props) => props.$theme || "#125bfb"};
  }
  &:focus-visible {
    outline: 3px solid ${(props) => `${props.$theme || "#125bfb"}55`};
    outline-offset: 2px;
  }
  &:disabled {
    opacity: 0.45;
    box-shadow: none;
    cursor: not-allowed;
  }
  @media (max-width: 450px) {
    padding: 0.5625rem 1rem;
    font-size: 0.875rem;
    border-radius: 0.625rem;
  }
`;

// Lighter button for secondary actions inside forms (add/remove range).
export const SecondaryOperationButton = styled(PdfOperationButton)`
  color: ${(props) => props.$theme || "#125bfb"};
  background: var(--white);
  border-color: var(--border);
  box-shadow: none;
  &:hover:not(:disabled) {
    filter: none;
    box-shadow: none;
    border-color: ${(props) => props.$theme || "#125bfb"};
    background: ${(props) => `${props.$theme || "#125bfb"}0d`};
  }
`;

// Side panel used by tools that show previews next to options
// (split, image to PDF, protect).
export const ToolPanel = styled.div<{ $theme?: string }>`
  padding: 1.5rem;
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: 1.25rem;
  box-shadow: 0 12px 32px -16px #0f172a26;
  overflow: hidden;
  @media (max-width: 450px) {
    padding: 1rem;
  }
`;

// Keeps the main action lined up with the uploader width.
export const ToolActionBar = styled.div`
  width: min(100%, 60rem);
  margin: 0 auto;
`;

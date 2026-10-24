import styled from "styled-components";
export const FileUploaderContainer = styled.div`
  width: min(100%, 60rem);
  margin: 2.5rem auto 1rem;
  padding: 0.75rem;
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: 1.25rem;
  box-shadow: 0 12px 32px -16px #0f172a26;
  @media (max-width: 450px) {
    margin: 1.5rem auto 0;
    padding: 0.5rem;
  }
`;

export const FileUploaderWrapper = styled.div<{ $theme?: string }>`
  position: relative;
  min-height: 300px;
  padding: 2rem 1rem;
  border: 2px dashed ${(props) => `${props.$theme || "#125bfb"}66`};
  border-radius: 1rem;
  background: ${(props) => `${props.$theme || "#125bfb"}0d`};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0.75rem;
  text-align: center;
  transition:
    background 0.2s,
    border-color 0.2s;
  &:hover,
  &:focus-within {
    border-color: ${(props) => props.$theme || "#125bfb"};
    background: ${(props) => `${props.$theme || "#125bfb"}1a`};
  }
  @media (max-width: 450px) {
    min-height: 200px;
    padding: 1.5rem 0.75rem;
  }
`;

export const FileUploaderIcon = styled.div`
  aspect-ratio: 96/60;
  width: 5.5rem;
  margin-bottom: 0.5rem;
  @media (max-width: 450px) {
    width: 4rem;
  }
`;

// Covers the whole drop zone, so clicking or dropping files anywhere on it
// goes straight to the native file input.
export const FileUploaderInput = styled.input.attrs({ type: "file" })`
  position: absolute;
  inset: 0;
  opacity: 0;
  cursor: pointer;
`;

export const FileUploaderLabel = styled.label<{ $theme?: string }>`
  position: relative;
  z-index: 1;
  pointer-events: none;
  padding: 0.875rem 1.75rem;
  background-color: ${(props) => props.$theme || "#125bfb"};
  color: white;
  border-radius: 0.75rem;
  font: 600 1rem "Manrope";
  box-shadow: 0 8px 20px -8px ${(props) => props.$theme || "#125bfb"};
  @media (max-width: 450px) {
    padding: 0.625rem 1.125rem;
    font-size: 0.875rem;
    border-radius: 0.625rem;
  }
`;

export const FileUploaderHint = styled.p`
  position: relative;
  z-index: 1;
  pointer-events: none;
  font: 500 0.9375rem "Manrope";
  color: var(--muted);
  & small {
    display: block;
    margin-top: 0.25rem;
    font-size: 0.8125rem;
    font-weight: 400;
  }
`;

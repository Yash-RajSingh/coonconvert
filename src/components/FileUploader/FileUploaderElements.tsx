import styled from "styled-components";
export const FileUploaderContainer = styled.div`
  width: 75%;
  min-height: 400px;
  margin: 2rem auto 1rem;
  background: #ffffff;
  padding: 1rem;
  border-radius: 0.25rem;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);

  @media (max-width: 450px) {
    width: 100%;
    min-height: 200px;
    padding: 0.5rem;
    margin: 1rem auto 0;
  }
`;

export const FileUploaderWrapper = styled.div<{ $theme?: string }>`
  width: 100%;
  min-height: calc(400px - 2rem);
  border: 0.5px dashed ${(props) => props.$theme || "#000"};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;

  @media (max-width: 450px) {
    min-height: calc(200px - 1rem);
  }
`;

export const FileUploaderIcon = styled.div`
  aspect-ratio: 96/60;
  width: 5rem;
  cursor: pointer;
  z-index: 0;

  @media (max-width: 450px) {
    width: 3.5rem;
  }
`;

export const FileUploaderInput = styled.input.attrs({
  type: "file",
  accept: "accept",
})`
  display: none;
`;

export const FileUploaderLabel = styled.label<{ $theme?: string }>`
  padding: 12px 24px;
  background-color: ${(props) => props.$theme || "#000"};
  color: white;
  border-radius: 8px;
  cursor: pointer;
  font: 400 1rem "Roboto";

  &:active {
    transform: scale(0.98);
  }

  @media (max-width: 450px) {
    padding: 6px 12px;
    font-size: 0.75rem;
    font-weight: 500;
  }
`;

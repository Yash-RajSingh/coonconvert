import styled from "styled-components";
export const FileUploaderContainer = styled.div`
  width: 85%;
  min-height: 250px;
  margin: 2rem auto 1rem;
  background: ${sessionStorage.getItem("toolTheme")};
  padding: 1rem;
  border-radius: 0.25rem;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
`;

export const FileUploaderWrapper = styled.div`
  width: 100%;
  min-height: calc(300px - 2rem);
  border: 0.5px dashed #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;
`;

export const FileUploaderIcon = styled.div`
  aspect-ratio: 96/60;
  width: 5rem;
  cursor: pointer;
  zindex: 0;
`;

export const FileUploaderInput = styled.input.attrs({
  type: "file",
  accept: "accept",
})`
  display: none;
`;

export const FileUploaderLabel = styled.label`
  padding: 12px 24px;
  background-color: white;
  color: ${sessionStorage.getItem("toolTheme")};
  border-radius: 8px;
  cursor: pointer;
  font: 400 1rem "Roboto";

  &:active {
    transform: scale(0.98);
  }
`;

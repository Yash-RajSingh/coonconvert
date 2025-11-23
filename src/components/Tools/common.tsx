import styled from "styled-components";
export const UploadedFilesWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;
export const UploadedFileCard = styled.li`
  min-width: 7rem;
  max-width: 7rem;
  min-height: 150px;
  border: 1px solid ${sessionStorage.getItem("toolTheme")};
  padding: 1rem;
  border-radius: 0.25rem;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  list-style: none;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  justify-content: end;
  img {
    width: 3rem;
    aspect-ratio: 1/1;
    object-fit: contain;
    margin: 0 auto 1rem;
  }
  p {
    font-size: 0.75rem;
    font-weight: 500;
    max-width: 6rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: ${sessionStorage.getItem("toolTheme")};
  }
`;

export const CloseIcon = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 14px;
  aspect-ratio: 1/1;
  cursor: pointer;
  opacity: 0.6;
  transition: opacity 0.2s;
  background-color: red;
  border-radius: 50%;
  border: 2px solid red;
  &:hover {
    opacity: 1;
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: white;
    top: 50%;
    left: 0;
  }

  &::before {
    transform: translateY(-50%) rotate(45deg);
  }

  &::after {
    transform: translateY(-50%) rotate(-45deg);
  }
`;

export const PdfOperationButton = styled.button`
padding: 0.5rem 2rem;
position: relative;
left: 100%;
transform: translateX(-100%);
margin-top: 1rem;
color: ${sessionStorage.getItem("toolTheme")};
font: 400 1rem "Roboto";
  background-color:white;
  border: 1px solid ${sessionStorage.getItem("toolTheme")};
  border-radius: 0.25rem;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover:not(:disabled) {
    background-color: ${sessionStorage.getItem("toolTheme")};
    color: white;
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
}`;

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

export const UploadedFileCardWrapper = styled.div<{
  $theme?: string;
  $isDragging?: boolean;
  $isDragOver?: boolean;
}>`
  min-width: 8rem;
  max-width: 8rem;
  min-height: 150px;
  border: 1px dashed ${(props) => props.$theme || "#000"};
  padding: 0.5rem;
  border-radius: 0.25rem;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  cursor: ${(props) => (props.$isDragging ? "grabbing" : "grab")};
  opacity: ${(props) => (props.$isDragging ? 0.5 : 1)};
  transform: ${(props) => (props.$isDragOver ? "scale(1.05)" : "scale(1)")};
  border-width: ${(props) => (props.$isDragOver ? "2px" : "1px")};
  border-style: ${(props) => (props.$isDragOver ? "solid" : "dashed")};
  transition: all 0.2s ease;

  &:hover {
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 450px) {
    min-width: 5rem;
    max-width: 5rem;
    min-height: 110px;
    padding: 0.35rem;
  }
`;
export const UploadedFileCard = styled.li<{ $theme?: string }>`
  min-width: 7rem;
  max-width: 7rem;
  min-height: calc(150px - 1rem);
  padding: 0.5rem;
  border-radius: 0.25rem;
  background-color: #fff;
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
    pointer-events: none;
  }
  p {
    font-size: 0.75rem;
    font-weight: 500;
    max-width: 6rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: ${(props) => props.$theme || "#000"};
  }

  @media (max-width: 450px) {
    min-width: calc(5rem - 0.75rem);
    max-width: calc(5rem - 0.75rem);
    min-height: calc(110px - 0.75rem);
    img {
      width: 2rem;
    }
    p {
      max-width: 4rem;
      font-size: 0.5rem;
    }
  }
`;

export const CloseIcon = styled.div`
  position: absolute;
  top: 0.25rem;
  right: 0.25rem;
  width: 0.75rem;
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

export const PdfOperationButton = styled.button<{
  $theme?: string;
  $left?: string;
  $marginTop?: string;
}>`
padding: 0.5rem 2rem;
position: relative;
left: ${(props) => props.$left || "100%"};
transform: ${(props) => (props.$left ? "none" : "translateX(-100%)")};
margin-top: ${(props) => props.$marginTop || "1rem"};
color: ${(props) => props.$theme || "#000"};
font: 400 1rem "Roboto";
  background-color:white;
  border: 1px solid ${(props) => props.$theme || "#000"};
  border-radius: 0.25rem;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover:not(:disabled) {
    background-color: ${(props) => props.$theme || "#000"};
    color: white;
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (max-width: 450px) {
    padding: 6px 12px;
    font-size: 0.75rem;
    font-weight: 500;
  }
}`;

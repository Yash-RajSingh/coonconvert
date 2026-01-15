import styled from "styled-components";
import { CloseIcon as BaseCloseIcon } from "../common";

export const PngToPdfUploadedFilesContainer = styled.div<{ $theme?: string }>`
  width: 100%;
  display: flex;
  gap: 1rem;
  align-items: start;
  padding: 1rem 0.5rem;
  justify-content: space-between;
  margin-top: 4rem;

  div.uploaded-files-preview {
    width: 60%;
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    align-items: center;
    justify-content: center;
  }
`;

export const PngToPdfPreviewCard = styled.div<{ $orientation?: "portrait" | "landscape" }>`
  width: ${(props) => (props.$orientation === "landscape" ? "180px" : "150px")};
  padding: 0.5rem;
  background: #fff;
  border-radius: 0.25rem;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  transition: width 0.3s ease;
  position: relative;

  img {
    width: 100%;
    height: ${(props) => (props.$orientation === "landscape" ? "120px" : "150px")};
    object-fit: cover;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
    border: 1px dashed #e0e0e0;
    pointer-events: none;
    border-radius: 0.25rem;
    transition: height 0.3s ease;
  }
`;

export const PngToPdfCloseIcon = styled(BaseCloseIcon)`
  top: 4px;
  right: 4px;
`;

export const PngToPdfFormContainer = styled.div.attrs({
  className: "uploaded-files-actions",
})<{ $theme?: string }>`
  width: 35%;
  padding: 1rem;
  background: #fff;
  border-radius: 0.25rem;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
  overflow: hidden;
  
  p.uploaded-files-count {
    font: 400 0.75rem "Roboto";
    line-height: 1.5;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    border-bottom: 1px solid #e0e0e0;
    padding-bottom: 0.5rem;
    margin-bottom: 0.5rem;

    span {
      font: 600 1rem "Roboto";
      color: ${(props) => props.$theme || "#000"};
      line-height: 1.5;
    }
  }
`;

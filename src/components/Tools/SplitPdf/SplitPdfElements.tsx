import styled from "styled-components";

export const SplitPdfUploadedFilesContainer = styled.div<{ $theme?: string }>`
  width: 100%;
  display: flex;
  gap: 1rem;
  align-items: start;
  padding: 1rem 0.5rem;
  justify-content: space-between;
  margin-top: 4rem;

  div.uploaded-file-preview {
    width: 60%;
    // border: 1px solid blue;
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    align-items: center;
    justify-content: center;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

export const SplitPdfPreviewCard = styled.div`
  width: 150px;
  padding: 0.5rem;
  background: #fff;
  border-radius: 0.25rem;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
    border: 1px dashed #e0e0e0;
    pointer-events: none;
  }

  span {
    font: 400 1rem "Roboto";
    color: #000;
    line-height: 1.5;
    display: block;
    text-align: center;
    margin-top: 0.125rem;
  }
`;

export const SplitPdfFormContainer = styled.div.attrs({
  className: "uploaded-file-actions",
})<{ $theme?: string }>`
  width: 35%;
  padding: 1rem;
  background: #fff;
  border-radius: 0.25rem;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
  overflow: hidden;
  p.uploaded-file-name {
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

  @media screen and (max-width: 450px) {
    width: 100%;
  }
`;

export const SplitPdfButtonGroup = styled.div<{ width?: string }>`
  width: ${(props) => props.width || "100%"};
  display: flex;
  justify-content: start;
  align-items: center;
`;

export const SplitPdfButton = styled.div<{
  $active?: boolean;
  $theme?: string;
}>`
  width: 50%;
  padding: 0.5rem 1rem;
  background: #fff;
  margin-top: 0.5rem;
  border: 2px solid ${(props) => (props.$active ? props.$theme : "#e0e0e0")};
  color: ${(props) => (props.$active ? props.$theme : "#000")};
  cursor: pointer;
  transition: all 0.2s;
  font: 400 1rem "Roboto";
  white-space: nowrap;

  &:first-of-type {
    border-radius: 0.25rem 0rem 0rem 0.25rem;
    border-right-color: ${(props) => !props.$active && "transparent"};
  }
  &:last-of-type {
    border-radius: 0rem 0.25rem 0.25rem 0;
    border-left-color: ${(props) => !props.$active && "transparent"};
  }
    @media screen and (max-width: 450px) {
  font-size: 0.75rem ;
  padding: 0.25rem 0.5rem;
  }
`;

export const SplitPdfDFormActionWrapper = styled.div`
  width: 100%;
  margin-top: 1rem;
`;

import styled from "styled-components";

export const ToolsCardBody = styled.div<{ color: string }>`
  border: 1px solid rgb(229, 231, 235);
  width: 20.5rem;
  height: 6.5rem;
  background-color: var(--white);
  border-radius: 4px;
  box-shadow:
    rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0) 0px 0px 0p;
  padding: 1rem;
  display: flex;
  gap: 1rem;
  align-items: start;
  cursor: pointer;
  border-bottom-color: ${({ color }) => color};
  border-bottom-width: 2px;
  cursor: pointer;
  &:hover {
    transform: translateY(-2px);
    transition: transform 0.1s;
    background-color: ${({ color }) => `${color}26`};
    box-shadow:
      rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
      rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  }
  @media (max-width: 450px) {
    max-height: fit-content;
  }
`;
export const ToolsCardIcon = styled.img`
  width: 32px;
  aspect-ratio: 1/1;
`;
export const ToolsCardContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
`;
export const ToolsCardTitle = styled.p`
  font: 600 var(--tools-card-title-font-size) "Roboto";
  line-height: 1.5;
`;
export const ToolsCardDescription = styled.p`
  font: 400 14px "Manrope";
  color: #808080;
  line-height: 20px;
  letter-spacing: 0.25px;
`;

export const ToolHeader = styled.h1`
  font: 700 2.25rem "Roboto";
  line-height: 2.5rem;
  text-align: center;
  padding: 0.5rem;
  margin: 2rem auto 0;
`;

import styled from "styled-components";

export const ToolsSectionContainer = styled.div`
  width: 100%;
  height: 100%;
`;
export const ToolsSectionHeader = styled.p`
  text-align: center;
  font: 700 var(--heading-font-size) "StackSans";
  & span {
    color: var(--theme-dark-blue);
  }
`;

export const ToolsSectionWrapper = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 3rem;
  align-items: stretch;
`;

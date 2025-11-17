import styled from "styled-components";

export const ToolsSectionContainer = styled.div`
  width: 100%;
  height: 100%;
`;
export const ToolsSectionHeader = styled.p`
  color: #333;
  text-align: center;
  font: 700 3.5rem "StackSans";
  & span {
    color: #125bfb;
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

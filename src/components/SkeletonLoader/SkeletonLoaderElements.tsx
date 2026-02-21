import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
`;

interface SkeletonTitleProps {
  height?: string;
  width?: string;
}

export const SkeletonTitle = styled.div<SkeletonTitleProps>`
  height: ${({ height }) => height || '30vh'};
  width: ${({ width }) => width || '100%'};
  background: linear-gradient(to right, #f6f7f8 8%, #edeef1 18%, #f6f7f8 33%);
  background-size: 800px 104px;
  border-radius: 4px;
  animation: ${shimmer} 1.2s linear infinite forwards;
`;

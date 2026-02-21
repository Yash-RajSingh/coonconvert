import styled, { keyframes } from "styled-components";

const l11 = keyframes`
  to {
    background-size: 100% 100%;
  }
`;
export const PreloaderContainer = styled.div`
  width: calc(100vw - 2rem);
  height: calc(100vh - 2rem);
  background-color: #3396d3;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 1rem;
  left: 1rem;
  z-index: 100;

  @media (max-width: 450px) {
    width: calc(100vw - 1rem);
    height: calc(100dvh - 2rem);
    top: 0.5rem;
    left: 0.5rem;
  }
`;
export const PreloaderWrapper = styled.div`
  width: fit-content;
  font-size: 40px;
  font-family: monospace;
  font-weight: bold;
  text-transform: uppercase;
  color: #0000;
  -webkit-text-stroke: 1px #000;
  background: conic-gradient(#000 0 0) 0/0 100% no-repeat text;
  animation: ${l11} 2s steps(8, jump-none) infinite;
  &:before {
    content: "Loading...";
  }

  @media (max-width: 450px) {
    font-size: 1.5rem;
    -webkit-text-stroke: 0.5px #000;
  }
`;

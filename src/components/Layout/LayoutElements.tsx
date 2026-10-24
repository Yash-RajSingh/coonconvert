import styled from "styled-components";

export const LayoutContainer = styled.div.attrs({
  id: "layout-container",
})`
  flex: 1;
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  @media (max-width: 450px) {
    max-width: calc(100% - 3.5rem);
  }
`;

// Pushes the footer to the bottom on short pages.
export const LayoutPage = styled.div`
  min-height: 100vh;
  /* hero glow bleeds past the content edges; clip keeps the header sticky */
  overflow-x: clip;
  display: flex;
  flex-direction: column;
`;

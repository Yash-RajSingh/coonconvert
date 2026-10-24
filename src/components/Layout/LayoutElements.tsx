import styled from "styled-components";

export const LayoutContainer = styled.div.attrs({
  id: "layout-container",
})`
  flex: 1;
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  @media (max-width: 450px) {
    max-width: 85%;
  }
`;

// Pushes the footer to the bottom on short pages.
export const LayoutPage = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

import styled from "styled-components";

export const LayoutContainer = styled.div.attrs({
  id: "layout-container",
})`
  max-width: 80%;
  margin: 0 auto;
  @media (max-width: 450px) {
    max-width: 85%;
  }
`;

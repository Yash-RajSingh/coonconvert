import styled from "styled-components";

export const HeaderContainer = styled.header.attrs({
  id: "header-container",
})`
  width: 100%;
  background-color: var(--white);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  height: 4rem;
  position: sticky;
  top: 0;
`;

export const HeaderWrapper = styled.div`
  padding: 1rem 0rem;
  max-width: 90%;
  min-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: start;
  h1 {
    font-size: 1.5rem;
    color: #333;
    font-family: "Roboto";
  }
`;

export const HeaderLogo = styled.img`
  width: 40px;
  height: 100%;
`;

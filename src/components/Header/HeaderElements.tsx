import styled from "styled-components";

export const HeaderContainer = styled.header.attrs({
  id: "header-container",
})`
  width: 100%;
  background-color: #ffffffcc;
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
  height: 4rem;
  position: sticky;
  z-index: 10;
  top: 0;
  @media (max-width: 450px) {
    height: 3.25rem;
  }
`;

export const HeaderWrapper = styled.div`
  padding: 1rem 0rem;
  max-width: 90%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  span {
    font-size: var(--tools-card-title-font-size);
    font-family: "Manrope";
    font-weight: 700;
  }

  @media (max-width: 450px) {
    justify-content: center;
    padding: 0.5rem 0rem;

    span {
      font-size: 1.25rem;
    }
  }
`;

export const HeaderLogo = styled.img`
  width: 40px;
  height: 100%;
`;

export const HeaderBrand = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: inherit;
  text-decoration: none;
`;


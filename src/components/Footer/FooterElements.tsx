import styled from "styled-components";

export const FooterContainer = styled.footer.attrs({
  id: "footer-container",
})`
  margin-top: 10rem;
  background: var(--white);
  border-top: 1px solid var(--border);
`;

export const FooterWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 2rem 0 1.25rem;
  display: flex;
  justify-content: space-between;
  gap: 2.5rem;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.25rem;
  }
  @media (max-width: 450px) {
    width: calc(100% - 3.5rem);
    padding: 1.75rem 0 1rem;
  }
`;

export const FooterBrand = styled.div`
  max-width: 20rem;
  & > a {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font: 700 1.125rem "Manrope";
    color: var(--theme-font-color);
    text-decoration: none;
  }
`;

export const FooterLogo = styled.img`
  width: 2.25rem;
  height: auto;
`;

export const FooterTagline = styled.p`
  margin-top: 0.5rem;
  font: 400 0.875rem / 1.5 "Manrope";
  color: var(--muted);
`;

export const FooterColumn = styled.nav`
  & h4 {
    font: 700 0.75rem "Manrope";
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--theme-font-color);
    margin-bottom: 0.5rem;
  }
  & ul {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(2, auto);
    gap: 0.375rem 2.5rem;
  }
  & a {
    font: 500 0.875rem "Manrope";
    color: var(--muted);
    text-decoration: none;
    &:hover {
      color: var(--theme-dark-blue);
    }
  }
  @media (max-width: 450px) {
    & ul {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 0.375rem 1rem;
    }
  }
`;

export const FooterBottom = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 0.875rem 0;
  border-top: 1px solid var(--border);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  font: 400 0.8125rem "Manrope";
  color: var(--muted);
  & nav {
    display: flex;
    gap: 1.25rem;
  }
  & a {
    color: var(--muted);
    text-decoration: none;
    &:hover {
      color: var(--theme-dark-blue);
    }
  }
  @media (max-width: 450px) {
    width: calc(100% - 3.5rem);
  }
`;

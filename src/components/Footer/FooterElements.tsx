import styled from "styled-components";
export const FooterContainer = styled.div.attrs({
  id: "footer-container",
})`
  width: 100%;
  padding: 1rem 2rem 0.5rem 2rem;
  margin-top: 6rem;
  background-color: var(--white);
`;
export const FooterWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: space-between;
`;
export const FooterContent = styled.div<{ align?: string; gap?: string; direction?: string }>`
  width: 20%;
  height: 100%;
  display: flex;
  gap: ${({ gap }) => gap || "0rem"};
  flex-direction: ${({ direction }) => direction === "row" ? "row" : "column"};
  align-items: ${({ align }) => align || "center"};
  justify-content: end;
  & h3 {
    font-size: var(--tools-card-title-font-size);
    font-weight: 700;
  }
  & span {
    font-size: 0.875rem;
    font-weight: 400;
    color: var(--grey);
    cursor: pointer;
    &:hover {
      color: var(--theme-font-color);
    }
  }

  @media (max-width: 450px) {
    width: 30%;
    &:last-child {
      gap: 0.25rem;
      & span{
        font-size: 0.75rem;
      }
    }

  }
`;
export const FooterLogo = styled.img`
  width: 52px;
  height: 100%;
  margin: 0 auto;
  @media (max-width: 450px) {
  margin: 0;
  width: 2.25rem;
  }
`;

export const FooterTrademark = styled.p`
  font-size: 0.75rem;
  line-height: 1.25rem;
  letter-spacing: 0.025em;
  font-weight: 400;
  text-align: center;
  margin-top: 1.5rem;
`;

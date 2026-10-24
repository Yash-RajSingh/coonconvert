import styled from "styled-components";

export const ToolsSectionContainer = styled.section`
  padding-top: 10rem;
  scroll-margin-top: 4rem;
`;

export const SectionEyebrow = styled.p`
  text-align: center;
  font: 700 0.8125rem "Manrope";
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--theme-dark-blue);
  margin-bottom: 0.75rem;
`;

export const ToolsSectionHeader = styled.h2`
  text-align: center;
  font: 700 clamp(1.875rem, 3.5vw, 2.75rem) / 1.2 "StackSans";
  letter-spacing: -0.02em;
  & span {
    color: var(--theme-dark-blue);
  }
`;

export const SectionSubtitle = styled.p`
  text-align: center;
  font: 400 1.0625rem / 1.6 "Manrope";
  color: var(--muted);
  max-width: 36rem;
  margin: 0.75rem auto 0;
  @media (max-width: 450px) {
    font-size: 0.9375rem;
  }
`;

export const ToolsSectionWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 17rem), 1fr));
  gap: 1.25rem;
  margin-top: 3rem;
  @media (max-width: 450px) {
    gap: 0.75rem;
    margin-top: 1.75rem;
  }
`;

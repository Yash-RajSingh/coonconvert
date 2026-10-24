import styled from "styled-components";

export const FeaturesContainer = styled.section`
  padding-top: 10rem;
  scroll-margin-top: 4rem;
`;
export const FeatureItemWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 15rem), 1fr));
  gap: 1.25rem;
  margin-top: 3rem;
  @media (max-width: 450px) {
    gap: 0.75rem;
    margin-top: 1.75rem;
  }
`;

export const FeatureItemBody = styled.article`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1.75rem;
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: 1rem;
  @media (max-width: 450px) {
    padding: 1.125rem;
    gap: 0.5rem;
  }
`;

export const FeatureHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media (max-width: 450px) {
    flex-direction: row;
    align-items: center;
    gap: 0.75rem;
  }
`;
export const FeatureItemIcon = styled.img`
  width: 3.5rem;
  aspect-ratio: 1/1;
  @media (max-width: 450px) {
    width: 2.5rem;
  }
`;
export const FeatureItemTitle = styled.h3`
  font: 700 1.125rem / 1.4 "Manrope";
  @media (max-width: 450px) {
    font-size: 0.9375rem;
  }
`;
export const FeatureItemDescription = styled.p`
  font: 400 0.9375rem / 1.6 "Manrope";
  color: var(--muted);
  @media (max-width: 450px) {
    font-size: 0.8125rem;
    line-height: 1.55;
  }
`;

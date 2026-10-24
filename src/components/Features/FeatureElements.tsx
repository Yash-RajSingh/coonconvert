import styled from "styled-components";

export const FeaturesContainer = styled.section`
  padding-top: 6rem;
  scroll-margin-top: 4rem;
`;
export const FeatureItemWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 15rem), 1fr));
  gap: 1.25rem;
  margin-top: 3rem;
`;

export const FeatureItemBody = styled.article`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1.75rem;
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: 1rem;
`;

export const FeatureHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const FeatureItemIcon = styled.img`
  width: 3.5rem;
  aspect-ratio: 1/1;
`;
export const FeatureItemTitle = styled.h3`
  font: 700 1.125rem / 1.4 "Manrope";
`;
export const FeatureItemDescription = styled.p`
  font: 400 0.9375rem / 1.6 "Manrope";
  color: var(--muted);
`;

import styled from "styled-components";

export const FeaturesContainer = styled.div`
  margin-top: 10rem;
`;
export const FeatureItemWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(30rem, 1fr));
  grid-row-gap: 2rem;
  margin-top: 3rem;
  place-items: center;
  place-content: center;
`;

export const FeatureItemBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 25rem;
  padding: 1rem;

`;
export const FeatureItemIcon = styled.img`
  width: 4.5rem;
  aspect-ratio: 1/1;
  margin: 0 0 0.5rem;
`;
export const FeatureItemTitle = styled.h3`
  font: 600 1.5rem "Roboto";
  color: #333;
`;
export const FeatureItemDescription = styled.p`
  font: 300 1.125rem "Manrope";
  letter-spacing: 0.025em;
`;
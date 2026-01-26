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
  @media (max-width: 450px) {
    grid-template-columns: repeat(1, minmax(20rem, 1fr));
  }
`;

export const FeatureItemBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 25rem;
  padding: 1rem;
  @media (max-width: 450px) {
    width: calc(100% - 2rem);
  }
`;

export const FeatureHeader = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 450px) {
    flex-direction: row;
    align-items: center;
    gap: 1rem;
  }
`;
export const FeatureItemIcon = styled.img`
  width: 4.5rem;
  aspect-ratio: 1/1;
  margin: 0 0 0.5rem;
  @media (max-width: 450px) {
    width: 3rem;
  }
`;
export const FeatureItemTitle = styled.h3`
  font: 600 var(--tools-card-title-font-size) "Roboto";
`;
export const FeatureItemDescription = styled.p`
  font: 300 var(--description-font-size) "Manrope";
  letter-spacing: 0.025em;
  @media (max-width: 450px) {
    font: 300 var(--description-font-size) "Manrope";
  }
`;

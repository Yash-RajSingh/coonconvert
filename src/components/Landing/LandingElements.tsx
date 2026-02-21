import styled from "styled-components";

export const LandingContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 75vh;
`;

export const LandingWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 2rem;
  align-items: center;
  margin-top: 10rem;
  @media (max-width: 450px) {
  flex-wrap: wrap;
  }
`;
export const LandingContent = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 450px) {
    width: 100%;
  }
`;
export const LandingContentTitle = styled.p`
  font-size: var(--heading-font-size);
  font-weight: 700;
  font-family: "StackSans";
  line-height: 1.25;
  @media (max-width: 450px) {
    font-size: 2.5rem;
    text-align: center;
  }
`;
export const LandingContentTitleHighlight = styled.span`
  color: var(--theme-dark-blue);
`;
export const LandingContentDescription = styled.p`
  font: 400 var(--description-font-size) "Manrope";
  color: #808080;
  width: 70%;
  line-height: 1.5;
  margin-top: 1rem;
  @media (max-width: 450px) {
    width: 100%;
    text-align: center;
  }
`;

export const LandingImageWrapper = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 450px) {
    width: 100%;
  }
`;
export const LandingImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  max-height: 600px;
  object-fit: contain;
  transform: translateZ(0);
  will-change: transform;
`;

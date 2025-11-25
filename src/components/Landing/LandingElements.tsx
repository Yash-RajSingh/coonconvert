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
`;
export const LandingContent = styled.div`
  width: 50%;
  height: 100%;
`;
export const LandingContentTitle = styled.p`
  font-size: 4rem;
  font-weight: 700;
  color: #333;
  font-family: "StackSans";
  line-height: 1.25;
`;
export const LandingContentTitleHighlight = styled.span`
  color: #125bfb;
`;
export const LandingContentDescription = styled.p`
  font-size: 1.25rem;
  color: #808080;
  font-family: "Manrope";
  width: 70%;
  line-height: 1.5;
  margin-top: 1rem;
`;

export const LandingImageWrapper = styled.div`
  width: 50%;
  height: 100%;
`;
export const LandingImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

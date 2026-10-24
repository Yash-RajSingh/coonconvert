import styled from "styled-components";

export const LandingContainer = styled.section`
  position: relative;
  min-height: 80vh;
  display: grid;
  align-content: center;
  padding: 4rem 0;
  &::before {
    content: "";
    position: absolute;
    inset: 0 -20%;
    z-index: -1;
    background:
      radial-gradient(40rem 24rem at 80% 30%, #125bfb22, transparent 70%),
      radial-gradient(30rem 20rem at 10% 10%, #7961f21a, transparent 70%);
  }
  @media (max-width: 900px) {
    padding: 3rem 0 2rem;
  }
`;

export const LandingWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 3rem;
  align-items: center;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

export const LandingContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  @media (max-width: 900px) {
    align-items: center;
  }
`;

export const LandingContentTitle = styled.h2`
  font: 700 clamp(2.25rem, 5vw, 4rem) / 1.1 "StackSans";
  letter-spacing: -0.02em;
`;

export const LandingContentTitleHighlight = styled.span`
  background: linear-gradient(90deg, #125bfb, #7961f2);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

export const LandingContentDescription = styled.p`
  font: 400 var(--description-font-size) / 1.6 "Manrope";
  color: var(--muted);
  max-width: 34rem;
`;

export const LandingActions = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  @media (max-width: 900px) {
    justify-content: center;
  }
`;

const Button = styled.a`
  padding: 0.875rem 1.5rem;
  border-radius: 0.75rem;
  font: 600 1rem "Manrope";
  text-decoration: none;
  transition:
    transform 0.15s,
    box-shadow 0.15s;
  &:hover {
    transform: translateY(-2px);
  }
  &:focus-visible {
    outline: 3px solid #125bfb55;
    outline-offset: 2px;
  }
`;

export const PrimaryButton = styled(Button)`
  background: var(--theme-dark-blue);
  color: var(--white);
  box-shadow: 0 8px 20px -6px #125bfb88;
`;

export const SecondaryButton = styled(Button)`
  background: var(--white);
  color: var(--theme-font-color);
  border: 1px solid var(--border);
`;

export const TrustList = styled.ul`
  display: flex;
  gap: 1.25rem;
  flex-wrap: wrap;
  list-style: none;
  font: 500 0.875rem "Manrope";
  color: var(--muted);
  & li::before {
    content: "✓ ";
    color: #22c55e;
    font-weight: 700;
  }
  @media (max-width: 900px) {
    justify-content: center;
  }
`;

export const LandingImageWrapper = styled.div`
  @media (max-width: 900px) {
    max-width: 28rem;
    margin: 0 auto;
  }
`;

export const LandingImage = styled.img`
  display: block;
  width: 100%;
  height: auto;
  max-height: 520px;
  object-fit: contain;
`;

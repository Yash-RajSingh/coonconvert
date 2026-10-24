import {
  LandingContainer,
  LandingWrapper,
  LandingContent,
  LandingImageWrapper,
  LandingImage,
  LandingContentTitle,
  LandingContentTitleHighlight,
  LandingContentDescription,
  LandingActions,
  PrimaryButton,
  SecondaryButton,
  TrustList,
} from "./LandingElements";
import HeroImage from "@assets/hero.webp";

const Landing = () => {
  return (
    <LandingContainer>
      <LandingWrapper>
        <LandingContent>
          <LandingContentTitle>
            Every PDF tool you need,{" "}
            <LandingContentTitleHighlight>in one place</LandingContentTitleHighlight>
          </LandingContentTitle>
          <LandingContentDescription>
            Convert, merge, split, compress, edit and protect PDFs in a few
            clicks. Everything is processed on your device, so your files never
            leave your computer.
          </LandingContentDescription>
          <LandingActions>
            <PrimaryButton href="#tools">Explore tools →</PrimaryButton>
            <SecondaryButton href="#why">Why CoonConvert</SecondaryButton>
          </LandingActions>
          <TrustList>
            <li>100% private</li>
            <li>No uploads</li>
            <li>GDPR compliant</li>
          </TrustList>
        </LandingContent>
        <LandingImageWrapper>
          <LandingImage
            src={HeroImage}
            alt="Files being converted to and from PDF"
            width={1200}
            height={800}
            loading="eager"
            decoding="sync"
            fetchPriority="high"
          />
        </LandingImageWrapper>
      </LandingWrapper>
    </LandingContainer>
  );
};

export default Landing;

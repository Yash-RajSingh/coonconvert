import {
  LandingContainer,
  LandingWrapper,
  LandingContent,
  LandingImageWrapper,
  LandingImage,
  LandingContentTitle,
  LandingContentTitleHighlight,
  LandingContentDescription,
} from "./LandingElements";
import HeroImage from "@assets/hero.webp";

const Landing = () => {
  return (
    <>
      <LandingContainer>
        <LandingWrapper>
          <LandingContent>
            <LandingContentTitle>
              Your All-in-one <br />
              Online
              <LandingContentTitleHighlight>
                {" "}
                PDF Tools
              </LandingContentTitleHighlight>
            </LandingContentTitle>
            <LandingContentDescription>
              We build PDF tools to make your life easier. Access an east-to-use
              PDF solutions with all the features you need: Convert files to
              PDF, from PDF, merge, fill, sign and compress PDFs withing a few
              clicks.
            </LandingContentDescription>
          </LandingContent>
          <LandingImageWrapper>
            <LandingImage 
              src={HeroImage} 
              srcSet={`${HeroImage} 1x, ${HeroImage} 2x`}
              alt="Landing Image" 
              width={800}
              height={600}
              loading="eager"
              decoding="sync"
              fetchPriority="high"
            />
          </LandingImageWrapper>
        </LandingWrapper>
      </LandingContainer>
    </>
  );
};

export default Landing;

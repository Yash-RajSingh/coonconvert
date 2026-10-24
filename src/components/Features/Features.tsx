import { FeaturesContainer, FeatureItemWrapper } from "./FeatureElements";
import {
  SectionEyebrow,
  SectionSubtitle,
  ToolsSectionHeader,
} from "@components/ToolsSection/ToolsSectionElements";
import { features } from "@/data/features";
import { lazy, Suspense } from "react";
import SkeletonLoader from "@components/SkeletonLoader/SkeletonLoader";

const FeatureItem = lazy(() => import("./FeatureItem/FeatureItem"));

const Features = () => {
  return (
    <FeaturesContainer id="why">
      <SectionEyebrow>Why us</SectionEyebrow>
      <ToolsSectionHeader>
        Why choose <span>CoonConvert</span>?
      </ToolsSectionHeader>
      <SectionSubtitle>
        Built for people who just want their PDF done, without handing their
        documents to a server.
      </SectionSubtitle>
      <FeatureItemWrapper>
        {features?.map((feature) => (
          <Suspense key={feature?.id} fallback={<SkeletonLoader width="100%" height="14rem" /> }>
            <FeatureItem
              id={feature?.id}
              icon={feature?.icon}
              title={feature?.title}
              description={feature?.description}
            />
          </Suspense>
        ))}
      </FeatureItemWrapper>
    </FeaturesContainer>
  );
};

export default Features;

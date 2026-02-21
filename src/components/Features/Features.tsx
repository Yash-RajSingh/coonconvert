import { FeaturesContainer, FeatureItemWrapper } from "./FeatureElements";
import { ToolsSectionHeader } from "@components/ToolsSection/ToolsSectionElements";
import { features } from "@/data/features";
import { lazy, Suspense } from "react";
import SkeletonLoader from "@components/SkeletonLoader/SkeletonLoader";

const FeatureItem = lazy(() => import("./FeatureItem/FeatureItem"));

const Features = () => {
  return (
    <FeaturesContainer>
      <ToolsSectionHeader>
        Why choose <span>CoonConvert</span>?
      </ToolsSectionHeader>
      <FeatureItemWrapper>
        {features?.map((feature) => (
          <Suspense key={feature?.id} fallback={<SkeletonLoader width={"30rem"} height={"10rem"}/> }>
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

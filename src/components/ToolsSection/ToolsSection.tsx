import {
  SectionEyebrow,
  SectionSubtitle,
  ToolsSectionContainer,
  ToolsSectionHeader,
  ToolsSectionWrapper,
} from "./ToolsSectionElements";
import { tools } from "@/data/tools";
import { lazy, Suspense } from "react";
import SkeletonLoader from "@components/SkeletonLoader/SkeletonLoader";

const ToolsCard = lazy(() => import("./ToolsCard/ToolsCard"));
const ToolsSection = () => {
  return (
    <ToolsSectionContainer id="tools">
      <SectionEyebrow>Tools</SectionEyebrow>
      <ToolsSectionHeader>
        Most popular <span>PDF tools</span>
      </ToolsSectionHeader>
      <SectionSubtitle>
        Pick a tool, drop in your files and download the result. No accounts,
        no waiting.
      </SectionSubtitle>
      <ToolsSectionWrapper>
        {tools?.map((item) => (
          <Suspense
            key={item?.id}
            fallback={<SkeletonLoader width="100%" height="9rem" />}
          >
            <ToolsCard info={item} />
          </Suspense>
        ))}
      </ToolsSectionWrapper>
    </ToolsSectionContainer>
  );
};

export default ToolsSection;

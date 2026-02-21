import {
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
    <ToolsSectionContainer>
      <ToolsSectionHeader>
        Most Popular <span>PDF Tools</span>
      </ToolsSectionHeader>
      <ToolsSectionWrapper>
        {tools?.map((item, index) => (
          <Suspense fallback={<SkeletonLoader width="20.5rem" height="6.5rem"/>}>
            <ToolsCard key={item?.id + index} info={item} />
          </Suspense>
        ))}
      </ToolsSectionWrapper>
    </ToolsSectionContainer>
  );
};

export default ToolsSection;

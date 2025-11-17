import {
  ToolsSectionContainer,
  ToolsSectionHeader,
  ToolsSectionWrapper,
} from "./ToolsSectionElements";
import { tools } from "@/data/tools";
import ToolsCard from "./ToolsCard/ToolsCard";
const ToolsSection = () => {
  return (
    <ToolsSectionContainer>
      <ToolsSectionHeader>
        Most Popular <span>PDF Tools</span>
      </ToolsSectionHeader>
      <ToolsSectionWrapper>
        {tools?.map((item, index) => (
          <ToolsCard key={item?.id + index} info={item} />
        ))}
      </ToolsSectionWrapper>
    </ToolsSectionContainer>
  );
};

export default ToolsSection;

import {
  SectionEyebrow,
  SectionSubtitle,
  ToolsSectionContainer,
  ToolsSectionHeader,
  ToolsSectionWrapper,
} from "./ToolsSectionElements";
import { tools } from "@/data/tools";
import ToolsCard from "./ToolsCard/ToolsCard";
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
          <ToolsCard key={item?.id} info={item} />
        ))}
      </ToolsSectionWrapper>
    </ToolsSectionContainer>
  );
};

export default ToolsSection;

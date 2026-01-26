import {
  FeatureItemBody,
  FeatureItemDescription,
  FeatureItemIcon,
  FeatureItemTitle,
  FeatureItemWrapper,
  FeaturesContainer,
  FeatureHeader
} from "./FeatureElements";
import { ToolsSectionHeader } from "@components/ToolsSection/ToolsSectionElements";
import { features } from "@/data/features";
const Features = () => {
  return (
    <FeaturesContainer>
      <ToolsSectionHeader>
        Why choose <span>CoonConvert</span>?
      </ToolsSectionHeader>
      <FeatureItemWrapper>
        {features?.map((feature: any) => (
          <FeatureItemBody key={feature?.id}>
            <FeatureHeader>
            <FeatureItemIcon src={feature?.icon} alt={feature?.title} />
            <FeatureItemTitle>{feature?.title}</FeatureItemTitle>
            </FeatureHeader>
            <FeatureItemDescription>
              {feature?.description}
            </FeatureItemDescription>
          </FeatureItemBody>
        ))}
      </FeatureItemWrapper>
    </FeaturesContainer>
  );
};

export default Features;

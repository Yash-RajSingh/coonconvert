import {
  ToolsCardBody,
  ToolsCardTitle,
  ToolsCardDescription,
  ToolsCardContentWrapper,
  ToolsCardIcon,
} from "./ToolsCardElements";
const ToolsCard = ({ info }: { info: any }) => {
  return (
    <ToolsCardBody>
      <ToolsCardIcon src={info?.icon} alt={info?.name} />
      <ToolsCardContentWrapper>
        <ToolsCardTitle>{info?.name}</ToolsCardTitle>
        <ToolsCardDescription>{info?.description}</ToolsCardDescription>
      </ToolsCardContentWrapper>
    </ToolsCardBody>
  );
};

export default ToolsCard;

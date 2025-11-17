import {
  ToolsCardBody,
  ToolsCardTitle,
  ToolsCardDescription,
  ToolsCardContentWrapper,
  ToolsCardIcon,
} from "./ToolsCardElements";
const ToolsCard = ({ info }: { info: any }) => {
  return (
    <ToolsCardBody color={info?.color}>
      <ToolsCardIcon src={info?.icon} alt={info?.name} />
      <ToolsCardContentWrapper>
        <ToolsCardTitle>{info?.name}</ToolsCardTitle>
        <ToolsCardDescription>{info?.description}</ToolsCardDescription>
      </ToolsCardContentWrapper>
    </ToolsCardBody>
  );
};

export default ToolsCard;

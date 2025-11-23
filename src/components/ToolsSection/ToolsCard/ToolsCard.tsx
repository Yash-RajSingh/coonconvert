import {
  ToolsCardBody,
  ToolsCardTitle,
  ToolsCardDescription,
  ToolsCardContentWrapper,
  ToolsCardIcon,
} from "./ToolsCardElements";
import toolActivate from "@/hooks/toolActivate.ts";
import { useNavigate } from "react-router-dom";
const ToolsCard = ({ info }: { info: any }) => {
  const navigate = useNavigate();
  return (
    <ToolsCardBody
      color={info?.color}
      onClick={() => toolActivate(info?.name, info?.id, navigate, info?.color)}
    >
      <ToolsCardIcon src={info?.icon} alt={info?.name} />
      <ToolsCardContentWrapper>
        <ToolsCardTitle>{info?.name}</ToolsCardTitle>
        <ToolsCardDescription>{info?.description}</ToolsCardDescription>
      </ToolsCardContentWrapper>
    </ToolsCardBody>
  );
};

export default ToolsCard;

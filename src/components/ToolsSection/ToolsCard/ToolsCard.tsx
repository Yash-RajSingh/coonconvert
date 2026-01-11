import {
  ToolsCardBody,
  ToolsCardTitle,
  ToolsCardDescription,
  ToolsCardContentWrapper,
  ToolsCardIcon,
} from "./ToolsCardElements";
import toolActivate from "@/hooks/toolActivate.ts";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "@/store/hooks";

const ToolsCard = ({ info }: { info: any }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return (
    <ToolsCardBody
      color={info?.color}
      onClick={() =>
        toolActivate(info?.name, info?.id, navigate, info?.color, dispatch)
      }
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

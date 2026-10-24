import type { tools } from "@/data/tools";
import {
  ToolsCardBody,
  ToolsCardTitle,
  ToolsCardDescription,
  ToolsCardContentWrapper,
  ToolsCardIconTile,
  ToolsCardIcon,
} from "./ToolsCardElements";
import toolActivate from "@/hooks/toolActivate.ts";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "@/store/hooks";

const ToolsCard = ({ info }: { info: (typeof tools)[number] }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return (
    <ToolsCardBody
      type="button"
      color={info?.color}
      onClick={() =>
        toolActivate(info?.name, info?.id, navigate, info?.color, dispatch)
      }
    >
      <ToolsCardIconTile color={info?.color}>
        <ToolsCardIcon src={info?.icon} alt="" width={28} height={28} />
      </ToolsCardIconTile>
      <ToolsCardContentWrapper>
        <ToolsCardTitle>{info?.name}</ToolsCardTitle>
        <ToolsCardDescription>{info?.description}</ToolsCardDescription>
      </ToolsCardContentWrapper>
    </ToolsCardBody>
  );
};

export default ToolsCard;

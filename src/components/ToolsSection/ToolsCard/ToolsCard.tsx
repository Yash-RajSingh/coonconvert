import {
  ToolsCardBody,
  ToolsCardTitle,
  ToolsCardDescription,
  ToolsCardContentWrapper,
  ToolsCardIconTile,
} from "./ToolsCardElements";
import toolActivate from "@/hooks/toolActivate.ts";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "@/store/hooks";
import { lazy, Suspense } from "react";
import SkeletonLoader from "@components/SkeletonLoader/SkeletonLoader";

const ToolsCardIcon = lazy(() => import("./ToolsCardIconComponent"));

const ToolsCard = ({ info }: { info: any }) => {
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
        <Suspense fallback={<SkeletonLoader width="1.75rem" height="1.75rem" />}>
          <ToolsCardIcon src={info?.icon} alt="" />
        </Suspense>
      </ToolsCardIconTile>
      <ToolsCardContentWrapper>
        <ToolsCardTitle>{info?.name}</ToolsCardTitle>
        <ToolsCardDescription>{info?.description}</ToolsCardDescription>
      </ToolsCardContentWrapper>
    </ToolsCardBody>
  );
};

export default ToolsCard;

import { ToolsCardIcon } from './ToolsCardElements';

interface ToolsCardIconProps {
  src: string;
  alt: string;
}

const ToolsCardIconComponent = ({ src, alt }: ToolsCardIconProps) => {
  return <ToolsCardIcon src={src} alt={alt} />;
};

export default ToolsCardIconComponent;

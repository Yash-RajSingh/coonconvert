import {
  FeatureItemBody,
  FeatureItemDescription,
  FeatureItemIcon,
  FeatureItemTitle,
  FeatureHeader,
} from "../FeatureElements";

interface FeatureItemProps {
  id: string;
  icon: string;
  title: string;
  description: string;
}

const FeatureItem = ({ icon, title, description }: FeatureItemProps) => {
  return (
    <FeatureItemBody>
      <FeatureHeader>
        <FeatureItemIcon src={icon} alt="" width={56} height={56} />
        <FeatureItemTitle>{title}</FeatureItemTitle>
      </FeatureHeader>
      <FeatureItemDescription>{description}</FeatureItemDescription>
    </FeatureItemBody>
  );
};

export default FeatureItem;

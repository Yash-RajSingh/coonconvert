import { ComingSoonWrapper, PlaceholderImage, Message } from "./ComingSoonElements";
import ToBeReleasedImage from "@assets/toBeReleased.png";
const ComingSoon = () => {
  return (
    <ComingSoonWrapper>
      <PlaceholderImage src={ToBeReleasedImage} alt="Coming Soon" />
      <Message>✨ Something awesome is brewing! Check back soon.</Message>
    </ComingSoonWrapper>
  );
};

export default ComingSoon;

import {
  ComingSoonWrapper,
  PlaceholderImage,
  Message,
  ComingSoonBadge,
  BackLink,
} from "./ComingSoonElements";
import ToBeReleasedImage from "@assets/toBeReleased.png";
const ComingSoon = () => {
  return (
    <ComingSoonWrapper>
      <ComingSoonBadge>Coming soon</ComingSoonBadge>
      <PlaceholderImage src={ToBeReleasedImage} alt="" />
      <Message>
        We are still building this tool. Check back soon.
      </Message>
      <BackLink href="/#tools">← Browse other tools</BackLink>
    </ComingSoonWrapper>
  );
};

export default ComingSoon;

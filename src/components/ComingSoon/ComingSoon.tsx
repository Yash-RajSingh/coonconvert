import {
  ComingSoonWrapper,
  PlaceholderImage,
  Message,
  ComingSoonBadge,
  BackLink,
} from "./ComingSoonElements";
import ToBeReleasedImage from "@assets/toBeReleased.webp";
const ComingSoon = () => {
  return (
    <ComingSoonWrapper>
      <ComingSoonBadge>Coming soon</ComingSoonBadge>
      <PlaceholderImage src={ToBeReleasedImage} alt="" width={576} height={576} />
      <Message>
        We are still building this tool. Check back soon.
      </Message>
      <BackLink href="/#tools">← Browse other tools</BackLink>
    </ComingSoonWrapper>
  );
};

export default ComingSoon;

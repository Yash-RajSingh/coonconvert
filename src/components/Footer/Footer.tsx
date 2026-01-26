import {
  FooterContainer,
  FooterWrapper,
  FooterContent,
  FooterLogo,
  FooterTrademark,
} from "./FooterElements";
import Logo from "@assets/coonconvert.svg";
const Footer = ({ alignBottom = false }: { alignBottom: boolean }) => {
  return (
    <FooterContainer alignBottom={alignBottom} >
      <FooterWrapper>
        <FooterContent direction={window.innerWidth < 450 ? "column" : "row"}>
          <FooterLogo src={Logo} alt="CoonConvert Logo" />
          <h3>CoonConvert</h3>
        </FooterContent>
        <FooterContent align="start" gap="0.5rem">
          <h4>Links</h4>
          <span>About Us</span>
          <span>Contact Us</span>
          <span>Privacy Policy</span>
        </FooterContent>
      </FooterWrapper>
      <FooterTrademark>
        © {new Date()?.getFullYear()} CoonConvert. All rights reserved.
      </FooterTrademark>
    </FooterContainer>
  );
};

export default Footer;

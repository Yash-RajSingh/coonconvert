import { FooterContainer, FooterWrapper, FooterContent, FooterLogo, FooterTrademark } from "./FooterElements";
import Logo from "@assets/coonconvert.svg";
const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterContent>
          <h3>CoonConvert</h3>
          <FooterLogo src={Logo} alt="CoonConvert Logo" />
        </FooterContent>
        <FooterContent align="start" gap="0.5rem">
          <h4>Links</h4>
          <span>About Us</span>
          <span>Contact Us</span>
          <span>Privacy Policy</span>
        </FooterContent>
        <FooterContent align="start" gap="0.5rem">
          <h4>Products</h4>
          <span>PDF to PNG</span>
          <span>PNG to PDF</span>
          <span>Compress PDF</span>
        </FooterContent>
        <FooterContent align="start" gap="0.5rem">
          <span>Merge PDF</span>
          <span>Split PDF</span>
          <span>Edit PDF</span>
        </FooterContent>
      </FooterWrapper>
      <FooterTrademark>
        © 2025 CoonConvert. All rights reserved.
      </FooterTrademark>
    </FooterContainer>
  );
};

export default Footer;

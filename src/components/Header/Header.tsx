import {
  HeaderContainer,
  HeaderLogo,
  HeaderWrapper,
  HeaderBrand,
} from "./HeaderElements";
import Logo from "@assets/coonconvert.svg";
const Header = () => {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <HeaderBrand href="/">
          <HeaderLogo src={Logo} alt="" />
          <span>CoonConvert</span>
        </HeaderBrand>
      </HeaderWrapper>
    </HeaderContainer>
  );
};

export default Header;

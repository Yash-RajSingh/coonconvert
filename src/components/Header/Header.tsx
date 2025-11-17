import { HeaderContainer, HeaderLogo, HeaderWrapper } from "./HeaderElements";
import Logo from "@assets/coonconvert.svg";
const Header = () => {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <HeaderLogo src={Logo} alt="CoonConvert Logo" />
        <h1>CoonConvert</h1>
      </HeaderWrapper>
    </HeaderContainer>
  );
};

export default Header;

import { Link, useNavigate } from "react-router-dom";
import {
  FooterContainer,
  FooterWrapper,
  FooterBrand,
  FooterLogo,
  FooterTagline,
  FooterColumn,
  FooterBottom,
} from "./FooterElements";
import Logo from "@assets/coonconvert.svg";
import { tools } from "@/data/tools";
import toolActivate from "@/hooks/toolActivate";
import { useAppDispatch } from "@/store/hooks";

const Footer = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterBrand>
          <Link to="/">
            <FooterLogo src={Logo} alt="" />
            CoonConvert
          </Link>
          <FooterTagline>
            Free PDF tools that run in your browser. Your files never leave
            your device.
          </FooterTagline>
        </FooterBrand>
        <FooterColumn aria-label="Tools">
          <h4>Tools</h4>
          <ul>
            {tools.map((tool) => (
              <li key={tool.id}>
                <a
                  href={`/tools/${tool.id}`}
                  onClick={(e) => {
                    // same path as the tool cards, so the tool color is set
                    e.preventDefault();
                    toolActivate(tool.name, tool.id, navigate, tool.color, dispatch);
                  }}
                >
                  {tool.name}
                </a>
              </li>
            ))}
          </ul>
        </FooterColumn>
      </FooterWrapper>
      <FooterBottom>
        <span>© {new Date().getFullYear()} CoonConvert</span>
        <nav aria-label="Legal">
          <Link to="/privacy">Privacy policy</Link>
          <a
            href="https://github.com/Yash-RajSingh/coonconvert"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </nav>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;

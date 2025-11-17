import { LayoutContainer } from "./LayoutElements";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <LayoutContainer>{children}</LayoutContainer>
      <Footer />
    </>
  );
};

export default Layout;

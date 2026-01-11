import { LayoutContainer } from "./LayoutElements";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";
import { Suspense, useEffect } from "react";
import { useLocation } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Suspense fallback={<Preloader />}>
        <>
          <Header />
          <LayoutContainer>{children}</LayoutContainer>
          <Footer />
        </>
      </Suspense>
    </>
  );
};
export default Layout;

import { LayoutContainer } from "./LayoutElements";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";
import { Suspense, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useAppSelector } from "@/store/hooks";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { pathname } = useLocation();
  const files = useAppSelector((state) => state?.files?.uploadedFiles);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const shouldAlignBottom = pathname !== "/" && files.length === 0;

  return (
    <>
      <Suspense fallback={<Preloader />}>
        <>
          <Header />
          <LayoutContainer>{children}</LayoutContainer>
          <Footer alignBottom={shouldAlignBottom}/>
        </>
      </Suspense>
    </>
  );
};
export default Layout;

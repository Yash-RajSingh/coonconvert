import { LayoutContainer } from "./LayoutElements";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";
import { useEffect, useState } from "react";
interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (document.readyState === "complete") {
      const timer = setTimeout(() => {  
        setIsLoading(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [document.readyState]);

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <Header />
          <LayoutContainer>{children}</LayoutContainer>
          <Footer />
        </>
      )}
    </>
  );
};

export default Layout;

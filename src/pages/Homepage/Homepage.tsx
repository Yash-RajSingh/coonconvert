import { lazy } from "react";
import Layout from "@components/Layout/Layout";
const Landing = lazy(() => import("@components/Landing/Landing"));
const ToolsSection = lazy(
  () => import("@components/ToolsSection/ToolsSection"),
);
const Features = lazy(() => import("@components/Features/Features"));

const Homepage = () => {
  return (
    <>
      <Layout>
        <Landing />
        <ToolsSection />
        <Features />
      </Layout>
    </>
  );
};

export default Homepage;

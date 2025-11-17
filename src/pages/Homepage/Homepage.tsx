import Landing from "@components/Landing/Landing";
import ToolsSection from "@components/ToolsSection/ToolsSection";
import Layout from "@components/Layout/Layout";
import Features from "@components/Features/Features";
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

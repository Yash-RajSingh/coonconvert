import Landing from "@components/Landing/Landing";
import ToolsSection from "@components/ToolsSection/ToolsSection";
import Layout from "@components/Layout/Layout";
const Homepage = () => {
  return (
    <>
      <Layout>
        <Landing />
        <ToolsSection />
      </Layout>
    </>
  );
};

export default Homepage;

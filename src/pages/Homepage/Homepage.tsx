import PageMeta from "@/components/PageMeta/PageMeta";
import Layout from "@components/Layout/Layout";
import Landing from "@components/Landing/Landing";
import ToolsSection from "@components/ToolsSection/ToolsSection";
import Features from "@components/Features/Features";

const Homepage = () => {
  return (
    <Layout>
      <PageMeta
        title="CoonConvert - Free Online PDF Tools: Merge, Split & Convert PDFs"
        description="Free online PDF tools that run in your browser. Merge, split and convert PDF and PNG files in seconds. No sign-up, no uploads, your files stay on your device."
        path="/"
      />
      <Landing />
      <ToolsSection />
      <Features />
    </Layout>
  );
};

export default Homepage;

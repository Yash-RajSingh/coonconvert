import Layout from "@/components/Layout/Layout";
import PdfToPng from "@/components/Tools/PdfToPng/PdfToPng";
import { ToolHeader } from "@/components/ToolsSection/ToolsCard/ToolsCardElements";

const PdfToPngPage = () => {
  return (
    <Layout>
      <ToolHeader>PDF to PNG</ToolHeader>
      <PdfToPng />
    </Layout>
  );
};

export default PdfToPngPage;

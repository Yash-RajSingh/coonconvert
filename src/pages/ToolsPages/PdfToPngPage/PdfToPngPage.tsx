import Layout from "@/components/Layout/Layout";
import PdfToPng from "@/components/Tools/PdfToPng/PdfToPng";
import { ToolHeader, ToolSubtitle } from "@/components/ToolsSection/ToolsCard/ToolsCardElements";

const PdfToPngPage = () => {
  return (
    <Layout>
      <ToolHeader>PDF to PNG</ToolHeader>
      <ToolSubtitle>Save every page of your PDFs as a PNG image.</ToolSubtitle>
      <PdfToPng />
    </Layout>
  );
};

export default PdfToPngPage;

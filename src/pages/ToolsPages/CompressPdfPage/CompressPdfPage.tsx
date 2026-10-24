import PageMeta from "@/components/PageMeta/PageMeta";
import Layout from "@/components/Layout/Layout";
import CompressPdf from "@/components/Tools/CompressPdf/CompressPdf";
import { ToolHeader, ToolSubtitle } from "@/components/ToolsSection/ToolsCard/ToolsCardElements";

const CompressPdfPage = () => {
  return (
    <Layout>
      <PageMeta
        title="Compress PDF - Coming Soon | CoonConvert"
        description="Reduce PDF file size in your browser. This CoonConvert tool is coming soon."
        path="/tools/compress-pdf"
        noindex
      />
      <ToolHeader>Compress PDF</ToolHeader>
      <ToolSubtitle>Make your PDF files smaller without losing quality.</ToolSubtitle>
      <CompressPdf />
    </Layout>
  );
};

export default CompressPdfPage;

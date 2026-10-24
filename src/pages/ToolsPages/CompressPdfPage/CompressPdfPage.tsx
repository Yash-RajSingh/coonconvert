import Layout from "@/components/Layout/Layout";
import CompressPdf from "@/components/Tools/CompressPdf/CompressPdf";
import { ToolHeader, ToolSubtitle } from "@/components/ToolsSection/ToolsCard/ToolsCardElements";

const CompressPdfPage = () => {
  return (
    <Layout>
      <ToolHeader>Compress PDF</ToolHeader>
      <ToolSubtitle>Make your PDF files smaller without losing quality.</ToolSubtitle>
      <CompressPdf />
    </Layout>
  );
};

export default CompressPdfPage;

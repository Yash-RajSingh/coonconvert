import Layout from "@/components/Layout/Layout";
import CompressPdf from "@/components/Tools/CompressPdf/CompressPdf";
import { ToolHeader } from "@/components/ToolsSection/ToolsCard/ToolsCardElements";

const CompressPdfPage = () => {
  return (
    <Layout>
      <ToolHeader>Compress PDF</ToolHeader>
      <CompressPdf />
    </Layout>
  );
};

export default CompressPdfPage;

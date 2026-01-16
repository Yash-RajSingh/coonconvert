import Layout from "@/components/Layout/Layout";
import ProtectPdf from "@/components/Tools/ProtectPdf/ProtectPdf";
import { ToolHeader } from "@/components/ToolsSection/ToolsCard/ToolsCardElements";

const ProtectPdfPage = () => {
  return (
    <Layout>
      <ToolHeader>Protect PDF</ToolHeader>
      <ProtectPdf />
    </Layout>
  );
};

export default ProtectPdfPage;

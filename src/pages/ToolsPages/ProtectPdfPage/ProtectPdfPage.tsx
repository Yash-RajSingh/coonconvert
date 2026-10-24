import Layout from "@/components/Layout/Layout";
import ProtectPdf from "@/components/Tools/ProtectPdf/ProtectPdf";
import { ToolHeader, ToolSubtitle } from "@/components/ToolsSection/ToolsCard/ToolsCardElements";

const ProtectPdfPage = () => {
  return (
    <Layout>
      <ToolHeader>Protect PDF</ToolHeader>
      <ToolSubtitle>Lock a PDF file with a password.</ToolSubtitle>
      <ProtectPdf />
    </Layout>
  );
};

export default ProtectPdfPage;

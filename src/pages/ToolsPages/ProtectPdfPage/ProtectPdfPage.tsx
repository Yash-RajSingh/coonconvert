import PageMeta from "@/components/PageMeta/PageMeta";
import Layout from "@/components/Layout/Layout";
import ProtectPdf from "@/components/Tools/ProtectPdf/ProtectPdf";
import { ToolHeader, ToolSubtitle } from "@/components/ToolsSection/ToolsCard/ToolsCardElements";

const ProtectPdfPage = () => {
  return (
    <Layout>
      <PageMeta
        title="Protect PDF - Coming Soon | CoonConvert"
        description="Add a password to your PDF files in your browser. This CoonConvert tool is coming soon."
        path="/tools/protect-pdf"
        noindex
      />
      <ToolHeader>Protect PDF</ToolHeader>
      <ToolSubtitle>Lock a PDF file with a password.</ToolSubtitle>
      <ProtectPdf />
    </Layout>
  );
};

export default ProtectPdfPage;

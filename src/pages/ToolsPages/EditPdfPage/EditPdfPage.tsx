import PageMeta from "@/components/PageMeta/PageMeta";
import Layout from "@/components/Layout/Layout";
import EditPdf from "@/components/Tools/EditPdf/EditPdf";
import { ToolHeader, ToolSubtitle } from "@/components/ToolsSection/ToolsCard/ToolsCardElements";

const EditPdfPage = () => {
  return (
    <Layout>
      <PageMeta
        title="Edit PDF - Coming Soon | CoonConvert"
        description="Edit and add text to PDF files in your browser. This CoonConvert tool is coming soon."
        path="/tools/edit-pdf"
        noindex
      />
      <ToolHeader>Edit PDF</ToolHeader>
      <ToolSubtitle>Edit existing text or add new text to a PDF.</ToolSubtitle>
      <EditPdf />
    </Layout>
  );
};

export default EditPdfPage;

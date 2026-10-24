import Layout from "@/components/Layout/Layout";
import EditPdf from "@/components/Tools/EditPdf/EditPdf";
import { ToolHeader, ToolSubtitle } from "@/components/ToolsSection/ToolsCard/ToolsCardElements";

const EditPdfPage = () => {
  return (
    <Layout>
      <ToolHeader>Edit PDF</ToolHeader>
      <ToolSubtitle>Edit existing text or add new text to a PDF.</ToolSubtitle>
      <EditPdf />
    </Layout>
  );
};

export default EditPdfPage;

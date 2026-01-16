import Layout from "@/components/Layout/Layout";
import EditPdf from "@/components/Tools/EditPdf/EditPdf";
import { ToolHeader } from "@/components/ToolsSection/ToolsCard/ToolsCardElements";

const EditPdfPage = () => {
  return (
    <Layout>
      <ToolHeader>Edit PDF</ToolHeader>
      <EditPdf />
    </Layout>
  );
};

export default EditPdfPage;

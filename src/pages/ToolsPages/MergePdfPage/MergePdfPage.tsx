import Layout from "@/components/Layout/Layout";
import MergePdf from "@/components/Tools/MergePdf/MergePdf";
import { ToolHeader } from "@/components/ToolsSection/ToolsCard/ToolsCardElements";

const MergePdfPage = () => {
  return (
    <Layout>
      <ToolHeader>Merge PDF</ToolHeader>
      <MergePdf />
    </Layout>
  );
};

export default MergePdfPage;

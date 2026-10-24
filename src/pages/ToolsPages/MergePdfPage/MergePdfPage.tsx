import Layout from "@/components/Layout/Layout";
import MergePdf from "@/components/Tools/MergePdf/MergePdf";
import { ToolHeader, ToolSubtitle } from "@/components/ToolsSection/ToolsCard/ToolsCardElements";

const MergePdfPage = () => {
  return (
    <Layout>
      <ToolHeader>Merge PDF</ToolHeader>
      <ToolSubtitle>Combine several PDFs into one. Drag the files to set their order.</ToolSubtitle>
      <MergePdf />
    </Layout>
  );
};

export default MergePdfPage;

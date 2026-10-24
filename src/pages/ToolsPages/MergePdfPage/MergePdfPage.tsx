import PageMeta from "@/components/PageMeta/PageMeta";
import Layout from "@/components/Layout/Layout";
import MergePdf from "@/components/Tools/MergePdf/MergePdf";
import { ToolHeader, ToolSubtitle } from "@/components/ToolsSection/ToolsCard/ToolsCardElements";

const MergePdfPage = () => {
  return (
    <Layout>
      <PageMeta
        title="Merge PDF - Combine PDF Files Online for Free | CoonConvert"
        description="Combine multiple PDF files into one PDF online for free. Drag to reorder, then merge in your browser. No uploads, no sign-up."
        path="/tools/merge-pdf"
      />
      <ToolHeader>Merge PDF</ToolHeader>
      <ToolSubtitle>Combine several PDFs into one. Drag the files to set their order.</ToolSubtitle>
      <MergePdf />
    </Layout>
  );
};

export default MergePdfPage;

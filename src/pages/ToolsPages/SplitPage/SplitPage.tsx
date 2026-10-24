import PageMeta from "@/components/PageMeta/PageMeta";
import { lazy, Suspense } from "react";
import Layout from "@/components/Layout/Layout";
import { ToolHeader, ToolSubtitle } from "@/components/ToolsSection/ToolsCard/ToolsCardElements";
import Preloader from "@/components/Preloader/Preloader";
const SplitPdf = lazy(() => import("@/components/Tools/SplitPdf/SplitPdf"));
const SplitPage = () => {
  return (
    <Layout>
      <PageMeta
        title="Split PDF - Extract Pages from a PDF Online | CoonConvert"
        description="Split a PDF by page ranges or extract single pages into separate PDF files. Free, fast and private: everything runs in your browser."
        path="/tools/split-pdf"
      />
      <ToolHeader>Split PDF</ToolHeader>
      <ToolSubtitle>Pull pages out of a PDF, by range or page by page.</ToolSubtitle>
      <Suspense fallback={<Preloader />}>
        <SplitPdf />
      </Suspense>
    </Layout>
  );
};

export default SplitPage;

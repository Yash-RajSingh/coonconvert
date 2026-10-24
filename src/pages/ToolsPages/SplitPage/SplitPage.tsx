import { lazy, Suspense } from "react";
import Layout from "@/components/Layout/Layout";
import { ToolHeader, ToolSubtitle } from "@/components/ToolsSection/ToolsCard/ToolsCardElements";
import Preloader from "@/components/Preloader/Preloader";
const SplitPdf = lazy(() => import("@/components/Tools/SplitPdf/SplitPdf"));
const SplitPage = () => {
  return (
    <Layout>
      <ToolHeader>Split PDF</ToolHeader>
      <ToolSubtitle>Pull pages out of a PDF, by range or page by page.</ToolSubtitle>
      <Suspense fallback={<Preloader />}>
        <SplitPdf />
      </Suspense>
    </Layout>
  );
};

export default SplitPage;

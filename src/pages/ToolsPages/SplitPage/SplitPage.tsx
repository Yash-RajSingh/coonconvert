import { lazy, Suspense } from "react";
import Layout from "@/components/Layout/Layout";
import { ToolHeader } from "@/components/ToolsSection/ToolsCard/ToolsCardElements";
import Preloader from "@/components/Preloader/Preloader";
const SplitPdf = lazy(() => import("@/components/Tools/SplitPdf/SplitPdf"));
const SplitPage = () => {
  return (
    <Layout>
      <ToolHeader>Split PDF</ToolHeader>
      <Suspense fallback={<Preloader />}>
        <SplitPdf />
      </Suspense>
    </Layout>
  );
};

export default SplitPage;

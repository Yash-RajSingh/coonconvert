import { lazy, Suspense } from "react";
import Layout from "@/components/Layout/Layout";
import { ToolHeader } from "@/components/ToolsSection/ToolsCard/ToolsCardElements";
import Preloader from "@/components/Preloader/Preloader";
const PngToPdf = lazy(() => import("@/components/Tools/PngToPdf/PngToPdf"));
const SplitPage = () => {
  return (
    <Layout>
      <ToolHeader>Convert PNGs to PDFs</ToolHeader>
      <Suspense fallback={<Preloader />}>
        <PngToPdf />
      </Suspense>
    </Layout>
  );
};

export default SplitPage;

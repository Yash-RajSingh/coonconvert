import PageMeta from "@/components/PageMeta/PageMeta";
import { lazy, Suspense } from "react";
import Layout from "@/components/Layout/Layout";
import { ToolHeader, ToolSubtitle } from "@/components/ToolsSection/ToolsCard/ToolsCardElements";
import Preloader from "@/components/Preloader/Preloader";
const PngToPdf = lazy(() => import("@/components/Tools/PngToPdf/PngToPdf"));
const SplitPage = () => {
  return (
    <Layout>
      <PageMeta
        title="PNG to PDF - Convert Images to PDF Online | CoonConvert"
        description="Convert PNG and JPG images to PDF for free. Choose portrait or landscape and merge images into one PDF, right in your browser."
        path="/tools/png-to-pdf"
      />
      <ToolHeader>Convert PNGs to PDFs</ToolHeader>
      <ToolSubtitle>Turn PNG and JPG images into a PDF, one file or many.</ToolSubtitle>
      <Suspense fallback={<Preloader />}>
        <PngToPdf />
      </Suspense>
    </Layout>
  );
};

export default SplitPage;

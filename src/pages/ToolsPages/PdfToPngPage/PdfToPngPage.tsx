import PageMeta from "@/components/PageMeta/PageMeta";
import Layout from "@/components/Layout/Layout";
import PdfToPng from "@/components/Tools/PdfToPng/PdfToPng";
import { ToolHeader, ToolSubtitle } from "@/components/ToolsSection/ToolsCard/ToolsCardElements";

const PdfToPngPage = () => {
  return (
    <Layout>
      <PageMeta
        title="PDF to PNG - Convert PDF Pages to Images | CoonConvert"
        description="Convert every page of a PDF into a PNG image for free. No uploads: conversion happens on your device."
        path="/tools/pdf-to-png"
      />
      <ToolHeader>PDF to PNG</ToolHeader>
      <ToolSubtitle>Save every page of your PDFs as a PNG image.</ToolSubtitle>
      <PdfToPng />
    </Layout>
  );
};

export default PdfToPngPage;

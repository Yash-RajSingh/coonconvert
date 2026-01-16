import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from "@/GlobalStyles";
import Homepage from "@pages/Homepage/Homepage";
import "notyf/notyf.min.css";
import Preloader from "@/components/Preloader/Preloader";
const MergePdfPage = lazy(
  () => import("@pages/ToolsPages/MergePdfPage/MergePdfPage"),
);
const SplitPage = lazy(() => import("./ToolsPages/SplitPage/SplitPage"));
const PngToPdfPage = lazy(() => import("./ToolsPages/PngToPdfPage/PngToPdfPage"));
const EditPdfPage = lazy(() => import("./ToolsPages/EditPdfPage/EditPdfPage"));
const CompressPdfPage = lazy(() => import("./ToolsPages/CompressPdfPage/CompressPdfPage"));
const PdfToPngPage = lazy(() => import("./ToolsPages/PdfToPngPage/PdfToPngPage"));
const ProtectPdfPage = lazy(() => import("./ToolsPages/ProtectPdfPage/ProtectPdfPage"));

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Suspense fallback={<Preloader />}>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/tools/merge-pdf" element={<MergePdfPage />} />
            <Route path="/tools/split-pdf" element={<SplitPage />} />
            <Route path="/tools/png-to-pdf" element={<PngToPdfPage />} />
            <Route path="/tools/edit-pdf" element={<EditPdfPage />} />
            <Route path="/tools/compress-pdf" element={<CompressPdfPage />} />
            <Route path="/tools/pdf-to-png" element={<PdfToPngPage />} />
            <Route path="/tools/protect-pdf" element={<ProtectPdfPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;

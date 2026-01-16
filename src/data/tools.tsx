import PdfToPng from "@components/Tools/PdfToPng/PdfToPng";
import PngToPdf from "@components/Tools/PngToPdf/PngToPdf";
import CompressPdf from "@components/Tools/CompressPdf/CompressPdf";
import MergePdf from "@components/Tools/MergePdf/MergePdf";
import SplitPdf from "@components/Tools/SplitPdf/SplitPdf";
import EditPdf from "@components/Tools/EditPdf/EditPdf";
import ProtectPdf from "@components/Tools/ProtectPdf/ProtectPdf";
import PdfToPngIcon from "@assets/tools/pdf-to-png.svg";
import CompressPdfIcon from "@assets/tools/compress-pdf.svg";
import MergePdfIcon from "@assets/tools/merge-pdf.svg";
import SplitPdfIcon from "@assets/tools/split-pdf.svg";
import EditPdfIcon from "@assets/tools/edit-pdf.svg";
import ProtectPdfIcon from "@assets/tools/protect-pdf.svg";

export const tools = [
  {
    id: "pdf-to-png",
    name: "PDF to PNG",
    description: "Convert PDF files to PNG images",
    icon: PdfToPngIcon,
    component: <PdfToPng />,
    color: "#ffb702",
  },
  {
    id: "png-to-pdf",
    name: "PNG to PDF",
    description: "Convert PNG images to a PDF file",
    icon: PdfToPngIcon,
    component: <PngToPdf />,
    color: "#ffb702",
  },
  {
    id: "compress-pdf",
    name: "Compress PDF",
    description: "Compress PDF to reduce the file size and make it smaller",
    icon: CompressPdfIcon,
    component: <CompressPdf />,
    color: "#F23030",
  },
  {
    id: "merge-pdf",
    name: "Merge PDF",
    description: "Merge multiple PDF files into one PDF file",
    icon: MergePdfIcon,
    component: <MergePdf />,
    color: "#7961f2",
  },
  {
    id: "split-pdf",
    name: "Split PDF",
    description: "Split a single PDF file into multiple PDF files",
    icon: SplitPdfIcon,
    component: <SplitPdf />,
    color: "#7961f2",
  },
  {
    id: "edit-pdf",
    name: "Edit PDF",
    description: "Edit existing text or add new text in a PDF file",
    icon: EditPdfIcon,
    component: <EditPdf />,
    color: "#11c0c5",
  },
  {
    id: "protect-pdf",
    name: "Protect PDF",
    description: "Protect a PDF file with a password",
    icon: ProtectPdfIcon,
    component: <ProtectPdf />,
    color: "#E8516A",
  },
];

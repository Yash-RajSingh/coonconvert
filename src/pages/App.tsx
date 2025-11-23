import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from "@/GlobalStyles";
import Homepage from "@pages/Homepage/Homepage";
import MergePdfPage from "@pages/ToolsPages/MergePdfPage/MergePdfPage";
import "notyf/notyf.min.css";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/tools/merge-pdf" element={<MergePdfPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

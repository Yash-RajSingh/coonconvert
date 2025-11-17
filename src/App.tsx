import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from "@/GlobalStyles";
import Homepage from "@pages/Homepage/Homepage";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

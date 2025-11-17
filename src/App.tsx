import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GlobalStyles from '@/GlobalStyles'
import Layout from '@components/Layout/Layout'
import Homepage from '@pages/Homepage/Homepage'

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Homepage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App

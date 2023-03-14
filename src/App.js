import Layout from "./components/Layout/Layout";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import GalleryPage from "./pages/GalleryPage/GalleryPage";
import CustomerSupportPage from "./pages/CustomerSupportPage/CustomerSupportPage";
import { Link, Route, Routes } from "react-router-dom";
import  "./App.css";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() {
  return (
    <div className="App">
      <Navbar>
        <Link to="/" className="navButton">Home</Link>
        <Link to="gallery" className="navButton">Gallery</Link>
        <Link to="support" className="navButton">Customer support</Link>
      </Navbar>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="support" element={<CustomerSupportPage />} />
          <Route path="*" element={<NotFoundPage />}/>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;

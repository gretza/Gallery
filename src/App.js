import { useState } from "react";
import Layout from "./components/Layout/Layout";
import Navbar from "./components/Navbar/Navbar";
import Button from "./components/Button/Button";
import HomePage from "./pages/HomePage/HomePage";
import GalleryPage from "./pages/GalleryPage/GalleryPage";
import CustomerSupportPage from "./pages/CustomerSupportPage/CustomerSupportPage";

function App() {
  const [activePage, setActivePage] = useState("Home");

  const home = () => {
    setActivePage("Home");
  };

  const gallery = () => {
    setActivePage("Gallery");
  };

  const customerSupport = () => {
    setActivePage("Customer Support");
  };

  return (
    <div className="App">
      <Navbar>
        <Button label="Home" onClick={home} />
        <Button label="Gallery" onClick={gallery} />
        <Button label="Customer Support" onClick={customerSupport} />
      </Navbar>
      <Layout>
        {activePage === "Home" && <HomePage />};
        {activePage === "Gallery" && <GalleryPage />};
        {activePage === "Customer Support" && <CustomerSupportPage />};
      </Layout>
    </div>
  );
}

export default App;

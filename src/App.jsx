import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// Import components
import NavbarComponent from "./components/NavbarComponent";
import Footer from "./components/Footer";

// Import pages
import Home from "./pages/Home";
import Aboutus from "./pages/Aboutus";
import Brochure from "./pages/Brochure";
import Certification from "./pages/Certification";
import Gallery from "./pages/Gallery";
import Products from "./pages/Products";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-white min-h-screen flex flex-col">
        <NavbarComponent />
        <main className="flex-grow pt-24">
          {/* Padding for floating navbar */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<Aboutus />} />
            <Route path="/products" element={<Products />} />
            <Route path="/brochure" element={<Brochure />} />
            <Route path="/certification" element={<Certification />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contactus" element={<ContactUs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

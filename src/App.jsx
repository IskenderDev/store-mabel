import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Catalog from "./pages/Catalog/Catalog";
import AboutUs from "./pages/AboutUs/AboutUs";
import Basket from "./pages/Basket/Basket";
import ClosetPage from "./pages/Catalog/ClosetPage/ClosetPage";
import BedPage from "./pages/Catalog/BedPage/BedPage";
import Footer from "./componets/Footer";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/bed" element={<BedPage />} />
        <Route path="/catalog/closet" element={<ClosetPage />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
      <Footer/>
    </>
  );
};

export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Catalog from "./pages/Catalog/Catalog";
import AboutUs from "./pages/AboutUs/AboutUs";
import Basket from "./pages/Basket/Basket";
import BedPage from "./pages/Catalog/BedPage/BedPage";
import Footer from "./componets/Footer";
import WardrobePage from "./pages/Catalog/WardrobePage/WardrobePage";
import TablePage from "./pages/Catalog/Table/TablePage";
import Header from "./componets/Header";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/bed" element={<BedPage />} />
        <Route path="/catalog/wardrobe" element={<WardrobePage />} />
        <Route path="/catalog/table" element={<TablePage />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;

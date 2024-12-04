import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Catalog from './pages/Catalog/Catalog';
import AboutUs from './pages/AboutUs/AboutUs';
import Basket from './pages/Basket/Basket';
import ClosetPage from './pages/Catalog/ClosetPage/ClosetPage';
import BedPage from './pages/Catalog/BedPage/BedPage';

const App = () => {
  return (
    <div className="container mx-auto p-4">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/bed" element={<BedPage />} /> 
        <Route path="/catalog/closet" element={<ClosetPage />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </div>
  );
};

export default App;

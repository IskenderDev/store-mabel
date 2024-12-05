import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Catalog from "./pages/Catalog/Catalog";
import AboutUs from "./pages/AboutUs/AboutUs";
import Basket from "./pages/Basket/Basket";
import BedPage from "./pages/Catalog/BedPage/BedPage";
import Footer from "./componets/Footer";
import { useState } from "react";
import WardrobePage from "./pages/Catalog/WardrobePage/WardrobePage";
import TablePage from "./pages/Catalog/Table/TablePage";
import Header from "./componets/Header";

const App = () => {

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existingProduct = cartItems.find((item) => item.id === product.id);
    if (existingProduct) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(quantity, 1) } : item
      )
    );
  };

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path="/catalog/bed" element={<BedPage addToCart={addToCart} />} />
        {/* <Route path="/catalog/closet" element={<ClosetPage />} /> */}
        <Route path="/basket" element={<Basket cartItems={cartItems}
          removeFromCart={removeFromCart}
          updateQuantity={updateQuantity} />} />
        <Route path="/catalog/wardrobe" element={<WardrobePage addToCart={addToCart} />} />
        <Route path="/catalog/table" element={<TablePage addToCart={addToCart} />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;

import React from "react";
import products from "../../data/products";
import Product from "../../componets/Product";
import Header from "../../componets/Header";

const Catalog = ({ cartItems, setCartItems }) => {
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

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl mt-5 text-left">Каталог</h1>
        <div className="grid gap-5 grid-cols-[repeat(auto-fill,minmax(260px,1fr))] w-[1380px]">
          {products.map((product) => (
            <Product key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Catalog;

import React from "react";
import Product from "./Product";

const PopularProducts = () => {
  return (
    <div className="py-8 bg-gray-50">
      <h2 className="text-2xl font-semibold text-center mb-8 text-gray-800">
        Популярные товары
      </h2>
      <div className="flex flex-col justify-center items-center">
        <div className="flex gap-20">
          <Product />
          <Product />
          <Product />
        </div>
        <div className="flex gap-20">
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    </div>
  );
};

export default PopularProducts;

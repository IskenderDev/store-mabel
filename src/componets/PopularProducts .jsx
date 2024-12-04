import React from "react";
import Product from "./Product";
import products from "../data/products"; // Предполагаем, что данные продуктов хранятся в этом файле.

const PopularProducts = () => {
  // Получаем первые 6 продуктов
  const popularProducts = products.slice(0, 6);

  return (
    <div className="py-8 bg-gray-50">
      <h2 className="text-2xl font-semibold text-center mb-8 text-gray-800">
        Популярные товары
      </h2>
      <div className="grid grid-cols-3 px-40 gap-10">
        {popularProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;

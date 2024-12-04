import React from "react";
import products from "../../../data/products";
import Product from "../../../componets/Product";

const WardrobePage = () => {
  const wardrobes = products.filter((product) => product.category === "Шкафы");

  return (
    <div className="py-8 bg-gray-50">
      <h1 className="text-4xl font-semibold text-center mb-8 text-gray-800">
      Шкафы
      </h1>
      <div className="grid gap-5 grid-cols-[repeat(auto-fill,minmax(260px,1fr))] w-[1380px] mx-auto px-4">
        {wardrobes.map((wardrobe) => (
          <Product
           key={wardrobe.id} product={wardrobe} />
        ))}
      </div>
    </div>
  );
};

export default WardrobePage;

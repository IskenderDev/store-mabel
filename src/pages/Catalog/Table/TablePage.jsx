import React from "react";
import products from "../../../data/products";
import Product from "../../../componets/Product";

const TablePage = () => {
  const tables = products.filter((product) => product.category === "Столы");

  return (
    <div className="py-8 bg-gray-50">
      <h1 className="text-4xl font-semibold text-center mb-8 text-gray-800">
      Столы
      </h1>
      <div className="grid gap-5 grid-cols-[repeat(auto-fill,minmax(260px,1fr))] w-[1380px] mx-auto px-4">
        {tables.map((table) => (
          <Product
           key={table.id} product={table} />
        ))}
      </div>
    </div>
  );
};

export default TablePage;

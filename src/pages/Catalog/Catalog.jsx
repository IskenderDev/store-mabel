import React from "react";
import products from "../../data/products";
import Product from "../../componets/Product";
import Header from "../../componets/Header";

const Catalog = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center">
        <div className="text-4xl mt-5 text-left">Каталог</div>
        <div className="grid gap-5 grid-cols-[repeat(auto-fill,minmax(260px,1fr))] w-[1380px]">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Catalog;

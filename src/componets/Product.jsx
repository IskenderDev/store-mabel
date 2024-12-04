import React from 'react';
import prod from '../assets/bed.png';

const Product = ({ addToCart }) => {
  const product = {
    id: 1,
    name: 'Лофт',
    price: 70000,
    description: 'Просторная кровать в стиле лофт с металлическим каркасом и деревянной основой.',
    image: prod,
  };

  return (
    <div className="flex justify-center pt-5">
      <div className="rounded-lg shadow-lg w-60 overflow-hidden relative">
        <div className="relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <div className="bg-gradient-to-t w-full">
            <p className="text-black text-lg font-semibold">{product.name}</p>
          </div>
        </div>
        <div className="p-4">
          <p className="text-gray-700 text-sm">{product.description}</p>
        </div>
        <div className="flex justify-between items-center p-4 border-t border-gray-200">
          <p className="text-lg font-semibold text-gray-800">{product.price} ₽</p>
          <button
            className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark focus:outline-none"
            onClick={() => addToCart(product)}
          >
            В корзину
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;

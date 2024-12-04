import React, { useState } from 'react';
import furnitureImage from '../assets/basket.jpg'; 

const BasketCard = ({ onDelete }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => setQuantity(quantity + 1);
  const handleDecrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleDelete = () => {
    if (onDelete) onDelete();
  };

  return (
    <div className="border rounded-lg p-4 shadow-lg bg-white flex flex-col md:flex-row gap-4 items-center relative mt-5">
      <button
        onClick={handleDelete}
        className="absolute top-2 right-2 text-gray-400 hover:text-red-500 transition duration-300"
        aria-label="Удалить"
      >
        🗑️
      </button>
      <div className="flex items-start gap-4">
        <input type="checkbox" className="w-5 h-5 mt-1" />
        <img
          src={furnitureImage}
          alt="Furniture"
          className="w-24 h-24 object-cover rounded-lg"
        />
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-800">
          Стильное кресло "Moderno"
        </h3>
        <p className="text-gray-500 text-sm mt-1">В наличии: в 161 магазине</p>
        <div className="flex items-center mt-3">
          <button
            onClick={handleDecrement}
            className="w-8 h-8 border rounded text-gray-600 hover:bg-gray-100"
          >
            -
          </button>
          <span className="px-4 text-gray-800">{quantity}</span>
          <button
            onClick={handleIncrement}
            className="w-8 h-8 border rounded text-gray-600 hover:bg-gray-100"
          >
            +
          </button>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <p className="text-lg font-bold text-gray-800">7 999 ₽</p>
      </div>
    </div>
  );
};

export default BasketCard;

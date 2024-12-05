import React from 'react';
import furnitureImage from '../assets/basket.jpg';

const BasketCard = ({ item, onDelete, onUpdateQuantity }) => {
  const handleIncrement = () => onUpdateQuantity(item.id, item.quantity + 1);
  const handleDecrement = () => onUpdateQuantity(item.id, item.quantity - 1);

  return (
    <div className="border rounded-lg p-4 shadow-lg bg-white flex flex-col md:flex-row gap-4 items-center relative mt-5">
      <button
        onClick={onDelete}
        className="absolute top-2 right-2 text-gray-400 hover:text-red-500 transition duration-300"
        aria-label="Удалить"
      >
        🗑️
      </button>
      <div className="flex items-start gap-4">
        <input type="checkbox" className="w-5 h-5 mt-1" />
        <img
          src={item.image}
          alt={item.name}
          className="w-24 h-24 object-cover rounded-lg"
        />
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
        <p className="text-gray-500 text-sm mt-1">Количество: {item.quantity}</p>
        <div className="flex items-center mt-3">
          <button
            onClick={handleDecrement}
            className="w-8 h-8 border rounded text-gray-600 hover:bg-gray-100"
          >
            -
          </button>
          <span className="px-4 text-gray-800">{item.quantity}</span>
          <button
            onClick={handleIncrement}
            className="w-8 h-8 border rounded text-gray-600 hover:bg-gray-100"
          >
            +
          </button>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <p className="text-lg font-bold text-gray-800">
          {item.price * item.quantity} ₽
        </p>
      </div>
    </div>
  );
};

export default BasketCard;

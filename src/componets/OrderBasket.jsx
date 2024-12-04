import React from 'react';

const OrderBasket = () => {
  return (
    <div className="p-4 border rounded-md shadow-md max-w-sm mx-auto">
      <div className="text-lg font-semibold mb-4">Условия заказа</div>
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm text-gray-600">Получить товары со склада</span>
        <input type="checkbox" className="toggle-input" />
      </div>
      <div className="flex justify-between items-center text-lg font-medium mb-4">
        <span>Итог:</span>
        <span className="text-orange-500 line-through">23 997₽</span>
        <span className="text-xl font-bold">21 997₽</span>
      </div>
      <button className="w-full bg-black text-white font-semibold py-2 rounded-md">
        Перейти к оформлению
      </button>
      <div className="flex justify-between text-sm text-gray-600 mt-4">
        <div>В наличии: <span className="text-black">152 магазинах</span></div>
      </div>
    </div>
  );
};

export default OrderBasket;
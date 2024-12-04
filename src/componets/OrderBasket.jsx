import React from 'react';

const OrderBasket = ({ total }) => {
  return (
    <div className="p-4 border rounded-md shadow-md max-w-sm mx-auto">
      <div className="text-lg font-semibold mb-4">Условия заказа</div>
      <div className="flex justify-between items-center text-lg font-medium mb-4">
        <span>Итог:</span>
        <span className="text-xl font-bold">{total}₽</span>
      </div>
      <button className="w-full bg-black text-white font-semibold py-2 rounded-md">
        Перейти к оформлению
      </button>
    </div>
  );
};

export default OrderBasket;

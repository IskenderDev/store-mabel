import React from 'react';
import BasketCard from '../../componets/BasketCard';
import OrderBasket from '../../componets/OrderBasket';
import Header from '../../componets/Header'

const Basket = () => {
  return (
    <>
    <Header />
    <div className="p-6">
      <div className="text-4xl font-bold mb-6">Корзина</div>
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1 space-y-4">
          <BasketCard />
          <BasketCard />
          <BasketCard />
          <BasketCard />
        </div>
        <div className="w-full lg:w-1/3">
          <OrderBasket />
        </div>
      </div>
    </div>
    </>
  );
};

export default Basket;

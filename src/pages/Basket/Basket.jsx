import React, { useState } from 'react';
import BasketCard from '../../componets/BasketCard';
import OrderBasket from '../../componets/OrderBasket';
import Header from '../../componets/Header';

const Basket = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Стильное кресло "Moderno"', price: 79999, quantity: 1 },
    { id: 2, name: 'Элегантный стол', price: 2999, quantity: 1 },
  ]);

  const handleDelete = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleAddItem = () => {
    const newItem = {
      id: Date.now(),
      name: 'Новый товар',
      price: 2999,
      quantity: 1,
    };
    setCartItems([...cartItems, newItem]);
  };

  const handleUpdateQuantity = (id, quantity) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(quantity, 1) } : item
      )
    );
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      <div className="p-6">
        <div className="text-4xl font-bold mb-6">Корзина</div>
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1 space-y-4">
            {cartItems.map((item) => (
              <BasketCard
                key={item.id}
                item={item}
                onDelete={() => handleDelete(item.id)}
                onUpdateQuantity={handleUpdateQuantity}
              />
            ))}
          </div>
          <div className="w-full lg:w-1/3">
            <OrderBasket total={total} />
          </div>
        </div>
        <div className="mt-6">
          <button
            onClick={handleAddItem}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Добавить товар
          </button>
        </div>
      </div>
    </>
  );
};

export default Basket;

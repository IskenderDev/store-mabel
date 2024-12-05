import BasketCard from '../../componets/BasketCard';
import OrderBasket from '../../componets/OrderBasket';
import Header from '../../componets/Header';

const Basket = ({ cartItems, setCartItems }) => {
  const handleDelete = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
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
      <Header />
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
      </div>
    </>
  );
};

export default Basket;

const Product = ({ product, addToCart }) => {
  const { name, description, price, image } = product;

  return (
    <div className="flex justify-center pt-5">
      <div className="rounded-lg shadow-lg w-60 overflow-hidden relative">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover rounded-t-lg"
          onClick={() => addToCart(product)} // Добавляем возможность добавить в корзину кликом по изображению
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-gray-700 text-sm">{description}</p>
        </div>
        <div className="flex justify-between items-center p-4 border-t border-gray-200">
          <p className="text-lg font-semibold">{price.toLocaleString()} ₽</p>
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

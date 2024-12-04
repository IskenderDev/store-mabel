import React, { useState } from 'react'
import Product from '../../componets/Product'
import Header from '../../componets/Header'

const Catalog = () => {

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existingProduct = cartItems.find((item) => item.id === product.id);
    if (existingProduct) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  return (
    <>
    <Header />
    <div className='flex flex-col justify-center items-center'>
      <div className='text-4xl mt-5 text-left'>
        Каталог
      </div>
      <div className='grid gap-5 grid-cols-[repeat(auto-fill,minmax(260px,1fr))] w-[1380px]'>
      <Product addToCart={addToCart} />
      <Product addToCart={addToCart} />
      <Product addToCart={addToCart} />
      <Product addToCart={addToCart} />
      <Product addToCart={addToCart} />
      <Product addToCart={addToCart} />
      <Product addToCart={addToCart} />
      <Product addToCart={addToCart} />

      </div>
    </div>
    </>
  )
}

export default Catalog
import React from 'react'
import prod from '../assets/bed.png'

const Product = () => {
  return (
    <div className="flex pt-5">
      <div className="bg-white rounded-lg shadow-lg w-60 overflow-hidden relative">
        <div className="relative">
          <img src={prod} alt="Лофт" className="w-full h-48 object-cover rounded-t-lg" />
          <div className="absolute bottom-0 left-0 bg-gradient-to-t w-full p-4">
            <p className="text-black text-lg font-semibold">Лофт</p>
          </div>
        </div>
        <div className="p-4">
          <p className="text-gray-700 text-sm">Просторная кровать в стиле лофт с металлическим каркасом и деревянной основой.</p>
        </div>
        <div className="flex justify-between items-center p-4">
          <p className="text-lg font-semibold text-gray-800">70 000 ₽</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">В корзину</button>
        </div>
      </div>
    </div>
  )
}

export default Product

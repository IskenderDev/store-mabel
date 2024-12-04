import React from 'react';
import mebel from '../../assets/Mebel.jpg';

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="text-4xl font-semibold text-center text-gray-800 mb-8">
        О нас
      </div>
      
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Текст сверху */}
        <div className="text-lg font-medium text-gray-700 mb-5 md:mb-0">
          Мы — команда профессионалов, стремящихся предоставить нашим клиентам мебель, которая сочетает в себе элегантность, функциональность и долговечность. Каждый предмет мебели — это не просто вещь, а важная часть интерьера, способная преобразить ваше пространство.
        </div>

        {/* Фото */}
        <div className="relative w-full max-w-md">
          <img
            src={mebel}
            alt="Мебель"
            className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Ценности */}
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-semibold text-gray-800 mb-4">Наши ценности:</h1>
          <div className="text-base text-gray-600 space-y-3">
            <p>🔹 <span className="font-bold">Качество:</span> Мы тщательно отбираем материалы и следим за каждым этапом производства.</p>
            <p>🔹 <span className="font-bold">Доступность:</span> Наша мебель подходит для любого бюджета, при этом не теряя в качестве и дизайне.</p>
            <p>🔹 <span className="font-bold">Стиль:</span> Мы следим за последними мировыми тенденциями в дизайне и предлагаем мебель, которая гармонично впишется в любой интерьер.</p>
          </div>
          <button className="mt-6 bg-blue-600 text-white font-medium rounded-lg px-6 py-3 transition-colors duration-300 hover:bg-blue-500">
            Подробнее
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

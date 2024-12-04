import React from "react";
import { FaStar, FaTruck, FaHandsHelping } from "react-icons/fa";

const AboutCompany = () => {
  return (
    <section id="company" className="py-16 px-8 bg-secondary-light">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-primary-dark mb-4">О компании</h2>
        <p className="text-lg text-gray-700 mb-12">
          Мы создаём мебель, которая сочетает в себе стильный дизайн и экологичность. 
          Наша продукция подойдёт для вашего дома, офиса и любого интерьера.
        </p>
        <div className="relative mb-8">
          <img
            src="src/assets/main.jpg" // Замените на путь к вашему изображению
            alt="Furniture"
            className="rounded-lg shadow-lg w-full object-cover h-96"
          />
          <div className="absolute inset-0 bg-primary-dark bg-opacity-70 flex items-center justify-center">
            <p className="text-white text-2xl font-semibold">
              Создаём мебель, которая делает вашу жизнь уютнее и комфортнее.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
            <FaStar className="text-accent text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-primary-dark">Высокое качество</h3>
            <p className="text-center text-gray-600">
              Мы используем только экологически чистые материалы, чтобы наша мебель служила вам долгие годы.
            </p>
          </div>
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
            <FaTruck className="text-accent text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-primary-dark">Быстрая доставка</h3>
            <p className="text-center text-gray-600">
              Организуем доставку мебели в кратчайшие сроки, чтобы вы могли быстрее насладиться комфортом.
            </p>
          </div>
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
            <FaHandsHelping className="text-accent text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-primary-dark">Поддержка клиентов</h3>
            <p className="text-center text-gray-600">
              Наша команда готова помочь вам с выбором мебели и ответить на все вопросы.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;

import React from 'react';
import mebel from '../../assets/Mebel.jpg';
import Header from '../../componets/Header';

const AboutUs = () => {
  return (
    <>
    <div className="container mx-auto px-6 py-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full -z-10"></div>
      <div className="text-5xl font-bold text-center text-gray-900 mb-12">
        Добро пожаловать в <span className="text-blue-600">мир мебели</span>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div
          className="text-lg font-medium text-gray-700 mb-6 md:mb-0 max-w-xl mx-auto md:mx-0"
          data-aos="fade-right"
        >
          <p className="leading-relaxed">
            Мы — не просто компания, мы — команда творцов, которая искренне
            верит, что качественная мебель может делать ваш дом уютным, а жизнь
            — яркой! Мы тщательно отбираем каждую деталь, каждый элемент,
            чтобы наша мебель была не только красивой, но и удобной в
            использовании.
          </p>
          <p className="mt-6">
            Мы гордимся тем, что можем предложить вам стиль, который вам по
            душе, и качество, которое прослужит долгие годы.
          </p>
        </div>

        <div
          className="relative w-full max-w-lg transform transition-transform duration-700 hover:scale-105 hover:rotate-2 shadow-xl rounded-lg overflow-hidden"
          data-aos="zoom-in"
        >
          <img
            src={mebel}
            alt="Мебель"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-800 opacity-30"></div>
        </div>
        <div className="text-center md:text-left mt-8 md:mt-0">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Почему выбирают нас?
          </h2>
          <div className="text-lg text-gray-600 space-y-4">
            <p>
              ✨ <span className="font-semibold text-blue-600">Качество:</span>{' '}
              Только лучшие материалы и внимание к каждому этапу производства.
            </p>
            <p>
              ✨ <span className="font-semibold text-blue-600">Доступность:</span>{' '}
              Стильная мебель по разумным ценам.
            </p>
            <p>
              ✨ <span className="font-semibold text-blue-600">Стиль:</span> Мы
              создаем мебель, которая всегда в моде.
            </p>
          </div>
          <button className="mt-8 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold rounded-lg hover:from-blue-500 hover:to-purple-500 transition-colors duration-300 shadow-md hover:shadow-xl">
            Узнать больше
          </button>
        </div>
      </div>
      <div
        className="mt-12 text-center"
        data-aos="fade-up"
      >
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Присоединяйтесь к нам!
        </h3>
        <p className="text-lg text-gray-600 mb-6">
          Правильная мебель — это не просто удобство, а эмоции, которые она
          приносит.
        </p>
        <button className="bg-gradient-to-r from-green-500 to-teal-500 text-white text-lg font-semibold rounded-lg px-8 py-3 transition-colors duration-300 hover:from-green-400 hover:to-teal-400 shadow-md hover:shadow-xl">
          Начать путешествие
        </button>
      </div>
    </div>
    </>
  );
};

export default AboutUs;

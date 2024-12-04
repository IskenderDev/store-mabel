import React from "react";
import { FaPhoneAlt, FaMapMarkerAlt, FaClock, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-white py-8 mt-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* О компании */}
          <div>
            <h3 className="text-xl font-bold mb-4">О компании</h3>
            <p className="text-gray-300 text-sm">
              Мы создаём мебель, которая сочетает стиль, комфорт и экологичность. 
              Доверяйте нам — мы знаем, как сделать ваш дом уютным.
            </p>
          </div>
          {/* Контакты */}
          <div>
            <h3 className="text-xl font-bold mb-4">Контакты</h3>
            <ul className="text-gray-300 text-sm space-y-2">
              <li className="flex items-center gap-2">
                <FaPhoneAlt /> <span>+7 (123) 456-78-90</span>
              </li>
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt /> <span>ул. Примерная, 1, Москва</span>
              </li>
              <li className="flex items-center gap-2">
                <FaClock /> <span>Пн-Пт: 9:00 - 18:00</span>
              </li>
            </ul>
          </div>
          {/* Соцсети */}
          <div>
            <h3 className="text-xl font-bold mb-4">Мы в соцсетях</h3>
            <p className="text-gray-300 text-sm mb-4">
              Подписывайтесь на нас в соцсетях, чтобы быть в курсе новинок и акций!
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-secondary-light text-primary-dark rounded-full shadow-lg hover:bg-accent hover:text-white transition duration-300"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-secondary-light text-primary-dark rounded-full shadow-lg hover:bg-accent hover:text-white transition duration-300"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-secondary-light text-primary-dark rounded-full shadow-lg hover:bg-accent hover:text-white transition duration-300"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-400 text-sm">
          &copy; 2024 Мебельный Магазин. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

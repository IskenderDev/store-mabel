// src/components/Banner.jsx
import { Button, Carousel } from "antd";
import { NavLink } from "react-router-dom";

export default function Banner() {
  const slides = [
    {
      title: "Новая коллекция столов",
      description: "Элегантность и практичность для вашего дома.",
      image: "src/assets/Table.jpg",
    },
    {
      title: "Комфортные кровати",
      description: "Гарантия качественного сна.",
      image: "src/assets/Bad.jpg",
    },
    {
      title: "Шкафы любой конфигурации",
      description: "Организация пространства на высшем уровне.",
      image: "src/assets/Shelf.jpg",
    },
  ];

  return (
    <Carousel autoplay>
      {slides.map((slide, index) => (
        <div key={index} className="relative h-[500px]">
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-white">
            <h2 className="text-4xl font-bold">{slide.title}</h2>
            <p className="text-xl my-10">{slide.description}</p>
            <NavLink to="/catalog">
              <Button> Подробнее </Button>
            </NavLink>
          </div>
        </div>
      ))}
    </Carousel>
  );
}

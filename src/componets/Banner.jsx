// src/components/Banner.jsx
import { Button, Carousel } from 'antd';
import ButtonGroup from 'antd/es/button/button-group';

export default function Banner() {
  const slides = [
    {
      title: 'Новая коллекция столов',
      description: 'Элегантность и практичность для вашего дома.',
      image: 'src/assets/Table.jpg',
    },
    {
      title: 'Комфортные кровати',
      description: 'Гарантия качественного сна.',
      image: 'src/assets/Bad.jpg',
    },
    {
      title: 'Шкафы любой конфигурации',
      description: 'Организация пространства на высшем уровне.',
      image: 'src/assets/Shelf.jpg',
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
            <h2 className="text-2xl font-bold">{slide.title}</h2>
            <p className='mb-10'>{slide.description}</p>
            <Button> Подробнее </Button>
          </div>
          
        </div>
      ))}
    </Carousel>
  );
}

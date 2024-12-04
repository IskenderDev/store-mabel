import React from 'react';
import Card from '../../../componets/Card';
import Bed1 from '../../../assets/Beds/bed1.png'
import Bed2 from '../../../assets/Beds/bed2.png'
import Bed3 from '../../../assets/Beds/bed3.png'

const BedPage = () => {

  const products = [
    { image: Bed1, title: 'Лофт' },
    { image: Bed2, title: 'Скандинавская' },
    { image: Bed3, title: 'Ретро' },
  ];

  return (
    <div>
      <div className='text-4xl'>
        <h1>Кровати</h1>
      </div>
      <div>
      {products.map((product) => (
            <Card image={product.image} title={product.title} />
        ))}
      </div>
    </div>
  );
};

export default BedPage;

import React from 'react'
import Card from '../../componets/Card'
import { Link } from 'react-router-dom'
import bed from '../../assets/bed.png'
import Closet from '../../assets/Closet.png'

const Catalog = () => {

  const products = [
    { id: 'bed', image: bed, title: 'Кровать' },
    { id: 'closet', image: Closet, title: 'Шкаф' },
  ];

  return (
    <div className=''>
      <div className='text-4xl'>
        Каталог
      </div>
      <div className='grid gap-5 grid-cols-[repeat(auto-fill,minmax(260px,1fr))] w-[1380px]'>
      {products.map((product) => (
          <Link to={`/catalog/${product.id}`} key={product.id}>
            <Card image={product.image} title={product.title} />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Catalog
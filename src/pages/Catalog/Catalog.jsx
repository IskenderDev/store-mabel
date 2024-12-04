import React from 'react'
import Card from '../../componets/Card'
import { Link } from 'react-router-dom'
import bed from '../../assets/bed.png'
import Closet from '../../assets/Closet.png'
import table from '../../assets/table.png'
import Product from '../../componets/Product'

const Catalog = () => {

  // const products = [
  //   { image: bed, title: 'Кровать'},
  //   { image: Closet, title: 'Шкаф'},
  //   {image: table, title: "Стол"}
  // ];

  return (
    <div className=''>
      <div className='text-4xl'>
        Каталог
      </div>
      <div className='grid gap-5 grid-cols-[repeat(auto-fill,minmax(260px,1fr))] w-[1380px]'>
        {/* {products.map((product) => (
          <Card image={product.image} title={product.title} price={product.price}/>
        ))} */}
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  )
}

export default Catalog
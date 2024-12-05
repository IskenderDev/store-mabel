import React from 'react'
import Header from '../../componets/Header'
import Banner from '../../componets/Banner'
import CategoryList from '../../componets/CategoryList'
import PopularProducts from '../../componets/PopularProducts '
import AboutCompany from '../../componets/AboutCompany'

const Home = () => {
  return (
    <div>
      <Banner/>
      <CategoryList/>
      <PopularProducts />
      <AboutCompany/>
    </div>
  )
}

export default Home
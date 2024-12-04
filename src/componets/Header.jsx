import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="bg-primary text-white p-4">
      <nav className="flex justify-between items-center">
        <div className="text-xl font-bold">Furniture Store</div>
        <ul className="flex space-x-4">
          <li><Link to="/">Домой</Link></li>
          <li><Link to="/catalog">Каталог</Link></li>
          <li><Link to="/about-us">О нас</Link></li>
          <li><Link to="/basket">Корзина</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
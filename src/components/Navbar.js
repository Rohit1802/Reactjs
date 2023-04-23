import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="Navbar">
      <div className='container'>
        <div className="Navbar__menu">
          <select className='select--menu'>
            <option>Browse all category</option>
            <option>Juices</option>
            <option>Beverages</option>
            <option>Dairy Products</option>
            <option>Chocolates</option>
          </select>
          <div className='menu__links'>
            <Link className="link" to='/'>Home</Link>
            <Link className="link" to="/about">About</Link>
            <Link className="link" to="/gallery">Gallery</Link>
            <Link className="link" to="/product">Product</Link>
            <Link className="link" to="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
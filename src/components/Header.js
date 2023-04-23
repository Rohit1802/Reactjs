import React, { useState } from 'react'
import './Header.css'
import { FiPhoneCall } from 'react-icons/fi'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'
import SanveeLogo from '../img/SanveeLogo.svg'
import { Link } from 'react-router-dom'

function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  }

  return (
    <div className="Header">
      <div className='container'>
        <div className="header__contact">
          <div className='call'>
            <FiPhoneCall className='icon' />
          </div>
          <div className='call__info'>
            <p className="order">call for order</p>
            <p className="number">+91 9892220253</p>
          </div>
        </div>
        <div className='header__logo'>
          <img src={SanveeLogo} alt="Sanvee Logo" />
        </div>
        <div className='ToggleIcon'>
          <div className='nav__toggle' onClick={toggleSidebar}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              className="feather feather-bar-chart">
              <line x1="12" y1="20" x2="12" y2="10" />
              <line x1="18" y1="20" x2="18" y2="4" />
              <line x1="6" y1="20" x2="6" y2="16" /></svg>
          </div>
        </div>

        <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
          <nav>
            <div className='header__logo--sidebar'>
              <img src={SanveeLogo} alt="Sanvee Logo" />
            </div>
            <ul>
              <Link className="link" to="/">Home</Link>
              <Link className="link" to='/about'>About Us</Link>
              <Link className="link" to="/gallery">Gallery</Link>
              <Link className="link" to="/product">Products</Link>
              <Link className="link" to="/contact">Contact</Link>
            </ul>
            <div className="menu--header__contact">
              <div className='call'>
                <FiPhoneCall className='icon' />
              </div>
              <div className='call__info'>
                <p className="order">call for order</p>
                <p className="number">+91 9892220253</p>
              </div>
            </div>
          </nav>
        </div>

        <div className='header__social--links'>
          <div className='social'>
            <div className='box'>
              <FaFacebook className='icon' />
            </div>
            <div className='box'>
              <FaInstagram className='icon' />
            </div>
            <div className='box'>
              <FaTwitter className='icon' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header

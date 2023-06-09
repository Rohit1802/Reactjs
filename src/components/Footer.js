import React from 'react'
import Logo from '../img/Logo.svg'
import { FiPhoneCall } from "react-icons/fi";
import { IoLocationSharp } from 'react-icons/io5'
import { FaFacebook, FaIndustry, FaInstagram, FaTwitter } from 'react-icons/fa'
import './Footer.css'
import {Link} from 'react-router-dom'

function Footer() {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='footer-main'>
                    <div className='info'>
                        <img src={Logo} />
                        <div className='info-para'>
                            <p>Where every flower tells a story</p>
                            <p>For the love of delicious Test</p>
                        </div>
                        <div className='info-box'>
                            <FiPhoneCall className='icon' />
                            <div className='call'>
                                <p>+91 9892220253</p>
                                <p>91 9892721509</p>
                            </div>
                        </div>
                    </div>

                    <div className='Links'>
                        <h3>Links</h3>
                        <ul>
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='/about'>About</Link>
                            </li>
                            <li>
                                <Link to='/product'>Products</Link>
                            </li>
                            <li>
                                <Link to='/gallery'>Gallery</Link>
                            </li>
                            <li>
                                <Link to='/contact'>Contact Us</Link>
                            </li>
                        </ul>
                    </div>

                    <div className='social-info'>
                        <h3>Official info</h3>
                        <div className='social-info__main'>
                            <div className='location'>
                                <IoLocationSharp />
                            </div>
                            <div className='address'>
                                <h4>SANVEE FLAVOURS PRIVATE LIMITED</h4>
                                <p>Unit 90, Mahalaxmi mall
                                    Plot No. 8 & 8B , Sector 35, Kamothe,
                                    Navi Mumbai 410209</p>
                            </div>
                        </div>

                        <div className='social-info__secondary'>
                            <div className='location'>
                                <FaIndustry />
                            </div>
                            <div className='address'>
                                <h4>Factory</h4>
                                <p>Unit 90, Mahalaxmi mall
                                    Plot No. 8 & 8B , Sector 35, Kamothe,
                                    Navi Mumbai 410209</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer--bottomline">
                <div className='bottomlinks'>
                    <div className='box1'>
                        <FaFacebook className='icon' />
                    </div>
                    <div className='box2'>
                        <FaInstagram className='icon' />
                    </div>
                    <div className='box3'>
                        <FaTwitter className='icon' />
                    </div>
                </div>
                <div className='bottom--text'>
                    © 2023 Sanvee Flavours | Designed & developed by 5TechG Lab
                </div>
            </div>
        </div>
    )
}

export default Footer
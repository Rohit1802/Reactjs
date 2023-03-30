import React from 'react'
import Logo from '../img/Logo.svg'
import { FiPhoneCall } from "react-icons/fi";
import { IoLocationSharp } from 'react-icons/io5'
import { FaIndustry } from 'react-icons/fa'
import './Footer.css'

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
                                <a href='/'>Home</a>
                            </li>
                            <li>
                                <a href='/'>About</a>
                            </li>
                            <li>
                                <a href='/'>Products</a>
                            </li>
                            <li>
                                <a href='/'>Gallery</a>
                            </li>
                            <li>
                                <a href='/'>Contact Us</a>
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
        </div>
    )
}

export default Footer
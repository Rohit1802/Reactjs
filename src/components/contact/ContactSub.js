import React from 'react'
import { IoCall, IoLocateSharp, IoLocation, IoMail } from 'react-icons/io5'
import { FaFacebook, FaIndustry, FaInstagram, FaTwitter } from 'react-icons/fa'

const ContactSub = () => {
    return (
        <div className='ContactSub'>
            <div className='container'>
                <div className="ContactInfo">
                    <div className='callus'>
                        <div className='callus-wrapper'>
                            <span className='iconbox'>
                                <IoCall className='icon' />
                            </span>
                            <h4>Call us</h4>
                        </div>
                        <p>+91 9892220253 </p>
                        <p>+91 9892721509 </p>
                    </div>
                    <div className='mail-us'>
                        <div className='mailus-wrapper'>
                            <span className='iconbox'>
                                <IoMail className='icon' />
                            </span>
                            <h4>Mail us</h4>
                        </div>
                        <p> yogesh@sanveeflavours.com</p>
                    </div>

                    <div className='location'>
                        <div className='location-wrapper'>
                            <span className='iconbox'>
                                <IoLocation className='icon' />
                            </span>
                            <h4>Location</h4>
                        </div>
                        <p> Unit 90, Mahalaxmi mall, Plot No. 8 & 8B, Sector 35
                            Kamothe, Navi Mumbai 410209</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactSub
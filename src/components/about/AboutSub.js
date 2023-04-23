import './about.css'
import Image from '../../img/imgAbout/abt2.svg'
import Image1 from '../../img/imgAbout/Rectangle120.svg'

import React from 'react'

const AboutSub = () => {
  return (
    <div className='AboutSub'>
      <div className='container'>
        <div className='header__box'>
          <h3 className='header__name'>Sanvee</h3>
          <p className='header__subname'>THE FLAVOURS</p>
        </div>
        <div className='AboutSub__info'>
          <div className='wrapper__img'>
            <img src={Image} />
          </div>
          <div className='wrapper__text'>
            <h3><span className='bar'></span>We have 20 years working 
              experience.</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna 
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
               ullamco laboris nisi ut aliquip ex ea commodo.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna 
               aliqua. Ut enim ad minim veniam.</p>
          </div>
        </div>

        <div className='AboutSub__info info-1'>
          <div className='wrapper__text text-1'>
            <h3><span className='bar'></span>Who We are.</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna 
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
               ullamco laboris nisi ut aliquip ex ea commodo.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna 
               aliqua. Ut enim ad minim veniam.</p>
          </div>
          <div className='wrapper__img'>
            <img src={Image1} className='img1'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSub
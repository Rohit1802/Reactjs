import React from 'react'
import './product.css'
import JuicyImg from '../../img/imgProduct/JuicyText.svg'
import Cart from '../../img/imgProduct/Cart.svg'

const ProductMain = () => {
  return (
    <div className='ProductMain'>
        <div className='ProductMain__container'>
            <div className='Image__juicy'>
                <img src={JuicyImg}/>
            </div>
            <div className='Image__cart'>
                <img src={Cart}/>
            </div>
        </div>
        <div className='Product__menu'>
            <h1><span></span>Flavours Menu</h1>
        </div>
    </div>
  )
}

export default ProductMain
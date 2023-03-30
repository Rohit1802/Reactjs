import React from 'react'
import './home.css'
import Image from '../../img/Rectangle 6.svg'
import Image2 from '../../img/Rectangle 12.svg'
import Image3 from '../../img/Rectangle 14.svg'
import Coffee from '../../img/Coffee.svg'

function Products() {
    return (
        <div className='product'>
            <div className='container'>
                <div className='products-info'>
                    <img src={Coffee} className="logo"/>
                    <h2 className='special-product'>Special Product</h2>
                </div>
                <div className='product-container'>
                    <img src={Image} className="img"/>
                    <img src={Image2} className="img"/>
                    <img src={Image3} className="img"/>
                </div>
            </div>
        </div>
    )
}

export default Products
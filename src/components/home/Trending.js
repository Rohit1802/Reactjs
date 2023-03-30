import React from 'react'
import Image1 from '../../img/Confectionery.svg'
import Image2 from '../../img/Beverages.svg'
import Image3 from '../../img/Fruit juices.svg'
import Image4 from '../../img/Pharmaceutical.svg'
import Image5 from '../../img/Biscuits & Bakery.svg'
import Image6 from '../../img/Savouries & Snacks.svg'
import Image7 from '../../img/Dairy Product.svg'
import Image8 from '../../img/Powder Flavours.svg'
import AiOutlineDoubleRight from 'react-icons/ai'

function Trending() {
    return (
        <div className='Trending'>
            <div className='container'>
                <h3 className='trending--header'>Trending Products</h3>
                <div className='trending--list'>
                    <div className='product-data'>
                        <img src={Image1} />
                        <div className='data'>
                            Confectionery
                        </div>
                    </div>
                    <div className='product-data'>
                        <img src={Image2} />
                        <div className='data'>
                            beverages
                        </div>
                    </div>
                    <div className='product-data'>
                        <img src={Image3} />
                        <div className='data'>
                            fruit juices
                        </div>
                    </div>
                    <div className='product-data'>
                        <img src={Image4} />
                        <div className='data'>
                            Pharmaceutical
                        </div>
                    </div>
                    <div className='product-data'>
                        <img src={Image5} />
                        <div className='data'>
                            Biscuit and Bakery
                        </div>
                    </div>
                    <div className='product-data'>
                        <img src={Image6} />
                        <div className='data'>
                            Savouries & Snacks
                        </div>
                    </div>
                    <div className='product-data'>
                        <img src={Image7} />
                        <div className='data'>
                            Dairy Product
                        </div>
                    </div>
                    <div className='product-data'>
                        <img src={Image8} />
                        <div className='data'>
                            Powder Flavours
                        </div>
                    </div>
                </div>
                <div className="trending--link">
                    <h4>View More</h4>
                    <span className='arrow'></span>
                </div>
            </div>
        </div>
    )
}

export default Trending
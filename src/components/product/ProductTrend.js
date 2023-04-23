import React from 'react'
import './product.css'

import Drink from '../../img/imgProduct/Drink.svg'

//icons images
import icon1 from '../../img/imgProduct/ic1.svg'
import icon2 from '../../img/imgProduct/ic2.svg'
import icon3 from '../../img/imgProduct/ic3.svg'
import icon4 from '../../img/imgProduct/ic4.svg'
import icon5 from '../../img/imgProduct/ic5.svg'
import icon6 from '../../img/imgProduct/ic6.svg'
import icon7 from '../../img/imgProduct/ic7.svg'
import icon8 from '../../img/imgProduct/ic8.svg'
import icon9 from '../../img/imgProduct/ic9.svg'


//images for best of us section
import Trend1 from '../../img/imgProduct/Trend1.svg'
import Trend2 from '../../img/imgProduct/Trend2.svg'
import Trend3 from '../../img/imgProduct/Trend3.svg'
import Trend4 from '../../img/imgProduct/Trend4.svg'
import Trend5 from '../../img/imgProduct/Trend5.svg'
import Trend6 from '../../img/imgProduct/Trend6.svg'
import Trend7 from '../../img/imgProduct/Trend7.svg'
import Trend8 from '../../img/imgProduct/Trend8.svg'

function ProductTrend() {
  return (
    <div className='ProductTrend'>
      <div className='ProductBest'>
            <div className='container'>
                <div className='header'>
                    <img src={Drink} />
                    <h2>Trending</h2>
                </div>
                <div className='ProductBox'>
                    <div className='Category'>
                        <h3>Category</h3>
                        <div className='category__box'>
                            <img src={icon1} />
                            <p>Confectionery & Gum based product</p>
                        </div>
                        <div className='category__box'>
                            <img src={icon2} />
                            <p>Beverages</p>
                        </div>
                        <div className='category__box'>
                            <img src={icon3} />
                            <p>Fruit juices other Fruit based Beverages</p>
                        </div>
                        <div className='category__box'>
                            <img src={icon4} />
                            <p>Biscuits & Bakery</p>
                        </div>
                        <div className='category__box'>
                            <img src={icon5} />
                            <p>Savouries & Snacks, Soups, Meat products </p>
                        </div>
                        <div className='category__box'>
                            <img src={icon6} />
                            <p>Dairy Product Frozen dessertd</p>
                        </div>
                        <div className='category__box'>
                            <img src={icon7} />
                            <p>Pharmaceutical</p>
                        </div>
                        <div className='category__box'>
                            <img src={icon8} />
                            <p>Dust-on & Powder Flavours</p>
                        </div>
                        <div className='category__box'>
                            <img src={icon9} />
                            <p>Distilled Alcoholic Beverages</p>
                        </div>
                    </div>
                    <div className='grid__container'>
                        <div className='grid__item'>
                            <img src={Trend1}/>
                            <p>Apple Juice</p>
                        </div>
                        <div className='grid__item'>
                            <img src={Trend2}/>
                            <p>Lemon Juice</p>
                        </div>
                        <div className='grid__item'>
                            <img src={Trend3}/>
                            <p>Mango Juice</p>
                        </div>
                        <div className='grid__item'>
                            <img src={Trend4}/>
                            <p>Orange Juice</p>
                        </div>
                        <div className='grid__item'>
                            <img src={Trend5}/>
                            <p>Cherry Cream</p>
                        </div>
                        <div className='grid__item'>
                            <img src={Trend6}/>
                            <p>Grapes Juice</p>
                        </div>
                        <div className='grid__item'>
                            <img src={Trend7}/>
                            <p>Pineapple Juice</p>
                        </div>
                        <div className='grid__item'>
                            <img src={Trend8}/>
                            <p>Pomogranate Juice</p>
                        </div>
                    </div>
                </div>
                <button className='btn__primary'>View All</button>
            </div>
        </div>
    </div>
  )
}

export default ProductTrend
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
import Best1 from '../../img/imgProduct/Best1.svg'
import Best2 from '../../img/imgProduct/Best2.svg'
import Best3 from '../../img/imgProduct/Best3.svg'
import Best4 from '../../img/imgProduct/Best4.svg'
import Best5 from '../../img/imgProduct/Best5.svg'
import Best6 from '../../img/imgProduct/Best6.svg'
import Best7 from '../../img/imgProduct/Best7.svg'
import Best8 from '../../img/imgProduct/Best8.svg'


function ProductBest() {
    return (
        <div className='ProductBest'>
            <div className='container'>
                <div className='header'>
                    <img src={Drink} />
                    <h2>Best Of Us</h2>
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
                            <img src={Best1}/>
                            <p>Apple Juice</p>
                        </div>
                        <div className='grid__item'>
                            <img src={Best2}/>
                            <p>Lemon Juice</p>
                        </div>
                        <div className='grid__item'>
                            <img src={Best3}/>
                            <p>Mango Juice</p>
                        </div>
                        <div className='grid__item'>
                            <img src={Best4}/>
                            <p>Orange Juice</p>
                        </div>
                        <div className='grid__item'>
                            <img src={Best5}/>
                            <p>Cherry Cream</p>
                        </div>
                        <div className='grid__item'>
                            <img src={Best6}/>
                            <p>Grapes Juice</p>
                        </div>
                        <div className='grid__item'>
                            <img src={Best7}/>
                            <p>Pineapple Juice</p>
                        </div>
                        <div className='grid__item'>
                            <img src={Best8}/>
                            <p>Pomogranate Juice</p>
                        </div>
                    </div>
                </div>
                <button className='btn__primary'>View All</button>
            </div>
        </div>
    )
}

export default ProductBest
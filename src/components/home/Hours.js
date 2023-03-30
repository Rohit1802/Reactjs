import React from 'react'
import LeftRose from '../../img/LeftRose.svg'
import Cheers from '../../img/cheers.svg'

function Hours() {
  return (
    <div className='hours'>
      <div className='container'>
        <div className='hours--info'>
          <div className='Leftblock'>
            <img src={LeftRose} className="Left--image" />
          </div>
          <div className='Rightblock'>
            <div className='text-block'>
              <img src={Cheers} className="cheers" />
              <h2>Let's Happy Hours!</h2>
              <p>We are proud of our coffee shop with the highest
                -quality products, most inviting stores, friendlist
                staff and the best coffee in the world
              </p>
              <button className='btn--primary'>View More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hours
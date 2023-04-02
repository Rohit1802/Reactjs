import React from 'react'
import Image1 from '../../img/imgContact/Rectangle 311.svg'
import Image2 from '../../img/imgContact/Rectangle 328.svg'
import Image3 from '../../img/imgContact/Rectangle 331.svg'
import Image4 from '../../img/imgContact/Rectangle 332.svg'
import Image5 from '../../img/imgContact/Rectangle 334.svg'
import Image6 from '../../img/imgContact/Rectangle 335.svg'

function GalleryPics() {
    return (
        <div className='GalleryPics'>
            <div className='container'>
                <div className='grid-container'>
                    <img src={Image1} className="img" />
                    <img src={Image2} className="img" />
                    <img src={Image3} className="img" />
                    <img src={Image4} className="img" />
                    <img src={Image5} className="img" />
                    <img src={Image6} className="img" />
                </div>
            </div>
        </div>
    )
}

export default GalleryPics
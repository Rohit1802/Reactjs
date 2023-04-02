import React from 'react'
import Image1 from '../../img/imgContact/g1.svg'
import Image2 from '../../img/imgContact/g2.svg'
import Image3 from '../../img/imgContact/g3.svg'
import Image4 from '../../img/imgContact/g4.svg'
import Image5 from '../../img/imgContact/g5.svg'
import Image6 from '../../img/imgContact/g6.svg'
import Image7 from '../../img/imgContact/g7.svg'
import Image8 from '../../img/imgContact/g8.svg'
import Image9 from '../../img/imgContact/Rectangle 4 (2).svg'

function GalleryImages() {
    return (
        <div className='GalleryImage'>
            <div className='container'>
                <div className='headerText'>
                    <h3>We Are Here To Serve You Delicious</h3>
                    <span>Flavours</span>
                </div>
                <div className='ImageGallery'>
                    <div className='MainComponent'>
                        <div className='level1'>
                            <div className='imgbox1'>
                                <img src={Image1} className="Img1" />
                                <p>powder (encapsulated)</p>
                            </div>
                            <div className='imgbox2'>
                                <img src={Image2} className="Img2" />
                                <p>Dry Mix Powders</p>
                            </div>
                            <div className='imgbox3'>
                                <img src={Image3} className="Img3" />
                                <p>Dry mix seasoning</p>
                            </div>
                        </div>
                        <div className='level2'>
                            <div className='imgbox1'>
                                <img src={Image4} className="Img4" />
                                <p>powders</p>
                            </div>
                            <div className='imgbox2'>
                                <img src={Image5} className="Img5" />
                                <p>Dry mix powders</p>
                            </div>
                            <div className='imgbox3'>
                                <img src={Image6} className="Img6" />
                                <p>Dry mix seasoning</p>
                            </div>
                        </div>
                        <div className='level3'>
                            <div className='imgbox'>
                                <img src={Image7} className="Img7" />
                                <p>powder (encapsulated)</p>
                            </div>
                            <div className='imgbox'>
                                <img src={Image8} className="Img8" />
                                <p>Dry mix powders</p>
                            </div>
                            <div className='imgbox'>
                                <img src={Image9} className="Img9" />
                                <p>Dry mix seasoning</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GalleryImages
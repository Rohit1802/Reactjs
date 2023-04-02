import React from 'react'
import Footer from '../components/Footer'
import GalleryCompo from '../components/gallery/GalleryCompo'
import GalleryImages from '../components/gallery/GalleryImages'
import GalleryInfo from '../components/gallery/GalleryInfo'
import GalleryPics from '../components/gallery/GalleryPics'


function Gallery() {
  return (
    <div>
        <GalleryCompo/>
        <GalleryImages/>
        <GalleryInfo/>
        <GalleryPics/>
        <Footer/>
    </div>
  )
}

export default Gallery
import React from 'react'
import Footer from '../components/Footer'
import GalleryCompo from '../components/gallery/GalleryCompo'
import GalleryImages from '../components/gallery/GalleryImages'
import GalleryInfo from '../components/gallery/GalleryInfo'
import GalleryPics from '../components/gallery/GalleryPics'
import Navbar from '../components/Navbar'
import Header from '../components/Header'

function Gallery() {
  return (
    <div>
        <Header/>
        <Navbar/>
        <GalleryCompo/>
        <GalleryImages/>
        <GalleryInfo/>
        <GalleryPics/>
        <Footer/>
    </div>
  )
}

export default Gallery
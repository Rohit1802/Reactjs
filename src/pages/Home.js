import React from 'react'
import Footer from '../components/Footer'
import Hero from '../components/home/Hero'
import Hours from '../components/home/Hours'
import Products from '../components/home/Products'
import Sendus from '../components/home/Sendus'
import Trending from '../components/home/Trending'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Bestus from '../components/home/Bestus'
import Testimonial from '../components/home/Testimonial'

function Home() {
  return (
    <div>
        <Header/>
        <Navbar/>
        <Hero/>
        <Products/>
        <Trending/>
        <Hours/>
        <Bestus/>
        <Testimonial/>
        <Sendus/>
        <Footer/>
    </div>
  )
}

export default Home
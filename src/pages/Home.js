import React from 'react'
import Footer from '../components/Footer'
import Hero from '../components/home/Hero'
import Hours from '../components/home/Hours'
import Products from '../components/home/Products'
import Sendus from '../components/home/Sendus'
import Trending from '../components/home/Trending'


function Home() {
  return (
    <div>
        <Hero/>
        <Products/>
        <Trending/>
        <Hours/>
        <Sendus/>
        <Footer/>
    </div>
  )
}

export default Home
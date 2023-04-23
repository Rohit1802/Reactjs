import React from 'react'
import ProductMain from '../components/product/ProductMain'
import ProductBest from '../components/product/ProductBest'
import ProductTrend from '../components/product/ProductTrend'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Header from '../components/Header'

function Product() {
  return (
    <div>
        <Header/>
        <Navbar/>
        <ProductMain/>
        <ProductBest/>
        <ProductTrend/>
        <Footer/>
    </div>
  )
}

export default Product
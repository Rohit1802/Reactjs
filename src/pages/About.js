import React from 'react'
import AboutMain from '../components/about/AboutMain'
import AboutSub from '../components/about/AboutSub'
import AboutTeam from '../components/about/AboutTeam'
import AboutWord from '../components/about/AboutWord'
import Footer from '../components/Footer'
import AboutTagline from '../components/about/AboutTagline'
import Header from '../components/Header'
import Navbar from '../components/Navbar'

function About() {
  return (
    <div>
        <Header/>
        <Navbar/>
        <AboutMain/>
        <AboutSub/>
        <AboutTeam/>
        <AboutWord/>
        <AboutTagline/>
        <Footer/>
    </div>
  )
}

export default About
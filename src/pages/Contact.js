import React from 'react'
import ContactMain from '../components/contact/ContactMain'
import Footer from '../components/Footer'
import ContactSub from '../components/contact/ContactSub'
import ContactForm from '../components/contact/ContactForm'
import ContactMap from '../components/contact/ContactMap'
// import Navbar from '../reusable/Navbar'

function Contact() {
  return (
    <div>
        {/* <Navbar/> */}
        <ContactMain/>
        <ContactSub/>
        <ContactForm/>
        <ContactMap/>
        <Footer/>
    </div>
  )
}

export default Contact
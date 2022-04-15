import React from 'react'
import Navbar from './navbar/Navbar'
import Hero from './hero/Hero'
import Consulting from './consulting/Consulting'
import Service from './service/Service'
import About from './about/About'
import Contact from './contact/Contact'
import Footer from './footer/Footer'


const Main = () => {
  return (
    <>
        <Navbar/>
        <Consulting/>
        <Service/>
        <About/>
        <Contact/>
        <Footer/>
    </>
  )
}

export default Main
import React from 'react'
import './Footer.css'
import { animateScroll as scroll } from 'react-scroll'

const Footer = () => {
  const scrollToTop=()=>{
    scroll.scrollToTop();
  }
  return (
    <>
      <section className='footer'>
      <div className='foot'>
      <div className='top'>
        <p>Strategy  |  Leadership  |  Culture  |  Design</p>
      </div>
      <p>Our purpose is to help courageous leaders build more thoughtful businesses. Through their success, people and society flourish.</p>
      <div className='buttom'>
        <p><a>Privacy Policy</a>   |    <a>Terms of Use</a></p>
        <p>© FourFold Consulting 2022. Website by <a>Hatch Labs</a>.</p>
      </div>
      </div>
      <div className='scrolltotop' onClick={scrollToTop} smooth='true' duration={3000}>
        <img src='./static/up.png' alt=''/>
      </div>
      </section>
    </>
  )
}

export default Footer
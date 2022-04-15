import React, {useState} from 'react'
import './Navbar.css'
import Hero from '../hero/Hero'
import { Link} from 'react-scroll'
import { Link as LinkR } from 'react-router-dom'


const Navbar = () => {
  const [click, setClick] = useState(false)
  const handleMenu =()=>{setClick(!click)}
  const closeMobileMenu =()=>{setClick(false)}
  return (
    <>
    <section className='container' id='home'>
    <div className='navbar'>
      <div className='nav-logo'>
      <Link to='home' smooth={true} duration={2000} style={{textDecoration:'none'}}><img src='./static/logo.png' alt=''></img></Link>
      </div>

      <div className='mob-icon' onClick={handleMenu}>
        <i className= {click ? "fa-solid fa-xmark":"fa-solid fa-bars"}></i>
      </div>
      <div className='navlinks'>
        <ul className={click? 'nav-menu-active':'nav-menu'}>
        <li onClick={closeMobileMenu}><Link to='home' smooth='true' duration={2000} style={{textDecoration:'none'}} onClick={closeMobileMenu}>Welcome</Link></li>
        <li onClick={closeMobileMenu}><Link to='about' smooth='true' duration={2000} style={{textDecoration:'none'}} onClick = {closeMobileMenu}>About</Link></li>
        <li onClick={closeMobileMenu}><Link to='service' smooth='true' duration={2000} style={{textDecoration:'none'}} onClick = {closeMobileMenu}>Services</Link></li>
        <li onClick={closeMobileMenu}><Link to='leaders' smooth='true' duration={2000} style={{textDecoration:'none'}} onClick = {closeMobileMenu}>Leaders</Link></li>
        <li onClick={closeMobileMenu}><Link to='contact' smooth='true' duration={2000} style={{textDecoration:'none'}} onClick = {closeMobileMenu}>Contact</Link></li>
        <li id='signup' onClick={closeMobileMenu}><LinkR to='../signup'><button>Sign Up</button></LinkR></li>


        </ul>

      </div>



    </div>
    <Hero/>
    </section>

    </>
  )
}

export default Navbar
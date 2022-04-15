import React from 'react'
import './Consulting.css'

const Consulting = () => {
  return (
    <>
    <section className='consulting-container' id='about'>
      <section  className='consult'>

        <div className='consulting-row'>

          <div className='consulting-column'>
            <h2>FourFold Consulting helps courageous leaders build more thoughtful businesses.</h2>
            <p>We believe sustainable change happens when there is alignment between the commercial and human aspects of a business. This thoughtful integration of strategy with leadership, culture and organisational design is what we know and do. </p>
          </div>

          <div className='consulting-column'>
            <img className='img' src='./static/consult.jpg' alt=''></img>
          </div>
        </div>

        
      </section>
      <div className='main-img'>
      <img src='./static/page.jpg' alt=''></img>
      </div>
      </section>
    </>
  )
}

export default Consulting
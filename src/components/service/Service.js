import React, {useState} from 'react'
import './Service.css'

const Service = () => {
  const [click, setClick] = useState(false)
  const handleMenu =()=>{setClick(!click)}
  const [press, setPress] = useState(false)
  const handleMenus =()=>{setPress(!press)}
  const [presss, setPresss] = useState(false)
  const handleMenuss =()=>{setPresss(!presss)}
  const [clicks, setClicks] = useState(false)
  const handleMenusss =()=>{setClicks(!clicks)}
  return (
    <>
      <section className='service' id='service'>
        <div className='service-row'>
          <div className='service-column'>
            <h1>Our Services</h1>
            <p>We help to frame issues clearly, facilitate the right conversations, and convert insights into pragmatic yet holistic business solutions. </p>
            <p>We do this across four key areas.</p>

          </div>
          <div className='service-column'>
          <div className='service-right-side'>
            <div className='service-right'>
              <div className='title' onClick={handleMenus}>
                <h3>Purpose & Strategy</h3>
                <i className={press? 'fa-solid fa-minus':'fa-solid fa-plus' } ></i>
              </div>
              <small className={press? 'text-show':'text-hide'}>We support organisations to discover and realise their purpose, strategy and vision. We help think through the commercial and societal impacts of choices with the aim of running more profitable and responsible businesses.</small>
              
            </div>

            <div className='service-right'>
              <div className='title'onClick={handleMenu}>
                <h3>Growth & Transformation</h3>
                <i className={click? 'fa-solid fa-minus':'fa-solid fa-plus' }></i>
              </div>
              <small className={click? 'text-show':'text-hide'}>We work with organisations to prioritise and realise opportunities so they can grow and build strategic agility. We help define, sequence and implement transformation, change and capability agendas.</small>
              
            </div>
            <div className='service-right'>
              <div className='title'onClick={handleMenusss}>
                <h3>Leadership & Teams</h3>
                <i className={clicks? 'fa-solid fa-minus':'fa-solid fa-plus' } ></i>
              </div>
              <small className={clicks? 'text-show':'text-hide'}>We coach CEOs and develop leaders to enable real, sustainable change. We help top teams debate and act on shared work, behaviours and routines to improve effectiveness and achieve results.</small>
              
            </div>

            <div className='service-right'>
              <div className='title' onClick={handleMenuss}>
                <h3>Culture & Design</h3>
                <i className={presss? 'fa-solid fa-minus':'fa-solid fa-plus' } ></i>
              </div>
              <small className={presss? 'text-show':'text-hide'}>We help organisations align operating models, structures and incentives to strategic goals. We define how best to organise work and tap cultural strengths to deliver results with impact and engagement.</small>
              
            </div>
            </div>


          </div>

        </div>

      </section>
    </>
  )
}

export default Service
import React, {useState} from 'react'
import './Contact.css'

const Contact = () => {
  const [fullname, setFullame] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const data = {'fullname':fullname, 'email':email, 'phone':phone, 'message':message};

  const submitData=()=>{
    fetch('http://127.0.0.1:8000/contact/',{
    method:'POST',
    headers: {
      'Content-Type':'application/json',
    },
    body:JSON.stringify(data) 
  }).then(resp=>resp.json())
  .then(error=>console.error())
  .then(setFullame(''),setEmail(''),setPhone(''), setMessage(''),)
  .then(alert('message send successfully'))

  }

  return (
    <>
      <section className='contact' id='contact'>
        <h1>Contact Us</h1>
        <div className='contact-row'>
          <div className='contact-column'>
            <img src='./static/contact.jpg' alt='' className='contact-img'></img>
          </div>
          <div className='contact-column'>
            <h2>Find out how we could<br/>work together.</h2>
            <p>Email us at <a>hello@fourfoldconsulting.com.au</a>or message us below</p>
            <div className='form'>
              <input type='text' name='name' id='name' placeholder='Full Name*' value={fullname} onChange={e=>setFullame(e.target.value)} required/><br/>
              <input type='email' name='email' id='email' placeholder='Email*' value={email} onChange={e=>setEmail(e.target.value)} required/><br/>
              <input type='phone' name='phonenumber' id='phone' placeholder='Phone'value={phone} onChange={e=>setPhone(e.target.value)}/><br/>
              <textarea placeholder='Write your message here' name='message' id='message' rows={8} value={message} onChange={e=>setMessage(e.target.value)}/><br/>

            </div>
            <button className='submit-button' onClick={submitData}>Submit</button>
          </div>

        </div>
      </section>
    </>
  )
}

export default Contact
import React from 'react'
import {Link as LinkR} from 'react-router-dom'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'

const Register = () => {
  let navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')
  const data = {'first_name':fname, 'last_name':lname,'email':email, 'username':username, 'password':password}
  const sendData=()=>{
    fetch('http://127.0.0.1:8000/users/',{
      method:'POST',
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify(data)
    }).then(resp=>resp.json())
    .catch(error=>console.log(error))
    {
    if (password==''){
      alert('Please provide valid information')}
    else if(email==''){
      alert('please provide valid information')
    }
    else if(username==''){
      alert('please provide valid information')
    }
    else{
        navigate('../login')
    }}
    
  }
  
  return (
    <>
        <section className='login'>
        <div className='nav-logo-img'>
            <img src='/static/logo.png' className='fourfold-logo' alt=''></img>
        </div>
        <div className='login-form'>
        <div className='form-content'>
        <p>Create a new account </p>
        <input type='text' id='fname' name='firstname' placeholder='First Name' value={fname} onChange={e=>setFname(e.target.value)}/>
        <input type='text' id='lname' name='lastname' placeholder='Last Name' value={lname} onChange={e=>setLname(e.target.value)}/>
        <input type='email' id='email' name='email' placeholder='Email*' required value={email} onChange={e=>setEmail(e.target.value)}/>
        <input type='username' id='username' name='username' placeholder='Username*' value={username} onChange={e=>setUsername(e.target.value)} required/>
        <input type='password' id='password' name='password' placeholder='Password*' value={password} onChange={e=>setPassword(e.target.value)} required/>
        <br/><button className='login-btn' onClick={sendData}>Sign Up</button>
        </div>
        <p><LinkR to='../login' style={{textDecoration:'none',color:'blue'}}>Already have an account?</LinkR></p>
        </div>

    </section>
    </>
  )
}
export default Register
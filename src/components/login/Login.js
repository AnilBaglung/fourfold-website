import React,{useState, useEffect} from 'react'
import {Link as LinkR} from 'react-router-dom'
import './Login.css'
import {useNavigate} from 'react-router-dom'

const Login = () => {
  let navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const[token, setToken] = useState('')

 /*  IT'S just for learning ,not building any real application lol */
 /* You can use useeffect and react-cookie for login logout */ 

  const sendData=()=>{
    fetch('http://127.0.0.1:8000/api-token-auth/',{
      method:'POST',
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify({'username': username, 'password':password})
    }).then(resp=>resp.json()) 
    .then(data=>setToken(data.token))
    .then(console.log(token))
    .then(error=>console.log(error))
    {
      if (token !==''){
        navigate('../home')
        }
      else{
        document.getElementById('information').innerHTML='Invalid username or password' 
      }
    }
    
    
  }

  return (
    <>
    <section className='login'>
        <div className='nav-logo-img'>
            <img src='/static/logo.png' className='fourfold-logo' alt=''></img>
        </div>
        <div className='login-form'>
        <div className='form-content'>
        <p>Login to FourFold</p>
        <input type='username' id='username' name='username' placeholder='Your Username' value={username} onChange={e=>setUsername(e.target.value)}/>
        <input type='password' id='password' name='password' placeholder='Password' value={password} onChange={e=>setPassword(e.target.value)}/>
        <br/><button className='login-btn' onClick={sendData}>Log in</button>
        </div>
        <p>don't have account?</p>
        <button className='register-btn'><LinkR to='../signup' style={{textDecoration:'none',color:'white'}}>Create New Account</LinkR></button>
        <p id='information' style={{color:'red', paddingTop:'10px' }}></p>
        </div>

    </section>
    </>
  )
}

export default Login
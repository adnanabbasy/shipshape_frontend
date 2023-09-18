import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from 'axios';
import DiscoverProfessional from './DiscoverProfessional';
import Header from './Header';
import Footer from './Footer';


const Login = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState();
  const [sessionToken, setSessionToken] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  
  const submithandler = async (e) => {
    e.preventDefault();
    // console.log (email, password);
    
    const payload = {
      "password": password,
      "email": email
    }
    // console.log (payload);
    try {     
        const response = await axios({
            method: "post",
            url: "http://34.254.97.212:8080/api/auth/login",
            data: payload,
            // headers: { Authorization: apiKey },
        })
        console.log(response)
        if(response.status==200){
            localStorage.setItem("token", response.data.token);
            setToken(localStorage.getItem("token"))
            setSessionToken(response.data.session.jwt)

            setTimeout(() => {
              if(token == sessionToken){
                navigate("/");
              }else {
                console.log("error")
              
              }
            }, 2000)
        }
      
    } catch (error) {
        console.log(error);
    }
  }


  return (
    <div>
      <Header />
        <div className='main-banner'>
          <div className='container-fluid'>
            <div className='banner-form login'>
               <h6>Login to your SHIPSHAPE.PRO account</h6>
                <form onSubmit={submithandler}>
                    <input placeholder='Email' type='text' onChange={(e)=> setEmail(e.target.value)}  />
                    <input placeholder='Password' type='Password' onChange={(e)=> setPassword(e.target.value)} />
                    <div className='forgot'>
                        <a href="/">Forgot your Password</a>
                        <button type='submit'>Login</button>
                    </div>
                </form>
                <p>Don't have an account? <Link to="/signup">Signup Now</Link></p>
                <a className='google-log' to="/"><img src="../../images/icons/google-icon.png" alt="" /> Continue with Google</a>
            </div>
          </div>
        </div>
    <DiscoverProfessional />
    <Footer />
    </div>
  )
}

export default Login

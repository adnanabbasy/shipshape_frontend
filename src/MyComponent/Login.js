import React from 'react'
import { Link } from 'react-router-dom'
import DiscoverProfessional from './DiscoverProfessional';


const Login = () => {
  return (
    <div>
        <div className='main-banner'>
          <div className='container-fluid'>
            <div className='banner-form login'>
               <h6>Login to your SHIPSHAPE.PRO account</h6>
                <form>
                    <input placeholder='Email' type='text' />
                    <input placeholder='Password' type='Password' />
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
    </div>
  )
}

export default Login

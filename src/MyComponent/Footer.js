import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='main-footer'>
      <div className='container'>
        
        <p className='footer_tag'><Link className="navbar-brand" to="/">
              <img src="../../images/logo.png" alt="" /> SHIPSHaPE</Link> 
              the largest database of marine professionals in the US
        </p>
        <div className='footer_bottom'>
          <div className='row'>
            <div className='col-md-3'>
            <ul className='ft-lst'>
              <h5>Information</h5>
                <li><Link to="/aboutus">about</Link></li>
                <li><Link to="/blog">blog</Link></li>
                <li>
                  <div className='social-icon'>
                    <Link to="/"><i className="fa-brands fa-instagram"></i></Link>
                    <Link to="/"><i className="fa-brands fa-facebook-f"></i></Link>
                    <Link to="/"><i className="fa-brands fa-linkedin-in"></i></Link>
                  </div>
                  </li>
            </ul>
          </div>
          <div className='col-md-3'>
            <ul className='ft-lst'>
              <h5>Boaters</h5>
              <li><Link to="/signup">Sign up</Link></li>
                <li><Link to="/marine">Services near me</Link></li>
            </ul>
          </div>
          <div className='col-md-3'>
            <ul className='ft-lst'>
              <h5>Business</h5>
                <li><Link to="/signuppro">Sign up as a PRO</Link></li>
            </ul>
          </div>
          <div className='col-md-3'>
            <ul className='ft-lst'>
              <h5>Support</h5>
                <li><Link to="/">Terms of Service</Link></li>
                <li><Link to="/">Privacy Policy</Link></li>
                <li><Link to="/contactus">Contact</Link></li>
                
            </ul>
          </div>
          </div>
        </div>  
        <p className='copyrit'>© 2023 SHIPSHAPE.PRO</p>
      </div>
    </div>
  )
}

export default Footer

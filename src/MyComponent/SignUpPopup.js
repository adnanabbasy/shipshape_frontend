import React from 'react'

const SignUpPopup = () => {
  return (
    // <div className='main_popup'>
    //     <div className='main-banner popup'>
          
    //         <div className='banner-form login'>
    //         <h6>Login to your SHIPSHAPE.PRO account</h6>
    //             <form>
    //                 <input placeholder='Email' type='text' />
    //                 <input placeholder='Password' type='Password' />
    //                 <div className='forgot'>
    //                     <a to="/">Forgot your Password</a>
    //                     <button type='submit'>Login</button>
    //                 </div>
    //             </form>
    //             <p>Don't have an account?</p>
    //             <a className='google-log' to="/"><img src="../../images/icons/google-icon.png" alt="" /> Continue with Google</a>
    //         </div>
          
    //     </div>
    // </div>
    <div>
        
<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#search_popup">
  Launch demo modal
</button>


<div className="modal fade main-searchpopup" id="search_popup" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-body">
      <div className='banner-form login search-popup'>
            <h4>Sign Up</h4>
            <form>
                    <div className='row'>
                        <div className='col-md-6  ps-0'>
                            <input placeholder='First Name *' type='text' />
                        </div>
                        <div className='col-md-6 pe-0'>
                            <input placeholder='Last Name *' type='text' />
                        </div>
                        <input placeholder='Email *' type='text' />
                        
                        <input placeholder='Password *' type='password' />
                        <h5>Sign me up as a</h5>
                        
                        <div className="pop-submit-button" data-value="">                       
                            <a href="!#" id="submit" className="btn-popup" data-value="boater">
                                <img src="../../images/icons/boat.png" data-value="boater" alt="business" /><br/>Boater</a>

                            <a href="!#" id="csubmit" className="btn-popup" data-value="contractor">
                                 <img src="../../images/icons/screw-driver.png" data-value="contractor" alt="business" /><br/>Business</a>
                        </div>
                       
                    </div>
                </form>
               
                <a className='google-log' herf="!#">
                    <img src="../../images/icons/google-icon.png" alt="" /> 
                    Continue with Google
                </a>
                <a className='already-btn' to="">Already a user? Login</a>
            </div>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default SignUpPopup

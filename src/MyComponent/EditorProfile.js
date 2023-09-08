import React from 'react'

function EditorProfile() {
  return (
         <div className='container-fluid'>
            <div className='main_editorprofile'>
               <div className='row'>
                  <div className='col-md-9'>
                     <p className='parah1'>Edit Profile <a href='/'>Advanced profile settings.</a></p>  
                     <div className='profile_form'>
                        <form>
                           <div className='lock'>
                              <input type='text' placeholder='Profile Title'/>
                           </div>
                           <input type='text' placeholder='Name *'/>
                           <input type='email' placeholder='Email *'/>
                           <input type='tel' placeholder='Phone *'/>
                           <input type='text' placeholder='Location *'/>
                           <input type='date' placeholder='date *'/>
                           <div className='lock'>
                              <input type='text' placeholder='Facebook'/>
                           </div>
                           <div className='lock'>
                              <input type='text' placeholder='Linkedin'/>
                           </div>
                           <div className='lock'>
                              <input type='text' placeholder='Twitter'/>
                           </div>
                           <h5>Click to change profile photo <span>(JPG &amp; PNG only)</span></h5>
                           <label className='img-upload' for="upload_image">
    								<div>
                              <img src="https://beta.shipshape.pro/wp-content/themes/s4d-shipshape/images/safety.png" id="uploaded_image" class="img-responsive"/>
                           </div>     								
                           <div class="overlay">
    									<div class="text">Click to change profile photo</div>
    								</div>
    								<input type="file" name="image" class="image" id="upload_image"/>
    							</label>
                        </form>
                      </div>
                  </div>
               </div>
            {/* <div className='banner-form login'>
               <h4>Sign Up</h4>
                  <p className='parah'><i class="fa-regular fa-calendar"></i> Have a coupon? <a href='/'>Click here to enter your code</a> </p>
                  
                  <div className='row'>
                  <form>
                     <div className='col-md-6'>
                        <label>Name <span>*</span></label>
                        <input type='text' />
                        <label>Email address <span>*</span></label>
                        <input type='email' />
                        <label >Create Your New Password (Enter at least 4 character) <span>*</span></label>
                        <input placeholder="Password"  type='Password' />
                        <label >Confirm Password <span>*</span></label>
                        <input placeholder="Password"  type='Password' />
                        </div>
                        <div className="col-sm-12">
                           <div className="order-table">
                              <h5>Your order</h5>
                              <table className='table w-100'>
                                 <thead>
                                    <tr>
                                    <th>Product</th>
                                    <th>&nbsp;</th>
                                    </tr>
                                 </thead>
                                 <tbody>
                                    <tr>
                                    <td>Boater Basic <b> x 1</b></td>
                                    <td>$0.00</td>
                                    </tr>
                                 </tbody>
                                 <tfoot>
                                    <tr>
                                    <td> <b>Total</b> </td>
                                    <td> <b>$0.00</b> </td>
                                    </tr>
                                 </tfoot>
                              </table>
                              </div>
                        </div>
                        <div className="col-sm-12">
                              <div className="gray-bg">
                                 <button>Create Account</button>          
                              </div>
                        </div>
                  </form>
                  </div> 
               </div> */}
            </div>
      </div>  
  )
}

export default EditorProfile
   
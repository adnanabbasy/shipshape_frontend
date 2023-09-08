import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react';
import { useParams } from 'react-router-dom'

function CheckOut() {
    let apiKey = "";
    let { label } = useParams();
    console.log( label);
  
    const [name, setName] = useState([]);
    const [email, setEmail] = useState([]);
    const [password, setPassword] = useState([]);
    const [confirmpassword, setConfirmpassword] = useState([]);
      
  
    const submitHandler = async(event) => {
  
      event.preventDefault();
  
      let payload;
  
      if ("free" === label) {
        payload = {
          username: name,
          password: password,
          email: email,
          first_name: "mani",
          last_name: "khan",
          user_type: "Boater Basic",
          subscription_type: "free",
          subcription_id: 1,
          user_status: true,
        };
      } else if ("pro" === label) {
        payload = {
          username: name,
          password: password,
          email: email,
          first_name: "mani",
          last_name: "khan",
          user_type: "Boater Pro",
          subscription_type: "pro",
          subcription_id: 1,
          user_status: true,
        };
      } else if ("premium" === label) {
        payload = {
          username: name,
          password: password,
          email: email,
          first_name: "mani",
          last_name: "khan",
          user_type: "Boater Premium",
          subscription_type: "Premium",
          subcription_id: 1,
          user_status: true,
        };
      } else {
        payload = {};
      }
  
      
  
      if(!name && !email && !password){
          console.log("please fill the field")
          return
      }
  
      try {     
          const response = await axios({
              method: "post",
              url: "http://34.254.97.212:8080/api/users/adduser",
              data: payload,
              headers: { Authorization: apiKey },
          })
          console.log(response)
         
      } catch (error) {
          console.log(error);
      }
  }
    
  
    return (
      <div>
        <div className='main-banner'>
            <div className='container-fluid'>
              <div className='banner-form login checkout'>
                 <h4>Sign Up {label}</h4>
                  <p className='parah'><i class="fa-regular fa-calendar"></i> Have a coupon? <a href='/'>Click here to enter your code</a> </p>
                  <Link className='google-log' to="/"><img src="../../images/icons/google-icon.png" alt="" /> Continue with Google</Link>
                  <div className='row'>
                    <form onSubmit={submitHandler}>
                      <div className='col-md-6'>
                        <label>Name <span>*</span></label>
                          <input type='text' value={name} onChange={(e)=> setName(e.target.value)} name='Name'  />
                          
                          <label>Email address <span>*</span></label>
                          <input type='email' name='email' value={email} onChange={(e)=> setEmail(e.target.value)}  required />
                          
                          <label >Create Your New Password (Enter at least 4 character) <span>*</span></label>
                          <input name='password' value={password} onChange={(e)=> setPassword(e.target.value)}  required placeholder="Password"  type='Password' />
                         
                          <label >Confirm Password <span>*</span></label>
                          <input placeholder="Password"  name='confirmpassword' type='Password' />
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
                                <form id="payment-form">
                                  <div className='row'>
                                    <div className='col-md-12'>
                                      <label for="card-number">Card Number <span>*</span></label>
                                      <input type="text" id="card-number" name="card-number" placeholder="1234 5678 9012 3456" required />
                                    </div>
                                    <div className='col-md-6'>
                                      <label for="expiry-date">Expiry Date (MM/YY) <span>*</span></label>
                                      <input type="text" id="expiry-date" name="expiry-date" placeholder="12/23" required />
                                    </div>
                                    <div className='col-md-6'>
                                      <label for="cvc">CVC Code (CVC) <span>*</span></label>
                                      <input type="text" id="cvc" name="cvc" placeholder="123" required />
                                    </div>
                                    <button className='ms-lg-auto'>Create Account</button> 
                                  </div> 
                                  </form>
                              </div>
                        </div>
                    </form>
                  </div> 
                </div>
            </div>
          </div>
      </div>
    )
  }

export default CheckOut

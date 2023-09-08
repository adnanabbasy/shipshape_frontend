import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const SubscriptionBoater = () => {


  return (
    <section className='sign_up  mb-2 mb-lg-5'>
        <div className='container'>
            <h6 className='text-center mt-3 mb-4'>Select your SHIPSHAPE.PRO subscription</h6>
            <div className='row'>
                <div className='col-md-4'>
                    <Link to="/signupcheckout/free">
                        <div className='sign_pro_box'>
                            <i><img src="../../images/icons/yacht4.png" alt="" /></i>
                            <h3>Boater Basic</h3>
                            <ul>
                                <li>Access the largest Marine <br/>services database in the US</li>
                                <li>Qualify for SHIPSHAPE.PRO member discounts</li>
                                <li>Contact any SHIPSHAPE.PRO Professional</li>
                                <li>Write unlimited reviews</li>
                                <li>Write unlimited reviews</li>
                                <li>Add your favorite vessel</li>
                                <li>Add your favorite vessel</li>
                                <li>Upload 5 photos</li>
                            </ul>
                            <a className='btn-sign-pro' href="/">Free</a>
                        </div>
                    </Link>
                </div>

                <div className='col-md-4'>
                    <Link to="/signupcheckout/premium">
                        <div className='sign_pro_box'>
                            <i><img src="../../images/icons/yacht5.png" alt="" /></i>
                            <h3 className='mt-3'>Boater Premium</h3>
                            <ul>
                                <li>Access the largest Marine <br/>services database in the US </li>
                                <li>Qualify for SHIPSHAPE.PRO member discounts</li>
                                <li>Contact any SHIPSHAPE.PRO Professional</li>
                                <li>Contact other SHIPSHAPE.PRO Yachters</li>
                                <li>Write unlimited reviews</li>
                                <li>Create an advanced profile</li>
                                <li>Add your favorite vessel</li>
                                <li>Upload 10 photos</li>
                                <li>Get the Certified Yachter’s Badge</li>
                            </ul>
                            <a className='btn-sign-pro' href="/">$4.99  
                            <sub>monthly</sub></a>
                        </div>
                    </Link>
                </div>

                <div className='col-md-4'>
                    <Link to="/signupcheckout/pro">
                        <div className='sign_pro_box active'>
                            <i><img src="../../images/icons/yacht6.png" alt="" /></i>
                            <h3 className='mt-3'>Boater Pro</h3>
                            <ul>
                                <p>All the benefits<br/> of premium-<br/>with $10 savings!</p>
                            </ul>
                            <a className='btn-sign-pro' href="">$49.99  
                            <sub>yearly</sub></a>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default SubscriptionBoater

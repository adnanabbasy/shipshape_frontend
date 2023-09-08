import React from 'react'
import { Link } from 'react-router-dom'


const SignUp = () => {
  return (
    <section className='sign_up mb-2 mb-lg-5'>
        <div className='container'>
            <h5 className='text-center mt-3 mb-4'><strong>Plesase let us know about yourself</strong></h5>
            <div className='row'>
                <div className='col-md-6'>
                    <Link to="/subscriptionBoater"><div className='box-signup' style={{background: "url(../../images/box2_bg.jpeg)"}}>
                        <div className='boxsign-text'>
                            <h5>I am a</h5>
                            <h4>Boat <br/>Owner</h4>
                        </div>
                    </div></Link>
                </div>
                <div className='col-md-6'>
                
                    <Link to="/businesssubscription">
                        <div className='box-signup' style={{background: "url(../../images/box1_bg.jpeg)"}}>
                            <div className='boxsign-text'>
                                <h5>I am a</h5>
                                <h4>Business <br/>Owner</h4>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>

    </section>
  )
}

export default SignUp

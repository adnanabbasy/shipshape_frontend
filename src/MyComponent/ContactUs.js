import React from 'react'


const ContactUs = () => {
  return (
    
        <div className='contact main-banner'>
          <div className='banner-form login'>
            <h3>Drop us a line</h3>
            <p>Get in touch in you have any question or would like to consult with one of our team members. We look forward to helping you on your marine adventure.</p>
                <form>
                    <div className='row'>
                        <div className='col-md-6  ps-0'>
                            <input placeholder='First Name *' type='text' />
                        </div>
                        <div className='col-md-6 pe-0'>
                            <input placeholder='Last Name *' type='text' />
                        </div>
                        <input placeholder='Email *' type='text' />
                        <input placeholder='Phone number *' type='text' />
                        <input placeholder='Subject *' type='text' />
                        <textarea placeholder='How may we help you? *'></textarea>
                        <p>Describe your marine situation and someone from our team
                            will be in touch within 24 hours.</p>
                        <button type='submit'>Send message</button>
                    </div>
                </form>
            </div>
    </div>           
  )
}

export default ContactUs

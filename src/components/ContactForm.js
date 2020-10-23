import React from 'react'

import '../css/contact.css'
import phone_icon from '../assets/phone_icon.svg'
import mail_icon from '../assets/mail_icon.svg'
import location_icon from '../assets/location_icon.svg'

export default function ContactForm() {
    
    return (
        <div id='contact-us' className='contact-wrapper'>
            <div className='container'>
                <div className='contact-inner'>
                    <div className='contact-left'>
                        <div className='title'>
                            <h1>Contact us</h1>
                        </div>
                        <div className='details'>
                            <img className='icon' src={phone_icon} alt='' /><a href='tel:+44 7961486496'>+44 7961486496</a>
                        </div>
                        <div className='details'>
                            <img className='icon' src={mail_icon} alt='' /><a href='mailto:info@oncmarketing.com'>info@oncmarketing.com</a>
                        </div>
                        <div className='details'>
                            <img className='icon' src={location_icon} alt='' /><a href='/#contact-us'>Suite 3, 80A Blackheath Road,<br />London, SE10 8DA.</a>
                        </div>
                    </div>
                    <div className='contact-right'>
                        <div className='title'>
                            <h1>Get in touch with us</h1>
                        </div>
                        <form onSubmit={(e) => {
                                e.preventDefault()
                                window.location.replace(`https://oncmarketing.com/website-development/thankyou.html`)
                            }}>
                            <div className="form-group">
                                <p>Full Name</p>
                                <input type="text" minLength="2" id="name" name="name" placeholder="e.g. Adekunle Ciroma" required />
                            </div>
                            <div className="form-group">
                                <p>Email Address</p>
                                <input type="email" minLength="2" id="email" name="email" placeholder="e.g. ciroma@yopmail.com" required />
                            </div>
                            <div className="form-group">
                                <p>Phone Number</p>
                                <input type="text" minLength="2" id="phone" name="phone" placeholder="e.g. 08093786190" required />
                            </div>
                            <div className="form-group">
                                <p>Message</p>
                                <textarea type="text" minLength="2" id="message" name="message" placeholder="e.g. I need a rebrand for my business" required />
                            </div>
                            <div style={{height:'0.1rem', visibility: 'hidden'}}>
                                <input type="text" id="contact" name="contact" value='contact us' style={{height:'0.1rem'}} required readOnly/>
                            </div>
                            <div className="form-group consultation-btn-wrapper">
                                <button type="submit" className="btn btn-primary" >Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
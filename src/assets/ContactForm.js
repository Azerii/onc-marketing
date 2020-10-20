import React, { useEffect, useRef } from 'react'
import { ReCaptcha } from 'react-recaptcha-google'
import '../css/contact.css'
import phone_icon from '../images/phone_icon.svg'
import mail_icon from '../images/mail_icon.svg'
import location_icon from '../images/location_icon.svg'

export default function ContactForm() {
    const captchaDemo = useRef()
    const siteKey = '6Ld2_8sZAAAAAEEMPLErw9XrwCL_kvpWYWUso8lk'

    useEffect(() => {
        if (captchaDemo) {
            console.log("started, just a second...")
            captchaDemo.current.reset();
            captchaDemo.current.execute();
        }
    })
    function onLoadRecaptcha() {
        if (captchaDemo) {
            captchaDemo.current.reset();
            captchaDemo.current.execute();
        }
    }
    function verifyCallback(recaptchaToken) {
        // Here you will get the final recaptchaToken!!!  
        console.log(recaptchaToken, "<= your recaptcha token")
    }

    function handleSubmit(e) {
        e.preventDefault()
        window.location.replace('/thankyou')
    }

    const urlArray = window.location.href.split('/') // get the current page title
    const urlArrayLength = urlArray.length
    const current = urlArray[urlArrayLength - 2]
    return (
        <div id='contact-us' className='contact-wrapper'>
            <div className='container'>
                <div className='contact-inner'>
                    <div className='contact-left'>
                        <div className='title'>
                            <h1>Contact us</h1>
                        </div>
                        <div className='details'>
                            <img className='icon' src={phone_icon} alt='' /><a href='tel:08102263874'>08102263874</a>
                        </div>
                        <div className='details'>
                            <img className='icon' src={mail_icon} alt='' /><a href='mailto:info@digifigs.com'>info@digifigs.com</a>
                        </div>
                        <div className='details'>
                            <img className='icon' src={location_icon} alt='' /><a href='/#contact-us'>Kuye Street, Ikolaba Estate,<br />Adjacent A3 Estate, Ikolaba, Ibadan.</a>
                        </div>
                    </div>
                    <div className='contact-right'>
                        <div className='title'>
                            <h1>Get in touch with us</h1>
                        </div>
                        <form onSubmit={(e) => handleSubmit(e)}>
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
                                <input type="text" id="contact" name="contact" value={`${current}/Swiftbranding`} style={{height:'0.1rem'}} required readOnly/>
                            </div>
                            <ReCaptcha
                                ref={captchaDemo}
                                size="invisible"
                                render="explicit"
                                sitekey={siteKey}
                                onloadCallback={onLoadRecaptcha}
                                verifyCallback={verifyCallback}
                            />
                            <div className="form-group consultation-btn-wrapper">
                                <button type="submit" className="btn btn-primary" onClick={() => captchaDemo.current.execute()}>Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
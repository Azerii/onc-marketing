import React from 'react'

import '../css/modal.css'
import '../css/consultation.css'
import '../css/exit_popup.css'

export default function ExitPopup() {
    
    return (

        // Modal
        <div id='exit-popup' className='exit-popup show'>
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        {/* <h5 class="modal-title" id="exampleModalLabel">Modal title</h5> */}
                        <button type="button" className='close' onClick={() => {
                            document.querySelector('#exit-popup').classList.remove('show')
                        }}>
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className='title-wrapper'>
                            <h5 className='title'>GET A CORPORATE WORDPRESS WEBSITE</h5>
                            <p className='subtitle'>Starting From <span>£300</span></p>
                        </div>
                        <div className='modal-consultation-wrapper'>
                            <div className='modal-container'>
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
                                        <textarea type="text" minLength="2" id="message" name="message" placeholder="Tell us a bit bout your business" required />
                                    </div>
                                    <div style={{height:'0.1rem', visibility: 'hidden'}}>
                                        <input type="text" name="exit_popup" value='exit_popup' style={{height:'0.1rem'}} required readOnly/>
                                    </div>
                                    
                                    <div className="form-group consultation-btn-wrapper">
                                        <button type="submit" className="btn btn-primary" >Request a quote</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    {/* <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div> */}
                </div>
            </div>
        </div>
    )
}
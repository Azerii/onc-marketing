import React from 'react'
import '../css/modal.css'
import '../css/consultation.css'

export default function Modal() {
    
    return (

        // Modal
        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        {/* <h5 class="modal-title" id="exampleModalLabel">Modal title</h5> */}
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
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
                                        <input type="text" name="request_quote" value='request quote modal' style={{height:'0.1rem'}} required readOnly/>
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
import React from 'react'

import '../css/thankyou.css'

export default function ThankYou() {
    return (
            <div className='thankyou-wrapper'>
                <div className='thankyou-inner'>
                    <h1>Thank you for contacting<br />ONC Marketing</h1>
                    <p>We appreciate your response and will get back to you shortly.<br />Cheers!</p>
                    <a href='/'>{'< '}Go back home</a>
                </div>
            </div>
    )
}
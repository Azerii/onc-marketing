import React from 'react'

import '../css/testimonial.css'

import contour from '../assets/contour_white.svg'
import avatar from '../assets/kamos_fav.png'
import quotes from '../assets/quotes.svg'

export default function Testimonial() {
    return (
        <div className='testimonial'>
            <div className='container inner lg'>
                <div className='content-left'>
                    <img className='contour' src={contour} alt='' />
                    <img className='avatar' src={avatar} alt='' />
                </div>
                <div className='content-right'>
                    <p className='title'>Testimonial from our partner </p>
                    <img className='quotes' src={quotes} alt='' />
                    <p className='testimonial-text'>Exceptional service!! From initial contact to completion, ONC Marketing exuded professionalism and total transparency to ensure our company's re-brand and website development were highly successful. Definitely look forward to working with you again.​</p>
                    <p className='name'>Deinde Oloruntobi</p>
                    <p className='role'>CEO K. Amos &amp; Co</p>
                </div>
            </div>

            <div className='inner mb'>
                <div className='content'>
                    <p className='title'>Testimonial from our partner </p>

                    <img className='avatar' src={avatar} alt='' />
                    <img className='contour' src={contour} alt='' />

                    <img className='quotes' src={quotes} alt='' />

                    <p className='testimonial-text'>Exceptional service!! From initial contact to completion, ONC Marketing exuded professionalism and total transparency to ensure our company's re-brand and website development were highly successful. Definitely look forward to working with you again.​</p>
                    <p className='name'>Deinde Oloruntobi</p>
                    <p className='role'>CEO K. Amos &amp; Co</p>
                </div>
            </div>
        </div>
    )
}
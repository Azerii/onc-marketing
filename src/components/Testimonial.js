import React from 'react'

import '../css/testimonial.css'

import contour from '../assets/contour_white.svg'
import avatar from '../assets/avatar.svg'
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
                    <p className='testimonial-text'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna tempor invidunt ut labore et dolore magna tempor invidunt ut labore et dolore magna</p>
                    <p className='name'>Lorem Ipsum</p>
                    <p className='role'>lorem ipsum</p>
                </div>
            </div>

            <div className='inner mb'>
                <div className='content'>
                    <p className='title'>Testimonial from our partner </p>

                    <img className='avatar' src={avatar} alt='' />
                    <img className='contour' src={contour} alt='' />

                    <img className='quotes' src={quotes} alt='' />

                    <p className='testimonial-text'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna tempor invidunt ut labore et dolore magna tempor invidunt ut labore et dolore magna</p>
                    <p className='name'>Lorem Ipsum</p>
                    <p className='role'>lorem ipsum</p>
                </div>
            </div>
        </div>
    )
}
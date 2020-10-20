import React from 'react'

import '../css/carousel.css'
// import '../css/sectors.css'

import marketing from '../assets/marketing.svg'
import graduation_cap from '../assets/graduation_cap.svg'
import retail from '../assets/retail.svg'

export default function Carousel({children}) {
    return (
        <div className="carousel js-flickity">
            {/* <div className="carousel-cell">
                <div className='sector-item'>
                    <img src={retail} alt='' />
                    <h4>Retail</h4>
                    <p>A significant percentage of Nigeria’s youth population are involved in start-ups and B2C enterprises. Our work with SMEs has helped deliver real solutions to startup founders and entrepreneurs who need to amplify the online reach of their businesses.</p>
                </div>
                <div className='sector-item'>
                    <img src={graduation_cap} alt='' />
                    <h4>Education</h4>
                    <p>We are convinced that education and human capital development are the keys to a sustainable future. And so, our work continues to positively impact society through helping to amplify the reach and potential of educational, coaching, and consulting services.</p>
                </div>
                <div className='sector-item'>
                    <img src={marketing} alt='' />
                    <h4>Marketing</h4>
                    <p>‘People do not buy goods and services. They buy relations, stories and magic.’ - Seth Godin As a digital marketing agency ourselves, we understand the importance of effective marketing and this is just what we do for every client and project we undertake. </p>
                </div>
            </div>
            <div className="carousel-cell"></div> */}
            {children}
        </div>
    )
}
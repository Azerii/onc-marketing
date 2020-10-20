import React from 'react'

import '../css/services.css'

import responsive_design from '../assets/responsive_design.svg'
import wordpress from '../assets/wordpress.svg'
import shopify from '../assets/shopify.svg'


export default function Services() {
    return (
        <div className='services'>
            <div className='header'>
                <h1>Services we offer</h1>
            </div>
            <div className='container inner'>
                <div className='service-item'>
                    <img src={responsive_design} alt='' />
                    <h4>Responsive Website Development</h4>
                    <p>We create websites that are fully optimized and effective for fast action and compliance with each user interaction.</p>
                </div>
                <div className='service-item'>
                    <img src={wordpress} alt='' />
                    <h4>Wordpress <br />Website Creation</h4>
                    <p>With Wordpress templates and tools, we’ll create a budget-friendly website that best suits your brand or business.</p>
                </div>
                <div className='service-item'>
                    <img src={shopify} alt='' />
                    <h4>Shopify <br />Website Creation</h4>
                    <p>With our Shopify website creation service, your e-commerce efforts get more effective and wide-reaching. We’ll bring your inventory online and connect you to a new pool of potential customers.</p>
                </div>
            </div>
        </div>
    )
}
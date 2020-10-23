import React from 'react'

import '../css/topcaption.css'

import top_caption_img from '../assets/top_caption_img.svg'
import wavy_border from '../assets/wavy_border.svg'
import wavy_border_lg from '../assets/wavy_border_lg.svg'

export default function TopCaption() {
    return (
        <div className='top-caption'>
            <div className='container inner'>
                <div className='content-wrapper'>
                    <div className='caption-text'>
                        <h1>Web Development <br />Services for your<br />Business</h1>
                        <p>Get a website that sets you apart<br />from your competition</p>

                        <button type="button" data-toggle='modal' data-target='#exampleModal'>Request a quote</button>
                    </div>
                    <div className='caption-img'>
                        <img src={top_caption_img} alt='' />
                    </div>
                </div>
            </div>
            <div className='wave-wrapper'>
                <img className='wavy-border-mb' src={wavy_border} alt='' />
                <img className='wavy-border-lg' src={wavy_border_lg} alt='' />
            </div>
        </div>
    )
}
import React from 'react'

import '../css/header.css'

import logo_main from '../assets/logo_main.svg'

export default function Header() {
    return (
        <div className='top-header sticky-top'>
            <div className='container inner'>
                <img src={logo_main} alt='' />
                <a href='/#contact-us'>Contact Us</a>
            </div>
        </div>
        
    )
}
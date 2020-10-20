import React from 'react'

import '../css/brands.css'

import buy_from_usa from '../assets/buy_from_usa.svg'
import avvila from '../assets/avvila.svg'
import opak from '../assets/opak.svg'
import study_abroad from '../assets/study_abroad.svg'

export default function Brands() {
    return (
        <div className='brands-wrapper'>
            <div className='container brands-inner'>
                <div className='title'>
                    <h4>Trusted by these companies</h4>
                </div>
                <div className='brands'>
                    <div className='brands-item'>
                        <img src={buy_from_usa} alt='' />
                    </div>
                    <div className='brands-item'>
                        <img src={avvila} alt='' />
                    </div>
                    <div className='brands-item'>   
                        <img src={opak} alt='' />
                    </div>
                    <div className='brands-item'>
                        <img src={study_abroad} alt='' />
                    </div>
                </div>
            </div>
        </div>
    )
}
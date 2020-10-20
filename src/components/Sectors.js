import React from 'react'

import '../css/sectors.css'
import '../css/carousel.css'

import marketing from '../assets/marketing.svg'
import graduation_cap from '../assets/graduation_cap.svg'
import retail from '../assets/retail.svg'
import car_sales from '../assets/car_sales.svg'
import finance from '../assets/finance.svg'
import agric from '../assets/agric.svg'

export default function Sectors() {
    return (
        <div className='sectors'>
            <div className='header'>
                <h1>Working with companies<br />From different sectors</h1>
            </div>
            <div className='container'>
                <div className='carousel js-flickity lg'>
                    <div className='carousel-cell inner'>
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
                    <div className='carousel-cell inner'>
                        <div className='sector-item'>
                            <img src={car_sales} alt='' />
                            <h4>Car Sales</h4>
                            <p>Automobiles have continually served an essential need for consumers over the years. Our work as it involves effective digital marketing strategies has revolved around connecting the best of car dealers and distribution outlets to end-users that require the most affordable options.</p>
                        </div>
                        <div className='sector-item'>
                            <img src={finance} alt='' />
                            <h4>Finance</h4>
                            <p>We understand the importance of a wholesome financial inclusion culture for your individuals and small businesses alike. It is their chance to start at life, and providing access to these life-changing products provided by fin-tech brands is our way of making a world of difference.</p>
                        </div>
                        <div className='sector-item'>
                            <img src={agric} alt='' />
                            <h4>Agriculture</h4>
                            <p>We have helped farmers, food producers, and distributors deliver their products and services to ready consumers through improved online visibility.</p>
                        </div>
                    </div>
                </div>

                <div className='carousel js-flickity mb'>
                    <div className='carousel-cell inner'>
                        <div className='sector-item'>
                            <img src={retail} alt='' />
                            <h4>Retail</h4>
                            <p>A significant percentage of Nigeria’s youth population are involved in start-ups and B2C enterprises. Our work with SMEs has helped deliver real solutions to startup founders and entrepreneurs who need to amplify the online reach of their businesses.</p>
                        </div>
                    </div>
                    <div className='carousel-cell inner'>
                        <div className='sector-item'>
                            <img src={graduation_cap} alt='' />
                            <h4>Education</h4>
                            <p>We are convinced that education and human capital development are the keys to a sustainable future. And so, our work continues to positively impact society through helping to amplify the reach and potential of educational, coaching, and consulting services.</p>
                        </div>
                    </div>
                    <div className='carousel-cell inner'>
                        <div className='sector-item'>
                            <img src={marketing} alt='' />
                            <h4>Marketing</h4>
                            <p>‘People do not buy goods and services. They buy relations, stories and magic.’ - Seth Godin As a digital marketing agency ourselves, we understand the importance of effective marketing and this is just what we do for every client and project we undertake. </p>
                        </div>
                    </div>

                    <div className='carousel-cell inner'>
                        <div className='sector-item'>
                            <img src={car_sales} alt='' />
                            <h4>Car Sales</h4>
                            <p>Automobiles have continually served an essential need for consumers over the years. Our work as it involves effective digital marketing strategies has revolved around connecting the best of car dealers and distribution outlets to end-users that require the most affordable options.</p>
                        </div>
                    </div>
                    <div className='carousel-cell inner'>
                        <div className='sector-item'>
                            <img src={finance} alt='' />
                            <h4>Finance</h4>
                            <p>We understand the importance of a wholesome financial inclusion culture for your individuals and small businesses alike. It is their chance to start at life, and providing access to these life-changing products provided by fin-tech brands is our way of making a world of difference.</p>
                        </div>
                    </div>
                    <div className='carousel-cell inner'>
                        <div className='sector-item'>
                            <img src={agric} alt='' />
                            <h4>Agriculture</h4>
                            <p>We have helped farmers, food producers, and distributors deliver their products and services to ready consumers through improved online visibility.</p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}
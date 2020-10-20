import React from 'react'

import '../css/works.css'

import avvila_mockup from '../assets/avvila_mockup.png'
import geonel_mockup from '../assets/geonel_mockup.png'
import contour from '../assets/contour.svg'

export default function OurWorks() {
    return (
        <div className='works'>
            <div className='header'>
                <h1>Our works</h1>
            </div>

            <div className='container inner'>
                <div className='img-wrapper left'>
                    <img className='contour left' src={contour} alt='' />
                    <img className='mockup left' src={avvila_mockup} alt='' />
                </div>
                <div className='content right'>
                    <div className='text-wrapper'>
                        <h2>Website design for Avvila <br />Global</h2>
                        <p>Avvila Global Innovations Limited is an impact-investing and social innovation brand that human capital development in Africa. We worked with them to develop a website that highlights the real solutions their capacity-building strategies and interventions deliver to the target audience.</p>
                        
                        <div className='content-list-item'>
                            <div className='content-ring-wrapper'>
                                <div className='content-ring'></div>
                            </div>
                            <div className='content-text'>
                                <p><span style={{fontWeight: '600'}} >Design Ideation:</span> At first, we undertook a detailed study of what Avvila stands for and how best to articulate this identity. Then, we designed a blueprint with special attention to the brand’s objectives.</p>
                            </div>
                        </div>
                        <div className='content-list-item'>
                            <div className='content-ring-wrapper'>
                                <div className='content-ring'></div>
                            </div>
                            <div className='content-text'>
                                <p><span style={{fontWeight: '600'}} >Effective web copy:</span> Our copywriting team developed clear, concise, and creative copy designed to communicate their ultimate objective and resonate with their audience.</p>
                            </div>
                        </div>
                        <div className='content-list-item'>
                            <div className='content-ring-wrapper'>
                                <div className='content-ring'></div>
                            </div>
                            <div className='content-text'>
                                <p><span style={{fontWeight: '600'}} >UI/UX Design:</span> We built a website that is optimized for easy usage, visually appealing, and user-friendly</p>
                            </div>
                        </div>
                        <div className='content-list-item'>
                            <div className='content-ring-wrapper'>
                                <div className='content-ring'></div>
                            </div>
                            <div className='content-text'>
                                <p><span style={{fontWeight: '600'}} >Adaptive Design:</span> We know that the web consists of an endless variety of users across several platforms and demographies. So, we developed a website that is adaptive for users across all desktop and mobile devices.</p>
                            </div>
                        </div>

                        <div className='content-btn-wrapper'>
                            <button type="button" data-toggle='modal' data-target='#exampleModal'>Request a quote</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container inner'>
                <div className='img-wrapper right mb'>
                    <img className='contour right' src={contour} alt='' />
                    <img className='mockup right' src={geonel_mockup} alt='' />
                </div>
                <div className='content left'>
                    <div className='text-wrapper'>
                        <h2>Website design for Geonel <br />Holdings</h2>
                        <p>Geonel Subsidiaries is a general merchandise corporation with interest in diverse industries including, but not limited to real estate, energy and power, mining, security services, and surveying and inspection. We worked with the brand to develop a website that highlights its all-encompassing interests and investments.</p>
                        
                        <div className='content-list-item'>
                            <div className='content-ring-wrapper'>
                                <div className='content-ring'></div>
                            </div>
                            <div className='content-text'>
                                <p><span style={{fontWeight: '600'}} >Design Ideation:</span> Our work with Geonel began from the ideation stage where we formulated the basic design concept for the website.</p>
                            </div>
                        </div>
                        <div className='content-list-item'>
                            <div className='content-ring-wrapper'>
                                <div className='content-ring'></div>
                            </div>
                            <div className='content-text'>
                                <p><span style={{fontWeight: '600'}} >Effective web copy:</span> Our team of copywriting developed content that is strategically crafted to convert website visitors to audience and ultimately customers.</p>
                            </div>
                        </div>
                        <div className='content-list-item'>
                            <div className='content-ring-wrapper'>
                                <div className='content-ring'></div>
                            </div>
                            <div className='content-text'>
                                <p><span style={{fontWeight: '600'}} >UI/UX Design:</span> What is the essence of a website that is pleasing to the eye but slow to respond or hard to navigate? We understand the importance of easy and efficient functionality.</p>
                            </div>
                        </div>
                        <div className='content-list-item'>
                            <div className='content-ring-wrapper'>
                                <div className='content-ring'></div>
                            </div>
                            <div className='content-text'>
                                <p><span style={{fontWeight: '600'}} >Adaptive Design:</span> Geonel’s website was developed as adaptive for users across all desktop and mobile devices, to secure a wider reach for the brand.</p>
                            </div>
                        </div>

                        <div className='content-btn-wrapper'>
                            <button type="button" data-toggle='modal' data-target='#exampleModal'>Request a quote</button>
                        </div>
                    </div>
                </div>


                <div className='img-wrapper right lg'>
                    <img className='contour right' src={contour} alt='' />
                    <img className='mockup right' src={geonel_mockup} alt='' />
                </div>
            </div>
        </div>
    )
}
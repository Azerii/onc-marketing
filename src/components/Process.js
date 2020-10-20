import React from 'react'

import '../css/process.css'

import organise from '../assets/organise.svg'
import design from '../assets/design.svg'
import development from '../assets/development.svg'
import testing_launch from '../assets/testing_launch.svg'
import arrow_right from '../assets/arrow_right.svg'

export default function Process() {
    return (
        <div className='process'>
            <div className='header'>
                <h1>Our Web Development process</h1>
            </div>
            <div className='container inner'>
                <div className='process-item'>
                    <img className='item-img' src={organise} alt='' />
                    <img className='arrow arrow-1' src={arrow_right} alt='' />
                    <h4>Organize</h4>
                    <p>For us, every project starts at the organization stage. It’s where we sit back, research, understand industry trends, and formulate the best-suited strategy and concept as it aligns with your brand’s most fundamental values. </p>
                </div>
                <div className='process-item'>
                    <img className='item-img' src={design} alt='' />
                    <img className='arrow arrow-2' src={arrow_right} alt='' />
                    <h4>Design</h4>
                    <p>We understand that, more than anything, building websites is based on the rules of coding. But then, we take these rules, coupled with a flair for aesthetics and create a website that beats anything you can think of.</p>
                </div>
                <div className='process-item'>
                    <img className='item-img' src={development} alt='' />
                    <img className='arrow arrow-3' src={arrow_right} alt='' />
                    <h4>Development</h4>
                    <p>We know that the most important thing for your website is not just how good it looks but how well it works. This is how to reach your ultimate objective: leads, traffic, sales, and more. </p>
                </div>
                <div className='process-item'>
                    <img className='item-img' src={testing_launch} alt='' />
                    <h4>Testing &amp; launch</h4>
                    <p>Our A/B testing process ensure that everything on your website is at its best performance rate before the website is accessible for the public. </p>
                </div>
            </div>
        </div>
    )
}
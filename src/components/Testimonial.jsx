import React from 'react'
import './Testimonial.css'
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

function Testimonial() {
    return (
        <div id='Testimonial' className='testimonial-container'>
            <div className='testimonial-description'>
                <p className='tag'>Testimonial</p>
                <h1>What They Are Saying</h1>
                <div className='primary-text'>Lorem ipsum dolor sit amet consectetur. Non tincidunt
                    magna non et elit. Dolor  turpis molestie dui
                    magnis facilisis at fringilla quam.</div>
            </div>
            <div className='testimonial-card'>
                <img src={ProfilePic} alt="" />
                <div className='primary-text'>
                    Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
                    elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.</div>
                <div className="testimonials-stars-container">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                </div>
                <h3>John Doe</h3>
            </div>
        </div>
    )
}

export default Testimonial
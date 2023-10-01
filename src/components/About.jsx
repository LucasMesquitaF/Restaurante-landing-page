import React from 'react'
import Button from './Button'
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";
import './About.css'

function About() {
    return (
        <div id='About' className='about-container'>
            <div className="about-background-image-container">
                <img src={AboutBackground} alt="" />
            </div>
            <div className='about-image-container'>
                <img src={AboutBackgroundImage} alt="" />
            </div>

            <div className='about-description'>
                <p className='tag about-tag'>About</p>
                <div className='about-description-text'>
                    <h1 className='about-description-title'>Food Is An Important Part Of A Balanced Diet</h1>
                    <p className="primary-text">
                        Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
                        elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
                    </p>
                    <p className="primary-text">
                        Non tincidunt magna non et elit. Dolor turpis molestie dui magnis
                        facilisis at fringilla quam.
                    </p>
                    <div className='about-btns'>
                        <Button buttonStyle='order-btn'>Learn More</Button>

                        <button className="watch-video-container">
                            <BsFillPlayCircleFill className="watch-video-icon" />
                            <p>Watch Video</p>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About
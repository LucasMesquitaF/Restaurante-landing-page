import React from 'react'
import './Home.css'
import { FaArrowRight } from "react-icons/fa";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import Button from './Button'

function Home() {
  return (
    <>
      <div id='Home' className='home-container'>
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className='home-description'>
          <h1>Your Favourite Food
            Delivered Hot &
            Fresh</h1>
          <div className='primary-text'>
            Healthy switcher chefs do all the prep work, like
            peeding, chopping & marinating, so you can cook
            a fresh food.</div>
          <Button className='btn' buttonStyle='order-btn'>Order Now <FaArrowRight /></Button>
        </div>
        <div className='home-image-container'>
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </>
  )
}

export default Home
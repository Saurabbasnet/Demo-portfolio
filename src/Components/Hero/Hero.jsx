import React from 'react'
import  './Hero.css'
import profile_img from "../../assets/profile_img.svg"
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="profile" />
        <h1><span>I am saurab basnet,</span>React developer based in Nepal.</h1>
        <p>I am a React developer with 2 years of experience 
            with multiple companies like LIS Nepal and Go Taxi.
        </p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me </AnchorLink></div>
        <div className="hero-resume">My resume</div>
      </div>

    </div>
  )
}

export default Hero
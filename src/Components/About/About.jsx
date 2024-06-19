import React from 'react'
import './About.css'
import theme_pattern from "../../assets/theme_pattern.svg"
import profile_img from "../../assets/about_profile.svg"

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me </h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am an experienced React developer with 2 years of experience.</p>
                    <p>My passion for React development is reflection to my careers. </p>
                </div>
                <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS </p> <hr style={{width:"60%"}}></hr></div>
                <div className="about-skill"><p>React JS </p> <hr style={{width:"85%"}}></hr></div>
                <div className="about-skill"><p>JavaScript  </p> <hr style={{width:"70%"}}></hr></div>
                <div className="about-skill"><p>TypeScript </p> <hr style={{width:"40%"}}></hr></div>
                <div className="about-skill"><p>Node.JS,Express.JS,MongoDB </p> <hr style={{width:"30%"}}></hr></div>


                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>2</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr/>
            <div className="about-achievement">
                <h1>7+</h1>
                <p>REAL WORLD PROJECT COMPLETED</p>
            </div>
            <hr/>
            <div className="about-achievement">
                <h1>5+</h1>
                <p>HAPPY CLIENT😊😊</p>
            </div>

        </div>
    </div>
  )
}

export default About
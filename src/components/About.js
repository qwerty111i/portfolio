import React from 'react'
import './About.css'
import aboutImg from './images/aboutimg.jpg'
import linkedin from './images/linkedin.png'
import github from './images/github.png'
import email from './images/gmail.png'

import { Fade } from "react-awesome-reveal";

const About = () => {
  return (
    <Fade>
      <div className='about' id='about'>  
          <div className='container'>
            <div className='button-container'>
              <button className='button b1' 
              onClick={() => window.location.href = 'https://www.linkedin.com/in/adwaith-ramesh-9388912a6/'}>
                <img className='button-img m1' src={linkedin} alt="LinkedIn" />
                <p className='button-text'>LinkedIn</p>
              </button>
              <button className='button b2'
              onClick={() => window.location.href = 'https://github.com/qwerty111i'}>
                <img className='button-img m2' src={github} alt="GitHub" />
                <p className='button-text'>GitHub</p>
              </button>
              <button className='button b3'
              onClick={() => window.location.href = 'mailto:adwaithsramesh@gmail.com?subject=Subject%20Here&body=Body%20Here'}>
                <img className='button-img m3' src={email} alt="Gmail" />
                <p className='button-text'>Email</p>
              </button>
            </div>
            <div className='content-container'>
              <div className='image-container'>
                <img className='image' src={aboutImg} alt="Me" />
              </div>
              <div className='text-container'>
                <h1 className='title'>About Me</h1>
                <p className='text'>I am a CS student at Georgia Tech. My concentrations are Systems Architecture and Intelligence.  I am a full stack developer with hands-on experience in languages such as Java, C#, Python, and modern front-end frameworks, as well as extensive experience managing databases. I excel in critical thinking and collaborative teamwork.</p>
                <p className='text-contact'>Email: adwaithsramesh@gmail.com</p>
              </div>
            </div>
          </div>
      </div>
    </Fade>
  )
}

export default About
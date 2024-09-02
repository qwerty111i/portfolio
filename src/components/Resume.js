import React from 'react'
import './Resume.css'
import EHSLogo from './images/EdisonHSLogo.png'
import GaTechLogo from './images/GaTechLogo.png'
import google from './images/google.png'
import microsoft from './images/microsoft.png'
import godot from './images/godot.png'
import java from './images/java.png'
import python from './images/python.png'
import html from './images/html.png'
import css from './images/css.png'
import javascript from './images/javascript.png'
import react from './images/react.png'
import flutter from './images/flutter.png'
import bootstrap from './images/bootstrap.png'

import { Slide } from "react-awesome-reveal";

const Resume = () => {
  return (
    <div className='resume' id='resume'>
      <Slide direction="left" triggerOnce>
        <div className='education'>
          <h1 className='education-title'>Education Experience</h1>
          <div className='education-item college'>
            <img className='college-logo' src={GaTechLogo} alt="Georgia Tech" />
            <div className='text-container'>
              <h1>Georgia Institute of Technology</h1>
              <h3>Atlanta, Georgia</h3>
              <div className='degree-info'>
                <p>Bachelor of Science in Computer Science</p>
                <div className='degree-container'>
                  <p>GPA: 4.0</p>
                  <p>May 2027</p>
                </div>
              </div>
              <div className='coursework'>
                <h4>Coursework:</h4>
                <ul className='coursework-list'>
                  <li>Linear Algebra</li>
                  <li>Computer Organization</li>
                  <li>Applied Combinatorics</li>
                  <li>Data Structures</li>
                  <li>Probability and Statistics</li>
                  <li>Multivariable Calculus</li>
                </ul>
              </div>
            </div>
          </div>
          <div className='education-item highschool'>
            <img className='highschool-logo' src={EHSLogo} alt="Edison High School" />
            <div className='text-container'>
              <h1>Edison High School</h1>
              <h3>Edison, New Jersey</h3>
              <div className='degree-container'>
                <p>GPA: 3.95</p>
                <p>June 2023</p>
              </div>
              <div className='coursework'>
                <h4>Coursework:</h4>
                <ul className='coursework-list'>
                  <li>AP Calculus BC</li>
                  <li>AP Physics C</li>
                  <li>AP Computer Science A</li>
                  <li>AP Literature and Composition</li>
                  <li>AP World History</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Slide>
      <Slide direction="right" triggerOnce>
        <div className='skills'>
          <h1 className='skills-title'>Skills & Certifications</h1>
          <div className='language-container'>
            <h1>Languages</h1>
            <div className='skill-box language-box java'>
              <img className='java-img' src={java} alt="Java" />
              <p>Java</p>
            </div>
            <div className='skill-box language-box python'>
              <img className='python-img' src={python} alt="Python" />
              <p>Python</p>
            </div>
            <div className='skill-box language-box html'>
              <img className='html-img' src={html} alt="HTML5" />
              <p>HTML5</p>
            </div>
            <div className='skill-box language-box css'>
              <img className='css-img' src={css} alt="CSS" />
              <p>CSS3</p>
            </div>
            <div className='skill-box language-box javascript'>
              <img className='javascript-img' src={javascript} alt="JavaScript" />
              <p>JavaScript</p>
            </div>
          </div>
          <div className='framework-container'>
            <h1>Frameworks</h1>
            <div className='skill-box framework-box react'>
              <img className='react-img' src={react} alt="React" />
              <p>React</p>
            </div>
            <div className='skill-box framework-box flutter'>
              <img className='flutter-img' src={flutter} alt="Flutter" />
              <p>Flutter</p>
            </div>
            <div className='skill-box framework-box bootstrap'>
              <img className='bootstrap-img' src={bootstrap} alt="Bootstrap" />
              <p>Bootstrap</p>
            </div>
          </div>
          <div className='software-container'>
            <h1>Software</h1>
            <div className='skill-box software-box google'>
              <img className='google-img' src={google} alt="Google" />
              <p>Google Suite</p>
            </div>
            <div className='skill-box software-box microsoft'>
              <img className='microsoft-img' src={microsoft} alt="Microsoft" />
              <p>MS Office</p>
            </div>
            <div className='skill-box software-box godot'>
              <img className='godot-img' src={godot} alt="Godot" />
              <p>Godot</p>
            </div>
          </div>
        </div>
      </Slide>
    </div>
  )
}

export default Resume
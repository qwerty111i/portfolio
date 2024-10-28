import React from 'react'
import './Resume.css'

// Education Imports
import EHSLogo from './images/EdisonHSLogo.png'
import GaTechLogo from './images/GaTechLogo.png'

// Language Imports
import java from './images/java.png'
import csharp from './images/c-sharp.png'
import c from './images/c.png'
import python from './images/python.png'
import html from './images/html.png'
import css from './images/css.png'
import javascript from './images/javascript.png'
import xml from './images/xml.png'

// Framework Imports
import react from './images/react.png'
import node from './images/node.png'
import express from './images/express.png'
import websocket from './images/websocket.png'
import bootstrap from './images/bootstrap.png'
import flutter from './images/flutter.png'

// Software Imports
import androidStudio from './images/android-studio.png'
import unity from './images/unity.png'
import godot from './images/godot.png'
import postman from './images/postman.png'
import sonarqube from './images/sonarqube.png'
import git from './images/git.png'

// Database Imports
import firebase from './images/firebase.png'
import mongodb from './images/mongodb.png'

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
                  <p></p>
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
            <div className="row">
              <div className='skill-box language-box java'>
                <div className='img-container'>
                  <img className='java-img' src={java} alt="Java" />
                </div>
                <p>Java</p>
              </div>
              <div className='skill-box language-box c-sharp'>
                <div className='img-container'>
                  <img className='c-sharp-img' src={csharp} alt="C#" />
                </div>
                <p>C#</p>
              </div>
            </div>
            <div className="row">
              <div className='skill-box language-box c'>
                <div className='img-container'>
                  <img className='c-img' src={c} alt="C" />
                </div>
                <p>C</p>
              </div>
              <div className='skill-box language-box python'>
                <div className='img-container'>
                  <img className='python-img' src={python} alt="Python" />
                </div>
                <p>Python</p>
              </div>
            </div>
            <div className="row">
              <div className='skill-box language-box html'>
                <div className='img-container'>
                  <img className='html-img' src={html} alt="HTML5" />
                </div>
                <p>HTML5</p>
              </div>
              <div className='skill-box language-box css'>
                <div className='img-container'>
                  <img className='css-img' src={css} alt="CSS" />
                </div>
                <p>CSS3</p>
              </div>
            </div>
            <div className="row">
              <div className='skill-box language-box javascript'>
                <div className='img-container'>
                  <img className='javascript-img' src={javascript} alt="JavaScript" />
                </div>
                <p>JavaScript</p>
              </div>
              <div className='skill-box language-box xml'>
                <div className='img-container'>
                  <img className='xml-img' src={xml} alt="XML" />
                </div>
                <p>XML</p>
              </div>
            </div>
          </div>
          <div className='framework-container'>
            <h1>Frameworks</h1>
            <div className='row'>
              <div className='skill-box framework-box react'>
                <div className='img-container'>
                  <img className='react-img' src={react} alt="React" />
                </div>
                <p>React</p>
              </div>
              <div className='skill-box framework-box node'>
                <div className='img-container'>
                  <img className='node-img' src={node} alt="Node" />
                </div>
                <p>Node.js</p>
              </div>
            </div>
            <div className='row'>
              <div className='skill-box framework-box express'>
                <div className='img-container'>
                  <img className='express-img' src={express} alt="Express" />
                </div>
                <p>Express.js</p>
              </div>
              <div className='skill-box framework-box websocket'>
                <div className='img-container'>
                  <img className='websocket-img' src={websocket} alt="Websockets" />
                </div>
                <p>Websocket</p>
              </div>
            </div>
            <div className='row'>
              <div className='skill-box framework-box flutter'>
                <div className='img-container'>
                  <img className='flutter-img' src={flutter} alt="Flutter" />
                </div>
                <p>Flutter</p>
              </div>
              <div className='skill-box framework-box bootstrap'>
                <div className='img-container'>
                  <img className='bootstrap-img' src={bootstrap} alt="Bootstrap" />
                </div>
                <p>Bootstrap</p>
              </div>
            </div>
          </div>
          <div className='software-container'>
            <h1>Software</h1>
            <div className='row'>
              <div className='skill-box software-box androidStudio'>
                <div className='img-container'>
                  <img className='androidStudio-img' src={androidStudio} alt="Google" />
                </div>
                <p>Android Studio</p>
              </div>
              <div className='skill-box software-box unity'>
                <div className='img-container'>
                  <img className='unity-img' src={unity} alt="Google" />
                </div>
                <p>Unity</p>
              </div>
            </div>
            <div className='row'>
              <div className='skill-box software-box godot'>
                <div className='img-container'>
                  <img className='godot-img' src={godot} alt="Godot" />
                </div>
                <p>Godot</p>
              </div>
              <div className='skill-box software-box postman'>
                <div className='img-container'>
                  <img className='postman-img' src={postman} alt="Postman" />
                </div>
                <p>Postman</p>
              </div>
            </div>
            <div className='row'>
              <div className='skill-box software-box sonarqube'>
                <div className='img-container'>
                  <img className='sonarqube-img' src={sonarqube} alt="SonarQube" />
                </div>
                <p>SonarQube</p>
              </div>
              <div className='skill-box software-box git'>
                <div className='img-container'>
                  <img className='git-img' src={git} alt="Git" />
                </div>
                <p>Git</p>
              </div>
            </div>
          </div>
          <div className='database-container'>
            <h1>Databases</h1>
            <div className='row'>
              <div className='skill-box database-box firebase'>
                <div className='img-container'>
                  <img className='firebase-img' src={firebase} alt="Firebase" />
                </div>
                <p>Firebase</p>
              </div>
              <div className='skill-box database-box mongodb'>
                <div className='img-container'>
                  <img className='mongodb-img' src={mongodb} alt="MongoDB" />
                </div>
                <p>MongoDB</p>
              </div>
            </div>
          </div>
        </div>
      </Slide>
    </div>
  )
}

export default Resume
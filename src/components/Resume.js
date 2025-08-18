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
import typescript from './images/typescript.png'

// Framework Imports
import react from './images/react.png'
import angular from './images/angular.png'
import dotnet from './images/dot-net.png'
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
import sqlserver from './images/sql-server.png'
import firebase from './images/firebase.png'
import mongodb from './images/mongodb.png'

// Certification Imports
import atnt from './images/atnt.png';

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
                <p>GPA: 4.0</p>
              </div>
              <div className='coursework'>
                <h4>Coursework:</h4>
                <ul className='coursework-list'>
                  <li>Machine Learning</li>
                  <li>Operating Systems</li>
                  <li>Advanced Computer Organization</li>
                  <li>Algorithms</li>
                  <li>Intro to Artificial Intelligence</li>
                  <li>Systems and Networks</li>
                  <li>Data Structures</li>
                  <li>Linear Algebra</li>
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
              <div className='skill-box language-box left'>
                <div className='img-container'>
                  <img className='java-img logo' src={java} alt="Java" />
                </div>
                <div className='title-container'>
                  <p className='java-title logo-title'>Java</p>
                </div>
              </div>
              <div className='skill-box language-box right'>
                <div className='img-container'>
                  <img className='c-sharp-img logo' src={csharp} alt="C#" />
                </div>
                <div className='title-container'>
                  <p className='csharp-title logo-title'>C#</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className='skill-box language-box left'>
                <div className='img-container'>
                  <img className='c-img logo' src={c} alt="C" />
                </div>
                <div className='title-container'>
                  <p className='c-title logo-title'>C</p>
                </div>
              </div>
              <div className='skill-box language-box right'>
                <div className='img-container'>
                  <img className='python-img logo' src={python} alt="Python" />
                </div>
                <div className='title-container'>
                  <p className='python-title logo-title'>Python</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className='skill-box language-box left'>
                <div className='img-container'>
                  <img className='javascript-img logo' src={javascript} alt="JavaScript" />
                </div>
                <div className='title-container'>
                  <p className='javascript-title logo-title'>JavaScript</p>
                </div>
              </div>
              <div className='skill-box language-box right'>
                <div className='img-container'>
                  <img className='typescript-img logo' src={typescript} alt="TypeScript" />
                </div>
                <div className='title-container'>
                  <p className='typescript-title logo-title'>TypeScript</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className='skill-box language-box left'>
                <div className='img-container'>
                  <img className='html-img logo' src={html} alt="HTML5" />
                </div>
                <div className='title-container'>
                  <p className='html-title logo-title'>HTML5</p>
                </div>
              </div>
              <div className='skill-box language-box right'>
                <div className='img-container'>
                  <img className='css-img logo' src={css} alt="CSS" />
                </div>
                <div className='title-container'>
                  <p className='css-title logo-title'>CSS3</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className='skill-box language-box left bottom'>
                <div className='img-container'>
                  <img className='xml-img logo' src={xml} alt="XML" />
                </div>
                <div className='title-container'>
                  <p className='xml-title logo-title'>XML</p>
                </div>
              </div>
              <div className='skill-box language-box right bottom hidden'>
                <div className='img-container'>
                  <img className='empty-img logo' src={xml} alt="EMPTY" />
                </div>
                <div className='title-container'>
                  <p className='empty-title logo-title'>EMPTY</p>
                </div>
              </div>
            </div>
          </div>
          <div className='framework-container'>
            <h1>Frameworks</h1>
            <div className='row'>
              <div className='skill-box framework-box left'>
                <div className='img-container'>
                  <img className='react-img logo' src={react} alt="React" />
                </div>
                <div className='title-container'>
                  <p className='react-title logo-title'>React</p>
                </div>
              </div>
              <div className='skill-box framework-box right'>
                <div className='img-container'>
                  <img className='angular-img logo' src={angular} alt="Angular" />
                </div>
                <div className='title-container'>
                  <p className='angular-title logo-title'>Angular</p>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='skill-box framework-box left'>
                <div className='img-container'>
                  <img className='node-img logo' src={node} alt="Node.js" />
                </div>
                <div className='title-container'>
                  <p className='node-title logo-title'>Node.js</p>
                </div>
              </div>
              <div className='skill-box framework-box right'>
                <div className='img-container'>
                  <img className='dotnet-img logo' src={dotnet} alt=".NET" />
                </div>
                <div className='title-container'>
                  <p className='dotnet-title logo-title'>.NET</p>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='skill-box framework-box left'>
                <div className='img-container'>
                  <img className='websockets-img logo' src={websocket} alt="Websockets" />
                </div>
                <div className='title-container'>
                  <p className='websockets-title logo-title'>Websockets</p>
                </div>
              </div>
              <div className='skill-box framework-box right'>
                <div className='img-container'>
                  <img className='express-img logo' src={express} alt="Express" />
                </div>
                <div className='title-container'>
                  <p className='express-title logo-title'>Express</p>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='skill-box framework-box left bottom'>
                <div className='img-container'>
                  <img className='flutter-img logo' src={flutter} alt="Flutter" />
                </div>
                <div className='title-container'>
                  <p className='flutter-title logo-title'>Flutter</p>
                </div>
              </div>
              <div className='skill-box framework-box right bottom'>
                <div className='img-container'>
                  <img className='bootstrap-img logo' src={bootstrap} alt="Bootstrap" />
                </div>
                <div className='title-container'>
                  <p className='bootstrap-title logo-title'>Bootstrap</p>
                </div>
              </div>
            </div>
          </div>
          <div className='software-container'>
            <h1>Software</h1>
            <div className='row'>
              <div className='skill-box software-box left'>
                <div className='img-container'>
                  <img className='androidStudio-img logo' src={androidStudio} alt="Android Studio" />
                </div>
                <div className='title-container'>
                  <p className='androidStudio-title logo-title'>Android Studio</p>
                </div>
              </div>
              <div className='skill-box software-box right'>
                <div className='img-container'>
                  <img className='unity-img logo' src={unity} alt="Unity" />
                </div>
                <div className='title-container'>
                  <p className='unity-title logo-title'>Unity</p>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='skill-box software-box left'>
                <div className='img-container'>
                  <img className='godot-img logo' src={godot} alt="Godot" />
                </div>
                <div className='title-container'>
                  <p className='godot-title logo-title'>Godot</p>
                </div>
              </div>
              <div className='skill-box software-box right'>
                <div className='img-container'>
                  <img className='postman-img logo' src={postman} alt="Postman" />
                </div>
                <div className='title-container'>
                  <p className='postman-title logo-title'>Postman</p>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='skill-box software-box left bottom'>
                <div className='img-container'>
                  <img className='sonarqube-img logo' src={sonarqube} alt="SonarQube" />
                </div>
                <div className='title-container'>
                  <p className='sonarqube-title logo-title'>SonarQube</p>
                </div>
              </div>
              <div className='skill-box software-box right bottom'>
                <div className='img-container'>
                  <img className='git-img logo' src={git} alt="Git" />
                </div>
                <div className='title-container'>
                  <p className='git-title logo-title'>Git</p>
                </div>
              </div>
            </div>
          </div>
          <div className='database-container'>
            <h1>Databases</h1>
            <div className='row'>
              <div className='skill-box database-box left'>
                <div className='img-container'>
                  <img className='sqlserver-img logo' src={sqlserver} alt="SQL Server" />
                </div>
                <div className='title-container'>
                  <p className='sqlserver-title logo-title'>SQL Server</p>
                </div>
              </div>
              <div className='skill-box database-box right'>
                <div className='img-container'>
                  <img className='mongodb-img logo' src={mongodb} alt="MongoDB" />
                </div>
                <div className='title-container'>
                  <p className='mongodb-title logo-title'>MongoDB</p>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='skill-box database-box bottom left'>
                <div className='img-container'>
                  <img className='firebase-img logo' src={firebase} alt="Firebase" />
                </div>
                <div className='title-container'>
                  <p className='firebase-title logo-title'>Firebase</p>
                </div>
              </div>
              <div className='skill-box database-box right bottom hidden'>
                <div className='img-container'>
                  <img className='empty-img logo' src={mongodb} alt="Empty" />
                </div>
                <div className='title-container'>
                  <p className='empty-title logo-title'>EMPTY</p>
                </div>
              </div>
            </div>
          </div>
          <div className='certifications-container'>
            <h1>Certifications</h1>
            <div className='row'>
              <div className='full-skill-box certification-box left right bottom'>
                <div className='full-img-container'>
                  <img className='atnt-img logo' src={atnt} alt="AT&T Technology Academy" />
                </div>
                <div className='title-container'>
                  <p className='atnt-title logo-title'>AT&T Technology Academy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slide>
    </div>
  )
}

export default Resume
import React from 'react'
import './Portfolio.css'
import portfolioSite from './images/portfolio-site.png'
import ecomaniacsSite from './images/ecomaniacs-site.png'
import projectgiftSite from './images/projectgift-site.png'
import caveEscapeGame from './images/caveescape-game.png'

import { Fade } from "react-awesome-reveal";

const Portfolio = () => {
  return (
    <Fade>
      <div className='portfolio' id='portfolio'>
        <div className='project-container'>
          <h1 className='portfolio-title'>Portfolio</h1>
          <div className='row-1'>
            <div className='project project-1'>
              <div className='project-image'>
                <img className='img-1' src={portfolioSite} alt="Portfolio Website" />
              </div>
              <div className='project-content content-1'>
                <h1 className='project-title'>Portfolio Website</h1>
                <p className='project-description'>This is the website you are on right now!  This website was coded using the React framework, and all the styling and animations were done using CSS.</p>
              </div>
              <div className='project-buttons button-1'>
                <button className='project-link'
                onClick={() => window.location.href = '/'}>
                  View Project
                </button>
                <button className='github-link'
                onClick={() => window.location.href = 'https://github.com/qwerty111i/portfolio'}>
                  View GitHub
                </button>
              </div>
            </div>
            <div className='project project-2'>
              <div className='project-image'>
                <img className='img-2' src={ecomaniacsSite} alt="Eco-Maniacs Website" />
              </div>
              <div className='project-content content-2'>
                <h1 className='project-title'>Eco-Maniacs Website</h1>
                <p className='project-description'>This website is developed for a club called The Eco-Maniacs.  Its primary purpose is to bring in new members for this environmental focused organization.  The website was designed using the Bootstrap framework, and has unique design features like parallax.</p>
              </div>
              <div className='project-buttons button-2'>
                <button className='project-link'
                onClick={() => window.location.href = 'https://ecomaniacs.bss.design/'}>
                  View Project
                </button>
                <button className='github-link'
                onClick={() => window.location.href = 'https://github.com/qwerty111i/ecomaniacs'}>
                  View GitHub
                </button>
              </div>
            </div>
          </div>
          <div className='row-2'>
            <div className='project project-3'>
              <div className='project-image'>
                <img className='img-3' src={projectgiftSite} alt="4H Project Gift Website" />
              </div>
              <div className='project-content content-3'>
                <h1 className='project-title'>4H Project Gift Website</h1>
                <p className='project-description'>The Project Gift website is designed for an organization that was looking to collect donations during Covid.  These donations would be used to buy gifts for children with parents that cannot afford to do so.  It was designed using HTML, CSS, and JavaScript for the animations.</p>
              </div>
              <div className='project-buttons button-3'>
                <button className='project-link'
                onClick={() => window.location.href = 'https://project-gift.onrender.com/'}>
                  View Project
                </button>
                <button className='github-link'
                onClick={() => window.location.href = 'https://github.com/qwerty111i/projectgift.github.io'}>
                  View GitHub
                </button>
              </div>
            </div>
            <div className='project project-4'>
              <div className='project-image'>
                <img className='img-4' src={caveEscapeGame} alt="Cave Escape Game" />
              </div>
              <div className='project-content content-4'>
                <h1 className='project-title'>Cave Escape Game</h1>
                <p className='project-description'>This is a showcase game created using Godot, and programmed with GDScript.  It is a maze game, where the player has to collect the reward before getting run over by a boulder.  The browser showcase is slightly glitchy</p>
              </div>
              <div className='project-buttons button-4'>
                <button className='project-link'
                onClick={() => window.location.href = 'https://gamedevelopmentclub-team.github.io/Demo/'}>
                  View Project
                </button>
                <button className='github-link'
                onClick={() => window.location.href = 'https://github.com/GameDevelopmentClub-Team/Demo'}>
                  View GitHub
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  )
}

export default Portfolio
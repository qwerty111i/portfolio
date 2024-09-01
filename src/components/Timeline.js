import React, { useState, useEffect } from 'react'
import './Timeline.css'

import { Slide } from "react-awesome-reveal";

const Timeline = () => {
    
    const [mobileView, setMobileView] = useState(window.innerWidth <= 850);
    useEffect(() => {
        const handleResize = () => {
            setMobileView(window.innerWidth <= 850);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

  return (
    <div className='timeline-container'>
        <h1 className='timeline-title time-title'>Work Experience and Projects</h1>
        <div className='timeline'>
            <div className='timeline-item'>
                <div className='timeline-circle c1' />
                <Slide direction="right" triggerOnce>
                    <div className='timeline-content'>
                        <p className='timeline-date'>December 2023 - May 2024</p>
                        <h2 className='timeline-title'>Edison High School</h2>
                        <h3 className='timeline-position'>Teacher</h3>
                        <ul className='timeline-description'>
                            <li>Worked with students to elevate their musical abilities and prepare them for success in competitions.</li>
                            <li>Fostered an inclusive learning environment where student voices are heard and suggestions are implemented.</li>
                            <li>Coached students through high-pressure scenarios in order to prepare for competitions against other schools.</li>
                        </ul>
                    </div>
                </Slide>
            </div>
            <div className='timeline-item'>
                <div className='timeline-circle c2' />
                <Slide direction={mobileView ? 'right' : 'left'} triggerOnce>
                    <div className='timeline-content'>
                        <p className='timeline-date'>June 2022 - August 2022</p>
                        <h2 className='timeline-title'>TechUnison</h2>
                        <h3 className='timeline-position'>Intern</h3>
                        <ul className='timeline-description'>
                            <li>Engaged in designing and coding various parts of an education application for the company using Flutter.</li>
                            <li>Conceptualized unique design styles to make the education application more engaging to the end user.</li>
                            <li>Corresponded with team leads in the company to make various changes to the work as necessary.</li>
                        </ul>
                    </div>
                </Slide>
            </div>
            <div className='timeline-item'>
                <div className='timeline-circle c3' />
                <Slide direction="right" triggerOnce>
                    <div className='timeline-content'>
                        <p className='timeline-date'>August 2021</p>
                        <h2 className='timeline-title'>4H Eco-Maniacs Website</h2>
                        <h3 className='timeline-position'>Developer</h3>
                        <ul className='timeline-description'>
                            <li>Developed a website for an organization sponsored by Rutgers that is focused on environmental community service using parallax, HTML, and Bootstrap studio.</li>
                            <li>Customized each page of the website in order to attract new members to join the organization and provide information about the activities of the club.</li>
                        </ul>
                    </div>
                </Slide>
            </div>
            <div className='timeline-item'>
                <div className='timeline-circle c4' />
                <Slide direction={mobileView ? 'right' : 'left'} triggerOnce>
                    <div className='timeline-content'>
                        <p className='timeline-date'>May 2021</p>
                        <h2 className='timeline-title'>4H Project Gift Website</h2>
                        <h3 className='timeline-position'>Developer</h3>
                        <ul className='timeline-description'>
                            <li>Collaborated with an organization that buys gifts for children during Christmas in an effort to bring in additional donations to buy more gifts.</li>
                            <li>Designed a website to bring in donations for the organization using HTML, CSS, and Javascript.</li>
                            <li>Adapted the website to work on mobile and desktop, and displayed testimonials from volunteers.</li>
                            <li>Researched various hosting methods to reduce the overall cost of running the website, and updated the website whenever necessary.</li>
                        </ul>
                    </div>
                </Slide>
            </div>
        </div>
    </div>
  )
}

export default Timeline
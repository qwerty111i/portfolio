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
        <h1 className='timeline-title time-title'>Work Experience</h1>
        <div className='timeline'>
            <div className='timeline-item'>
                <div className='timeline-circle c1' />
                <Slide direction="right" triggerOnce>
                    <div className='timeline-content'>
                        <p className='timeline-date'>May 2025 - July 2025</p>
                        <h2 className='timeline-title'>Legal Services of New Jersey</h2>
                        <h3 className='timeline-position'>Software Engineer</h3>
                        <ul className='timeline-description'>
                            <li>Developed a lightweight .NET Core microservice that connects to SQL Server and exposes secure REST endpoints</li>
                            <li>Automated content migration by writing C# web scrapers that pull data from legacy pages, publish the content to Umbraco CMS, and upload documents to OpenKM DMS</li>
                            <li>Built responsive Angular components that render Umbraco content seamlessly across devices, improving the user experience</li>
                        </ul>
                    </div>
                </Slide>
            </div>
            <div className='timeline-item'>
                <div className='timeline-circle c2' />
                <Slide direction={mobileView ? 'right' : 'left'} triggerOnce>
                    <div className='timeline-content'>
                        <p className='timeline-date'>Dec. 2023 - May 2024</p>
                        <h2 className='timeline-title'>Edison High School</h2>
                        <h3 className='timeline-position'>Teacher</h3>
                        <ul className='timeline-description'>
                            <li>Worked with students to elevate their musical abilities and prepare them for success in competitions</li>
                            <li>Fostered an inclusive learning environment where student voices are heard and suggestions are implemented</li>
                            <li>Coached students through high-pressure scenarios in order to prepare for competitions against other schools</li>
                        </ul>
                    </div>
                </Slide>
            </div>
            <div className='timeline-item'>
                <div className='timeline-circle c1' />
                <Slide direction="right" triggerOnce>
                    <div className='timeline-content'>
                        <p className='timeline-date'>June 2022 - August 2022</p>
                        <h2 className='timeline-title'>TechUnison</h2>
                        <h3 className='timeline-position'>Intern</h3>
                        <ul className='timeline-description'>
                            <li>Enhanced the user interface of an education application by designing and implementing visually appealing and user-friendly components using Flutter</li>
                            <li>Conceptualized unique design styles to make the education application more engaging to the end user</li>
                            <li>Collaborated with team leads and made various changes to the design based on real-time feedback</li>
                        </ul>
                    </div>
                </Slide>
            </div>
        </div>
    </div>
  )
}

export default Timeline
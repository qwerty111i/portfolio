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
                        <p className='timeline-date'>June 2026 - August 2026</p>
                        <h2 className='timeline-title'>Accenture</h2>
                        <h3 className='timeline-position'>Technology Architecture Analyst</h3>
                        <ul className='timeline-description'>
                            <li>Engineered an automated contract compliance AI workflow for a Fortune 100 pharmaceutical client using GPT-4o REST APIs, anti-hallucination layers, prompt guardrails, and JSON schema enforcement, reducing manual review time by 90%</li>
                            <li>Developed a full-stack React and TypeScript web application for automated timesheet tracking, using debounced saves and custom state management to reduce user friction and improve submission compliance</li>
                            <li>Built logging and error handling pipelines across API endpoints to track run metrics, implementing static fallbacks that maintain 99.9% system uptime during third-party AI outages</li>
                        </ul>
                    </div>
                </Slide>
            </div>
            <div className='timeline-item'>
                <div className='timeline-circle c2' />
                <Slide direction={mobileView ? 'right' : 'left'} triggerOnce>
                    <div className='timeline-content'>
                        <p className='timeline-date'>January 2026 - Present</p>
                        <h2 className='timeline-title'>CS 2200: Systems & Networks</h2>
                        <h3 className='timeline-position'>Senior Undergraduate Teaching Assistant</h3>
                        <ul className='timeline-description'>
                            <li>Facilitated instruction of over 400 students in a core systems course, introducing concepts like virtual memory, pipelining, scheduling, multithreading, and file systems</li>
                            <li>Engineered a bi-directional transpilation pipeline in Python that parses Canvas QTI item banks into a custom intermediate representation (IR), serializes questions into editable Markdown documents, and compiles them into New Canvas Quiz packages, reducing manual exam creation time by 90%</li>
                            <li>Developed interactive visualizations using React and TypeScript to simulate complex memory hierarchy concepts such as virtual memory and caching</li>
                        </ul>
                    </div>
                </Slide>
            </div>
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
                <div className='timeline-circle c4' />
                <Slide direction={mobileView ? 'right' : 'left'} triggerOnce>
                    <div className='timeline-content'>
                        <p className='timeline-date'>December 2023 - May 2024</p>
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
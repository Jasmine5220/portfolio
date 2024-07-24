import React, { useEffect } from 'react';
import './Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, 
            once: false, 
        });
    }, []);

    const projectList = [
        {
            number: 1,
            title: "EyeOn Suspicious Activity Tracker",
            description: "Machine learning model with responsive frontend to detect suspicious activities. (Nov '23 - July '24)",
            github: "https://github.com/Jasmine5220/suspicious-activity-tracker"
        },
        {
            number: 2,
            title: "Myntra Virtual Fashion Show",
            description: "Advanced MERN stack project integrating user authentication, outfit browsing, and interactive features. (July '24)",
            github: "https://github.com/your-repo/myntra-virtual-fashion-show"
        },
        {
            number: 3,
            title: "Portfolio Website",
            description: "Responsive portfolio website using ReactJS and CSS. (January '24)",
            github: "https://github.com/Jasmine5220/portfolio"
        },

        {
            number: 4,
            title: "AudioArtistry",
            description: "E-commerce platform for musical instrument enthusiasts with user-centric design. (July '24)",
            github: "https://github.com/Jasmine5220/audio-artistry"
        }
    ];

    return (
        <div id="projects" className="projects-section">
            <div className="top-section" data-aos="fade-up">
                <h2>Projects</h2>
                <p>Over the last two years, I've learned and upskilled myself with hands-on experience on these projects. <br></br>🚀 Here's a look at what I've been working on:</p>
            </div>
            <div className="bottom-section">
                {projectList.map(project => (
                    <div key={project.number} className="project-card" data-aos="fade-up" data-aos-offset="200">
                        <div className="project-header">
                            <h3>{project.title}</h3>
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithub} className="github-icon" />
                            </a>
                        </div>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;

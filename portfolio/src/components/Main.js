import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import Typewriter from 'react-typewriter-effect';
import './Main.css';

const Main = () => {
    const scrollToSection = (section) => {
        document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="hero">
            <div className="hero__content">
                <h2 className="hero__greeting">hey ! i am</h2>
                <h1 className="hero__name">j a s m i n e &nbsp;&nbsp;j a y a s w a l</h1>
                
                <div className="hero__typewriter">
                    <Typewriter
                        textStyle={{
                            fontFamily: 'Arial',
                            color: '#fff',
                            fontWeight: 'normal',
                            fontSize: '1.15em',
                        }}
                        startDelay={100}
                        cursorColor="#3F3D56"
                        multiText={[
                            'Full Stack Development | Machine Learning Enthusiast',
                            'Currently exploring the realms of AI and ML',
                            'Passionate about creating meaningful applications',
                        ]}
                        multiTextDelay={1000}
                        typeSpeed={50}
                        deleteSpeed={50}
                        loop={true}
                    />
                </div>

                <nav className="hero__nav">
                    <button onClick={() => scrollToSection('about')}>about →</button>
                    <button onClick={() => scrollToSection('experience')}>experience →</button>
                    <button onClick={() => scrollToSection('projects')}>projects →</button>
                    <button onClick={() => scrollToSection('contact')}>contact →</button>
                </nav>

                <div className="hero__social">
                    <a 
                        href="https://www.linkedin.com/in/jasmine-jayaswal-3b3181251/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                    >
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                    <a 
                        href="https://github.com/Jasmine5220" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                    >
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                </div>
            </div>

            <div className="hero__image">
                <img src="./prospect1.png" alt="Profile illustration" />
            </div>
        </section>
    );
};

export default Main;
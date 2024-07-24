import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import Typewriter from 'react-typewriter-effect';
import './Main.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Main = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
        });
    }, []);

    const scrollToSection = (section) => {
        document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="main-section-unique" data-aos="fade-up">
            <div className="text-content-unique" data-aos="fade-right">
                <h2 className='titleee'>hey ! i am</h2>
                <h1>j a s m i n e&nbsp;&nbsp;j a y a s w a l</h1>
                <Typewriter
                    textStyle={{
                        fontFamily: 'Arial',
                        color: '#000',
                        fontWeight: 'normal',
                        fontSize: '1.15em',
                    }}
                    startDelay={100}
                    cursorColor="#3F3D56"
                    multiText={[
                        '🚀 Full Stack Development | Machine Learning Enthusiast',
                        '🌱 Currently exploring the realms of AI and ML',
                        '💡 Passionate about creating meaningful applications',
                    ]}
                    multiTextDelay={1000}
                    typeSpeed={50}
                    deleteSpeed={50}
                    loop={true}
                />
                <div className="main-buttons-unique" data-aos="fade-up">
                    <button onClick={() => scrollToSection('about')}>about →</button>
                    <button onClick={() => scrollToSection('experience')}>experience →</button>
                    <button onClick={() => scrollToSection('projects')}>projects →</button>
                    <button onClick={() => scrollToSection('contact')}>contact →</button>
                </div>
                <div className="top-icons" data-aos="fade-left">
                    <a href="https://www.linkedin.com/in/jasmine-jayaswal-3b3181251/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                    <a href="https://github.com/Jasmine5220" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                    <a href="https://leetcode.com/u/sabmohmaayahai/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faCode} size="2x" />
                    </a>
                </div>
            </div>
            <img src='./side.gif' alt="Right Side Illustration" className="image-unique" data-aos="fade-left" />
        </div>
    );
};

export default Main;

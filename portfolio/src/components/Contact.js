import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faHackerrank } from '@fortawesome/free-brands-svg-icons';
import { FaCode } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    return (
        <div id='contact' className="contact-container" data-aos="fade-up">
            <div className="contact-content">
                <div className="contact-links" data-aos="fade-right">
                    <h1 className="contact-title">Let's Connect</h1>
                    <p>
                        <a href="https://www.linkedin.com/in/jasmine-jayaswal-3b3181251/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} /> Linkedin
                        </a>
                    </p>
                    <p>
                        <a href="https://github.com/Jasmine5220" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} /> Github
                        </a>
                    </p>
                    <p>
                        <a href="https://leetcode.com/u/sabmohmaayahai/" target="_blank" rel="noopener noreferrer">
                            <FaCode /> LeetCode
                        </a>
                    </p>
                    <p>
                        <a href="https://www.hackerrank.com/profile/jasminej5220" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faHackerrank} /> HackerRank
                        </a>
                    </p>
                    <p>
                        <a href="https://www.codechef.com/users/jasmine5220" target="_blank" rel="noopener noreferrer">
                            <FaCode /> CodeChef
                        </a>
                    </p>
                </div>
                <div className="contact-image" data-aos="fade-left">
                    <img src='./side.gif' alt="Contact" />
                </div>
            </div>
        </div>
    );
}

export default Contact;

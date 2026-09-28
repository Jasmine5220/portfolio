import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faHackerrank } from '@fortawesome/free-brands-svg-icons';
import { FaCode } from 'react-icons/fa';
import './Contact.css';

const PARTICLES = Array.from({ length: 14 }, (_, i) => i);
const SPARKLES = [
    { top: '12%', left: '9%', size: '1.2rem' },
    { top: '20%', right: '13%', size: '1rem' },
    { top: '55%', left: '6%', size: '1.1rem' },
    { top: '66%', right: '9%', size: '1.3rem' },
    { top: '84%', left: '45%', size: '1rem' },
];

const Contact = ({ isDark }) => {
    const sectionRef = useRef(null);

    return (
        <div
            id="contact"
            className="contact-container"
            data-theme={isDark ? 'dark' : 'light'}
            ref={sectionRef}
        >
            <div className="contact-grid" aria-hidden="true" />
            <div className="contact-particles" aria-hidden="true">
                {PARTICLES.map((i) => (
                    <span key={i} className="particle" style={{
                        left: `${(i * 43) % 100}%`,
                        animationDelay: `${(i % 9) * 0.9}s`,
                        animationDuration: `${8 + (i % 5) * 2}s`,
                    }} />
                ))}
                {SPARKLES.map((s, i) => (
                    <span
                        key={i}
                        className="sparkle"
                        style={{ top: s.top, left: s.left, right: s.right, fontSize: s.size, animationDelay: `${i * 0.7}s` }}
                    >
                        ✦
                    </span>
                ))}
            </div>
            <p className="contact-signoff" data-aos="fade-up">that's all for now :)</p>
            <p className="contact-prompt" data-aos="fade-up" data-aos-delay="90">
                if you want to connect
            </p>
            <span className="contact-arrow" data-aos="fade-up" data-aos-delay="180">↓</span>

            <a className="contact-email" href="mailto:jasminej5220@gmail.com" data-aos="fade-up" data-aos-delay="270">
                jasminej5220@gmail.com
            </a>

            <div className="contact-links">
                <a href="https://www.linkedin.com/in/jasmine-jayaswal-3b3181251/" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="360">
                    <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
                </a>
                <a href="https://github.com/Jasmine5220" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="420">
                    <FontAwesomeIcon icon={faGithub} /> GitHub
                </a>
                <a href="https://leetcode.com/u/sabmohmaayahai/" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="480">
                    <FaCode /> LeetCode
                </a>
                <a href="https://www.hackerrank.com/profile/jasminej5220" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="540">
                    <FontAwesomeIcon icon={faHackerrank} /> HackerRank
                </a>
            </div>

            <p className="contact-footer" data-aos="fade-up" data-aos-delay="600">
                © Jasmine {new Date().getFullYear()}
            </p>
        </div>
    );
};

export default Contact;

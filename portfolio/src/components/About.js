import React, { useEffect } from 'react';
import Skills from './Skills';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import './About.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const milliseconds = new Date().getTime() - new Date('01/27/2003').getTime();
  const age = Math.floor(milliseconds / 1000 / 60 / 60 / 24 / 365);

  return (
    <section id="about" className="about-section">
      <div className="about-skills">
        <div className="about" data-aos="fade-right">
          <h2>About</h2>
          <p>
            Hey there! 👋 I'm a {age}-year-old passionate coder with a knack for creating innovative solutions and bringing ideas to life. 💡 Learning Java, Python, React, Flask, and scikit-learn, I'm always up for a challenge and eager to dive into the world of technology. 🚀
          </p>
          <p>
            When I'm not coding, you can catch me working on web dev projects, participating in hackathons, or exploring the latest tech trends. 🌐 I believe in the power of collaboration and am always looking for opportunities to learn and grow with like-minded enthusiasts. 🤝
          </p>
          <p>
            Outside of tech, I love playing musical instruments 🎸 and hitting the table tennis court 🏓. These hobbies keep me balanced and inspired. ✨
          </p>
          <div className="social-links">
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
        <div className="skills" data-aos="fade-left">
          <h2 style={{ textAlign: 'center' }}>Skills</h2>
          <Skills />
        </div>
      </div>
    </section>
  );
}

export default About;


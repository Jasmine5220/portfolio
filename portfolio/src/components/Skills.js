import React, { useEffect } from 'react';
import { IoMdPlay } from "react-icons/io";
import './Skills.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Skills() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation
      once: false, // Whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <div className="skills-container">
      {/* Languages */}
      <div className="skills-category" data-aos="fade-up">
        <div className="category-title">
          <IoMdPlay className="icon" />
          <p className="title">Languages</p>
        </div>

        {/* Proficient */}
        <div className="skills-row proficient-row">
          <div className="skill-item proficient">Java</div>
          <div className="skill-item proficient">Python</div>
          <div className="skill-item proficient">JavaScript</div>
          <div className="skill-item proficient">SQL</div>
        </div>

        {/* Intermediate */}
        <div className="skills-row intermediate-row">
          <div className="skill-item intermediate">C</div>
          <div className="skill-item intermediate">CPP</div>
          <div className="skill-item intermediate">Shell Scripting</div>
        </div>
      </div>

      {/* Frameworks */}
      <div className="skills-category" data-aos="fade-up">
        <div className="category-title">
          <IoMdPlay className="icon" />
          <p className="title">Frameworks/Libraries</p>
        </div>

        {/* Proficient */}
        <div className="skills-row proficient-row">
          <div className="skill-item proficient">ReactJS</div>
          <div className="skill-item proficient">Flask</div>
          <div className="skill-item proficient">Node.js</div>
          <div className="skill-item proficient">Express.js</div>
          <div className="skill-item proficient">MySQL</div>
        </div>

        {/* Intermediate */}
        <div className="skills-row intermediate-row">
          <div className="skill-item intermediate">Scikit-learn</div>
          <div className="skill-item intermediate">Pytorch</div>
        </div>

        {/* Beginner */}
        <div className="skills-row beginner-row">
          <div className="skill-item beginner">TensorFlow</div>
        </div>
      </div>

      {/* Tools */}
      <div className="skills-category" data-aos="fade-up">
        <div className="category-title">
          <IoMdPlay className="icon" />
          <p className="title">Tools</p>
        </div>

        {/* Proficient */}
        <div className="skills-row proficient-row">
          <div className="skill-item proficient">Visual Studio Code</div>
          <div className="skill-item proficient">Git</div>
          <div className="skill-item proficient">MongoDB</div>
        </div>

        {/* Intermediate */}
        <div className="skills-row intermediate-row">
          <div className="skill-item intermediate">Figma</div>
          <div className="skill-item intermediate">Canva</div>
        </div>
      </div>
    </div>
  );
}

export default Skills;

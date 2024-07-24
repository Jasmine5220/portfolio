import React, { useEffect } from 'react';
import './Experience.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Experience = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Duration of the animation
            once: false, // Whether animation should happen only once - while scrolling down
        });
    }, []);

    return (
        <div id="experience" className="experience-section">
            <h2 className="section-title" data-aos="fade-up">Experience</h2>
            <div className="experience-content experience-left" data-aos="fade-right">
                <div className="experience-item">
                    <img src='./amazon.png' alt="Amazon Logo" className="experience-logo" />
                    <div className="experience-details">
                        <h3>Mentee - Amazon ML Summer School</h3>
                        <p>Online - July 2024</p>
                        <p>Participated in Amazon ML Summer School to learn advanced machine learning concepts and their real-world applications.</p>
                    </div>
                </div>
            </div>
            <h2 className="section-title" data-aos="fade-up">Volunteer Experience</h2>
            <div className="experience-content experience-centered">
                <div className="experience-item" data-aos="fade-right">
                    <img src='./volunteer.png' alt="Volunteer Icon" className="experience-logo" />
                    <div className="experience-details">
                        <h3>Student Guide - IIITDMJ Counselling Committee</h3>
                        <p>Sept 2023 - Feb 2024</p>
                        <p>Assistance and guidance to 20+ juniors with academic and related doubts.</p>
                    </div>
                </div>
                <div className="experience-item" data-aos="fade-left">
                    <img src='./tt.png' alt="Table Tennis Icon" className="experience-logo" />
                    <div className="experience-details">
                        <h3>Table Tennis Girls Captain</h3>
                        <p>Aug 2023 - Present</p>
                        <p>Girls Captain of table tennis club, won gold in inter IIIT sports meet 2023, won 5+ gold medals in past events.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;

import React, { useRef } from 'react';
import Skills from './Skills';
import './About.css';

const PARTICLES = Array.from({ length: 14 }, (_, i) => i);
const SPARKLES = [
  { top: '14%', left: '10%', size: '1.2rem' },
  { top: '22%', right: '14%', size: '1rem' },
  { top: '58%', left: '6%', size: '1.3rem' },
  { top: '72%', right: '8%', size: '1.1rem' },
];

function About({ isDark }) {
  const sectionRef = useRef(null);

  return (
    <section
      id="about"
      className="about-section"
      data-theme={isDark ? 'dark' : 'light'}
      ref={sectionRef}
    >
      <div className="about-grid" aria-hidden="true" />
      <div className="about-particles" aria-hidden="true">
        {PARTICLES.map((i) => (
          <span key={i} className="particle" style={{
            left: `${(i * 37) % 100}%`,
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
      <div className="about-skills">
        <div className="about">
          <h2 className="about-heading" data-aos="fade-up">
            a little about <span className="about-heading__accent">me</span>
          </h2>

          <p className="about-lede" data-aos="fade-up" data-aos-delay="90">hey :)</p>
          <p data-aos="fade-up" data-aos-delay="180">
            CSE '26 @ IIITDM Jabalpur grad, now a software engineer intern @{' '}
            <mark className="hl hl--amber">Mindtickle.</mark>
          </p>
          <p data-aos="fade-up" data-aos-delay="270">
            I like <mark className="hl hl--purple">building</mark> things, exploring new ideas,
            and <mark className="hl hl--amber">learning</mark> along the way.
          </p>
          <p data-aos="fade-up" data-aos-delay="360">
            I've built a bunch of <mark className="hl hl--purple">projects,</mark> and still make
            things just because I can.
          </p>
          <p data-aos="fade-up" data-aos-delay="450">
            Apart from that, talk to me about{' '}
            <span className="squiggle">sports, music, new tech advances or literally anything interesting.</span>
          </p>
        </div>
        <div className="skills">
          <Skills isDark={isDark} />
        </div>
      </div>
    </section>
  );
}

export default About;

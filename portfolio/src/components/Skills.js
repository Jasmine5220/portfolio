import React from 'react';
import './Skills.css';
import { FaTools, FaDesktop, FaGraduationCap, FaDice, FaShieldAlt } from 'react-icons/fa';

// Keep in sync with the outer <circle r="144"> in the orbit SVG below (both
// live in a 300x300 box, so a percent-of-box radius maps 1:1 to SVG units).
const PIN_RADIUS_PCT = 48;

const pinOnRing = (angleDeg) => {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    left: `${50 + PIN_RADIUS_PCT * Math.cos(rad)}%`,
    top: `${50 + PIN_RADIUS_PCT * Math.sin(rad)}%`,
  };
};

const BUILD_CATEGORIES = [
  { key: 'useful-things', label: 'things with purpose', icon: FaTools, caption: 'products that solve actual problems', angle: 234, side: 'left', featured: false },
  { key: 'thoughtful-interfaces', label: 'thoughtful interfaces', icon: FaDesktop, caption: 'simple, intuitive, slightly delightful', angle: 306, side: 'right' },
  { key: 'things-that-teach', label: 'things that teach', icon: FaGraduationCap, caption: 'projects that make me learn something new', angle: 18, side: 'right' },
  { key: 'weird-little-ideas', label: 'weird little ideas', icon: FaDice, caption: "because not everything needs a reason", angle: 162, side: 'left' },
  { key: 'things-that-last', label: 'things that last', icon: FaShieldAlt, caption: 'good engineering > quick hacks', angle: 90, side: 'bottom' },
];

const TOOL_CATEGORIES = [
  { key: 'frontend', label: 'frontend', items: ['ReactJS', 'React Native', 'TypeScript', 'JavaScript', 'HTML / CSS'] },
  { key: 'backend', label: 'backend', items: ['Node.js', 'GraphQL', 'gRPC', 'REST APIs', 'Microservices', 'Django', 'ExpressJS'] },
  { key: 'data', label: 'data', items: ['PostgreSQL', 'MongoDB', 'Redis', 'DynamoDB'] },
  { key: 'cloud', label: 'cloud & devops', items: ['AWS', 'Azure', 'AWS Lambda', 'Docker', 'CI/CD'] },
  { key: 'ai-tools', label: 'ai & dev tools', items: ['Claude', 'Cursor', 'Codex', 'Antigravity', 'OpenAI API', 'Copilot', 'Git'] },
  { key: 'monitoring', label: 'monitoring', items: ['Datadog', 'Grafana', 'PagerDuty'] },
];

export function BuildingThings({ isDark }) {
  return (
    <div className="build-things" data-theme={isDark ? 'dark' : 'light'}>
      <div className="build-orbit">
        <div className="build-planet-float" aria-hidden="true" data-aos="fade-up" data-aos-delay="90">
          <div className="build-planet">
            <img
              className="build-planet__img"
              src="/new-about.gif"
              alt=""
            />
          </div>
          <div className="build-planet__glow" />
        </div>
        <svg className="build-orbit__ring" viewBox="0 0 300 300" aria-hidden="true">
          <circle cx="150" cy="150" r="144" className="build-orbit__ring-outer" />
          <circle cx="150" cy="150" r="120" />
          <circle cx="150" cy="150" r="88" strokeDasharray="3 7" />
        </svg>
        {BUILD_CATEGORIES.map((cat, i) => (
          <div
            key={cat.key}
            className={`build-pill-wrap build-pill-wrap--${cat.side} build-pill-wrap--${cat.key}`}
            style={pinOnRing(cat.angle)}
            data-aos="fade-up"
            data-aos-delay={180 + i * 90}
          >
            <span className="build-pill-wrap__dot" />
            <div className="build-pill-wrap__content">
              <span className={`build-pill ${cat.featured ? 'is-active' : ''}`}>
                <cat.icon className="build-pill__icon" />
                {cat.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Skills({ isDark }) {
  return (
    <div className="build-tools" data-theme={isDark ? 'dark' : 'light'}>
      <span className="build-tools__label" data-aos="fade-up">{"// tools i've worked with"}</span>
      <div className="build-tools__categories">
        {TOOL_CATEGORIES.map((cat, i) => (
          <div
            className="build-tools__category"
            key={cat.key}
            data-aos="fade-up"
            data-aos-delay={i * 80}
          >
            <span className="build-tools__category-label">{cat.label}</span>
            <div className="build-tools__category-items">
              {cat.items.map((item, idx) => (
                <React.Fragment key={item}>
                  <span className="build-tools__item">{item}</span>
                  {idx < cat.items.length - 1 && <span className="build-tools__dot">·</span>}
                </React.Fragment>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;

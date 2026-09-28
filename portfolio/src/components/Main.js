import React, { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import './Main.css';

const NAME = 'JASMINE';
const CURRENTLY = ['learning', 'building'];
const PARTICLES = Array.from({ length: 16 }, (_, i) => i);
const TERMINAL_BORDER = '───────────────────────────────────────';
const TERMINAL_TAGS = ['code', 'design', 'build'];
// Keep in sync with .orbit-system / .orbit-spin in Main.css
const ORBIT = { top: 160, right: -180, size: 560, outerRadius: 252, innerRadius: 168 };
const orbitCenterTop = ORBIT.top + ORBIT.size / 2;
const orbitCenterRight = ORBIT.right + ORBIT.size / 2;

const pointOnOrbit = (radius, angleDeg) => {
    const rad = (angleDeg * Math.PI) / 180;
    return {
        top: `${orbitCenterTop + radius * Math.sin(rad)}px`,
        right: `${orbitCenterRight - radius * Math.cos(rad)}px`,
    };
};

const FLOATING_TAGS = [
    { label: 'IDEAS', ...pointOnOrbit(ORBIT.outerRadius, -100) },
    { label: 'CODE', ...pointOnOrbit(ORBIT.outerRadius, 175) },
    { label: 'CREATE', ...pointOnOrbit(ORBIT.outerRadius, 140) },
];
const SPARKLES = [
    { top: '18%', left: '24%', size: '1.3rem' },
    { top: '26%', right: '24%', size: '1rem' },
    { top: '43%', right: '10%', size: '1.4rem' },
    { top: '84%', left: '53%', size: '1.1rem' },
];

const SLIDER_FRAMES = [
    '█░░░░░░░░',
    '██░░░░░░░',
    '███░░░░░░',
    '████░░░░░',
    '█████░░░░',
    '██████░░░',
    '███████░░',
    '████████░',
    '█████████',
    '████████░',
    '███████░░',
    '██████░░░',
    '█████░░░░',
    '████░░░░░',
    '███░░░░░░',
    '██░░░░░░░',
];

const Main = ({ isDark }) => {
    const [time, setTime] = useState('');
    const [currentlyIndex, setCurrentlyIndex] = useState(0);
    const [sliderFrame, setSliderFrame] = useState(6);
    const heroRef = useRef(null);

    useEffect(() => {
        const tick = () => {
            setTime(
                new Intl.DateTimeFormat('en-US', {
                    hour: '2-digit',
                    minute: '2-digit',
                    timeZone: 'Asia/Kolkata',
                }).format(new Date())
            );
        };
        tick();
        const clockId = setInterval(tick, 1000 * 15);
        const currentlyId = setInterval(() => {
            setCurrentlyIndex((i) => (i + 1) % CURRENTLY.length);
        }, 2200);
        const sliderId = setInterval(() => {
            setSliderFrame((i) => (i + 1) % SLIDER_FRAMES.length);
        }, 220);
        return () => {
            clearInterval(clockId);
            clearInterval(currentlyId);
            clearInterval(sliderId);
        };
    }, []);

    return (
        <div
            id="home"
            className="hero"
            ref={heroRef}
            data-theme={isDark ? 'dark' : 'light'}
        >
            <div className="hero-grid" aria-hidden="true" />

            <div className="hero-particles" aria-hidden="true">
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

            <div className="orbit-system" aria-hidden="true">
                <div className="hero-planet" />
                <div className="orbit-spin">
                    <svg className="orbit" viewBox="0 0 400 400">
                        <circle cx="200" cy="200" r="180" />
                        <circle cx="200" cy="200" r="120" strokeDasharray="4 8" />
                        <ellipse cx="200" cy="200" rx="180" ry="60" />
                        <circle className="orbit-dot" cx="380" cy="200" r="4" />
                        <circle className="orbit-dot" cx="60" cy="150" r="3" />
                    </svg>
                </div>
            </div>
            <svg className="orbit--left" viewBox="0 0 300 300" aria-hidden="true">
                <circle cx="0" cy="300" r="220" />
            </svg>

            <div className="hero-floating-tags" aria-hidden="true">
                {FLOATING_TAGS.map((tag) => (
                    <span
                        key={tag.label}
                        className="floating-tag"
                        style={{ top: tag.top, right: tag.right }}
                    >
                        <span className="floating-tag__dot" />
                        <span className="floating-tag__pill">{tag.label}</span>
                    </span>
                ))}
            </div>

            <div className="hero-body">
                <div className="hero-spacer" aria-hidden="true" />

                <div className="hero-center">
                    <div className="hero-topline">
                        <span>📍 Based in India</span>
                        <span className="hero-divider">|</span>
                        <span className="hero-clock">{time} IST</span>
                    </div>

                    <div className="hero-name-row">
                        <span className="hero-bracket">&lt;</span>
                        <h1 className="hero-name" aria-label={NAME}>
                            {NAME.split('').map((letter, i) => (
                                <span key={i} className="hero-letter" style={{ animationDelay: `${i * 0.08 + 0.15}s` }}>
                                    {letter}
                                </span>
                            ))}
                        </h1>
                        <span className="hero-bracket">/&gt;</span>
                        <span className="cursor-blink">▍</span>
                    </div>

                    <p className="hero-tagline">
                        <span className="comment">{'// curious about code, design & '}<mark>everything in between.</mark></span>
                    </p>

                    <a
                        className="hero-explore"
                        href="https://drive.google.com/file/d/16ONVl7FtVcWSaU7KN_LznnuOVdAN7HFw/view?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        resume.pdf
                        <span className="hero-explore__icon">
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                        </span>
                    </a>

                    <div className="hero-currently">
                        <span className="hero-currently-label">currently</span>
                        <span className="hero-currently-word" key={currentlyIndex}>
                            {CURRENTLY[currentlyIndex]}
                        </span>
                    </div>
                </div>

                <div className="hero-spacer" aria-hidden="true" />
            </div>

            <div className="code-snippet" data-aos="fade-up">
                <p className="code-snippet__line">┌{TERMINAL_BORDER}</p>
                <p className="code-snippet__line">│ $ whoami</p>
                <p className="code-snippet__line">│</p>
                <p className="code-snippet__line">│ jasmine jayaswal</p>
                <p className="code-snippet__line">│ software engineer intern <span className="code-snippet__highlight">@mindtickle</span></p>
                <p className="code-snippet__line">│</p>
                <p className="code-snippet__line">
                    │ {TERMINAL_TAGS.map((tag) => (
                        <span className="code-snippet__tag" key={tag}>[ {tag} ] </span>
                    ))}
                </p>
                <p className="code-snippet__line">│</p>
                <p className="code-snippet__line">
                    │ status: debugging life + code <span className="code-snippet__slider">{SLIDER_FRAMES[sliderFrame]}</span>
                </p>
                <p className="code-snippet__line">└{TERMINAL_BORDER}</p>
            </div>
        </div>
    );
};

export default Main;

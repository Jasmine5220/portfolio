import React, { useEffect, useRef, useState } from 'react';
import './Experience.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowUpRightFromSquare,
    faBriefcase,
} from '@fortawesome/free-solid-svg-icons';

const PARTICLES = Array.from({ length: 14 }, (_, i) => i);
const SPARKLES = [
    { top: '14%', left: '10%', size: '1.2rem' },
    { top: '22%', right: '14%', size: '1rem' },
    { top: '58%', left: '6%', size: '1.1rem' },
    { top: '68%', right: '9%', size: '1.3rem' },
    { top: '85%', left: '46%', size: '1rem' },
];

const experienceData = [
    {
        role: 'SDE Intern',
        company: 'Mindtickle',
        logoImg: '/mindtickle_icon.png',
        location: 'Pune, India',
        meta: 'Team RevLMS',
        duration: 'Jan 2026 - Present',
        current: true,
    },
    {
        role: 'SWE Intern',
        company: 'Microsoft',
        logoImg: '/microsoft_icon.png',
        location: 'Hyderabad, India',
        meta: 'Team Azure BCDR-Resiliency',
        duration: 'May 2025 - July 2025',
    },
];

// Real posts only — add more entries here (with their own category/date/
// excerpt/href) as they're written; the filter tabs derive from whatever
// categories are present, so a new one shows up automatically.
const BLOG_POSTS = [
    {
        category: 'Mindtickle',
        date: '8mo ago',
        title: 'Joining the Mindtickle team',
        excerpt: "Thrilled to be part of this intern cohort at Mindtickle — looking forward to a great learning journey alongside a great group of engineers.",
        logoImg: '/mindtickle_icon.png',
        href: 'https://www.linkedin.com/feed/update/urn:li:activity:7419403198576148482/',
    },
    {
        category: 'Microsoft',
        date: 'Jul 20, 2025',
        title: 'My internship experience at Microsoft',
        excerpt: 'Learnings, challenges and memorable moments from my time on the Azure BCDR-Resiliency team.',
        logoImg: '/microsoft_icon.png',
        href: 'https://www.linkedin.com/feed/update/urn:li:ugcPost:7353838122285068289/',
    },
    {
        category: 'Projects',
        date: '12mo ago',
        title: 'Myntra WeForShe HackerRamp — Grand Finale',
        excerpt: "Our team 'InnoCode' (with Neyati and Richa Sawatkar) made it to the top 6 out of 56.2K+ registrations at Myntra's WeForShe HackerRamp 2025.",
        logoImg: '/myntra-logo.png',
        href: 'https://www.linkedin.com/feed/update/urn:li:activity:7385012161619668992/',
    },
    {
        category: 'Achievements',
        date: '2y ago',
        title: 'Selected for Amazon ML Summer School 2024',
        excerpt: "Selected for the Amazon ML Summer School 2024 — learning from top experts and diving deeper into the world of machine learning.",
        logoImg: '/amazon.png',
        href: 'https://www.linkedin.com/posts/jasmine-jayaswal-3b3181251_amazonmlsummerschool-machinelearning-ai-share-7213717636906455040-Xe_v/',
    },
];

const TimelineCard = ({ item }) => (
    <div className="timeline-card">
        <div className="timeline-card__head">
            <span className="timeline-logo">
                <img src={item.logoImg} alt={`${item.company} logo`} />
            </span>
            <div>
                <span className="timeline-duration">{item.duration}</span>
                <h3>{item.role}</h3>
            </div>
        </div>
        <p className="timeline-company">
            {item.company}{item.location ? ` · ${item.location}` : ''}
        </p>
        {item.meta && <p className="timeline-team">{item.meta}</p>}
    </div>
);

const SLIDES = [
    { key: 'timeline', label: 'places i\'ve worked in' },
    { key: 'posts', label: 'sharing the past experiences' },
];

const SWIPE_THRESHOLD = 40;
const WHEEL_THRESHOLD = 20;
const WHEEL_LOCK_MS = 700;

const Experience = ({ isDark }) => {
    const sectionRef = useRef(null);
    const [slide, setSlide] = useState(0);
    const wheelLockRef = useRef(false);
    const touchStartRef = useRef(null);

    useEffect(() => {
        AOS.init({
            duration: 1000, // Duration of the animation
            once: false, // Whether animation should happen only once - while scrolling down
        });
    }, []);

    // Circular: stepping past the last slide wraps to the first, and back
    // past the first wraps to the last.
    const goTo = (i) => setSlide((i + SLIDES.length) % SLIDES.length);
    const step = (delta) => setSlide((s) => (s + delta + SLIDES.length) % SLIDES.length);

    // Trackpad/mouse horizontal swipe: only treat it as a slide gesture
    // when the motion is mostly horizontal, so normal vertical page
    // scrolling over this section is left completely untouched.
    const handleSlidesWheel = (e) => {
        if (Math.abs(e.deltaX) <= Math.abs(e.deltaY)) return;
        if (Math.abs(e.deltaX) < WHEEL_THRESHOLD || wheelLockRef.current) return;
        e.preventDefault();
        wheelLockRef.current = true;
        step(e.deltaX > 0 ? 1 : -1);
        setTimeout(() => { wheelLockRef.current = false; }, WHEEL_LOCK_MS);
    };

    const handleTouchStart = (e) => {
        touchStartRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };

    const handleTouchEnd = (e) => {
        const start = touchStartRef.current;
        touchStartRef.current = null;
        if (!start) return;
        const dx = e.changedTouches[0].clientX - start.x;
        const dy = e.changedTouches[0].clientY - start.y;
        if (Math.abs(dx) > SWIPE_THRESHOLD && Math.abs(dx) > Math.abs(dy)) {
            step(dx < 0 ? 1 : -1);
        }
    };

    return (
        <div
            id="experience"
            className="experience-section"
            data-theme={isDark ? 'dark' : 'light'}
            ref={sectionRef}
        >
            <div className="experience-grid" aria-hidden="true" />
            <div className="experience-particles" aria-hidden="true">
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
            <div className="section-heading" data-aos="fade-up">
                <h2 className="section-title">{SLIDES[slide].label}</h2>
                <div className="section-rule" />
            </div>

            <div
                className="experience-slides"
                onWheel={handleSlidesWheel}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                <div
                    className="experience-slides__track"
                    style={{ transform: `translateX(-${slide * 100}%)` }}
                >
                    <div className="experience-slide">
                        <div className="timeline-slider">
                            <div className="timeline-rail">
                                <div className="timeline-rail__line" />
                                {experienceData.map((item, i) => (
                                    <div
                                        key={item.company}
                                        className="timeline-rail__node"
                                        style={{ '--row': i + 1 }}
                                    >
                                        <span className="timeline-rail__dot">
                                            <FontAwesomeIcon icon={faBriefcase} />
                                            {item.current && <span className="timeline-rail__pulse" />}
                                        </span>
                                        <span className="timeline-rail__label">{item.company}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="timeline-track">
                                {experienceData.map((item, i) => (
                                    <div
                                        className="timeline-slide-item"
                                        key={item.company}
                                        style={{ '--row': i + 1 }}
                                    >
                                        <TimelineCard item={item} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="experience-slide">
                        <div className="posts-panel">
                            <p className="posts-panel__subtitle">thoughts, learnings and random notes from this journey.</p>
                            <div className="posts-panel__grid">
                                {BLOG_POSTS.map((p) => (
                                    <a
                                        className="post-card"
                                        key={p.title}
                                        href={p.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <div className="post-card__thumb">
                                            {p.logoImg ? <img src={p.logoImg} alt="" /> : <FontAwesomeIcon icon={p.icon} className="post-card__thumb-icon" />}
                                        </div>
                                        <div className="post-card__body">
                                            <div className="post-card__meta">
                                                <span className="post-card__tag">{p.category}</span>
                                                <span className="post-card__date">{p.date}</span>
                                                <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="post-card__open" />
                                            </div>
                                            <h4 className="post-card__title">{p.title}</h4>
                                            <p className="post-card__excerpt">{p.excerpt}</p>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="experience-slide-nav">
                <div className="experience-slide-nav__dots">
                    {SLIDES.map((s, i) => (
                        <button
                            key={s.key}
                            className={`experience-slide-nav__dot ${i === slide ? 'is-active' : ''}`}
                            onClick={() => goTo(i)}
                            aria-label={`Go to ${s.label}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;

import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { goToIndex, goToSectionId } from '../scrollPagination';
import './NavBar.css';

const NAV_ITEMS = [
    { key: 'home', label: 'hey!' },
    { key: 'about', label: 'about' },
    { key: 'experience', label: 'work' },
    { key: 'projects', label: 'projects' },
    { key: 'contact', label: "let's connect" },
];

const NavBar = ({ isDark, setIsDark }) => {
    const [activeNav, setActiveNav] = useState('home');
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const sections = NAV_ITEMS
            .map((item) => document.getElementById(item.key))
            .filter(Boolean);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveNav(entry.target.id);
                    }
                });
            },
            { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
        );

        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, []);

    const scrollToSection = (section) => {
        setActiveNav(section);
        setMenuOpen(false);
        goToSectionId(section);
    };

    const scrollToTop = () => {
        setMenuOpen(false);
        goToIndex(0);
    };

    return (
        <>
            {menuOpen && (
                <div className="navbar-backdrop" onClick={() => setMenuOpen(false)} aria-hidden="true" />
            )}

            <header className="navbar" data-theme={isDark ? 'dark' : 'light'}>
                <button className="navbar-logo" onClick={scrollToTop} aria-label="Back to top">
                    &gt;_
                </button>

                <nav className={`navbar-nav ${menuOpen ? 'is-open' : ''}`}>
                    {NAV_ITEMS.map((item) => (
                        <button
                            key={item.key}
                            className={activeNav === item.key ? 'is-active' : ''}
                            onClick={() => scrollToSection(item.key)}
                        >
                            <span className="navbar-nav__label">{item.label}</span>
                            <span className="navbar-nav__arrow">→</span>
                            <span className="navbar-nav-underline" />
                        </button>
                    ))}
                </nav>

                <div className="navbar__right">
                    <div className={`theme-toggle ${isDark ? 'is-dark' : ''}`}>
                        <span className="theme-toggle__thumb" aria-hidden="true" />
                        <button
                            className="theme-toggle__btn"
                            onClick={() => setIsDark(false)}
                            aria-label="Light mode"
                            aria-pressed={!isDark}
                        >
                            <FontAwesomeIcon icon={faSun} />
                        </button>
                        <button
                            className="theme-toggle__btn"
                            onClick={() => setIsDark(true)}
                            aria-label="Dark mode"
                            aria-pressed={isDark}
                        >
                            <FontAwesomeIcon icon={faMoon} />
                        </button>
                    </div>

                    <button
                        className="navbar-menu-toggle"
                        onClick={() => setMenuOpen((o) => !o)}
                        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={menuOpen}
                    >
                        <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
                    </button>
                </div>
            </header>
        </>
    );
};

export default NavBar;

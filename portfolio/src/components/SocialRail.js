import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import './SocialRail.css';

const LINKS = [
    { icon: faLinkedin, href: 'https://www.linkedin.com/in/jasmine-jayaswal-3b3181251/', label: 'LinkedIn' },
    { icon: faGithub, href: 'https://github.com/Jasmine5220', label: 'GitHub' },
    { icon: faCode, href: 'https://leetcode.com/u/sabmohmaayahai/', label: 'LeetCode' },
];

const SocialRail = () => (
    <div className="social-rail">
        {LINKS.map((link) => (
            <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="social-rail__icon"
            >
                <FontAwesomeIcon icon={link.icon} />
            </a>
        ))}
        <span className="social-rail__line" aria-hidden="true" />
    </div>
);

export default SocialRail;

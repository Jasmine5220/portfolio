import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { goToIndex } from '../scrollPagination';
import './BackToTop.css';

const BackToTop = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const scrollToTop = () => goToIndex(0);

    return (
        <button
            className={`back-to-top ${visible ? 'is-visible' : ''}`}
            onClick={scrollToTop}
            aria-label="Back to top"
        >
            <FontAwesomeIcon icon={faArrowUp} />
        </button>
    );
};

export default BackToTop;

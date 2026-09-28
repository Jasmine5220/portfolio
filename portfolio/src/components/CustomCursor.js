import React, { useEffect, useRef } from 'react';
import './CustomCursor.css';

function CustomCursor() {
    const dotRef = useRef(null);
    const ringRef = useRef(null);

    useEffect(() => {
        if (window.matchMedia('(pointer: coarse)').matches) return;

        document.body.classList.add('custom-cursor-active');

        const dot = dotRef.current;
        const ring = ringRef.current;

        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;
        let ringX = mouseX;
        let ringY = mouseY;

        const handleMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
        };

        const handleOver = (e) => {
            if (e.target.closest('a, button, [role="button"], input, textarea, .cursor-pointer')) {
                ring.classList.add('is-hovering');
            }
        };

        const handleOut = (e) => {
            if (e.target.closest('a, button, [role="button"], input, textarea, .cursor-pointer')) {
                ring.classList.remove('is-hovering');
            }
        };

        const handleDown = () => ring.classList.add('is-clicking');
        const handleUp = () => ring.classList.remove('is-clicking');

        let rafId;
        const animate = () => {
            ringX += (mouseX - ringX) * 0.18;
            ringY += (mouseY - ringY) * 0.18;
            ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
            rafId = requestAnimationFrame(animate);
        };

        window.addEventListener('mousemove', handleMove);
        document.addEventListener('mouseover', handleOver);
        document.addEventListener('mouseout', handleOut);
        window.addEventListener('mousedown', handleDown);
        window.addEventListener('mouseup', handleUp);
        rafId = requestAnimationFrame(animate);

        return () => {
            document.body.classList.remove('custom-cursor-active');
            window.removeEventListener('mousemove', handleMove);
            document.removeEventListener('mouseover', handleOver);
            document.removeEventListener('mouseout', handleOut);
            window.removeEventListener('mousedown', handleDown);
            window.removeEventListener('mouseup', handleUp);
            cancelAnimationFrame(rafId);
        };
    }, []);

    return (
        <>
            <div className="cursor-dot" ref={dotRef} />
            <div className="cursor-ring" ref={ringRef} />
        </>
    );
}

export default CustomCursor;

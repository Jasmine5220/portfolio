import React, { useEffect, useState } from 'react';
import { BuildingThings } from './Skills';
import './Loader.css';

const PARTICLES = Array.from({ length: 12 }, (_, i) => i);

const Loader = ({ isDark, onFinish }) => {
    const [progress, setProgress] = useState(0);
    const [isFading, setIsFading] = useState(false);

    useEffect(() => {
        // Prevent background scrolling while preloader is active
        document.body.style.overflow = 'hidden';

        let startTimestamp = null;
        const duration = 2200; // 2.2 seconds smooth progress

        let animationFrameId;

        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const elapsed = timestamp - startTimestamp;
            const currentProgress = Math.min(100, Math.floor((elapsed / duration) * 100));
            setProgress(currentProgress);

            if (elapsed < duration) {
                animationFrameId = requestAnimationFrame(step);
            } else {
                setTimeout(() => {
                    setIsFading(true);
                    setTimeout(() => {
                        document.body.style.overflow = '';
                        if (onFinish) onFinish();
                    }, 600);
                }, 300);
            }
        };

        animationFrameId = requestAnimationFrame(step);

        return () => {
            cancelAnimationFrame(animationFrameId);
            document.body.style.overflow = '';
        };
    }, [onFinish]);

    return (
        <div
            className={`loader-screen ${isFading ? 'is-fading' : ''}`}
            data-theme={isDark ? 'dark' : 'light'}
        >
            <div className="loader-grid" aria-hidden="true" />
            <div className="loader-particles" aria-hidden="true">
                {PARTICLES.map((i) => (
                    <span
                        key={i}
                        className="particle"
                        style={{
                            left: `${(i * 37 + 10) % 100}%`,
                            animationDelay: `${(i % 7) * 0.8}s`,
                            animationDuration: `${7 + (i % 4) * 2}s`,
                        }}
                    />
                ))}
            </div>

            <div className="loader-content">
                <BuildingThings isDark={isDark} />

                <div className="loader-counter-wrap">
                    <div className="loader-number">
                        {progress}
                        <span className="loader-percent">%</span>
                    </div>
                    <div className="loader-bar-bg">
                        <div
                            className="loader-bar-fill"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Loader;

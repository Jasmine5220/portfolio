import React, { useRef } from 'react';
import './Projects.css';

const projectList = [
    {
        number: '01',
        title: 'EcoSnap',
        tagline: 'scanning products for a greener choice',
        description: 'Analyzes product photos to suggest eco-friendlier alternatives and estimate their carbon footprint.',
        github: 'https://github.com/Jasmine5220/EcoSnap1',
    },
    {
        number: '02',
        title: 'Myntra StyleRooms',
        tagline: 'rethinking social shopping',
        description: 'A persistent group shopping space with shared wardrobes and an AI assistant, built for the Myntra hackathon.',
        github: 'https://github.com/Jasmine5220/MyntraStyleRooms',
    },
    {
        number: '03',
        title: 'Fusion',
        tagline: 'making patent management less painful',
        description: 'The React client powering Fusion, an end-to-end patent management platform.',
        github: 'https://github.com/Jasmine5220/Fusion-client',
    },
    {
        number: '04',
        title: 'OroLight',
        tagline: 'spotting oral cancer earlier',
        description: 'A Flask app that classifies oral histopathology images as cancerous or not, with Grad-CAM visualizations for interpretability.',
        github: 'https://github.com/Jasmine5220/orolight',
    },
    {
        number: '05',
        title: 'Respiratory AI',
        tagline: 'reading X-rays for COVID and beyond',
        description: 'Transfer-learned a ResNet on chest X-rays to distinguish COVID-19, viral pneumonia, bacterial pneumonia, and healthy lungs.',
        github: 'https://github.com/Jasmine5220/respiratory-disease-detection',
    },
    {
        number: '06',
        title: 'Myntra Fashion Show',
        tagline: 'a runway you can walk in your browser',
        description: 'A MERN + Unreal Engine 5 virtual runway where you can browse and shop outfits interactively.',
        github: 'https://github.com/Jasmine5220/fashion-show-prototype',
    },
    {
        number: '07',
        title: 'PhishGuard AI',
        tagline: 'explaining why an email smells like phishing',
        description: 'Flags phishing emails and explains the lexical and structural anomalies behind each verdict.',
        github: 'https://github.com/Jasmine5220/PhishGuardAI',
    },
    {
        number: '08',
        title: 'Facial Expressions',
        tagline: 'mapping faces, reading emotions',
        description: 'Predicts dense facial landmarks and classifies the dominant emotion from grayscale portraits.',
        github: 'https://github.com/Jasmine5220/FacialExpressionsRecoogniser',
    },
    {
        number: '09',
        title: 'Privacy Blur',
        tagline: "blurring what shouldn't be public",
        description: 'Detects and blurs sensitive content — faces, documents, plates — in real time, based on context.',
        github: 'https://github.com/Jasmine5220/Context-Aware-Privacy-Blurring',
    },
    {
        number: '10',
        title: 'Portfolio Design',
        tagline: 'an earlier draft of this very site',
        description: "An earlier exploration of this portfolio's visual design.",
        github: 'https://github.com/Jasmine5220/portfolio-design',
    },
];

// GitHub renders a real preview image for every public repo (name,
// description, owner avatar) — reusing that instead of fabricating or
// downloading placeholder screenshots for each project.
const repoPreviewImg = (githubUrl) => {
    const [, owner, repo] = new URL(githubUrl).pathname.split('/');
    return `https://opengraph.githubassets.com/1/${owner}/${repo}`;
};

const ProjectRow = ({ project }) => {
    const rowRef = useRef(null);

    const handleMouseMove = (e) => {
        const el = rowRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const relX = e.clientX - rect.left - rect.width / 2;
        const relY = e.clientY - rect.top - rect.height / 2;
        el.style.setProperty('--tx', `${relX * 0.03}px`);
        el.style.setProperty('--ty', `${relY * 0.2}px`);
        el.style.setProperty('--px', `${e.clientX - rect.left}px`);
        el.style.setProperty('--py', `${e.clientY - rect.top}px`);
    };

    const resetTransform = () => {
        const el = rowRef.current;
        if (!el) return;
        el.style.setProperty('--tx', '0px');
        el.style.setProperty('--ty', '0px');
    };

    return (
        <a
            className="project-row"
            ref={rowRef}
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onMouseMove={handleMouseMove}
            onMouseLeave={resetTransform}
            data-aos="fade-up"
            data-aos-offset="120"
        >
            <span className="project-number">{project.number}</span>
            <div className="project-heading">
                <h3>{project.title}</h3>
                <p className="project-tagline">{project.tagline}</p>
            </div>
            <div className="project-hover-card">
                <p>{project.description}</p>
                <span className="project-link">view project →</span>
            </div>
            <div className="project-preview-tooltip" aria-hidden="true">
                <img src={repoPreviewImg(project.github)} alt="" loading="lazy" />
            </div>
        </a>
    );
};

const PARTICLES = Array.from({ length: 14 }, (_, i) => i);
const SPARKLES = [
    { top: '10%', left: '8%', size: '1.2rem' },
    { top: '18%', right: '12%', size: '1rem' },
    { top: '52%', left: '5%', size: '1.1rem' },
    { top: '64%', right: '8%', size: '1.3rem' },
    { top: '82%', left: '44%', size: '1rem' },
];

const Projects = ({ isDark }) => {
    const sectionRef = useRef(null);

    return (
        <div
            id="projects"
            className="projects-section"
            data-theme={isDark ? 'dark' : 'light'}
            ref={sectionRef}
        >
            <div className="projects-grid" aria-hidden="true" />
            <div className="projects-particles" aria-hidden="true">
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
            <div className="top-section" data-aos="fade-up">
                <h2>ideas in motion</h2>
                <div className="top-rule" />
            </div>
            <div className="bottom-section">
                {projectList.map((project) => (
                    <ProjectRow key={project.number} project={project} />
                ))}
            </div>
        </div>
    );
};

export default Projects;

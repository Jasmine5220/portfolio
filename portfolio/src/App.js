import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import NavBar from './components/NavBar';
import CustomCursor from './components/CustomCursor';
import BackToTop from './components/BackToTop';
import Main from './components/Main';
import SocialRail from './components/SocialRail';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Loader from './components/Loader';

function App() {
    const [isDark, setIsDark] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        AOS.init({ duration: 800, once: false, mirror: true });
    }, []);

    const handleLoaderFinish = () => {
        setLoading(false);
        setTimeout(() => {
            AOS.refresh();
        }, 100);
    };

    return (
        <div className="App">
            {loading && <Loader isDark={isDark} onFinish={handleLoaderFinish} />}
            <CustomCursor />
            <NavBar isDark={isDark} setIsDark={setIsDark} />
            <SocialRail />
            <BackToTop />
            <Main isDark={isDark} data-aos="fade-up" />
            <About isDark={isDark} data-aos="fade-up" />
            <Experience isDark={isDark} data-aos="fade-up" />
            <Projects isDark={isDark} data-aos="fade-up" />
            <Contact isDark={isDark} data-aos="fade-up" />
        </div>
    );
}

export default App;

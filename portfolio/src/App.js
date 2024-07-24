import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import Main from './components/Main';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="App">
            <Main data-aos="fade-up" />
            <About data-aos="fade-up" />
            <Experience data-aos="fade-up" />
            <Projects data-aos="fade-up" />
            <Contact data-aos="fade-up" />
        </div>
    );
}

export default App;

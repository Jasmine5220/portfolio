import React from 'react';
import './App.css';
import Main from './components/Main';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
    return (
        <div className="App">
            <div className="animated-bg">
                <div className="animated-circles">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                </div>
                <div className="gradient-animated"></div>
            </div>
            <Main />
            <About />
            <Experience />
            <Projects />
            <Contact />
        </div>
    );
}

export default App;

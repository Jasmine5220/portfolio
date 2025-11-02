import React, { useEffect, useState } from 'react';
import Skills from './Skills';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import './About.css';
 

function About() {
  useEffect(() => {
    // Scroll animations disabled
  }, []);

  const milliseconds = new Date().getTime() - new Date('01/27/2003').getTime();
  const age = Math.floor(milliseconds / 1000 / 60 / 60 / 24 / 365);
  const [activeFile, setActiveFile] = useState('AboutMe.java');
  const [showEditor, setShowEditor] = useState(false);
  const [expanded, setExpanded] = useState({
    root: true,
    src: true,
    main: true,
    java: true,
    com: true,
    portfolio: true,
  });
  const toggle = (key) => setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <section id="about" className="about-section">
      <div className="about-skills">
        <div className="about">
          {!showEditor && (
            <div className="keyboard" aria-label="Keyboard launcher">
              <div className="kb-row">
                <button className="key">esc</button>
                <button className="key">F1</button>
                <button className="key">F2</button>
                <button className="key">F3</button>
                <button className="key">F4</button>
               <button className="key">F5</button>
               <button className="key">F6</button>
               <button className="key">F7</button>
               <button className="key">F8</button>
               <button className="key">F9</button>
               <button className="key">F10</button>
               <button className="key">F11</button>
               <button className="key">F12</button>
               <button className="key key--primary key--about" onClick={() => { setActiveFile('AboutMe.java'); setShowEditor(true); }}>AboutMe</button>
              </div>

              <div className="kb-row">
                <button className="key">`</button>
                <button className="key">1</button>
                <button className="key">2</button>
                <button className="key">3</button>
                <button className="key">4</button>
                <button className="key">5</button>
                <button className="key">6</button>
                <button className="key">7</button>
                <button className="key">8</button>
                <button className="key">9</button>
                <button className="key">0</button>
                <button className="key">-</button>
                <button className="key">=</button>
                <button className="key w3">Bksp</button>
                <button className="key key--primary key--skills" onClick={() => { setActiveFile('Skills.java'); setShowEditor(true); }}>Skills</button>
              </div>

              <div className="kb-row">
                <button className="key w3">Tab</button>
                <button className="key">Q</button>
                <button className="key">W</button>
                <button className="key">E</button>
                <button className="key">R</button>
                <button className="key">T</button>
                <button className="key">Y</button>
                <button className="key">U</button>
                <button className="key">I</button>
                <button className="key">O</button>
                <button className="key">P</button>
                <button className="key">[</button>
                <button className="key">]</button>
                <button className="key">\\</button>
              </div>

              <div className="kb-row">
                <button className="key w4">Caps</button>
                <button className="key">A</button>
                <button className="key">S</button>
                <button className="key">D</button>
                <button className="key">F</button>
                <button className="key">G</button>
                <button className="key">H</button>
                <button className="key">J</button>
                <button className="key">K</button>
                <button className="key">L</button>
                <button className="key">;</button>
                <button className="key">'</button>
                <button className="key w4">Enter</button>
              </div>

              <div className="kb-row">
                <button className="key w5">Shift</button>
                <button className="key">Z</button>
                <button className="key">X</button>
                <button className="key">C</button>
                <button className="key">V</button>
                <button className="key">B</button>
                <button className="key">N</button>
                <button className="key">M</button>
                <button className="key">,</button>
                <button className="key">.</button>
                <button className="key">/</button>
                <button className="key w5">Shift</button>
              </div>

              <div className="kb-row">
                <button className="key w3">Ctrl</button>
                <button className="key w3">Alt</button>
                <button className="key space">Space</button>
                <button className="key w3">Alt</button>
                <button className="key w3">Ctrl</button>
              </div>
            </div>
          )}
          {showEditor && (
          <div className="code-window">
            <aside className="code-sidebar" aria-label="File Explorer">
              <div className="code-sidebar__title">EXPLORER</div>
              <div className="code-sidebar__actions">
                <button className="code-btn">+</button>
                <button className="code-btn"><span className="icon-folder"></span></button>
                <button className="code-btn">↻</button>
              </div>
              <input className="code-search" placeholder="Search..." />
              <div className="code-tree">
                <div className="code-node is-folder is-root" onClick={() => toggle('root')}>
                  <span className="chevron">{expanded.root ? '▾' : '▸'}</span><span className="icon-folder"></span><span className="name">PORTFOLIO</span>
                </div>
                {expanded.root && (
                  <div className="code-children">
                    <div className="code-file-item">pom.xml</div>
                    <div className="code-node is-folder" onClick={() => toggle('src')}>
                      <span className="chevron">{expanded.src ? '▾' : '▸'}</span><span className="icon-folder"></span><span className="name">src</span>
                    </div>
                    {expanded.src && (
                      <div className="code-children">
                        <div className="code-node is-folder" onClick={() => toggle('main')}>
                          <span className="chevron">{expanded.main ? '▾' : '▸'}</span><span className="icon-folder"></span><span className="name">main</span>
                        </div>
                        {expanded.main && (
                          <div className="code-children">
                            <div className="code-node is-folder" onClick={() => toggle('java')}>
                              <span className="chevron">{expanded.java ? '▾' : '▸'}</span><span className="icon-folder"></span><span className="name">java</span>
                            </div>
                            {expanded.java && (
                              <div className="code-children">
                                <div className="code-node is-folder" onClick={() => toggle('com')}>
                                  <span className="chevron">{expanded.com ? '▾' : '▸'}</span><span className="icon-folder"></span><span className="name">com</span>
                                </div>
                                {expanded.com && (
                                  <div className="code-children">
                                    <div className="code-node is-folder" onClick={() => toggle('portfolio')}>
                                      <span className="chevron">{expanded.portfolio ? '▾' : '▸'}</span><span className="icon-folder"></span><span className="name">portfolio</span>
                                    </div>
                                    {expanded.portfolio && (
                                      <div className="code-children">
                                        <div className={`code-file-item code-file ${activeFile === 'AboutMe.java' ? 'code-file--active' : ''}`} onClick={() => { setActiveFile('AboutMe.java'); setShowEditor(true); }}><img className="icon-java" src="/javaicon.png" alt="java" /> AboutMe.java</div>
                                        <div className={`code-file-item code-file ${activeFile === 'Skills.java' ? 'code-file--active' : ''}`} onClick={() => { setActiveFile('Skills.java'); setShowEditor(true); }}><img className="icon-java" src="/javaicon.png" alt="java" /> Skills.java</div>
                                      </div>
                                    )}
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>

            </aside>
            <div className="code-main">
              <div className="code-editor">
                <div className="code-editor__header">
                  <span className="code-editor__dot code-editor__dot--yellow"></span>
                  <span className="code-editor__dot code-editor__dot--green"></span>
                  <button
                    className="code-editor__dot code-editor__dot--red"
                    onClick={() => setShowEditor(false)}
                    aria-label="Close editor"
                  ></button>
                  <span className="code-editor__title">{activeFile}</span>
                </div>
                <div className="code-editor__content">
              {activeFile === 'AboutMe.java' && (
                <pre className="code-editor__code">
                  <code>
<span className="kw">public</span> <span className="kw">class</span> <span className="type">AboutMe</span> &#123;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span className="type">int</span> <span className="id">age</span> = <span className="num">{age}</span>;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span className="type">String</span> <span className="id">vibe</span> = <span className="str">"Code. Create. Repeat."</span>;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span className="kw">void</span> <span className="method">work</span>() &#123;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="type">System</span>.<span className="id">out</span>.<span className="method">println</span>(<span className="str">"Building cool stuff and breaking limits."</span>);<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span className="kw">void</span> <span className="method">play</span>() &#123;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="type">System</span>.<span className="id">out</span>.<span className="method">println</span>(<span className="str">"Hackathons, web dev, and random tech rabbit holes."</span>);<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span className="kw">void</span> <span className="method">chill</span>() &#123;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="type">System</span>.<span className="id">out</span>.<span className="method">println</span>(<span className="str">"Music, TT, and good vibes only."</span>);<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span className="kw">public static void</span> <span className="method">main</span>(<span className="type">String</span>[] <span className="id">args</span>) &#123;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="type">AboutMe</span> <span className="id">me</span> = <span className="kw">new</span> <span className="type">AboutMe</span>();<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="id">me</span>.<span className="method">work</span>();<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="id">me</span>.<span className="method">play</span>();<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="id">me</span>.<span className="method">chill</span>();<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>
&#125;
                  </code>
                </pre>
              )}
              {activeFile === 'Skills.java' && (
                <pre className="code-editor__code">
                  <code>
<span className="kw">public</span> <span className="kw">class</span> <span className="type">Skills</span> &#123;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span className="type">String</span>[] <span className="id">languages</span> = &#123;<span className="str">"Java"</span>, <span className="str">"Python"</span>, <span className="str">"C"</span>, <span className="str">"JavaScript"</span>, <span className="str">"TypeScript"</span>, <span className="str">"SQL"</span>, <span className="str">"Bash"</span>&#125;;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span className="type">String</span>[] <span className="id">frameworks</span> = &#123;<span className="str">"ReactJS"</span>, <span className="str">"React Native"</span>, <span className="str">"Flask"</span>, <span className="str">"ExpressJS"</span>, <span className="str">"Node.js"</span>, <span className="str">"NumPy"</span>, <span className="str">"Pandas"</span>, <span className="str">"Matplotlib"</span>&#125;;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span className="type">String</span>[] <span className="id">databases</span> = &#123;<span className="str">"MongoDB"</span>, <span className="str">"MySQL"</span>, <span className="str">"PostgreSQL"</span>, <span className="str">"SQLite"</span>&#125;;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span className="type">String</span>[] <span className="id">tools</span> = &#123;<span className="str">"Git"</span>, <span className="str">"VS Code"</span>, <span className="str">"NetBeans"</span>, <span className="str">"Figma"</span>, <span className="str">"Postman"</span>, <span className="str">"Vercel"</span>&#125;;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span className="type">String</span>[] <span className="id">softSkills</span> = &#123;<span className="str">"Curious"</span>, <span className="str">"Collaborative"</span>, <span className="str">"Always Learning"</span>&#125;;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span className="kw">void</span> <span className="method">learn</span>() &#123;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="type">System</span>.<span className="id">out</span>.<span className="method">println</span>(<span className="str">"Still figuring it out, one line of code at a time."</span>);<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span className="kw">public static void</span> <span className="method">main</span>(<span className="type">String</span>[] <span className="id">args</span>) &#123;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="type">Skills</span> <span className="id">me</span> = <span className="kw">new</span> <span className="type">Skills</span>();<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="id">me</span>.<span className="method">learn</span>();<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>
&#125;
                  </code>
                </pre>
              )}
          </div>
        </div>
        </div>
          </div>
          )}
        </div>
        
      </div>
    </section>
  );
}

export default About;


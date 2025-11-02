import React, { useEffect } from 'react';
import './Skills.css';
 

function Skills() {
  useEffect(() => {
    // Scroll animations disabled
  }, []);

  return (
    <div className="skills-container">
      <h2 className="skills-heading">Skills</h2>
      <div className="code-editor code-editor--wide">
        <div className="code-editor__header">
          <span className="code-editor__dot code-editor__dot--red"></span>
          <span className="code-editor__dot code-editor__dot--yellow"></span>
          <span className="code-editor__dot code-editor__dot--green"></span>
          <span className="code-editor__title">Skills.java</span>
        </div>
        <div className="code-editor__content">
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
        </div>
      </div>
    </div>
  );
}

export default Skills;

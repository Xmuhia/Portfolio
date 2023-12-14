import React from 'react';
import HtmlIcon from '@mui/icons-material/Html';
import JavascriptIcon from '@mui/icons-material/Javascript';
import CssIcon from '@mui/icons-material/Css';
import {reactPath, mongoPath, expressPath, nodePath, talwindPath } from './svgfiles.jsx'


const Skills = () => {
  return (
    <div className='skills-container'>
      <div className='title-skills'>
        <h1>SKILLS</h1>
      </div>
      <div className="skills" id='skills'>
      <div className="glass" data-text="HTML" style={{ '--r': 25 }}>
            <HtmlIcon className='material'/>
      </div>
      <div className="glass" data-text="CSS" style={{ '--r': 25 }}>
          <CssIcon className='material'/>
      </div>
      <div className="glass" data-text="JavaScript" style={{ '--r': 25 }}>
         <JavascriptIcon className='material'/>
      </div>
      <div className="glass" data-text="React" style={{ '--r': 25 }}>
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 100 100">
          <path className='svg' d={reactPath}></path>
          </svg>
      </div>
      <div className="glass" data-text="Node JS" style={{ '--r': 25 }}>
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 32 32">
          <path className='svg' d={nodePath}></path>
          </svg>
      </div>
      <div className="glass" data-text="Express JS" style={{ '--r': 25 }}>
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
          <path className='svg' d={expressPath}></path>
          </svg>
      </div>
      <div className="glass" data-text="Talwind" style={{ '--r': 25 }}>
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 24 24">
          <path className='svg' d={talwindPath}></path>
          </svg>
      </div>
      <div className="glass" data-text="Mongo DB" style={{ '--r': 25 }}>
      <svg id='mongo' fill="#000000" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>mongodb</title> <path d={mongoPath}></path> </g></svg>
      </div>
      </div>
    </div>
  );
};

export default Skills;


import React from 'react';
import HtmlIcon from '@mui/icons-material/Html';
import JavascriptIcon from '@mui/icons-material/Javascript';
import CssIcon from '@mui/icons-material/Css';
import { DiNodejs, DiMongodb } from "react-icons/di";
import { SiExpress, SiTailwindcss } from "react-icons/si";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa';


const Skills = () => {
  return (
    <div className='skills-container'>
      <div className='title-skills'>
        <h1>SKILLS</h1>
      </div>
      <div className="skills" id='skills'>
      <div className="glass" data-text="HTML" style={{ '--r': 25 }}>
        <FaHtml5 className='icon-style'/>
      </div>
      <div className="glass" data-text="CSS" style={{ '--r': 25 }}>
        <FaCss3Alt className='icon-style'/>
      </div>
      <div className="glass" data-text="JavaScript" style={{ '--r': 25 }}>
        <FaJs className='icon-style'/>
      </div>
      <div className="glass" data-text="React" style={{ '--r': 25 }}>
        <FaReact className='icon-style'/>
      </div>
      <div className="glass" data-text="Node JS" style={{ '--r': 25 }}>
        <DiNodejs className='icon-style'/>
      </div>
      <div className="glass" data-text="Express JS" style={{ '--r': 25 }}>
        <SiExpress className='icon-style'/>
      </div>
      <div className="glass" data-text="Tailwind" style={{ '--r': 25 }}>
        <SiTailwindcss className='icon-style'/>
      </div>
      <div className="glass" data-text="Mongo DB" style={{ '--r': 25 }}>
        <DiMongodb className='icon-style'/>
      </div>
      </div>
    </div>
  );
};

export default Skills;


import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

import Shirt from '../assets/Shirt.png';
import DictionaryImage from '../assets/Dictionary.png';
import CRUDImage from '../assets/CRUD.png';
import RecipeImage from '../assets/Recipe.png';

const ProjectCard = ({ title, image }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (event) => {
    const rect = event.target.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / width - 0.5;

    x.set(xPct);
    y.set(yPct);

    event.stopPropagation();
  };

  return (
    <>
      <motion.div
        className="box-parent"
        style={{
          perspective: 1000, 
        }}
      >
        <motion.div
          className="box"
          onMouseMove={handleMouseMove}
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
            cursor: "pointer",
          }}
        >
          <h2 className="name">{title}</h2>
          <a href="#" className="view-demo">View Demo</a>
          
          {/* Button wrapped in a div */}
          <div className="button-wrapper">
            <a href="#" className="view-code">View Code</a>
          </div>

          <div className="description" style={{ display: "none" }}>
            {/* Description content goes here */}
          </div>
          <img src={image} className="product" alt={title} />
        </motion.div>
      </motion.div>
    </>
  );
};

const Projects = () => {
  return (
    <div className='projects-container'>
      <div className='title' id='projects-title'>
        <h1>PROJECTS</h1>
      </div>
      <div className='project-cards'>
        <div>
          <ProjectCard title="3D A.I Shirt Store" image={Shirt} />
        </div>
        <div>
          <ProjectCard title="Dictionary Project" image={DictionaryImage} />
        </div>
        <div>
          <ProjectCard title="CRUD Project" image={CRUDImage} />
        </div>
        <div>
          <ProjectCard title="Recipe Project" image={RecipeImage} />
        </div>
      </div>
    </div>
  );
};

export default Projects;

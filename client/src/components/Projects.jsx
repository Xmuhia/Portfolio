import React from 'react';
import { 
  motion, 
  useMotionValue, 
  useSpring, 
  useTransform 
} from 'framer-motion';

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
    const { width, height } = rect;

    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / width - 0.5;

    x.set(xPct);
    y.set(yPct);

    event.stopPropagation();
  };

  const imageStyle = image === RecipeImage ? { 
    top: "15em",
    height: "60%"
  } : {};

  return (
    <motion.div className="box-parent" style={{ perspective: 1000 }}>
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
        <div className="button-wrapper">
          <a href="#" className="view-code">View Code</a>
        </div>
        <img src={image} className="product" alt={title} style={imageStyle} />
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const projectData = [
    { title: "3D A.I Shirt Store", image: Shirt },
    { title: "Dictionary Project", image: DictionaryImage },
    { title: "CRUD Project", image: CRUDImage },
    { title: "Recipe Project", image: RecipeImage }
  ];

  return (
    <div className='projects-container'>
      <div className='title' id='projects-title'>
        <h1>PROJECTS</h1>
      </div>
      <div className='project-cards'>
        {projectData.map((project, index) => (
          <div key={index}>
            <ProjectCard title={project.title} image={project.image} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

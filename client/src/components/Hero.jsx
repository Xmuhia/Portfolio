// Hero.js
import React from 'react';
import Earth from '../assets/SpaceBackground.jpeg';
import Moonman from '../assets/Moonman.png';
import '../index.css';

const Hero = () => {
  return (
    <div className="hero-container">
      <img src={Earth} className="relative inset-0 h-full w-full object-cover" />
      <img src={Moonman} id="bg"/>
      <img src="moon.png" id="moon"/>
      <img src="mountain.png" id="mountain"/>
      <h2 id="text"> Moon </h2>
    </div>
  );
};

export default Hero;
import React from 'react';
import ParticlesComponent from './ParticlesComponent';
import "../index.css"; 
import imageUrl from '../assets/SpaceBackground.jpeg';

const Hero = () => {
    return (
        <div className="hero-container">
            <img src={imageUrl} className="absolute inset-0 h-full w-full object-cover" />
            <ParticlesComponent className="particles" /> {/* Add the className here */}
        </div>
    );
};

export default Hero;

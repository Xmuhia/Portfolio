import React from 'react';
import Particles from 'react-tsparticles';

const ParticlesComponent = () => {
  return (
    <Particles
      id="tsparticles"
      className="relative"
      options={{
        fpsLimit: 60,
        interactivity: {
          detectsOn: 'canvas',
          events: {
            onHover: {
              enable: true,
              mode: 'repulse',
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
        },
        particles: {
          color: {
            value: '#ffffff', // Set particle color
          },
          links: {
            color: '#ffffff',
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: 'none',
            enable: true,
            outMode: 'bounce',
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              value_area: 800,
            },
            value: 200, // Increase particle density
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: 'circle',
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesComponent;

import React from 'react';
import { useState, useEffect } from 'react';
import Earth from '../assets/SpaceBackground.jpeg';
import Moonman from '../assets/Moonman.png';
import Venus from '../assets/Venus.png';
import Saturn from '../assets/Saturn.png';
import Mars from '../assets/Mars.png';
import Jupiter from '../assets/Jupiter.png';
import '../index.css'; 

const Hero = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [venusOriginalHeight, setVenusOriginalHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const venusStyle = { transform: `translateX(${scrollPosition * 0.5}px)` };
  const saturnStyle = { transform: `translateX(${scrollPosition * -0.7}px)` };
  const marsStyle = { transform: `translateX(${scrollPosition * -0.3}px)` };
  const jupiterStyle = { transform: `translateX(${scrollPosition * -0.7}px)` };

  return (
    <div className="hero-container">
      {/* Added className to background-img div */}
      <div className="background-img">
        <img src={Earth} className="relative inset-0 h-full w-full object-cover" />
      </div>
      <main className="parallax">
        {/* Added closing tag for img element */}
        <img src={Moonman} id="moonman" />
        <img src={Mars} id="mars" style={marsStyle} />
        <img src={Jupiter} id="jupiter" style={jupiterStyle} />
        <img src={Venus} id="venus" style={venusStyle} />
        <img src={Saturn} id="saturn" style={saturnStyle} />
      </main>
      <section id='bio'>
        <span>WEB DEVELOPER & DESIGNER</span>
        <p>
          Hi, I'm Brendan, I am a Fullstack Software Engineer
          <br />
          specializing in Front-end development.
          <br />
          I create Beautiful and Engaging digital experiences.
          <br />
          I love Minimal & Brutalist Design.
          <br />
          I love Artificial Intelligence & Astronomy & Pizza
        </p>
      </section>
    </div>
  );
};

export default Hero;

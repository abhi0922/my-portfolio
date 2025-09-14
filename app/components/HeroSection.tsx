'use client';

import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  const handleScroll = () => {
    const target = document.getElementById('abhi');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="hero" className="min-h-screen flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-5xl md:text-7xl font-bold mb-4">
        <span className="text-white">Hey, I am </span>
        <TypeAnimation
          sequence={[
            'Abilasha Arora',
            2000,
             'a Problem Solver!',
            2000,
            'Web Developer!',
            2000,
            'UI/UX Designer!',
            2000,
          ]}
          wrapper="span"
          speed={50}
          style={{ color: '#50c8ff' }}
          repeat={Infinity}
        />
      </h1>
      <p className="text-2xl md:text-3xl text-white mb-8">
        Building my dream pixel by pixel!
      </p>
      <button
        onClick={handleScroll}
        className="px-6 py-2 border-2 border-white text-white rounded-md text-xl hover:bg-white cursor-pointer hover:text-black transition-all duration-300"
      >
        Read More
      </button>
    </div>
  );
};

export default HeroSection;

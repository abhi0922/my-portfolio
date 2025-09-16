'use client'; // This component uses client-side animations

import React from 'react';

const AboutMe = () => {
  return (
    // Added text-center for mobile, which will be overridden by text-left on medium screens and up
    <section id='abhi' className="min-h-screen pb-10 px-4 flex flex-col items-center justify-center text-center md:text-left">
      {/* Main Title */}
      <h2 className="text-4xl md:text-5xl font-bold mb-8 md:mb-12 animate-fadeInUp"> {/* MODIFIED: Reduced mobile margin */}
        Why hire me for your <span className="text-cyan-400">next project?</span>
      </h2>

      {/* Main content grid */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Image Container with Glowing Border */}
        {/* MODIFIED: Made image smaller on mobile for better spacing */}
        <div className="relative w-64 h-80 md:w-72 md:h-96 mx-auto animate-fadeInLeft">
          <div className="absolute inset-0 bg-cyan-400 rounded-lg blur-xl opacity-0 animate-pulseBorder"></div>
          <div className="relative w-full h-full bg-slate-800 rounded-lg border-2 border-cyan-400 overflow-hidden">
            <img
              src="/profile.jpg" // NOTE: Ensure profile.jpg is in your /public folder
              alt="Profile"
              className="w-full h-full object-cover opacity-80"
            />
          </div>
        </div>

        {/* Text Content */}
        {/* MODIFIED: Adjusted font size and removed invalid "pr-15 mr-15" classes */}
        <div className="text-lg md:text-xl text-slate-300 space-y-6 animate-fadeInRight">
          <p>
            Passionate learner with hands-on experience in Java, Python, C, JavaScript, HTML, CSS, React.js, Next.js, TailwindCSS, Bootstrap, and Git. 
            I have a strong foundation in Data Structures & Algorithms, Object-Oriented Programming, and Competitive Programming, and I enjoy solving challenging problems. With a keen interest in Web Development, Artificial Intelligence, and Software Engineering,
            I am committed to continuously learning and building impactful solutions.
          </p>

          {/* Buttons */}
          {/* MODIFIED: Centered buttons on mobile, left-aligned on desktop */}
          <div className="flex items-center justify-center md:justify-start space-x-4">
            <a href="#skills" className="px-5 py-2 border-2 border-white text-white rounded-md text-base md:text-lg hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105">
              My Skills
            </a>
            <a 
              href="https://drive.google.com/file/d/1hn9QcN5OJHye8CNw72IecxW63CHtsxFZ/view?usp=drive_link" 
              download="Abhilasha_Arora_CV.pdf"
              className="px-5 py-2 border-2 border-white text-white rounded-md text-base md:text-lg hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
            >
              Download CV
            </a>
          </div>

          {/* Stats */}
          {/* MODIFIED: Centered stats on mobile, adjusted spacing and font size */}
          <div className="flex items-center justify-center md:justify-start space-x-8 md:space-x-12 pt-4">
            <div>
              <p className="text-2xl md:text-3xl font-bold text-cyan-400">3rd Year</p>
              <p className="text-slate-400">B-Tech current</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-cyan-400">3+ Projects</p>
              <p className="text-slate-400">Github</p>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
};

export default AboutMe;
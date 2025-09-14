'use client'; // This component uses client-side animations

import React from 'react';

const AboutMe = () => {
  return (
    <section id='abhi' className="min-h-screen pb-10 px-4 flex flex-col items-center justify-center">
      {/* Main Title */}
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center animate-fadeInUp">
        Why hire me for your <span className="text-cyan-400">next project?</span>
      </h2>

      {/* Main content grid */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Image Container with Glowing Border */}
        <div className="relative w-72 h-96 mx-auto animate-fadeInLeft">
          <div className="absolute inset-0 bg-cyan-400 rounded-lg blur-xl opacity-0 animate-pulseBorder"></div>
          <div className="relative w-full h-full bg-slate-800 rounded-lg border-2 border-cyan-400 overflow-hidden">
            <img
              src="/assets/profile.jpg" // Corrected path for Next.js public folder
              alt="Profile"
              className="w-full h-full object-cover opacity-80"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="text-xl pr-15 mr-15 text-slate-300 space-y-6 animate-fadeInRight">
          <p>
          Passionate learner with hands-on experience in Java, Python, C, JavaScript, HTML, CSS, React.js, Next.js, TailwindCSS, Bootstrap, and Git. 
          I have a strong foundation in Data Structures & Algorithms, Object-Oriented Programming, and Competitive Programming, and I enjoy solving challenging problems. With a keen interest in  Web Development,Artificial Intelligence, and Software Engineering,
          I am committed to continuously learning and building impactful solutions.
          </p>

          {/* Buttons */}
          <div className="flex items-center space-x-4">
            <a href="#skills" className="px-5 py-2 border-2 border-white text-white rounded-md text-lg hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105">
              My Skills
            </a>
            {/* IMPORTANT: To make this work:
              1. Place your CV file (e.g., "resume.pdf") inside the 'public' folder in your project root.
              2. The 'href' should be the direct path to the file from the public folder.
              3. The 'download' attribute prompts the user to download the file.
            */}
            <a 
              href="https://drive.google.com/file/d/1hn9QcN5OJHye8CNw72IecxW63CHtsxFZ/view?usp=drive_link" // Change "resume.pdf" to your file's name
              download="Abhilasha_Arora_CV.pdf" // This is the name the file will have when downloaded
              className="px-5 py-2 border-2 border-white text-white rounded-md text-lg hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
            >
              Download CV
            </a>
          </div>

          {/* Stats */}
          <div className="flex items-center space-x-12 pt-4">
            <div>
              <p className="text-3xl font-bold text-cyan-400">3rd Year</p>
              <p className="text-slate-400">B-Tech current</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-cyan-400">3+ Projects</p>
              <p className="text-slate-400">Github</p>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
};

export default AboutMe;


'use client';

import React from 'react';

// Data for the journey cards - easy to update
const educationData = [
  {
    date: '2023-2027',
    title: 'B-Tech CSE(AI) - 8 cgpa',
    institution: 'KIET Group Of Institutions',
  },
  {
    date: '2022 - 2023',
    title: 'PCM Stream - 93.2%',
    institution: 'R.A.N. Public School',
  },
];

const experienceData = [
  {
    date: '28 June 2025',
    title: 'Swiggy Clone Frontend',
    company: 'React.js',
  },
  {
    date: 'February 2025',
    title: 'Innotech College Tech Fest Project: HealthHub',
    company: 'React.js',
  },
  {
    date: '14 August 2025',
    title: 'Java Fundamentals',
    company: 'Scaler Topics',
  },
  {
    date: '14 August 2025',
    title: 'Sparkathon-appreciation',
    company: 'Walmart',
  },
];

const Journey = () => {
  return (
    // The negative margin might be used to overlap with a previous component's design. This is generally fine.
    <section id="journey" className="min-h-screen px-20 flex flex-col items-center -mt-20">
      
      {/* Main Title */}
      <h3 className="text-3xl md:text-5xl mb-12 md:mb-20 font-bold mt-20 text-center animate-fadeInUp delay-500"> {/* MODIFIED: Reduced bottom margin on mobile */}
        My <span className="text-cyan-400">Academic</span> and <span className="text-cyan-400">Professional</span> Journey
      </h3>

      {/* Grid for Education and Experience */}
      {/* MODIFIED: Adjusted grid gap for mobile vs desktop */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-x-16">
        
        {/* Education Column */}
        {/* MODIFIED: Removed invalid 'ml-50' class */}
        <div className="animate-slideInLeft">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center md:text-left">Education</h3> {/* MODIFIED: Responsive font size */}
          <div className="space-y-6">
            {educationData.map((item, index) => (
              // MODIFIED: Removed invalid 'w-125' and adjusted padding
              <div key={index} className="journey-card bg-blue-50/10 p-4 rounded-2xl" style={{ animationDelay: `${index * 0.2}s` }}>
                <p className="text-sm text-slate-400">{item.date}</p>
                <h4 className="text-lg md:text-xl font-bold text-cyan-400">{item.title}</h4> {/* MODIFIED: Responsive font size */}
                <p className="text-slate-300">{item.institution}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Experience Column */}
        <div className="animate-slideInRight">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center md:text-left">Projects & Certificates</h3> {/* MODIFIED: Responsive font size */}
          <div className="space-y-6">
            {experienceData.map((item, index) => (
              // MODIFIED: Removed invalid 'w-125' and adjusted padding
              <div key={index} className="journey-card bg-blue-50/10 p-4 rounded-2xl" style={{ animationDelay: `${index * 0.2}s` }}>
                <p className="text-sm text-slate-400">{item.date}</p>
                <h4 className="text-lg md:text-xl font-bold text-cyan-400">{item.title}</h4> {/* MODIFIED: Responsive font size */}
                <p className="text-slate-300">{item.company}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
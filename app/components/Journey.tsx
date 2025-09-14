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
    date: '2022- 2023',
    title: ' PCM Stream - 93.2%',
    institution: 'R.A.N. Public School',
  },
  // {
  //   date: 'March 9, 2022',
  //   title: 'Front-end Training',
  //   institution: 'Alura',
  // },
  // {
  //   date: '2019 - 2023',
  //   title: 'Computer Science Degree',
  //   institution: 'Wyden UniFBV',
  // },
];

const experienceData = [
  {
    date: '28 june 2025',
    title: ' Swiggy Clone Frontend',
    company: 'React.js',
  },
  {
    date: 'February 2025',
    title: ' Innotech College Tech Fest Project: HealthHub',
    company: 'React.js',
  },
    {
    date: '14 August 2025',
    title: 'Java Fundamentals',
    company: ' Scaler Topics ',
  },
    {
    date: '14 August 2025',
    title: 'Sparkathon-appreciation',
    company: 'Walmart ',
  },
];


 {/* Secondary Title */}


const Journey = () => {
  return (
    <section id="journey"  className="min-h-screen  px-4 flex flex-col items-center -mt-20">
      {/* Title is inherited from the previous component */}
<h3 className="text-3xl md:text-5xl mb-20 font-bold mt-20 text-center animate-fadeInUp delay-500">
 My <span className="text-cyan-400">Academic</span> and <span className="text-cyan-400">Professional</span> Journey
</h3>
      {/* Grid for Education and Experience */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        
        {/* Education Column */}
        <div className="ml-50 animate-slideInLeft">
          <h3 className="text-4xl font-bold mb-8 text-center md:text-left">Education</h3>
          <div className="space-y-6">
            {educationData.map((item, index) => (
              <div key={index} className="journey-card bg-blue-50/10 pl-5 py-2 rounded-2xl w-125" style={{ animationDelay: `${index * 0.2}s` }}>
                <p className="text-sm text-slate-400">{item.date}</p>
                <h4 className="text-xl font-bold text-cyan-400">{item.title}</h4>
                <p className="text-slate-300">{item.institution}</p>
              </div>
            ))}
          </div>
        </div>

        

        {/* Professional Experience Column */}
        <div className="animate-slideInRight">
          <h3 className="text-3xl font-bold mb-8 text-center md:text-left">Projects & certiicates</h3>
          <div className="space-y-6">
            {experienceData.map((item, index) => (
              <div key={index} className="journey-card  bg-blue-50/10 pl-5 py-2 rounded-2xl w-125" style={{ animationDelay: `${index * 0.2}s` }}>
                <p className="text-sm text-slate-400">{item.date}</p>
                <h4 className="text-xl font-bold text-cyan-400">{item.title}</h4>
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

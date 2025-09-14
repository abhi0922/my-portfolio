'use client';

import React, { useState } from 'react';
import { Code, GitMerge, Github, Figma, Bot } from 'lucide-react';

// Define the structure for our data
type SkillCategory = 'Front-end' | 'Back-end' | 'Web Development' | 'Langugages & Data Structures';

const skillsData = {
  'Front-end': {
    tools: [
      { name: 'Visual Studio Code', icon: <Code size={20} /> },
      { name: 'Git', icon: <GitMerge size={20} /> },
      { name: 'GitHub', icon: <Github size={20} /> },
      { name: 'Figma', icon: <Figma size={20} /> },
    ],
    skills: [
      { name: 'HTML5', level: 95 },
      { name: 'React', level: 90 },
      { name: 'CSS', level: 95 },
      { name: 'Javascript', level: 85 },
      { name: 'Tailwind CSS', level: 80 },
      { name: 'Bootstrap5', level: 80 },
      { name: 'TypeScript', level: 70 },
    ],
  },
  'Back-end': {
    tools: [
        { name: 'Visual Studio Code', icon: <Code size={20} /> },
        { name: 'Git', icon: <GitMerge size={20} /> },
        { name: 'GitHub', icon: <Github size={20} /> },
        { name: 'Postman', icon: <Bot size={20} /> },
    ],
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express', level: 80 },
      { name: 'MongoDB', level: 75 },
      { name: 'SQL', level: 70 },
    ],
  },
    'Web Development': {
    tools: [
      { name: 'Visual Studio Code', icon: <Code size={20} /> },
      { name: 'Git', icon: <GitMerge size={20} /> },
      { name: 'GitHub', icon: <Github size={20} /> },
      { name: 'Figma', icon: <Figma size={20} /> },
    ],
    skills: [
        { name: 'HTML5', level: 95 },
        { name: 'React', level: 80 },
        { name: 'CSS', level: 95 },
        { name: 'Javascript', level: 80 },
        { name: 'Tailwind CSS', level: 80 },
        { name: 'Bootstrap5', level: 80 },
        { name: 'TypeScript', level: 70 },
         { name: 'Next', level: 70 },
        { name: 'Node.js', level: 65 },
        { name: 'Express', level: 50 },
        { name: 'MongoDB', level: 50 },
        { name: 'SQL', level: 70 },
    ],
  },
    'Langugages & Data Structures': {
    tools: [
        { name: 'Visual Studio Code', icon: <Code size={20} /> },
        { name: 'Git', icon: <GitMerge size={20} /> },
        { name: 'GitHub', icon: <Github size={20} /> },
    ],
    skills: [
      { name: 'Java', level: 90 },
      { name: 'C', level: 80 },
      { name: 'Python', level: 70 },
    ],
  },
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState<SkillCategory>('Front-end');

  const currentSkills = skillsData[activeTab];

  return (
    <section  id="skills" className="min-h-screen py-20 px-4 flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center animate-fadeInUp">
        Tools and <span className="text-cyan-400">Skills</span>
      </h2>

      {/* Category Tabs */}
      <div className="flex flex-wrap  justify-center gap-4 mb-12">
        {(Object.keys(skillsData) as SkillCategory[]).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-lg text-lg transition-all duration-300 ${
              activeTab === tab 
                ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/30' 
                : 'bg-slate-700 hover:bg-slate-600'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Skills and Tools Grid - Added a key to re-trigger animations on tab change */}
      <div key={activeTab} className="container pl-50 pr-20 grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Tools Column */}
        <div className="animate-slideInLeft">
          <h3 className="text-3xl font-bold mb-8 text-center">Tools</h3>
          <div className="space-y-4">
            {currentSkills.tools.map((tool, index) => (
              <div key={index} className="flex items-center gap-4 text-xl p-2">
                <span className="text-cyan-400">{tool.icon}</span>
                <span>{tool.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Column */}
        <div className="animate-slideInRight mr-10">
          <h3 className="text-3xl font-bold mb-8 text-center">Skills</h3>
          <div className="space-y-6">
            {currentSkills.skills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span className="text-lg">{skill.name}</span>
                  <span className="text-lg text-cyan-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 h-3 rounded-full animate-fillBar"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;


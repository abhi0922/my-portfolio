'use client'
import React from 'react';

// You can install these icons by running: npm install lucide-react
import { Github, Linkedin, Mail, Phone, Heart, Code } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github className="h-6 w-6" />,
      url: 'https://github.com/abhi0922', // Replace with your GitHub URL
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="h-6 w-6" />,
      url: 'https://www.linkedin.com/in/abhilasha-arora-5390602a0/', // Replace with your LinkedIn URL
    },
    {
      name: 'Codolio',
      icon: <Code className="h-6 w-6" />, // Using a code icon for Codolio
      url: 'https://codolio.com/profile/AbhilashaArora', // Replace with your Codolio profile URL
    },
  ];

  return (
    <footer id="contact"
      className="bg-[#0f0f2b] text-white py-12 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage:
          'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
        backgroundSize: '20px 20px',
      }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* About Section */}
        <div className="animate-fade-in-up">
          <h3 className="text-xl font-bold text-cyan-400 mb-4 font-mono">
            Problem Solver
          </h3>
          <p className="text-gray-400">
            Building my dreams pixel by pixel!
          </p>
        </div>

        {/* Contact Info Section */}
        <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          <h3 className="text-xl font-bold text-cyan-400 mb-4 font-mono">
            Get in Touch
          </h3>
          <ul className="space-y-2 text-gray-400">
            <li className="flex items-center justify-center md:justify-start hover:text-cyan-400 transition-colors">
              <Mail className="h-5 w-5 mr-3" />
              <a href="mailto:abhilashaarora2004@gmail.com">abhilashaarora2004@gmail.com</a>
            </li>
            {/* <li className="flex items-center justify-center md:justify-start hover:text-cyan-400 transition-colors">
              <Phone className="h-5 w-5 mr-3" />
              <span>+1 (234) 567-890</span>
            </li> */}
          </ul>
        </div>

        {/* Social Links Section */}
        <div className="animate-fade-in-up" style={{ animationDelay: '400ms' }}>
          <h3 className="text-xl font-bold text-cyan-400 mb-4 font-mono">
            Follow Me
          </h3>
          <div className="flex justify-center md:justify-start space-x-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="text-gray-400 hover:text-cyan-400 transform hover:scale-125 transition-transform"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500">
        <p className="flex items-center justify-center">
          &copy; {currentYear} Abhilasha Arora. Made with{' '}
          <Heart className="h-5 w-5 mx-1 text-red-500" /> in Next.js.
        </p>
      </div>

      {/* CSS for animations - you can add this to your global CSS file */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.5s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </footer>
  );
};

export default Footer;


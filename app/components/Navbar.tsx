'use client';

import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu

  const navLinks = [
    { name: 'Home', path: '#hero' },
    { name: 'About', path: '#abhi' },
    { name: 'Journey', path: '#journey' },
    { name: 'Skills', path: '#skills' },
    { name: 'Contact', path: '#contact' },
  ];

  useEffect(() => {
    const hero = document.getElementById('hero');
    if (!hero) return;

    const observer = new IntersectionObserver(
      (entries) => setIsHeroVisible(entries[0].isIntersecting),
      { threshold: 0.2 } // Navbar background will appear when 80% of the hero section is out of view
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  // Closes the mobile menu when a link is clicked
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 p-4 transition-colors duration-300 ${
        isHeroVisible && !isMenuOpen // Show background if menu is open, even on hero
          ? 'bg-transparent'
          : 'bg-[#0f0f2b] bg-opacity-70 backdrop-blur-sm shadow-md'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="#hero" className="flex items-center" onClick={handleLinkClick}>
          <img
            src="/crown.png"
            alt="Logo"
            width={50}
            height={50}
            className="transform hover:scale-110 transition-transform duration-300"
          />
        </a>

        {/* Desktop Menu (Visible on medium screens and up) */}
        <ul className="hidden md:flex items-center space-x-10 text-white text-lg">
          {navLinks.map(({ name, path }) => (
            <li key={name}>
              <a
                href={path}
                className="hover:text-cyan-400 transition-colors duration-200 font-mono"
              >
                {name}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger Button (Visible on small screens) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12" // 'X' icon
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7" // Hamburger icon
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'block' : 'hidden'}`}>
        <ul className="flex flex-col items-center mt-4 space-y-4 text-white text-lg">
          {navLinks.map(({ name, path }) => (
            <li key={name}>
              <a
                href={path}
                onClick={handleLinkClick} // Close menu on click
                className="hover:text-cyan-400 transition-colors duration-200 font-mono py-2"
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
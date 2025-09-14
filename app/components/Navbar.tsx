'use client';
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isHeroVisible, setIsHeroVisible] = useState(true);

  const navLinks = [
    { name: "Home", path: "#hero" },
    { name: "About", path: "#abhi" },
    { name: "Journey", path: "#journey" },
    { name: "Skills", path: "#skills" },
    { name: "Contact", path: "#contact" },
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

  // DEV NOTE: If the navbar is not sticking to the top, the issue is likely in a parent component.
  // The `fixed` class requires that no parent element has the `transform`, `perspective`, or `filter` property set to anything other than `none`.
  // Also, check your `layout.tsx` or main `page.tsx` for any wrapper divs that have `overflow-hidden` or `overflow-x-hidden`, as these can break `position: fixed`.
  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 p-4 transition-colors duration-300 ${
        isHeroVisible
          ? 'bg-transparent'
          : 'bg-[#0f0f2b] bg-opacity-70 backdrop-blur-sm shadow-md'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <a href="#hero" className="flex items-center">
          <img
            src="/crown.png" 
            alt="Logo"
            width={50}
            height={50}
            className="transform hover:scale-110 transition-transform duration-300"
          />
        </a>

        <ul className="flex items-center space-x-10 text-white text-lg">
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
      </div>
    </nav>
  );
};

export default Navbar;


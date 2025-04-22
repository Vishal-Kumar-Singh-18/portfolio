import { useState, useEffect } from 'react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
    return () => document.body.classList.remove('menu-open');
  }, [isOpen]);

  return (
    <nav className="bg-blue-600 text-white p-4 sticky top-0 z-20 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Vishal Singh</h1>
        {/* Hamburger Button for Mobile */}
        <button
          className="md:hidden flex items-center p-2 rounded text-white hover:bg-blue-700 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li><a href="#introduction" className="hover:underline">Home</a></li>
          <li><a href="#experience" className="hover:underline">Experience</a></li>
          <li><a href="#education" className="hover:underline">Education</a></li>
          <li><a href="#projects" className="hover:underline">Projects</a></li>
          <li><a href="#skills" className="hover:underline">Skills</a></li>
          <li><a href="#about" className="hover:underline">About</a></li>
          <li><a href="#contact" className="hover:underline">Contact</a></li>
        </ul>
      </div>
      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 bg-blue-600 bg-opacity-95 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out z-10`}
      >
        <div className="flex justify-end p-4">
          <button
            className="p-2 rounded text-white hover:bg-blue-700 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Close navigation menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <ul className="flex flex-col items-center space-y-6 mt-10 text-lg">
          <li><a href="#introduction" className="hover:underline" onClick={toggleMenu}>Home</a></li>
          <li><a href="#experience" className="hover:underline" onClick={toggleMenu}>Education</a></li>
          <li><a href="#education" className="hover:underline" onClick={toggleMenu}>Education</a></li>
          <li><a href="#projects" className="hover:underline" onClick={toggleMenu}>Projects</a></li>
          <li><a href="#skills" className="hover:underline" onClick={toggleMenu}>Skills</a></li>
          <li><a href="#about" className="hover:underline" onClick={toggleMenu}>About</a></li>
          <li><a href="#contact" className="hover:underline" onClick={toggleMenu}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
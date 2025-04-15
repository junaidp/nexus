import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#home" className="text-2xl font-bold text-indigo-600">Nexus</a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-indigo-600 font-medium">Home</button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-indigo-600 font-medium">About Us</button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-indigo-600 font-medium">Services</button>
            <button onClick={() => scrollToSection('accelerator')} className="text-gray-700 hover:text-indigo-600 font-medium">Startup Accelerator</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-indigo-600 font-medium">Contact</button>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 hover:text-indigo-600">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4 absolute left-0 right-0 mx-4">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-indigo-600 font-medium py-2">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-indigo-600 font-medium py-2">About Us</button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-indigo-600 font-medium py-2">Services</button>
              <button onClick={() => scrollToSection('accelerator')} className="text-gray-700 hover:text-indigo-600 font-medium py-2">Startup Accelerator</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-indigo-600 font-medium py-2">Contact</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white p-4 shadow-sm fixed top-0 left-0 right-0 z-50"> 
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-3xl font-bold text-blue-600">Doctor</span>
          <span className="bg-teal-400 p-1 rounded-full text-white inline-flex items-center justify-center -translate-y-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-3 h-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </span>
        </div>

        <div className="hidden md:flex space-x-8 text-gray-600 font-medium">
          <a href="/" className="hover:text-blue-500 transition duration-300">Home</a>
          <a href="/about" className="hover:text-blue-500 transition duration-300">About</a>
          <a href="/services" className="hover:text-blue-500 transition duration-300">Services</a>
          <a href="/contact" className="hover:text-blue-500 transition duration-300">Contact</a>
        </div>

        <div className="hidden md:block">
          <button className="flex items-center px-6 py-2 rounded-full text-white font-semibold
                             bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700
                             transition duration-300 shadow-md">
            <MessageCircle className="h-5 w-5 mr-2" /> 
            Book Now
          </button>
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-gray-600 focus:outline-none">
            {isOpen ? (
              <X className="h-8 w-8" /> 
            ) : (
              <Menu className="h-8 w-8" /> 
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 border-t border-gray-200">
          <div className="flex flex-col items-center space-y-4 text-gray-700 font-medium">
            <a href="/" className="block py-2 hover:text-blue-500 transition duration-300" onClick={toggleMenu}>Home</a>
            <a href="/about" className="block py-2 hover:text-blue-500 transition duration-300" onClick={toggleMenu}>About</a>
            <a href="/services" className="block py-2 hover:text-blue-500 transition duration-300" onClick={toggleMenu}>Services</a>
            <a href="/contact" className="block py-2 hover:text-blue-500 transition duration-300" onClick={toggleMenu}>Contact</a>
            <button className="flex items-center px-6 py-2 rounded-full text-white font-semibold
                               bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700
                               transition duration-300 shadow-md mt-4" onClick={toggleMenu}>
              <MessageCircle className="h-5 w-5 mr-2" /> {/* Menggunakan ikon MessageCircle dari Lucide */}
              Book Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gradient-to-t from-cyan-50 to-gray-200 shadow-md fixed w-full top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold
        
        bg-gradient-to-r from-indigo-700 to-cyan-700 text-transparent bg-clip-text
        "> 
        <a href="#"> RealEstatePro</a>
         
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 focus:outline-none"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
        <ul
          className={`md:flex md:space-x-6 ${isOpen ? 'block animate-mobile-menu' : 'hidden'} absolute md:static top-full left-0 w-full bg-white md:bg-transparent md:w-auto p-4 md:p-0 shadow-md md:shadow-none font-medium text-center md:text-left text-base md:text-lg`}
        >
            <li className="py-2 md:p-0 my-auto " onClick={() => setIsOpen(false)}>
            <a href="#" className="text-gray-600 hover:text-indigo-600 block">
              Home
            </a>
          </li>


          <li className="py-2 md:p-0 my-auto " onClick={() => setIsOpen(false)}>
            <a href="#properties" className="text-gray-600 hover:text-indigo-600 block">
              Properties
            </a>
          </li>
          <li className="py-2 md:p-0 my-auto" onClick={() => setIsOpen(false)}>
            <a href="#about" className="text-gray-600 hover:text-indigo-600 block">
              About Us
            </a>
          </li>
          {/* <li className="py-2 md:p-0 my-auto" onClick={() => setIsOpen(false)}>
            <a href="#contact" className="text-gray-600 hover:text-indigo-600 block">
              Contact
            </a>
          </li> */}
          <li className="py-2 md:p-0">
            <button onClick={() => setIsOpen(false)} className="bg-gradient-to-r from-indigo-600 to-cyan-700
             text-white px-4 py-2 rounded-md  w-full md:w-auto cursor-pointer">
                <a href="#contact" className=" hover:text-yellow-50 block">
              Contact
            </a>
             
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
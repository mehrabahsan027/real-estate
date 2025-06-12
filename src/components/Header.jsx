import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Variants for mobile menu animation
  const menuVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.3 },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
  };

  // Variants for menu items
  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="bg-gradient-to-t from-cyan-50 to-gray-200 shadow-md fixed w-full top-0 z-50"
    >
      <nav className="container mx-auto flex justify-between items-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl font-bold bg-gradient-to-r from-indigo-700 to-cyan-700 text-transparent bg-clip-text"
        >
          <a href="#">RealEstatePro</a>
        </motion.div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 focus:outline-none"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            <motion.svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </motion.svg>
          </button>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="absolute md:static top-full left-0 w-full bg-white md:bg-transparent md:w-auto p-4 md:p-0 shadow-md md:shadow-none font-medium text-center md:text-left text-base md:text-lg md:flex md:space-x-6"
            >
              <motion.li
                variants={itemVariants}
                className="py-2 md:p-0 my-auto"
                onClick={() => setIsOpen(false)}
              >
                <motion.a
                  href="#"
                  className="text-gray-800 hover:text-indigo-600 block"
                  whileHover={{ scale: 1.05, color: '#4f46e5' }}
                  transition={{ duration: 0.2 }}
                >
                  Home
                </motion.a>
              </motion.li>
              <motion.li
                variants={itemVariants}
                className="py-2 md:p-0 my-auto"
                onClick={() => setIsOpen(false)}
              >
                <motion.a
                  href="#properties"
                  className="text-gray-800 hover:text-indigo-600 block"
                  whileHover={{ scale: 1.05, color: '#4f46e5' }}
                  transition={{ duration: 0.2 }}
                >
                  Properties
                </motion.a>
              </motion.li>
              <motion.li
                variants={itemVariants}
                className="py-2 md:p-0 my-auto"
                onClick={() => setIsOpen(false)}
              >
                <motion.a
                  href="#about"
                  className="text-gray-800 hover:text-indigo-600 block"
                  whileHover={{ scale: 1.05, color: '#4f46e5' }}
                  transition={{ duration: 0.2 }}
                >
                  About Us
                </motion.a>
              </motion.li>
              <motion.li
                variants={itemVariants}
                className="py-2 md:p-0"
              >
                <motion.button
                  onClick={() => setIsOpen(false)}
                  className="bg-gradient-to-r from-indigo-600 to-cyan-700 text-white px-4 py-2 rounded-md w-full md:w-auto cursor-pointer"
                  whileHover={{ scale: 1.05, boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)' }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <a href="#contact" className="hover:text-yellow-50 block">
                    Contact
                  </a>
                </motion.button>
              </motion.li>
            </motion.ul>
          )}
        </AnimatePresence>
        <motion.ul
          className="hidden md:flex md:space-x-6 font-medium text-base md:text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.li className="my-auto">
            <motion.a
              href="#"
              className="text-gray-800 hover:text-indigo-600 block"
              whileHover={{ scale: 1.05, color: '#4f46e5' }}
              transition={{ duration: 0.2 }}
            >
              Home
            </motion.a>
          </motion.li>
          <motion.li className="my-auto">
            <motion.a
              href="#properties"
              className="text-gray-800 hover:text-indigo-600 block"
              whileHover={{ scale: 1.05, color: '#4f46e5' }}
              transition={{ duration: 0.2 }}
            >
              Properties
            </motion.a>
          </motion.li>
          <motion.li className="my-auto">
            <motion.a
              href="#about"
              className="text-gray-800 hover:text-indigo-600 block"
              whileHover={{ scale: 1.05, color: '#4f46e5' }}
              transition={{ duration: 0.2 }}
            >
              About Us
            </motion.a>
          </motion.li>
          <motion.li>
            <motion.button
              className="bg-gradient-to-r from-indigo-600 to-cyan-700 text-white px-4 py-2 rounded-md cursor-pointer"
              whileHover={{ scale: 1.05, boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)' }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <a href="#contact" className="hover:text-yellow-50 block">
                Contact
              </a>
            </motion.button>
          </motion.li>
        </motion.ul>
      </nav>
    </motion.header>
  );
};

export default Header;
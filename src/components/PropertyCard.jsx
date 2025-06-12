import React from 'react';
import { motion } from 'framer-motion';

const PropertyCard = ({ property }) => {
  // Variants for text elements (title, address, price, beds/baths)
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        staggerChildren: 0.1,
      },
    },
  };

  // Variants for individual text items
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg overflow-hidden"
      whileHover={{ scale: 1.05, boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)' }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3 }}
    >
      <motion.img
        src={property.image}
        alt={property.title}
        className="w-full h-48 object-cover"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.15 }}
      />
      <motion.div
        className="p-6"
        variants={textVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h3
          variants={itemVariants}
          className="text-xl font-semibold text-gray-800 mb-2"
        >
          {property.title}
        </motion.h3>
        <motion.p
          variants={itemVariants}
          className="text-gray-600 mb-4"
        >
          {property.address}
        </motion.p>
        <motion.div
          variants={itemVariants}
          className="flex justify-between items-center mb-4"
        >
          <motion.span
            variants={itemVariants}
            className="text-base md:text-2xl font-bold text-indigo-600"
          >
            ${property.price.toLocaleString()}
          </motion.span>
          <motion.div
            variants={itemVariants}
            className="text-gray-700 flex items-center space-x-4"
          >
            <motion.span variants={itemVariants} className="flex items-center">
              <svg
                className="w-5 h-5 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m0 0l-7 7m7-7v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                ></path>
              </svg>
              {property.beds} Beds
            </motion.span>
            <motion.span variants={itemVariants} className="flex items-center">
              <svg
                className="w-5 h-5 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2h14z"
                ></path>
              </svg>
              {property.baths} Baths
            </motion.span>
          </motion.div>
        </motion.div>
        <motion.button
          className="w-full bg-gradient-to-r from-indigo-600 to-cyan-700 text-white py-2 rounded-md font-medium"
          whileHover={{ scale: 1.05, boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)' }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          View Details
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default PropertyCard;
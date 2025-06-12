import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PropertyCard from './PropertyCard';
import { properties } from '../data/properties';

const FeaturedProperties = () => {
  const initialPropertyCount = 6;
  const [visibleProperties, setVisibleProperties] = useState(
    properties.slice(0, initialPropertyCount)
  );
  const [showAll, setShowAll] = useState(false);

  const handleViewAllProperties = () => {
    setVisibleProperties(properties);
    setShowAll(true);
  };

  // Variants for the section
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
  };

  // Variants for the title
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  // Variants for property cards
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  // Variants for the button
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  };

  return (
    <motion.section
      id="properties"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="py-16 bg-gradient-to-t from-cyan-100 to-gray-100"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          variants={titleVariants}
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12"
        >
          Featured Properties
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {visibleProperties.map((property) => (
              <motion.div
                key={property.id}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, y: 30, transition: { duration: 0.3 } }}
                layout
              >
                <PropertyCard property={property} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        <AnimatePresence>
          {!showAll && (
            <motion.div
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.3 } }}
              className="text-center mt-12"
            >
              <motion.button
                onClick={handleViewAllProperties}
                className="bg-gradient-to-r from-indigo-600 to-cyan-700 text-white px-8 py-3 rounded-full text-lg font-semibold cursor-pointer"
                whileHover={{ scale: 1.05, boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)' }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                View All Properties
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

export default FeaturedProperties;
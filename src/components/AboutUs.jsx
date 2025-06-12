import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
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

  // Variants for content (subtitle, paragraphs, list, button)
  const contentVariants = {
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

  // Variants for individual content items
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  // Variants for the image
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      id="about"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="py-16 bg-gradient-to-t from-cyan-100 to-gray-200"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          variants={titleVariants}
          className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-700 to-cyan-700 text-transparent bg-clip-text"
        >
          About RealEstatePro
        </motion.h2>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Section */}
          <motion.div
            variants={imageVariants}
            className="lg:w-1/2"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="https://images.unsplash.com/photo-1709715357519-2a84f9765e57?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="RealEstatePro Team"
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </motion.div>

          {/* Content Section */}
          <motion.div
            variants={contentVariants}
            className="lg:w-1/2 text-center lg:text-left md:text-lg"
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-semibold text-gray-800 mb-6"
            >
              Your Trusted Real Estate Partner
            </motion.h3>
            <motion.p
              variants={itemVariants}
              className="text-gray-700 leading-relaxed mb-4"
            >
              At RealEstatePro, we make finding your perfect home simple and stress-free. Our mission is to deliver exceptional service, expert guidance, and a seamless experience for buyers, sellers, and renters.
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="text-gray-700 leading-relaxed mb-6"
            >
              With deep market knowledge and innovative technology, our dedicated team ensures you achieve your real estate goals with confidence.
            </motion.p>
            <motion.ul
              variants={contentVariants}
              className="text-gray-800 list-disc list-inside space-y-2 mb-6 text-center lg:text-left mx-auto lg:mx-0 max-w-md font-medium"
            >
              <motion.li variants={itemVariants}>Client-Focused: Your priorities come first.</motion.li>
              <motion.li variants={itemVariants}>Market Expertise: Insight into local trends.</motion.li>
              <motion.li variants={itemVariants}>Transparency: Clear, honest communication.</motion.li>
              <motion.li variants={itemVariants}>Innovation: Cutting-edge tools for results.</motion.li>
            </motion.ul>
            <motion.button
              variants={itemVariants}
              className="bg-indigo-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-md"
              whileHover={{ scale: 1.05, boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)' }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              Discover Our Values
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutUs;
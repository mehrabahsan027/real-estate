import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you shortly.');
    setFormData({ name: '', email: '', phone: '', message: '' });
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

  // Variants for content (contact info and form)
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

  // Variants for form inputs
  const inputVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    focus: { scale: 1.02, borderColor: '#4f46e5', transition: { duration: 0.2 } },
  };

  return (
    <motion.section
      id="contact"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="py-16 bg-gradient-to-t from-cyan-100 to-gray-100"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          variants={titleVariants}
          className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-700 to-cyan-700 text-transparent bg-clip-text"
        >
          Get In Touch With Us
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Contact Information */}
          <motion.div
            variants={contentVariants}
            className="lg:w-1/2 text-white p-10 rounded-lg shadow-xl text-center lg:text-left bg-gradient-to-r from-indigo-600 to-cyan-700"
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-semibold mb-6"
            >
              Contact Information
            </motion.h3>
            <motion.p
              variants={itemVariants}
              className="text-lg mb-4"
            >
              We're here to help you with all your real estate needs. Feel free to reach out to us through any of the following channels.
            </motion.p>
            <motion.div
              variants={contentVariants}
              className="space-y-4"
            >
              <motion.p
                variants={itemVariants}
                className="flex items-center justify-start text-lg"
              >
                <motion.svg
                  className="w-6 h-6 mr-3 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0L6.343 16.657a8 8 0 1111.314 0z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </motion.svg>
                123 Real Estate Blvd, Cityville, Bangladesh
              </motion.p>
              <motion.p
                variants={itemVariants}
                className="flex items-center justify-start text-lg"
              >
                <motion.svg
                  className="w-6 h-6 mr-3 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </motion.svg>
                info@realestatepro.com
              </motion.p>
              <motion.p
                variants={itemVariants}
                className="flex items-center justify-start text-lg"
              >
                <motion.svg
                  className="w-6 h-6 mr-3 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  ></path>
                </motion.svg>
                +880 123 456 7890
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={contentVariants}
            className="w-full lg:w-1/2 bg-gradient-to-tl from-cyan-100 to-purple-50 p-10 rounded-lg shadow-xl"
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-semibold text-stone-900 mb-6 text-center lg:text-left"
            >
              Send Us a Message
            </motion.h3>
            <form onSubmit={handleSubmit} className="space-y-6 w-full">
              <motion.div variants={itemVariants}>
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                  Name
                </label>
                <motion.input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Your Name"
                  required
                  variants={inputVariants}
                  whileFocus="focus"
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                  Email
                </label>
                <motion.input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                  required
                  variants={inputVariants}
                  whileFocus="focus"
                />
              </motion.div>
             

              <motion.div variants={itemVariants}>
                <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">
                  Phone (Optional)
                </label>
                <motion.input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="e.g., +880 123 456 7890"
                  variants={inputVariants}
                  whileFocus="focus"
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                  Message
                </label>
                <motion.textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Tell us about your needs..."
                  required
                  variants={inputVariants}
                  whileFocus="focus"
                ></motion.textarea>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="text-center lg:text-left"
              >
                <motion.button
                  type="submit"
                  className="bg-indigo-600 text-white px-8 py-3 rounded-md text-lg font-semibold shadow-md"
                  whileHover={{ scale: 1.05, boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)' }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  Send Message
                </motion.button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
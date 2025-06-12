import React from 'react';
import { motion } from 'framer-motion';

const testimonialsData = [
  {
    id: 1,
    quote: "Finding our dream home was effortless with RealEstatePro. Their agents were incredibly supportive and knowledgeable!",
    author: "Sarah J.",
    location: "New York, USA",
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80',
  },
  {
    id: 2,
    quote: "The process of selling my property was so smooth. RealEstatePro handled everything efficiently and professionally.",
    author: "David L.",
    location: "New Jersey, USA",
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80',
  },
  {
    id: 3,
    quote: "I highly recommend RealEstatePro! Their diverse listings and transparent communication made my apartment search a breeze.",
    author: "Priya K.",
    location: "California, USA",
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80',
  },
];

const Testimonials = () => {
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

  // Variants for testimonial cards
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  // Variants for avatar
  const avatarVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.3 } },
  };

  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="py-16 bg-gradient-to-r from-indigo-600 to-cyan-700 text-white"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          variants={titleVariants}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          What Our Clients Say
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={cardVariants}
              className="bg-gradient-to-tl from-cyan-100 to-purple-50 text-gray-800 p-8 rounded-lg shadow-xl"
              whileHover={{ scale: 1.03, boxShadow: '0 12px 24px rgba(0, 0, 0, 0.2)', y: -4 }}
              transition={{ duration: 0.3 }}
            >
              <motion.p
                className="text-lg italic mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                "{testimonial.quote}"
              </motion.p>
              <div className="flex items-center">
                <motion.img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-16 h-16 rounded-full mr-4 object-cover border-2 border-indigo-500"
                  variants={avatarVariants}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                />
                <div>
                  <motion.p
                    className="font-semibold text-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                  >
                    {testimonial.author}
                  </motion.p>
                  <motion.p
                    className="text-gray-600 text-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                  >
                    {testimonial.location}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Testimonials;
import React from 'react';
import { motion } from 'framer-motion';

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      ease: 'easeOut',
    },
  }),
};

const Hero: React.FC = () => {
  return (
    <div
      className="relative text-white py-24 min-h-96 bg-cover bg-center"
      style={{
        backgroundImage: 'url("/about.png")',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.h5
          className="text-nsut-red font-semibold mb-2"
          custom={0}
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          Welcome to NSUT
        </motion.h5>
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-6"
          custom={1}
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          Training & Placement
        </motion.h1>
        <motion.p
          className="text-gray-300 max-w-3xl text-lg mb-8"
          custom={2}
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          The Training and Placement at NSUT serves as a crucial bridge between
          academia and industry. We facilitate excellent placement opportunities and
          internships for our students across leading organizations worldwide.
        </motion.p>

    
      </div>
    </div>
  );
};

export default Hero;

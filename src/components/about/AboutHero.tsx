
import React from "react";
import { motion } from "framer-motion";

const AboutHero = () => {
  return (
    <div className="relative py-24 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/about.png" 
          alt="University Campus Aerial View" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/40"></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold mb-6 text-white"
        >
          About Our University
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl text-gray-100 mb-6 max-w-3xl mx-auto"
        >
          Founded in 1983, we've been at the forefront of technology education for over four decades, 
          shaping bright minds into tomorrow's innovators and leaders.
        </motion.p>
      </div>
    </div>
  );
};

export default AboutHero;

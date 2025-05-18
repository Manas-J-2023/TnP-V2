
import React from "react";
import { motion } from "framer-motion";

const StatsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const statsVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {/* Image on the left */}
          <motion.div 
            variants={itemVariants}
            className="w-full md:w-1/2 bg-gray-200 rounded-lg overflow-hidden"
          >
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80" 
              alt="NSUT Students" 
              className="w-full h-full object-cover aspect-[4/3]"
            />
          </motion.div>
          
          {/* Stats content on the right */}
          <div className="w-full md:w-1/2">
            <motion.p 
              variants={itemVariants}
              className="text-sm uppercase tracking-wider text-gray-600 mb-2"
            >
              Excellence
            </motion.p>
            
            <motion.h2 
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold mb-6 text-gray-900"
            >
              Celebrating Our College's Remarkable Achievements
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="text-gray-700 mb-12 max-w-3xl"
            >
              Our college has consistently ranked among the top institutions in the country.
              We take pride in our commitment to academic excellence and student success.
            </motion.p>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-24 mb-12"
              variants={containerVariants}
            >
              <motion.div variants={statsVariant}>
                <p className="text-5xl font-bold text-gray-900 mb-2">95%</p>
                <p className="text-gray-700">Placement success rate for our graduates.</p>
              </motion.div>
              
              <motion.div variants={statsVariant}>
                <p className="text-5xl font-bold text-gray-900 mb-2">Top</p>
                <p className="text-gray-700">Ranked among the best engineering colleges nationwide.</p>
              </motion.div>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <a href="#" className="inline-block border border-gray-900 px-6 py-2 text-gray-900 hover:bg-gray-100 transition-colors">
                Learn More
              </a>
              <a href="#" className="inline-flex items-center text-gray-900 hover:underline">
                Contact <span className="ml-1">→</span>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default StatsSection;

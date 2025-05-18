
import React from "react";
import { motion } from "framer-motion";

const WelcomeSection = () => {
  const contentVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.2,
        ease: "easeOut"
      }
    })
  };

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <motion.h2 
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true}}
          variants={contentVariants}
          className="text-3xl md:text-4xl font-bold mb-6 text-gray-900"
        >
          Welcome to NSUT: Shaping Futures<br />
          Through Quality Education and Innovation
        </motion.h2>
        
        <motion.p 
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true}}
          variants={contentVariants}
          className="text-gray-700 mb-10 max-w-3xl mx-auto"
        >
          Netaji Subhas University of Technology (NSUT) is a premier institution committed to excellence 
          in technical education. Founded in 1983 as Delhi Institute of Technology, we've evolved into 
          a comprehensive university fostering innovation, research, and holistic development. 
          Our state-of-the-art facilities and distinguished faculty prepare students to tackle 
          real-world challenges and lead technological advancements.
        </motion.p>
        
        <motion.div 
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true}}
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: { 
              opacity: 1, 
              scale: 1,
              transition: { 
                delay: 0.4,
                duration: 0.8,
                ease: "easeOut"
              }
            }
          }}
          className="max-w-4xl mx-auto bg-gray-100 rounded-lg overflow-hidden shadow-md"
        >
          <img 
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&q=80" 
            alt="NSUT Campus" 
            className="w-full h-full object-cover aspect-video"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default WelcomeSection;

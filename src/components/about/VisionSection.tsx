
import React from "react";
import { motion } from "framer-motion";

const VisionSection = () => {
  return (
    <div className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >          
          <p className="text-gray-700 text-lg italic leading-relaxed">
            "We aim to foster a dynamic learning environment where creativity thrives, 
            research flourishes, and students develop both technical expertise and ethical leadership. 
            Our vision encompasses building a community of lifelong learners who contribute 
            meaningfully to technological advancement and societal progress."
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default VisionSection;

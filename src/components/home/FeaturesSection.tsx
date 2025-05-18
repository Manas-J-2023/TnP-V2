
import React from "react";
import { Lightbulb, GraduationCap, Award } from "lucide-react";
import { motion } from "framer-motion";

const FeaturesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.7,
        ease: "easeOut"
      }
    })
  };

  const features = [
    {
      icon: <Lightbulb className="h-8 w-8 text-red-600" />,
      title: "Innovative Teaching Methods",
      description: "Our faculty employs cutting-edge teaching methodologies to ensure students grasp complex concepts effectively."
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-red-600" />,
      title: "Industry-Aligned Curriculum",
      description: "Our courses are designed in collaboration with industry experts to meet current market demands."
    },
    {
      icon: <Award className="h-8 w-8 text-red-600" />,
      title: "Placement Assistance",
      description: "Dedicated placement cell that works tirelessly to secure opportunities with leading companies."
    }
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          <motion.h2 
            variants={headerVariants}
            className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-800"
          >
            Fostering <span className="text-red-600">Successful Careers</span>
          </motion.h2>
          
          <motion.p 
            variants={headerVariants}
            className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
          >
            Through comprehensive training and guidance, we prepare our students for the challenges of the professional world
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                className="bg-white p-8 rounded-lg shadow-md border border-gray-100 transform transition-all hover:shadow-lg hover:-translate-y-1"
              >
                <div className="bg-red-50 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FeaturesSection;

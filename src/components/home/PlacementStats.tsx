import React from "react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { CheckCircle, Award, UserCheck, Briefcase, ChartBar } from "lucide-react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const containerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const PlacementStats = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-800"
        >
          Our <span className="text-red-600">Impressive Placement</span> Achievements
        </motion.h2>
        <motion.p 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
        >
          We take pride in our exceptional placement records and the success stories of our graduates
        </motion.p>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-16"
        >
          <motion.div 
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-xl transition-shadow"
          >
            <p className="text-5xl font-bold text-red-600 mb-2">85%</p>
            <p className="text-xl font-medium text-gray-800">Placement Rate</p>
            <Progress className="mt-4 h-2 bg-gray-200" value={85} />
          </motion.div>
          
          <motion.div 
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-xl transition-shadow"
          >
            <p className="text-5xl font-bold text-red-600 mb-2">$12M</p>
            <p className="text-xl font-medium text-gray-800">Highest Package</p>
            <Progress className="mt-4 h-2 bg-gray-200" value={90} />
          </motion.div>
          
          <motion.div 
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-xl transition-shadow"
          >
            <p className="text-5xl font-bold text-red-600 mb-2">200+</p>
            <p className="text-xl font-medium text-gray-800">Recruiting Companies</p>
            <Progress className="mt-4 h-2 bg-gray-200" value={75} />
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl overflow-hidden shadow-xl mb-12"
        >
          <div className="flex flex-col md:flex-row">
            <motion.div 
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2"
            >
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&q=80" 
                alt="NSUT Students Working" 
                className="w-full h-full object-cover object-center"
                style={{ minHeight: "360px" }}
              />
            </motion.div>
            
            <div className="md:w-1/2 p-8 lg:p-12">
              <motion.h3 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="text-2xl font-bold mb-6 text-gray-800 border-b pb-3 border-red-200"
              >
                Why Choose NSUT for Your Recruitment Needs?
              </motion.h3>
              
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="space-y-5"
              >
                {[
                  {
                    icon: <UserCheck className="h-6 w-6 text-red-600" />,
                    title: "Skilled Graduates",
                    description: "Industry-ready professionals with cutting-edge skills"
                  },
                  {
                    icon: <Award className="h-6 w-6 text-red-600" />,
                    title: "Diverse Talent Pool",
                    description: "Students across multiple engineering disciplines"
                  },
                  {
                    icon: <CheckCircle className="h-6 w-6 text-red-600" />,
                    title: "Latest Technologies",
                    description: "Training in the most current industry technologies"
                  },
                  {
                    icon: <ChartBar className="h-6 w-6 text-red-600" />,
                    title: "Strong Foundation",
                    description: "Deep understanding of engineering fundamentals"
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    variants={fadeInUp}
                    className="flex items-start"
                  >
                    <div className="flex-shrink-0 mr-4 bg-red-50 p-2 rounded-full">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
              
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="mt-8"
              >
                <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md">
                  Recruit Our Students
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PlacementStats;

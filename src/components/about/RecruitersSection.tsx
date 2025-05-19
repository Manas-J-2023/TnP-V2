import React from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const RecruitersSection = () => {
  // Company logos data
  const recruiters = [
    { name: "Google", logo: "/google.jpg" },
    { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/512px-Microsoft_logo.svg.png" },
    { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" },
    { name: "Apple", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/488px-Apple_logo_black.svg.png" },
    { name: "Meta", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/512px-Meta_Platforms_Inc._logo.svg.png" },
    { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/800px-IBM_logo.svg.png" },
    { name: "Shell", logo: "shell.png" },
    { name: "Boeing", logo: "boeing.png" },
    { name: "Deloitte", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Deloitte.svg/2560px-Deloitte.svg.png" }
  ];
  
  const secondRowRecruiters = [
    { name: "Intel", logo: "intel.png" },
    { name: "Oracle", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/1024px-Oracle_logo.svg.png" },
    { name: "Samsung", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/2560px-Samsung_Logo.svg.png" },
    { name: "Nvidia", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Nvidia_logo.svg/2560px-Nvidia_logo.svg.png" },
    { name: "Adobe", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Adobe_Systems_logo_and_wordmark.svg/1280px-Adobe_Systems_logo_and_wordmark.svg.png" },
    { name: "Cisco", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/1280px-Cisco_logo_blue_2016.svg.png" },
    { name: "McKinsey", logo: "McKinsey.png" },
    { name: "Siemens", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Siemens-logo.svg/2560px-Siemens-logo.svg.png" },
    { name: "KPMG", logo: "KPMG.png" }
  ];

  // Duplicate logos for smoother infinite scroll effect
  const allLogos = [...recruiters, ...recruiters, ...recruiters];
  const allSecondRowLogos = [...secondRowRecruiters, ...secondRowRecruiters, ...secondRowRecruiters];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="py-16 bg-gray-50 border-t border-gray-100">
      <motion.div 
        className="container mx-auto px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div 
          className="flex items-center justify-center mb-8"
          variants={itemVariants}
        >
          <Briefcase className="text-red-600 mr-3 h-6 w-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800">
            Past <span className="text-red-600">Recruiters</span>
          </h2>
        </motion.div>
        
        <motion.p 
          className="text-gray-700 mb-8 max-w-3xl mx-auto text-center"
          variants={itemVariants}
        >
          Our graduates have consistently secured positions at leading technology companies worldwide.
          We take pride in our long-standing partnerships with these industry leaders who regularly recruit our talented students.
        </motion.p>
        
        {/* First row continuous carousel */}
        <motion.div 
          className="overflow-hidden mb-6"
          variants={itemVariants}
        >
          <div className="inline-flex whitespace-nowrap animate-[marquee_60s_linear_infinite]">
            {allLogos.map((recruiter, index) => (
              <div
                key={`first-${index}`}
                className="mx-4 w-[180px] flex-shrink-0"
              >
                <div className="p-4 bg-white h-24 flex items-center justify-center rounded-md">
                  <img 
                    src={recruiter.logo} 
                    alt={`${recruiter.name} logo`} 
                    className="max-h-12 max-w-full object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Second row carousel (reverse direction) */}
        <motion.div 
          className="overflow-hidden"
          variants={itemVariants}
        >
          <div className="inline-flex whitespace-nowrap animate-[marquee-reverse_60s_linear_infinite]">
            {allSecondRowLogos.map((recruiter, index) => (
              <div
                key={`second-${index}`}
                className="mx-4 w-[180px] flex-shrink-0"
              >
                <div className="p-4 bg-white h-24 flex items-center justify-center rounded-md">
                  <img 
                    src={recruiter.logo} 
                    alt={`${recruiter.name} logo`} 
                    className="max-h-12 max-w-full object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default RecruitersSection;

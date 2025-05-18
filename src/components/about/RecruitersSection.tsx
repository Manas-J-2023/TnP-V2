
import React from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const RecruitersSection = () => {
  // Company logos data
  const recruiters = [
    { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" },
    { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/512px-Microsoft_logo.svg.png" },
    { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" },
    { name: "Apple", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/488px-Apple_logo_black.svg.png" },
    { name: "Meta", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/512px-Meta_Platforms_Inc._logo.svg.png" },
    { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/800px-IBM_logo.svg.png" }
  ];
  
  const secondRowRecruiters = [
    { name: "Intel", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Intel-logo.svg/1005px-Intel-logo.svg.png" },
    { name: "Oracle", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/1024px-Oracle_logo.svg.png" },
    { name: "Samsung", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/2560px-Samsung_Logo.svg.png" },
    { name: "Nvidia", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Nvidia_logo.svg/2560px-Nvidia_logo.svg.png" },
    { name: "Adobe", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Adobe_Systems_logo_and_wordmark.svg/1280px-Adobe_Systems_logo_and_wordmark.svg.png" },
    { name: "Cisco", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/1280px-Cisco_logo_blue_2016.svg.png" }
  ];

  // Duplicate logos for smoother infinite scroll effect
  const allLogos = [...recruiters, ...recruiters, ...recruiters];
  const allSecondRowLogos = [...secondRowRecruiters, ...secondRowRecruiters, ...secondRowRecruiters];
  
  return (
    <div className="py-16 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-8">
          <Briefcase className="text-red-600 mr-3 h-6 w-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800">
            Past <span className="text-red-600">Recruiters</span>
          </h2>
        </div>
        
        <p className="text-gray-700 mb-8 max-w-3xl mx-auto text-center">
          Our graduates have consistently secured positions at leading technology companies worldwide.
          We take pride in our long-standing partnerships with these industry leaders who regularly recruit our talented students.
        </p>
        
        {/* First row continuous carousel */}
        <div className="overflow-hidden mb-6">
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
        </div>

        {/* Second row carousel (reverse direction) */}
        <div className="overflow-hidden">
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
        </div>
      </div>
    </div>
  );
};

export default RecruitersSection;

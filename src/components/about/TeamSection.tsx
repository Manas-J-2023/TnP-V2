
import React from "react";
import { motion } from "framer-motion";
import { Twitter, Linkedin, Users } from "lucide-react";
import { 
  Card, 
  CardContent
} from "@/components/ui/card";

const TeamSection = () => {
  const team = [
    {
      name: "Dr. Samantha Miller",
      role: "Dean of Engineering",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      bio: "Dr. Miller has over 20 years of experience in computer science research and education. She leads our faculty with a vision focused on innovation and excellence in technical education and research methodologies. Her leadership has transformed our engineering programs.",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Prof. James Wilson",
      role: "Head of Research",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      bio: "Heading our cutting-edge research initiatives, Prof. Wilson brings industry experience from his years at leading tech companies and research institutions. His work has been pivotal in establishing our university as a center for innovation and academic excellence.",
      linkedin: "#",
      twitter: "#"
    }
  ];
  
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center mb-5"
          >
            <div className="bg-red-50 p-3 rounded-full mr-4">
              <Users className="text-red-600 h-7 w-7" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
              Our <span className="text-red-600">Leadership</span> Team
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="w-28 h-1 bg-gradient-to-r from-purple-600 via-red-600 to-orange-500 mx-auto mb-7"></div>
            <p className="text-gray-700 text-lg mb-0 max-w-3xl mx-auto text-center leading-relaxed">
              Meet the dedicated professionals who lead our institution with expertise and vision,
              committed to advancing education and research in technology.
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 * index }}
              className="flex-1"
            >
              <Card className="overflow-hidden border-none rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 group h-full">
                <div className="flex flex-col h-full">
                  <div className="h-80 w-full overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 z-10"></div>
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  
                  <CardContent className="flex-1 pt-6 p-8 bg-gradient-to-b from-white to-gray-50">
                    <div className="mb-5">
                      <h3 className="text-2xl font-bold mb-2 text-gray-900 transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-red-600 font-medium text-sm uppercase tracking-wider">
                        {member.role}
                      </p>
                    </div>
                    <p className="text-gray-700 leading-relaxed min-h-[140px]">
                      {member.bio}
                    </p>
                    
                    <div className="flex mt-6 pt-5 border-t border-gray-100">
                      <a 
                        href={member.linkedin} 
                        className="bg-gray-100 hover:bg-red-100 text-red-600 p-3 rounded-full transition-colors mr-4"
                        aria-label={`${member.name}'s LinkedIn profile`}
                      >
                        <Linkedin size={22} />
                      </a>
                      <a 
                        href={member.twitter} 
                        className="bg-gray-100 hover:bg-red-100 text-red-600 p-3 rounded-full transition-colors"
                        aria-label={`${member.name}'s Twitter profile`}
                      >
                        <Twitter size={22} />
                      </a>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

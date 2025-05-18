
import React from "react";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Lightbulb, Eye } from "lucide-react";

const ValuesSection = () => {
  const values = [
    {
      title: "Our Mission",
      description: "To provide world-class education that empowers students to innovate, lead, and make a positive impact on society through technology and research.",
      icon: <Target className="h-10 w-10 text-purple-600 mb-4" />
    },
    {
      title: "Our Vision",
      description: "To be a globally recognized institution that fosters a dynamic learning environment where creativity thrives, research flourishes, and students develop both technical expertise and ethical leadership.",
      icon: <Eye className="h-10 w-10 text-red-600 mb-4" />
    },
    {
      title: "Our Values",
      description: "Excellence, innovation, integrity, inclusivity, and social responsibility guide everything we do as we strive to create future-ready leaders.",
      icon: <Lightbulb className="h-10 w-10 text-orange-600 mb-4" />
    }
  ];

  return (
    <div className="py-12 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Who We Are
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 via-red-600 to-orange-500 mx-auto mb-6"></div>
          <p className="text-gray-700 mb-0 max-w-2xl mx-auto">
            Our guiding principles and aspirations that shape our institution's character and direction
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 * index }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="h-full"
            >
              <Card className="border-0 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden h-full bg-white relative">
                <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-purple-600 via-red-600 to-orange-500"></div>
                <CardContent className="p-8 text-center h-full flex flex-col items-center">
                  {value.icon}
                  <h3 className="text-xl font-bold mb-4 text-gray-900">
                    {value.title}
                  </h3>
                  <Separator className="mb-4 w-16 mx-auto bg-gray-200" />
                  <p className="text-gray-700">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ValuesSection;

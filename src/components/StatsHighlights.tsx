
import React from "react";
import { motion } from "framer-motion";
import { ChartBar } from "lucide-react";

const StatsHighlights = () => {
  // Real placement statistics
  const stats = [
    { value: "97%", label: "Placement Rate" },
    { value: "₹24L", label: "Highest Package" },
    { value: "₹12L", label: "Average Package" },
    { value: "350+", label: "Companies Visited" }
  ];

  return (
    <div className="py-12 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="mb-2 flex items-center">
              <ChartBar className="text-red-600 mr-2 h-5 w-5" />
              <p className="text-sm uppercase tracking-wider text-red-600 font-semibold">Placement Excellence</p>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Outstanding Placement Records Year After Year
            </h2>
            
            <p className="text-gray-700 mb-6 text-lg">
              Our university has maintained exceptional placement records, securing positions for our students 
              at prestigious organizations worldwide. Our dedicated placement cell works tirelessly to connect 
              students with opportunities that match their skills and aspirations.
            </p>
            
            <div className="hidden md:block">
              <button className="bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-md font-medium transition-colors duration-300">
                View Detailed Report
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-white to-red-50 rounded-lg p-5 shadow-sm border border-red-100"
              >
                <h3 className="text-4xl font-bold text-red-600 mb-1">{stat.value}</h3>
                <p className="text-gray-700 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="md:hidden">
            <button className="bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-md font-medium transition-colors duration-300 w-full">
              View Detailed Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsHighlights;

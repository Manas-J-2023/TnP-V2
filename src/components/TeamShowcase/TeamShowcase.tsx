import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Users, Code, FileText } from 'lucide-react';
import { teamData } from './teamData';
import TeamMemberCard from './TeamMemberCard';
import { motion } from "framer-motion";

const TeamShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'technical' | 'non-technical'>('technical');
  const [activeYear, setActiveYear] = useState<number>(2023);
  
  // Get unique years from the team data
  const uniqueYears = Array.from(
    new Set(
      teamData.map((member) => member.yearJoined)
    )
  ).sort((a, b) => b - a); // Sort in descending order
  
  const filteredTeamMembers = teamData.filter(
    (member) => member.type === activeTab && member.yearJoined === activeYear
  );

  const handlePrevYear = () => {
    const currentIndex = uniqueYears.indexOf(activeYear);
    if (currentIndex < uniqueYears.length - 1) {
      setActiveYear(uniqueYears[currentIndex + 1]);
    }
  };

  const handleNextYear = () => {
    const currentIndex = uniqueYears.indexOf(activeYear);
    if (currentIndex > 0) {
      setActiveYear(uniqueYears[currentIndex - 1]);
    }
  };

  const isPrevYearDisabled = uniqueYears.indexOf(activeYear) === uniqueYears.length - 1;
  const isNextYearDisabled = uniqueYears.indexOf(activeYear) === 0;

  return (
    <div className="bg-white min-h-screen w-full py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
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
              Our <span className="text-red-600">Dedicated </span>Team Members
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
              Meet the talented individuals who make our vision a reality and drive our success forward.
            </p>
          </motion.div>
        </div>
        
        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 p-1 rounded-lg flex">
            <button
              className={`flex items-center px-4 py-2 rounded-md transition-all duration-300 ${
                activeTab === 'technical'
                  ? 'bg-white text-red-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              onClick={() => setActiveTab('technical')}
            >
              <Code size={18} className="mr-2" />
              <span>Technical Team</span>
            </button>
            <button
              className={`flex items-center px-4 py-2 rounded-md transition-all duration-300 ${
                activeTab === 'non-technical'
                  ? 'bg-white text-red-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              onClick={() => setActiveTab('non-technical')}
            >
              <FileText size={18} className="mr-2" />
              <span>Non-Technical Team</span>
            </button>
          </div>
        </div>
        
        {/* Year Navigation */}
        <div className="flex items-center justify-between max-w-xs mx-auto mb-10">
          <button 
            onClick={handlePrevYear}
            disabled={isPrevYearDisabled}
            className={`p-2 rounded-full ${
              isPrevYearDisabled 
                ? 'text-gray-300 cursor-not-allowed' 
                : 'text-gray-600 hover:bg-gray-100 hover:text-red-600'
            }`}
          >
            <ChevronLeft size={24} />
          </button>
          <div className="text-2xl font-semibold text-gray-900">{activeYear}</div>
          <button 
            onClick={handleNextYear}
            disabled={isNextYearDisabled}
            className={`p-2 rounded-full ${
              isNextYearDisabled 
                ? 'text-gray-300 cursor-not-allowed' 
                : 'text-gray-600 hover:bg-gray-100 hover:text-red-600'
            }`}
          >
            <ChevronRight size={24} />
          </button>
        </div>
        
        {/* Team Members Grid */}
        {filteredTeamMembers.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500">
            {filteredTeamMembers.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-gray-50 rounded-lg">
            <Users size={48} className="mx-auto text-gray-400 mb-4" />
            <h3 className="text-xl font-medium text-gray-900 mb-2">No Team Members Found</h3>
            <p className="text-gray-600">
              We don't have any {activeTab} team members for {activeYear}.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamShowcase;
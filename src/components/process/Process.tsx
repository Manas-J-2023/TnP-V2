"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface ProcessEntry {
  title: string;                    // Phase title or name
  department: string;               // Department handling this phase
  timeframe: string;               // Expected duration or timing of the phase
  responsibilities: string[];      // Key activities and responsibilities in this phase
  requirements: string[];          // Requirements or deliverables for this phase
  status: 'upcoming' | 'active' | 'completed';  // Phase status
  color: string;                  // UI theme color for this phase
}

export default function Process() {
  const processPath: ProcessEntry[] = [
    {
      title: "Phase 1: Registration & Profile Creation",
      department: "Training & Placement Cell",
      timeframe: "2-3 Weeks",
      responsibilities: [
        "Complete profile registration on placement portal",
        "Submit academic records and certifications",
        "Upload updated resume and portfolio",
        "Complete mandatory skill assessments",
      ],
      requirements: [
        "Valid College ID",
        "Updated Resume",
        "Academic Transcripts",
        "Profile Completion",
      ],
      status: "upcoming",
      color: "from-red-400 to-red-600",
    },
    {
      title: "Phase 2: Company Registration & JDs",
      department: "Corporate Relations Team",
      timeframe: "1-2 Weeks",
      responsibilities: [
        "Review company profiles and JDs",
        "Check eligibility criteria",
        "Submit preferences for companies",
        "Attend pre-placement talks",
      ],
      requirements: [
        "Minimum CGPA",
        "No Backlogs",
        "Technical Skills",
        "Communication Skills",
      ],
      status: "upcoming",
      color: "from-red-500 to-red-700",
    },
    {
      title: "Phase 3: Applications & Shortlisting",
      department: "Placement Coordinators",
      timeframe: "2-3 Weeks",
      responsibilities: [
        "Apply to eligible companies",
        "Track application status",
        "Prepare for assessments",
        "Attend mock interviews",
      ],
      requirements: [
        "Company Research",
        "Technical Preparation",
        "Interview Skills",
        "Professional Etiquette",
      ],
      status: "active",
      color: "from-red-300 to-red-500",
    },
    {
      title: "Phase 4: Interviews & Selection",
      department: "Interview Panel",
      timeframe: "3-4 Weeks",
      responsibilities: [
        "Attend technical rounds",
        "Participate in group discussions",
        "Clear HR interviews",
        "Complete documentation",
      ],
      requirements: [
        "Domain Knowledge",
        "Problem Solving",
        "Soft Skills",
        "Required Documents",
      ],
      status: "upcoming",
      color: "from-red-600 to-red-800",
    },
  ];

  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setExpandedItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section id="experience" className="py-24 pb-12 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Placement Process
        </h2>
        <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-orange-500 mx-auto mb-4"></div>
        <p className="text-gray-700 max-w-2xl mx-auto">
          The placement process at NSUT follows a structured approach to connect students with the right opportunities. Here's a breakdown of the process:
        </p>
      </motion.div>

      <div className="relative">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center items-center mb-16 md:hidden"
        >
          <div className="w-8 h-8 bg-gradient-to-r from-[#EF3E36] to-[#FFAB76] rounded-full shadow-[0_0_15px_rgba(255,171,118,0.5)] flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <span className="ml-2 text-black/80 font-medium">
            Process Start
          </span>
        </motion.div>

        <motion.div
          className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-[#EF3E36] to-red-600 rounded-full hidden md:block"
          style={{ height: "calc(100% )" }}
          initial={{ height: 0 }}
          whileInView={{ height: "calc(100%)" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
        />

        <div className="md:hidden space-y-6">
          {processPath.map((phase, index) => {
            const isExpanded = expandedItems.includes(index);

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="w-full bg-white/5 backdrop-blur-sm border border-[#607196]/40 rounded-xl p-6 transition-all duration-300"
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(160,221,255,0.15)",
                }}
                onClick={() => toggleItem(index)}
              >
                <div className="absolute -top-3 left-6 px-3 py-1 bg-gradient-to-r from-[#EF3E36] to-[#A0DDFF] rounded-full text-xs font-bold text-white">
                  Phase {index + 1}
                </div>

                <div className="flex flex-col mb-4 mt-2">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold text-black mb-1">
                      {phase.title}
                    </h3>
                    <div className="px-2 py-0.5 rounded-full text-xs bg-red-100 text-red-900">
                      {phase.status.charAt(0).toUpperCase() + phase.status.slice(1)}
                    </div>
                  </div>
                  <p className="text-black/80 font-medium mt-2">
                    {phase.department}
                  </p>
                  <p className="text-black/60 text-sm mt-1">{phase.timeframe}</p>
                </div>

                <motion.div
                  initial={{ height: "auto" }}
                  animate={{
                    height: isExpanded ? "auto" : 0,
                    opacity: isExpanded ? 1 : 0,
                  }}
                  className="overflow-hidden"
                >
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-black/90 mb-2">Responsibilities:</h4>
                      <ul className="list-none space-y-2 text-black/70 pl-1">
                        {phase.responsibilities.map((item, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{
                              opacity: isExpanded ? 1 : 0,
                              x: isExpanded ? 0 : -10,
                            }}
                            transition={{ duration: 0.3, delay: i * 0.1 }}
                            className="flex items-start"
                          >
                            <span className="inline-block w-2 h-2 rounded-full mt-1.5 mr-2 bg-red-600" />
                            {item}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-black/90 mb-2">Requirements:</h4>
                      <div className="flex flex-wrap gap-2">
                        {phase.requirements.map((req, i) => (
                          <motion.span
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{
                              opacity: isExpanded ? 1 : 0,
                              scale: isExpanded ? 1 : 0.8,
                            }}
                            transition={{ duration: 0.2, delay: 0.3 + i * 0.05 }}                              className={`px-3 py-1 text-xs rounded-full ${
                              phase.status === 'active' ? 'bg-red-100 text-red-900' :
                              phase.status === 'completed' ? 'bg-red-200 text-red-800' :
                              'bg-red-50 text-red-700'
                            }`}
                          >
                            {req}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        <div className="hidden md:block space-y-32 relative">
          {processPath.map((phase, index) => {
            const isEven = index % 2 === 0;
            const isExpanded = expandedItems.includes(index);

            return (
              <div key={index} className="relative">
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className={`absolute top-3 ${
                    isEven ? "right-1/2" : "left-1/2"
                  } h-0.5 w-[10%] origin-${isEven ? "right" : "left"} bg-[#607196]`}
                />

                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="absolute left-[calc(50%-0.75rem)] top-0 w-6 h-6 rounded-full bg-red-600 z-10 shadow-lg cursor-pointer"
                  onClick={() => toggleItem(index)}
                  whileHover={{ scale: 1.2 }}
                />

                <motion.div
                  className={`w-5/12 ${isEven ? "mr-auto" : "ml-auto"}
                    relative bg-white/5 backdrop-blur-sm border border-gray-200 rounded-xl p-6
                    transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md`}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay:  0.3 }}
                  viewport={{ once: true }}
                  onClick={() => toggleItem(index)}
                >
                  <div className="absolute -top-3 left-6 px-3 py-1 bg-gradient-to-r from-purple-500 to-orange-500 rounded-full text-xs font-bold text-white">
                    Phase {index + 1}
                  </div>

                  <div className="flex flex-col mb-4 mt-2">
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">
                        {phase.title}
                      </h3>
                      <div className="px-2 py-0.5 rounded-full text-xs bg-red-100 text-red-900">
                        {phase.status.charAt(0).toUpperCase() + phase.status.slice(1)}
                      </div>
                    </div>
                    <p className="text-purple-700 font-medium mt-2">
                      {phase.department}
                    </p>
                    <p className="text-gray-600 text-sm mt-1">{phase.timeframe}</p>
                  </div>

                  <motion.div
                    initial={{ height: "auto" }}
                    animate={{
                      height: isExpanded ? "auto" : 0,
                      opacity: isExpanded ? 1 : 0,
                    }}
                    className="overflow-hidden"
                  >
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-800 mb-2">Responsibilities:</h4>
                        <ul className="list-none space-y-2 text-gray-700 pl-1">
                          {phase.responsibilities.map((item, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{
                                opacity: isExpanded ? 1 : 0,
                                x: isExpanded ? 0 : -10,
                              }}
                              transition={{ duration: 0.3, delay: i * 0.1 }}
                              className="flex items-start"
                            >
                              <span className={`inline-block w-2 h-2 rounded-full mt-1.5 mr-2 ${
                                phase.status === 'active' ? 'bg-black/90' :
                                phase.status === 'completed' ? 'bg-blue-500' :
                                'bg-black/60'
                              }`} />
                              {item}
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-gray-800 mb-2">Requirements:</h4>
                        <div className="flex flex-wrap gap-2">
                          {phase.requirements.map((req, i) => (
                            <motion.span
                              key={i}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{
                                opacity: isExpanded ? 1 : 0,
                                scale: isExpanded ? 1 : 0.8,
                              }}
                              transition={{ duration: 0.2, delay: 0.3 + i * 0.05 }}
                              className={`px-3 py-1 text-xs rounded-full ${
                                phase.status === 'active' ? 'bg-black/10 text-black/80' :
                                phase.status === 'completed' ? 'bg-blue-100 text-blue-800' :
                                'bg-black/5 text-black/60'
                              }`}
                            >
                              {req}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

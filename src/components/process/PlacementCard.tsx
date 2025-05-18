import React from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { CalendarDays, Clock } from "lucide-react";
import { motion, useInView } from "framer-motion";

interface PlacementCardProps {
  course: string;
  batch: string;
  duration: string;
  dates: string;
  joining: string;
  index?: number;
}

const PlacementCard: React.FC<PlacementCardProps> = ({ course, batch, duration, dates, joining, index = 0 }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      whileHover={{ scale: 1.03 }}
    >
      <Card className="border-t-2 border-t-nsut-red p-3">
        <CardHeader className="px-0 pt-0">
          <div className="flex items-center justify-between gap-2">
            <motion.span 
              className="bg-nsut-red text-white px-3 py-0.5 rounded-full text-base font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {course}
            </motion.span>
            <span className="bg-gray-50 text-gray-600 px-2 py-0.5 rounded-md text-base">{batch}</span>
          </div>
        </CardHeader>
        <CardContent className="space-y-3 px-0 -mb-4">
          <div className="flex items-center text-gray-700">
            <Clock className="w-4 h-4 mr-2 text-nsut-red flex-shrink-0" />
            <div className="flex flex-col">
              <div className="text-sm text-gray-500">Duration</div>
              <div className="text-base font-medium">{duration}</div>
            </div>
          </div>
          
          <div className="flex items-center text-gray-700">
            <CalendarDays className="w-4 h-4 mr-2 text-nsut-red flex-shrink-0" />
            <div className="flex flex-col">
              <div className="text-sm text-gray-500">Dates</div>
              <div className="text-base font-medium">{dates}</div>
            </div>
          </div>

          <div className="mt-3 pt-3 border-t border-gray-100">
            <div className="flex items-center justify-between">
              <span className="text-gray-600 font-medium">Joining Date</span>
              <motion.span 
                className="bg-red-50 text-nsut-red px-3 py-1 rounded-full font-semibold text-base"
                whileHover={{ scale: 1.05 }}
                animate={{ 
                  scale: [1, 1.05, 1],
                  transition: { duration: 1, repeat: Infinity, repeatType: "reverse" }
                }}
              >
                {joining}
              </motion.span>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const PlacementCards: React.FC = () => {
  const placementData = [
    {
      course: "B.Tech",
      batch: "2025 passing",
      duration: "6 MONTHS",
      dates: "01 JAN 2025 to 30 JUNE 2025",
      joining: "July 2025"
    },
    {
      course: "B.Tech",
      batch: "2026 passing",
      duration: "2 MONTHS",
      dates: "24 MAY 2025 to 25 JULY 2025",
      joining: "July 2026"
    },
    {
      course: "M.Tech",
      batch: "2025 Passing",
      duration: "6 MONTHS",
      dates: "01 JAN 2025 to 30 JUNE 2025",
      joining: "July 2025"
    },
    {
      course: "M.Tech",
      batch: "2026 Passing",
      duration: "2 MONTHS",
      dates: "24 MAY 2025 to 25 JULY 2025",
      joining: "July 2026"
    },
    {
      course: "M.Tech",
      batch: "2026 Passing",
      duration: "6 MONTHS",
      dates: "01 JAN 2026 to 30 JUNE 2026",
      joining: "July 2026"
    },
    {
      course: "M.Sc",
      batch: "2025 Passing",
      duration: "4 MONTHS",
      dates: "01 JAN 2025 to 30 April 2025",
      joining: "June 2025"
    },
    {
      course: "B.Design",
      batch: "2025 Passing",
      duration: "6 MONTHS",
      dates: "01 JAN 2025 to 30 JUNE 2025",
      joining: "July 2025"
    },
    {
      course: "B.Design",
      batch: "2026 Passing",
      duration: "2 MONTHS",
      dates: "24 MAY 2025 to 25 JULY 2025",
      joining: "July 2026"
    },
    {
      course: "B.Design",
      batch: "2026 Passing",
      duration: "2 MONTHS",
      dates: "24 MAY 2025 to 25 JULY 2025",
      joining: "July 2026"
    }
  ];

  return (
    <motion.section 
      className="py-16 bg-gray-50" 
      id="placements"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">Internship/Placement Availability and Joining dates</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Below is a detailed description of internship and Placements availability (date & duration) for various courses
            at the university. The dates mentioned below for the exam and internship are tentative, it all depends on the
            release of the last date sheet scheduled 10-15 days before the exam
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
          {placementData.map((item, index) => (
            <PlacementCard 
              key={index}
              {...item}
              index={index}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default PlacementCards;

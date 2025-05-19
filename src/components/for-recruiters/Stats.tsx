
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChartPie, ChartBar } from 'lucide-react';

interface StatItemProps {
  percentage: string;
  heading: string;
  index: number;
}

const StatItem: React.FC<StatItemProps> = ({ percentage, heading, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        transition: { 
          delay: index * 0.1,
          duration: 0.6, 
          ease: [0.25, 0.1, 0.25, 1] 
        }
      }}
      viewport={{ once: true }}
      className="border-l-2 border-nsut-red pl-4"
    >
      <motion.p 
        className="text-4xl md:text-5xl font-bold"
        initial={{ scale: 0.9 }}
        whileInView={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 200, delay: index * 0.1 + 0.2 }}
      >
        {percentage}
      </motion.p>
      <p className="text-gray-600">{heading}</p>
    </motion.div>
  );
};

const StatsSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
    }
  };

  return (
    <section className="py-6 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid md:grid-cols-2 gap-8 items-center"
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="flex items-center space-x-2">
              <ChartPie className="text-nsut-red" />
              <h2 className="text-3xl font-bold">Brief Stats Section</h2>
            </div>
            <motion.p 
              variants={itemVariants} 
              className="text-gray-600 max-w-lg"
            >
              Our placement statistics showcase our commitment to student success. 
              These numbers represent real opportunities and achievements that our 
              students have accomplished through their hard work and our guidance.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
              <Button variant="outline" className="border-nsut-red text-nsut-red hover:bg-nsut-red hover:text-white">
                Explore More
              </Button>
              <Button className="bg-nsut-red hover:bg-nsut-darkRed group flex items-center">
                <span>View Details</span>
                <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
              </Button>
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-2 gap-8">
            <StatItem percentage="85%" heading="Placement Rate" index={0} />
            <StatItem percentage="50+" heading="Partner Companies" index={1} />
            <StatItem percentage="12L" heading="Avg Package" index={2} />
            <StatItem percentage="20+" heading="Fortune 500" index={3} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;

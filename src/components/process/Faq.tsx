import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Faq: React.FC = () => {
  const faqData = [
    {
      question: "What is the eligibility criteria for placement?",
      answer: "Eligibility criteria typically includes maintaining a minimum CGPA (usually 6.5 or above), having no active backlogs, and completing required pre-placement training. Specific criteria may vary by company and role."
    },
    {
      question: "When does the placement process start?",
      answer: "The placement process generally begins in the pre-final year with registration and preparation. The main placement season starts in August-September for final year students, with internships beginning earlier in the academic year."
    },
    {
      question: "Can I sit for multiple companies?",
      answer: "Yes, students can apply to multiple companies until they receive and accept an offer. Once a student accepts an offer, they are typically not allowed to sit for further placement processes as per university policy."
    },
    {
      question: "How can I prepare for the placement process?",
      answer: "Preparation should include strengthening core subjects, practicing coding/technical skills, improving communication abilities, preparing for aptitude tests, updating your resume, and participating in mock interviews organized by the placement cell."
    },
    {
      question: "What documents do I need for the placement process?",
      answer: "Required documents typically include updated resume, academic transcripts, government ID proof, passport-sized photographs, internship certificates if applicable, and project portfolios for relevant roles."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        type: "spring",
        damping: 15,
        stiffness: 100,
        duration: 0.5 
      }
    }
  };

  const contactVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        delay: 0.2
      }
    }
  };

  return (
    <motion.section 
      className="py-16 bg-white" 
      id="faqs"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
       
        <motion.h2 
          className="text-nsut-red text-3xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          FAQs
        </motion.h2>
        <motion.p 
          className="mb-2 text-gray-600 max-w-3xl"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Find answers to commonly asked questions about the internship and placement process at NSUT.
        </motion.p>
        
        <div className="mx-auto">
          <motion.div
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <Accordion type="single" collapsible className="w-full">
              {faqData.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                >
                  <AccordionItem value={`item-${index}`} className="border-b border-gray-200">
                    <AccordionTrigger className="text-left font-semibold py-4 hover:text-nsut-red">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="py-4 text-gray-600">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
          
          <motion.div 
            className="mt-10 text-center"
            variants={contactVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <h3 className="text-xl font-semibold mb-4">Still have questions?</h3>
            <p className="mb-6 text-gray-600">
              Contact the university's placement cell for further assistance.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/contact" className="nsut-red-button inline-block">Contact Us</Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Faq;
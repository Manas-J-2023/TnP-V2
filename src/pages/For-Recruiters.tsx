import Hero from "@/components/for-recruiters/Hero";
import RecruitersSection from "@/components/about/RecruitersSection";
import PlacementCards from "@/components/process/PlacementCard";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import StatsSection from "@/components/for-recruiters/Stats";
import { Button } from "@/components/ui/button";

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } }
};

const ForRecruiters = () => {

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
    <div className="min-h-screen flex flex-col">
      <main>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <Hero />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <div className="py-10 bg-gray-50">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="max-w-3xl mx-auto text-center"
              >                <p className="text-gray-700 text-lg italic leading-relaxed">
                  "Our commitment is to nurture industry-ready talent equipped with cutting-edge skills
                  and professional ethics. We take pride in producing graduates who bring innovation,
                  technical excellence, and leadership qualities to their roles. Our strong
                  industry partnerships and comprehensive placement program ensure that companies
                  find the right talent to drive their success forward."
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <StatsSection />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <RecruitersSection />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <PlacementCards />
        </motion.div>

        <motion.div
          className="py-16 text-center bg-gray-50"
          variants={contactVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="max-w-2xl mx-auto px-4">
            <h3 className="text-xl font-semibold mb-4">How it Works?</h3>
            <p className="mb-6 text-gray-600">
              Learn more about our streamlined recruitment process, important dates, and guidelines for campus placements at NSUT.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-auto inline-block"
            >
              <Link to="/process" className="inline-flex justify-center items-center">
                <Button className="bg-nsut-red hover:bg-nsut-darkRed group flex items-center p-8 text-lg">
                  <span>Placement Process</span>
                  <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                </Button>
              </Link>
            </motion.div>
          </div>
        </motion.div>

      </main>
    </div>
  );
};

export default ForRecruiters;

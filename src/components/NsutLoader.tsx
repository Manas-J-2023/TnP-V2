
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface NsutLoaderProps {
  onLoadingComplete: () => void;
}

const NsutLoader = ({ onLoadingComplete }: NsutLoaderProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time - adjust timing as needed
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(onLoadingComplete, 800); // Give animation time to complete before removing
    }, 1500);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-white z-50"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.8, ease: "easeInOut" }
          }}
        >
          <motion.div
            className="relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ 
              scale: 1, 
              opacity: 1,
              transition: { duration: 0.5, ease: "easeOut" }
            }}
            exit={{ 
              scale: 1.2,
              opacity: 0,
              transition: { duration: 0.7, ease: "easeInOut" }
            }}
          >
            <img 
              src="/logo.png" 
              alt="NSUT Logo" 
              className="w-48 h-48 object-contain"
            />
            <motion.div
              className="absolute inset-0"
              animate={{ 
                rotate: 360,
                transition: { 
                  duration: 3, 
                  ease: "linear", 
                  repeat: Infinity 
                } 
              }}
            >
              <div className="h-full w-full rounded-full border-t-4 border-red-600 opacity-20"></div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NsutLoader;

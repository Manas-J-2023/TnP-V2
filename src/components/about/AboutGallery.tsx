
import React from "react";
import { motion } from "framer-motion";
import { Images } from "lucide-react";

const AboutGallery = () => {
  // Gallery images with real image URLs
  const images = [
    { 
      id: 1, 
      cols: 2, 
      rows: 2, 
      src: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      alt: "University campus with students" 
    },
    { 
      id: 2, 
      cols: 1, 
      rows: 1, 
      src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      alt: "Modern university building" 
    },
    { 
      id: 3, 
      cols: 1, 
      rows: 1, 
      src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      alt: "Students collaborating in a modern space" 
    },
    { 
      id: 4, 
      cols: 1, 
      rows: 1, 
      src: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
      alt: "University library" 
    },
    { 
      id: 5, 
      cols: 1, 
      rows: 1, 
      src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      alt: "Graduation ceremony" 
    }
  ];
  
  return (
    <div className="py-16 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-12">
          <Images className="text-red-600 mr-3 h-6 w-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800">
            Campus <span className="text-red-600">Gallery</span>
          </h2>
        </div>
        
        <p className="text-gray-700 mb-12 max-w-3xl mx-auto text-center">
          Explore our vibrant campus life and state-of-the-art facilities 
          that provide an ideal environment for learning and innovation.
        </p>
        
        <div className="grid grid-cols-4 gap-4 max-w-6xl mx-auto">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
              className={`bg-gray-200 rounded-md overflow-hidden ${
                index === 0 ? 'col-span-2 row-span-2' : 'col-span-1 row-span-1'
              }`}
            >
              <div className="w-full h-full aspect-square relative group">
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutGallery;

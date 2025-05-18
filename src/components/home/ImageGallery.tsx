
import React, { useEffect, useRef, useState } from "react";
import { Images } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { cn } from "@/lib/utils";

const ImageGallery = () => {
  // Campus gallery images 
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      alt: "Campus building",
      caption: "Main Campus Building"
    },
    {
      src: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
      alt: "Library",
      caption: "State-of-the-Art Library"
    },
    {
      src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      alt: "Graduation ceremony",
      caption: "Graduation Day"
    },
    {
      src: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      alt: "Computer lab",
      caption: "Advanced Computer Labs"
    },
    {
      src: "https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      alt: "Sports facilities",
      caption: "Sports Complex"
    },
    {
      src: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      alt: "Student activities",
      caption: "Student Life"
    }
  ];

  // Additional images for the continuously running carousel
  const additionalImages = [
    {
      src: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      alt: "Research Lab",
      caption: "Research Facilities"
    },
    {
      src: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      alt: "Auditorium",
      caption: "Modern Auditorium"
    },
    {
      src: "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      alt: "Outdoor campus",
      caption: "Beautiful Campus Grounds"
    },
    {
      src: "https://images.unsplash.com/photo-1574152761366-5e33384e4a1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      alt: "Study area",
      caption: "Collaborative Study Spaces"
    }
  ];

  // Second carousel additional images - Ensuring every image source is valid
  const secondCarouselImages = [
    {
      src: "https://images.unsplash.com/photo-1513159446162-54eb8bdaa79b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      alt: "Students in lecture",
      caption: "Interactive Learning"
    },
    {
      src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f8e1c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      alt: "Student lounge",
      caption: "Student Lounge Areas"
    },
    {
      src: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      alt: "Campus in autumn",
      caption: "Campus in Different Seasons"
    },
    {
      src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      alt: "Technology hub",
      caption: "Technology Innovation Hub"
    },
    {
      src: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      alt: "Innovation Lab",
      caption: "Innovation Lab"
    }
  ];

  // Combined images for a continuous scrolling effect for first carousel
  const allFirstCarouselImages = [...galleryImages, ...additionalImages, ...galleryImages];
  
  // Combined images for a continuous scrolling effect for second carousel
  const allSecondCarouselImages = [...secondCarouselImages, ...galleryImages, ...secondCarouselImages];

  // Auto-scrolling carousel ref and settings for first carousel
  const [autoCarouselRef, autoCarouselApi] = useEmblaCarousel({
    loop: true,
    dragFree: true,
    containScroll: "trimSnaps"
  });

  // Auto-scrolling carousel ref and settings for second carousel
  const [secondCarouselRef, secondCarouselApi] = useEmblaCarousel({
    loop: true,
    dragFree: true,
    containScroll: "trimSnaps"
  });

  const [isHovering, setIsHovering] = useState(false);
  const [isHoveringSecond, setIsHoveringSecond] = useState(false);

  // Auto scroll effect for first carousel
  useEffect(() => {
    if (!autoCarouselApi || isHovering) return;
    
    const interval = setInterval(() => {
      autoCarouselApi.scrollNext();
    }, 3000);
    
    return () => clearInterval(interval);
  }, [autoCarouselApi, isHovering]);

  // Auto scroll effect for second carousel (in reverse)
  useEffect(() => {
    if (!secondCarouselApi || isHoveringSecond) return;
    
    const interval = setInterval(() => {
      secondCarouselApi.scrollPrev(); // Scrolling in reverse direction
    }, 3500); // Different timing for visual variety
    
    return () => clearInterval(interval);
  }, [secondCarouselApi, isHoveringSecond]);

  return (
    <div className="py-24 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-12">
          <Images className="text-red-600 mr-3 h-6 w-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800">
            <span className="text-red-600">Campus</span> Gallery
          </h2>
        </div>
        
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Explore our vibrant campus life through these snapshots of NSUT's facilities and student activities
        </p>
        
        {/* First Continuous auto-scrolling carousel */}
        <div className="mb-10">
          <div className="relative overflow-hidden py-4" 
               onMouseEnter={() => setIsHovering(true)}
               onMouseLeave={() => setIsHovering(false)}>
            <div className="flex flex-nowrap gap-4" ref={autoCarouselRef}>
              <div className="flex animate-marquee">
                {allFirstCarouselImages.map((image, index) => (
                  <div key={`first-${index}`} className="min-w-[200px] xs:min-w-[240px] sm:min-w-[280px] md:min-w-[320px] mx-1 sm:mx-2">
                    <div className="overflow-hidden rounded-lg shadow-lg">
                      <div className="relative group h-32 xs:h-36 sm:h-40 md:h-48 lg:h-56">
                        <img 
                          src={image.src} 
                          alt={image.alt} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 md:p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                          <p className="font-medium text-xs sm:text-sm">{image.caption}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute inset-y-0 left-0 w-8 sm:w-12 md:w-16 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-8 sm:w-12 md:w-16 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
          </div>
        </div>

        {/* Second Continuous auto-scrolling carousel (in reverse direction) */}
        <div className="mb-12">
          <div className="relative overflow-hidden py-4" 
               onMouseEnter={() => setIsHoveringSecond(true)}
               onMouseLeave={() => setIsHoveringSecond(false)}>
            <div className="flex flex-nowrap gap-4" ref={secondCarouselRef}>
              <div className="flex animate-marquee-reverse">
                {allSecondCarouselImages.map((image, index) => (
                  <div key={`second-${index}`} className="min-w-[200px] xs:min-w-[240px] sm:min-w-[280px] md:min-w-[320px] mx-1 sm:mx-2">
                    <div className="overflow-hidden rounded-lg shadow-lg">
                      <div className="relative group h-32 xs:h-36 sm:h-40 md:h-48 lg:h-56">
                        <img 
                          src={image.src} 
                          alt={image.alt} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 md:p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                          <p className="font-medium text-xs sm:text-sm">{image.caption}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute inset-y-0 left-0 w-8 sm:w-12 md:w-16 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-8 sm:w-12 md:w-16 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;

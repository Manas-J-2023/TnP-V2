import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <div 
      className="relative bg-cover bg-center py-24 text-white" 
      style={{ 
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/home.png')",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",
        minHeight: "500px"
      }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight animate-fade-in">
            Empowering Futures Through Training and Placement
          </h1>
          <p className="text-lg mb-8 opacity-90 max-w-xl">
            Welcome to NSUT: Shaping Futures Through Quality Education and Innovation
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-red-600 hover:bg-red-700 text-white font-medium px-6">
              Explore Programs <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

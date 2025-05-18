
import React from "react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { CheckCircle, Award, UserCheck, Briefcase, ChartBar } from "lucide-react";

const PlacementStats = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-800">
          Our <span className="text-red-600">Impressive Placement</span> Achievements
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          We take pride in our exceptional placement records and the success stories of our graduates
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-xl transition-shadow">
            <p className="text-5xl font-bold text-red-600 mb-2">85%</p>
            <p className="text-xl font-medium text-gray-800">Placement Rate</p>
            <Progress className="mt-4 h-2 bg-gray-200" value={85} />
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-xl transition-shadow">
            <p className="text-5xl font-bold text-red-600 mb-2">$12M</p>
            <p className="text-xl font-medium text-gray-800">Highest Package</p>
            <Progress className="mt-4 h-2 bg-gray-200" value={90} />
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-xl transition-shadow">
            <p className="text-5xl font-bold text-red-600 mb-2">200+</p>
            <p className="text-xl font-medium text-gray-800">Recruiting Companies</p>
            <Progress className="mt-4 h-2 bg-gray-200" value={75} />
          </div>
        </div>
        
        {/* Redesigned "Why Choose NSUT" section */}
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl overflow-hidden shadow-xl mb-12">
          <div className="flex flex-col md:flex-row">
            {/* Left side image */}
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&q=80" 
                alt="NSUT Students Working" 
                className="w-full h-full object-cover object-center"
                style={{ minHeight: "360px" }}
              />
            </div>
            
            {/* Right side content */}
            <div className="md:w-1/2 p-8 lg:p-12">
              <h3 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-3 border-red-200">
                Why Choose NSUT for Your Recruitment Needs?
              </h3>
              
              <div className="space-y-5">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4 bg-red-50 p-2 rounded-full">
                    <UserCheck className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Skilled Graduates</h4>
                    <p className="text-gray-600 text-sm">Industry-ready professionals with cutting-edge skills</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4 bg-red-50 p-2 rounded-full">
                    <Award className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Diverse Talent Pool</h4>
                    <p className="text-gray-600 text-sm">Students across multiple engineering disciplines</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4 bg-red-50 p-2 rounded-full">
                    <CheckCircle className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Latest Technologies</h4>
                    <p className="text-gray-600 text-sm">Training in the most current industry technologies</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4 bg-red-50 p-2 rounded-full">
                    <ChartBar className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Strong Foundation</h4>
                    <p className="text-gray-600 text-sm">Deep understanding of engineering fundamentals</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md">
                  Recruit Our Students
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlacementStats;

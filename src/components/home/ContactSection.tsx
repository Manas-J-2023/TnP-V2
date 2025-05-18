
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ContactSection = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-800">
          Get <span className="text-red-600">In Touch</span>
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Have questions? Reach out to us and our team will get back to you shortly
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
            <form className="space-y-5">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium text-gray-800">Name</label>
                <Input 
                  type="text" 
                  id="name" 
                  className="w-full border-gray-200 focus:border-red-600" 
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-2 font-medium text-gray-800">Email</label>
                <Input 
                  type="email" 
                  id="email" 
                  className="w-full border-gray-200 focus:border-red-600" 
                  placeholder="Your Email"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 font-medium text-gray-800">Message</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 border-gray-200" 
                  placeholder="Your Message"
                ></textarea>
              </div>
              
              <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white">Send Message</Button>
            </form>
          </div>
          
          <div className="bg-gray-100 rounded-lg overflow-hidden h-full shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.6277503943807!2d77.03587817495604!3d28.61094218506173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d05dd375e5a13%3A0x108adaa3abe4bd07!2sNetaji%20Subhas%20University%20of%20Technology!5e0!3m2!1sen!2sin!4v1747408477943!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="NSUT Map"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;

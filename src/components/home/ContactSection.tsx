
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';


const ContactSection = () => {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const sendToOwner = emailjs.send(
    'service_il7wtde',
    'template_6tfsro8',
    data,
    'Yr5g1WcZZBqI9YqpU'
  );

  const sendToUser = emailjs.send(
    'service_il7wtde',
    'template_dera67i',
    data,
    'Yr5g1WcZZBqI9YqpU'
  );

  Promise.all([sendToOwner, sendToUser])
    .then(() => {
      alert('Message sent successfully!');
      reset();
    })
    .catch((err) => {
      console.error('Failed to send email:', err);
      alert('Failed to send message.');
    });
  };

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



            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <label htmlFor="name" className="block mb-2 font-medium text-gray-800">Name</label>
        <Input
          id="name"
          placeholder="Your Name"
          {...register('name', { required: true })}
          className={`w-full ${errors.name ? 'border-red-500' : 'border-gray-200'} focus:border-red-600`}
        />
        {errors.name && <p className="text-red-600 text-sm">Name is required</p>}
      </div>

      <div>
        <label htmlFor="email" className="block mb-2 font-medium text-gray-800">Email</label>
        <Input
          id="email"
          type="email"
          placeholder="Your Email"
          {...register('email', { required: true })}
          className={`w-full ${errors.email ? 'border-red-500' : 'border-gray-200'} focus:border-red-600`}
        />
        {errors.email && <p className="text-red-600 text-sm">Email is required</p>}
      </div>

      <div>
        <label htmlFor="title" className="block mb-2 font-medium text-gray-800">title</label>
        <Input
          id="title"
          type="title"
          placeholder="title"
          {...register('title', { required: true })}
          className={`w-full ${errors.email ? 'border-red-500' : 'border-gray-200'} focus:border-red-600`}
        />
        {errors.email && <p className="text-red-600 text-sm">Email is required</p>}
      </div>

      <div>
        <label htmlFor="message" className="block mb-2 font-medium text-gray-800">Message</label>
        <textarea
          id="message"
          rows={4}
          placeholder="Your Message"
          {...register('message', { required: true })}
          className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 ${
            errors.message ? 'border-red-500' : 'border-gray-200'
          }`}
        ></textarea>
        {errors.message && <p className="text-red-600 text-sm">Message is required</p>}
      </div>

      <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white">
        Send Message
      </Button>
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

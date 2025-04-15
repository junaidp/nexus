import React from 'react';
import { Code, Smartphone, Brain } from 'lucide-react';

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-gray-700 max-w-2xl mx-auto">
            We offer comprehensive IT solutions tailored to meet your business needs. Our expert team delivers high-quality services across web development, mobile applications, and AI solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard 
            icon={<Code size={32} className="text-indigo-600" />}
            title="Web Development"
            description="We create responsive, user-friendly websites and web applications using the latest technologies. From simple landing pages to complex enterprise solutions, we deliver exceptional web experiences that drive results."
          />
          
          <ServiceCard 
            icon={<Smartphone size={32} className="text-indigo-600" />}
            title="Mobile App Development"
            description="Our team builds native and cross-platform mobile applications that provide seamless user experiences across all devices. We focus on performance, usability, and design to create apps that users love."
          />
          
          <ServiceCard 
            icon={<Brain size={32} className="text-indigo-600" />}
            title="AI Solutions"
            description="Leverage the power of artificial intelligence for your business. We develop custom AI solutions including machine learning models, natural language processing, computer vision, and predictive analytics to solve complex problems."
          />
        </div>
        
        <div className="mt-16 text-center">
          <button 
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full transition duration-300"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;

import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Nexus</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Who We Are</h3>
            <p className="text-gray-700 mb-6">
              Nexus is a forward-thinking software company dedicated to transforming businesses through innovative technology solutions. 
              We combine technical expertise with creative problem-solving to deliver exceptional results for our clients.
            </p>
            <p className="text-gray-700 mb-6">
              Our team consists of passionate developers, designers, and strategists who are committed to pushing the boundaries 
              of what's possible in the digital landscape.
            </p>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-700">
              We're on a mission to empower businesses of all sizes with cutting-edge technology solutions while fostering innovation 
              through our unique startup accelerator program. We believe in creating lasting partnerships that drive mutual success.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-indigo-600 text-4xl font-bold mb-2">10+</div>
              <p className="text-gray-700">Years of Experience</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-indigo-600 text-4xl font-bold mb-2">200+</div>
              <p className="text-gray-700">Projects Completed</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-indigo-600 text-4xl font-bold mb-2">50+</div>
              <p className="text-gray-700">Startups Accelerated</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-indigo-600 text-4xl font-bold mb-2">98%</div>
              <p className="text-gray-700">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

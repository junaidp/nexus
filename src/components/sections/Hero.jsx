import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Transforming Ideas Into Digital Reality
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Nexus delivers cutting-edge software solutions and empowers startups through our innovative accelerator program.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-indigo-600 hover:bg-indigo-50 font-bold py-3 px-6 rounded-full transition duration-300"
            >
              Our Services
            </button>
            <button 
              onClick={() => document.getElementById('accelerator').scrollIntoView({ behavior: 'smooth' })}
              className="bg-transparent hover:bg-white hover:text-indigo-600 text-white font-bold py-3 px-6 rounded-full border-2 border-white transition duration-300"
            >
              Startup Accelerator
            </button>
          </div>
        </div>
      </div>
      
      {/* Animated shapes for visual interest */}
      <div className="hidden lg:block">
        <div className="absolute top-1/4 left-10 w-20 h-20 bg-white opacity-10 rounded-full"></div>
        <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-white opacity-10 rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-white opacity-10 rounded-full"></div>
      </div>
    </section>
  );
};

export default Hero;

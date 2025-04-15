import React, { useState } from 'react';
import { Rocket, Check, Upload } from 'lucide-react';

const StartupAccelerator = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    companyName: '',
    businessIdea: '',
    file: null
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleFileChange = (e) => {
    setFormData(prevState => ({
      ...prevState,
      file: e.target.files[0]
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to a server
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after submission
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        companyName: '',
        businessIdea: '',
        file: null
      });
    }, 5000);
  };
  
  return (
    <section id="accelerator" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Startup Accelerator Program</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Launch your startup with minimal upfront costs. Our unique accelerator program requires only 20% of the development cost upfront, with a 1% revenue share once your business starts generating profit.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
              <div className="flex items-center mb-6">
                <div className="bg-indigo-100 p-3 rounded-full mr-4">
                  <Rocket size={24} className="text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">How It Works</h3>
              </div>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Check size={20} className="text-green-500" />
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-700"><span className="font-semibold">Submit Your Idea:</span> Share your business concept and plan with our team.</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Check size={20} className="text-green-500" />
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-700"><span className="font-semibold">Evaluation:</span> Our team will evaluate your business plan to assess its potential.</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Check size={20} className="text-green-500" />
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-700"><span className="font-semibold">Pay Only 20%:</span> If approved, you'll only pay 20% of the total development cost upfront.</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Check size={20} className="text-green-500" />
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-700"><span className="font-semibold">Development:</span> We'll build your product with the same quality and attention as full-price projects.</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Check size={20} className="text-green-500" />
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-700"><span className="font-semibold">Revenue Sharing:</span> Once your business starts generating profit, we receive just 1% of the revenue.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-indigo-600 p-8 rounded-lg text-white">
              <h3 className="text-xl font-bold mb-4">Why Choose Our Accelerator?</h3>
              <p className="mb-4">
                Our program is designed to reduce the financial barrier to entry for promising startups. We believe in your success and are willing to invest in it by significantly reducing upfront costs.
              </p>
              <p>
                With our technical expertise and your innovative idea, we can build something extraordinary together. The 1% revenue share ensures our interests are aligned with your long-term success.
              </p>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Submit Your Business Idea</h3>
            
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                  <Check size={32} className="text-green-500" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Thank You!</h4>
                <p className="text-gray-700">
                  Your business idea has been submitted successfully. Our team will review your proposal and get back to you within 3-5 business days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">Company Name (if applicable)</label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="businessIdea" className="block text-sm font-medium text-gray-700 mb-1">Business Idea Description *</label>
                  <textarea
                    id="businessIdea"
                    name="businessIdea"
                    value={formData.businessIdea}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Please describe your business idea, target market, and how you plan to generate revenue..."
                  ></textarea>
                </div>
                
                <div>
                  <label htmlFor="file" className="block text-sm font-medium text-gray-700 mb-1">Upload Business Plan (PDF, DOCX)</label>
                  <div className="flex items-center justify-center w-full">
                    <label className="flex flex-col w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                      <div className="flex flex-col items-center justify-center pt-7">
                        <Upload size={24} className="text-gray-400" />
                        <p className="pt-1 text-sm text-gray-400">
                          {formData.file ? formData.file.name : "Drag & drop or click to upload"}
                        </p>
                      </div>
                      <input 
                        type="file" 
                        id="file" 
                        name="file"
                        onChange={handleFileChange}
                        className="hidden" 
                        accept=".pdf,.docx,.doc"
                      />
                    </label>
                  </div>
                </div>
                
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-md transition duration-300"
                  >
                    Submit Your Idea
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartupAccelerator;

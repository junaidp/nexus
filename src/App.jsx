import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import StartupAccelerator from './components/sections/StartupAccelerator';
import Contact from './components/sections/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <StartupAccelerator />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

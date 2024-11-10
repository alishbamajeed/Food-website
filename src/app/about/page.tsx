import React from 'react';
import About from '../components/About';
import Team from '../components/Team';
import Footer from '../components/Footer'

const AboutHeader: React.FC = () => {
  return (
    <>
      <div className="relative h-72 bg-cover bg-center text-white" style={{ backgroundImage: 'url(/bg-hero.jpg)' }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        
        {/* Content Overlay */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-4">
          <h1 className="text-4xl font-bold">About Us</h1>
          
          {/* Breadcrumbs */}
          <div className="flex space-x-2 text-yellow-500 font-medium">
            <a href="/" className="hover:text-white">Home</a>
            <span>/</span>
            <span>Pages</span>
            <span>/</span>
            <span className="text-white">About</span>
          </div>
        </div>
      </div>

      {/* Render About component here */}
      <About />
      <Team/>
      <Footer/>
    </>
  );
};

export default AboutHeader;

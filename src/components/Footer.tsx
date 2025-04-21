
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-off-black py-10 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="silver-shine mb-4 text-xl font-semibold">Siddharth</p>
        
        <div className="w-20 h-0.5 mx-auto my-6 bg-gradient-to-r from-transparent via-silver/30 to-transparent"></div>
        
        <div className="flex justify-center space-x-6 mb-6">
          {["Home", "About", "Skills", "Projects","Events", "Contact"].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              {item}
            </a>
          ))}
        </div>
        
        <p className="text-gray-400 text-sm">
        Built on April {currentYear}
        </p>
      </div>
    </footer>
  );
};

export default Footer;

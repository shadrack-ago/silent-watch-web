
import React from 'react';
import { Shield } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-mig-navy border-t border-mig-silver/10 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-6 md:mb-0">
            <div className="relative">
              <Shield className="w-6 h-6 text-mig-silver" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xs font-bold text-mig-navy">M</span>
              </div>
            </div>
            <div>
              <span className="text-white font-bold tracking-tight">MAGPIE</span>
              <span className="block text-[8px] text-mig-silver -mt-1 tracking-widest">INTELLIGENCE GROUP</span>
            </div>
          </div>
          
          {/* Links */}
          <div className="flex gap-6 text-sm">
            <a href="#home" className="text-mig-silver hover:text-white transition-colors duration-200">Home</a>
            <a href="#divisions" className="text-mig-silver hover:text-white transition-colors duration-200">Services</a>
            <a href="#case-study" className="text-mig-silver hover:text-white transition-colors duration-200">Case Study</a>
            <a href="#contact" className="text-mig-silver hover:text-white transition-colors duration-200">Contact</a>
          </div>
        </div>
        
        <div className="border-t border-mig-silver/10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-mig-silver text-xs mb-4 md:mb-0">
            © {new Date().getFullYear()} Magpie Intelligence Group. All rights reserved.
          </p>
          
          <div className="flex gap-6 text-xs">
            <a href="#" className="text-mig-silver hover:text-white transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="text-mig-silver hover:text-white transition-colors duration-200">Terms of Service</a>
            <a href="#" className="text-mig-silver hover:text-white transition-colors duration-200">Confidentiality Agreement</a>
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-mig-silver/60 text-xs">
            Magpie Intelligence Group operates in compliance with Kenyan law and international privacy standards.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

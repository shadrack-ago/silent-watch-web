
import React from 'react';
import { Shield, ChevronDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-mig-navy/90 to-mig-navy"></div>
        <div 
          className="absolute inset-0 bg-center bg-cover"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1611348524140-53c9a25263d6?q=80&w=2070&auto=format&fit=crop')"
          }}
        ></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 mt-16 text-center">
        <div className="inline-flex items-center justify-center">
          <div className="h-px bg-mig-silver w-16"></div>
          <span className="px-4 text-mig-silver text-sm tracking-widest">MAGPIE INTELLIGENCE GROUP</span>
          <div className="h-px bg-mig-silver w-16"></div>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mt-6 mb-6 max-w-3xl mx-auto leading-tight">
          <span className="text-white">Silent Watchers,</span><br />
          <span className="text-mig-accent">Ironclad Evidence</span>
        </h1>
        
        <p className="text-mig-silver max-w-xl mx-auto text-lg mb-10">
          Nairobi's premier hybrid intelligence firm, combining tactical expertise with cutting-edge surveillance technology to deliver actionable intelligence and legally admissible evidence.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#divisions" className="shield-button group">
            <span>Explore Our Services</span>
          </a>
          <a href="#contact" className="px-6 py-3 border border-mig-silver text-mig-silver hover:text-white hover:border-white transition-colors duration-300 rounded-sm">
            Secure Consultation
          </a>
        </div>
        
        {/* Shield Logo Watermark */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-10 opacity-60">
          <div className="flex flex-col items-center">
            <a href="#divisions" className="text-mig-silver hover:text-white transition-colors duration-300">
              <ChevronDown className="w-6 h-6 animate-bounce" />
            </a>
            <span className="text-xs text-mig-silver mt-2">SCROLL TO DISCOVER</span>
          </div>
        </div>
      </div>
      
      {/* Shield Pattern Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEwIDAgbDEwIDMuMzMzIHYxMCBsLTEwIDYuNjY3IEwwIDEzLjMzMyB2LTEwIHoiIHN0cm9rZT0id2hpdGUiIGZpbGw9Im5vbmUiLz48L3N2Zz4=')] bg-[length:50px_50px] opacity-10"></div>
      </div>
    </section>
  );
};

export default HeroSection;

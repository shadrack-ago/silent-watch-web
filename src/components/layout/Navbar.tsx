
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled ? 'bg-mig-navy/95 backdrop-blur-sm shadow-lg py-3' : 'bg-transparent py-5'
  }`;

  return (
    <nav className={navClasses}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="relative">
            <Shield className="w-8 h-8 text-mig-accent animate-pulse-subtle" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xs font-bold text-mig-navy">M</span>
            </div>
          </div>
          <div>
            <span className="text-white font-bold text-xl tracking-tight">MAGPIE</span>
            <span className="block text-[10px] text-mig-silver -mt-1 tracking-widest">INTELLIGENCE GROUP</span>
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          <a href="#home" className="nav-link nav-link-active">Home</a>
          <a href="#divisions" className="nav-link">Divisions</a>
          <a href="#case-study" className="nav-link">Case Study</a>
          <a href="#our-people" className="nav-link">Our People</a>
          <a href="#why-kenya" className="nav-link">Why Kenya</a>
          <a href="#contact" className="shield-button ml-4">
            Secure Contact
          </a>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-mig-silver hover:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-mig-navyLight border-t border-mig-silver/10 animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#home" className="block px-3 py-2 text-white font-medium border-l-2 border-mig-accent">Home</a>
            <a href="#divisions" className="block px-3 py-2 text-mig-silver hover:text-white border-l-2 border-transparent hover:border-mig-silver transition-colors">Divisions</a>
            <a href="#case-study" className="block px-3 py-2 text-mig-silver hover:text-white border-l-2 border-transparent hover:border-mig-silver transition-colors">Case Study</a>
            <a href="#our-people" className="block px-3 py-2 text-mig-silver hover:text-white border-l-2 border-transparent hover:border-mig-silver transition-colors">Our People</a>
            <a href="#why-kenya" className="block px-3 py-2 text-mig-silver hover:text-white border-l-2 border-transparent hover:border-mig-silver transition-colors">Why Kenya</a>
            <a href="#contact" className="block px-3 py-3 mt-3 text-center bg-mig-navy text-mig-accent border border-mig-silver rounded-sm">Secure Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

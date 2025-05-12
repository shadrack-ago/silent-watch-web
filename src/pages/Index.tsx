
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import DivisionsSection from '@/components/sections/DivisionsSection';
import CaseStudySection from '@/components/sections/CaseStudySection';
import TeamSection from '@/components/sections/TeamSection';
import KenyaAdvantagesSection from '@/components/sections/KenyaAdvantagesSection';
import ContactSection from '@/components/sections/ContactSection';

const Index = () => {
  useEffect(() => {
    // Update document title
    document.title = "Magpie Intelligence Group | Nairobi's Premier Intelligence Firm";
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href') || '');
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 80, // Offset for fixed header
            behavior: 'smooth'
          });
        }
      });
    });
    
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-mig-navy text-white">
      <Navbar />
      
      <main>
        <HeroSection />
        <DivisionsSection />
        <CaseStudySection />
        <TeamSection />
        <KenyaAdvantagesSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;

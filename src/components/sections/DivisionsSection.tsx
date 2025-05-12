
import React, { useState } from 'react';
import { 
  Eye, Lock, Target, Database, 
  Shield, Search, AlertCircle, Fingerprint 
} from 'lucide-react';

interface DivisionProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  details: string[];
  isActive: boolean;
  onClick: () => void;
}

const Division: React.FC<DivisionProps> = ({ 
  title, icon, description, details, isActive, onClick 
}) => {
  return (
    <div 
      className={`border cursor-pointer transition-all duration-300 rounded-sm p-6 card-hover ${
        isActive 
          ? 'bg-mig-navyLight border-mig-accent' 
          : 'bg-mig-navy/50 border-mig-silver/20'
      }`}
      onClick={onClick}
    >
      <div className="flex items-center gap-4">
        <div className={`p-3 rounded-sm ${isActive ? 'bg-mig-accent/10 text-mig-accent' : 'bg-mig-navyLight text-mig-silver'}`}>
          {icon}
        </div>
        <div>
          <h3 className={`text-xl ${isActive ? 'text-mig-accent' : 'text-mig-silver'}`}>{title}</h3>
          <p className="text-mig-silver mt-1">{description}</p>
        </div>
      </div>
      
      {isActive && (
        <div className="mt-6 pl-4 border-l-2 border-mig-accent animate-fade-in">
          <ul className="space-y-2">
            {details.map((detail, index) => (
              <li key={index} className="flex items-start gap-2">
                <Shield className="w-4 h-4 text-mig-silver mt-1 shrink-0" />
                <span className="text-mig-silver">{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const DivisionsSection = () => {
  const [activeDivision, setActiveDivision] = useState(0);
  
  const divisions = [
    {
      title: "Covert Investigations",
      icon: <Eye className="w-6 h-6" />,
      description: "Discreet surveillance and evidence gathering",
      details: [
        "Undercover operatives with local expertise",
        "Video and photographic documentation",
        "GPS tracking and digital surveillance",
        "Detailed reports with legally admissible evidence"
      ]
    },
    {
      title: "Tactical Training Academy",
      icon: <Target className="w-6 h-6" />,
      description: "Security training for personnel and organizations",
      details: [
        "Executive protection protocols",
        "Counter-surveillance techniques",
        "Threat assessment and prevention",
        "Security systems auditing and implementation"
      ]
    },
    {
      title: "Forensic Evidence Hub",
      icon: <Fingerprint className="w-6 h-6" />,
      description: "Advanced evidence analysis and preservation",
      details: [
        "Digital forensics and data recovery",
        "Document authentication",
        "Audio/video enhancement and verification",
        "Chain of custody documentation for court proceedings"
      ]
    },
    {
      title: "Diplomatic Intelligence",
      icon: <Database className="w-6 h-6" />,
      description: "Strategic intelligence for diplomatic missions",
      details: [
        "Risk assessment for foreign entities",
        "Local political and business intelligence",
        "Secure logistics and transportation",
        "Regional security briefings and consultations"
      ]
    },
  ];

  return (
    <section id="divisions" className="section-container bg-gradient-to-b from-mig-navy to-mig-navyLight">
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center">
          <div className="h-px bg-mig-silver w-8"></div>
          <span className="px-3 text-mig-silver text-sm tracking-widest">OUR DIVISIONS</span>
          <div className="h-px bg-mig-silver w-8"></div>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mt-4">Specialized Intelligence Units</h2>
        <p className="text-mig-silver max-w-2xl mx-auto mt-4">
          Our four key divisions work in tandem to provide comprehensive intelligence solutions
          tailored to the unique challenges of East Africa's security landscape.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {divisions.map((division, index) => (
          <Division 
            key={index}
            title={division.title}
            icon={division.icon}
            description={division.description}
            details={division.details}
            isActive={activeDivision === index}
            onClick={() => setActiveDivision(index)}
          />
        ))}
      </div>
      
      <div className="flex justify-center mt-12">
        <a href="#case-study" className="shield-button group">
          See Our Methods In Action
        </a>
      </div>
    </section>
  );
};

export default DivisionsSection;


import React from 'react';
import { Shield, Lock } from 'lucide-react';

interface TeamMemberProps {
  role: string;
  expertise: string[];
  isBlurred?: boolean;
}

const TeamMember: React.FC<TeamMemberProps> = ({ role, expertise, isBlurred = false }) => {
  return (
    <div className={`p-6 border border-mig-silver/20 bg-mig-navyLight/50 rounded-sm card-hover`}>
      <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-mig-navy flex items-center justify-center">
        <div className={`${isBlurred ? 'filter blur-sm' : ''}`}>
          {isBlurred ? (
            <Lock className="w-8 h-8 text-mig-silver" />
          ) : (
            <Shield className="w-8 h-8 text-mig-silver" />
          )}
        </div>
      </div>
      
      <h3 className={`text-center text-xl mb-4 ${isBlurred ? 'filter blur-sm' : ''}`}>
        {role}
      </h3>
      
      <div className={`space-y-2 ${isBlurred ? 'filter blur-sm' : ''}`}>
        {expertise.map((item, index) => (
          <p key={index} className="text-sm text-mig-silver text-center">{item}</p>
        ))}
      </div>
      
      {isBlurred && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-mig-navy/70 px-4 py-2 rounded flex items-center">
            <Lock className="w-5 h-5 text-mig-accent mr-2" />
            <span className="text-mig-accent text-sm">SENSITIVE POSITION</span>
          </div>
        </div>
      )}
    </div>
  );
};

const TeamSection = () => {
  const teamMembers = [
    {
      role: "Field Operations Director",
      expertise: ["15+ years in security operations", "Former military intelligence", "East Africa specialist"],
      isBlurred: true
    },
    {
      role: "Technical Surveillance Lead",
      expertise: ["Digital forensics expert", "Electronic countermeasures", "Covert camera systems"],
      isBlurred: false
    },
    {
      role: "Legal Compliance Officer",
      expertise: ["Kenyan legal framework expert", "Evidence authentication", "Court liaison"],
      isBlurred: false
    },
    {
      role: "Intelligence Analyst",
      expertise: ["Behavioral pattern recognition", "Data correlation specialist", "Threat assessment"],
      isBlurred: false
    },
    {
      role: "Covert Operative Coordinator",
      expertise: ["Undercover deployment", "Asset recruitment", "Counter-surveillance"],
      isBlurred: true
    },
    {
      role: "Digital Intelligence Specialist",
      expertise: ["Social media intelligence", "Digital footprint analysis", "Mobile platform monitoring"],
      isBlurred: false
    },
  ];

  return (
    <section id="our-people" className="section-container bg-gradient-to-b from-mig-navyLight to-mig-navy">
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center">
          <div className="h-px bg-mig-silver w-8"></div>
          <span className="px-3 text-mig-silver text-sm tracking-widest">OUR TEAM</span>
          <div className="h-px bg-mig-silver w-8"></div>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mt-4">Elite Specialists</h2>
        <p className="text-mig-silver max-w-2xl mx-auto mt-4">
          Our team combines diverse expertise from military, law enforcement, legal, and technical fields
          to deliver comprehensive intelligence solutions.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map((member, index) => (
          <div key={index} className="relative">
            <TeamMember 
              role={member.role}
              expertise={member.expertise}
              isBlurred={member.isBlurred}
            />
          </div>
        ))}
      </div>
      
      <div className="mt-16 p-6 border border-mig-silver/20 bg-mig-navyLight/30 rounded-sm max-w-3xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <Shield className="w-6 h-6 text-mig-accent" />
          <h3 className="text-xl text-mig-accent">Confidentiality Statement</h3>
        </div>
        <p className="text-mig-silver">
          Due to the sensitive nature of our work, many of our personnel remain anonymous, with 
          their identities protected. Our team includes former military intelligence officers, 
          law enforcement professionals, technical specialists, and legal experts, all vetted
          to the highest security standards and bound by strict confidentiality agreements.
        </p>
      </div>
    </section>
  );
};

export default TeamSection;

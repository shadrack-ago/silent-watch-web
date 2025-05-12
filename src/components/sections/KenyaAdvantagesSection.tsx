
import React from 'react';
import { MapPin, Phone, Shield, Database, Search, AlertCircle } from 'lucide-react';

interface AdvantageCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const AdvantageCard: React.FC<AdvantageCardProps> = ({ title, description, icon }) => {
  return (
    <div className="border border-mig-silver/20 bg-mig-navyLight/30 p-6 rounded-sm card-hover">
      <div className="bg-mig-navy p-3 inline-block rounded-sm mb-4">
        {icon}
      </div>
      <h3 className="text-xl mb-2 text-mig-accent">{title}</h3>
      <p className="text-mig-silver">{description}</p>
    </div>
  );
};

const KenyaAdvantagesSection = () => {
  const advantages = [
    {
      title: "M-Pesa Tracking",
      description: "Leverage Kenya's ubiquitous mobile money platform for financial intelligence and transaction mapping.",
      icon: <Phone className="w-6 h-6 text-mig-silver" />
    },
    {
      title: "Infidelity Tracking",
      description: "Specialized techniques for relationship verification and monitoring in accordance with Kenyan privacy laws.",
      icon: <Search className="w-6 h-6 text-mig-silver" />
    },
    {
      title: "Legal Admissibility",
      description: "All evidence gathered according to Kenyan legal requirements to ensure courtroom acceptance.",
      icon: <Shield className="w-6 h-6 text-mig-silver" />
    },
    {
      title: "Police Collaboration",
      description: "Established relationships with local authorities for efficient case handover when needed.",
      icon: <AlertCircle className="w-6 h-6 text-mig-silver" />
    }
  ];

  return (
    <section id="why-kenya" className="section-container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <div className="inline-flex items-center">
            <div className="h-px bg-mig-silver w-8"></div>
            <span className="px-3 text-mig-silver text-sm tracking-widest">WHY KENYA</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">Nairobi's Strategic Advantage</h2>
          
          <p className="text-mig-silver mb-6">
            Our Nairobi headquarters provides unique strategic advantages for intelligence operations
            throughout East Africa. As the region's technological hub with distinctive legal and financial
            systems, Kenya offers investigation capabilities unavailable elsewhere.
          </p>
          
          <div className="flex items-center mb-8">
            <MapPin className="w-5 h-5 text-mig-accent mr-2" />
            <span className="text-mig-accent">Headquartered in Nairobi, Kenya</span>
          </div>
          
          <div className="relative h-64 overflow-hidden rounded-sm border border-mig-silver/20">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-mig-navy/80 z-10"></div>
            <div 
              className="absolute inset-0 bg-center bg-cover"
              style={{ 
                backgroundImage: "url('https://images.unsplash.com/photo-1596005554384-d293674c91d7?q=80&w=2338&auto=format&fit=crop')" 
              }}
            ></div>
            <div className="absolute bottom-0 left-0 p-4 z-20">
              <div className="bg-mig-navy/80 p-2 inline-block rounded-sm text-sm">
                <span className="text-mig-accent">Nairobi Central Business District</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {advantages.map((advantage, index) => (
            <AdvantageCard 
              key={index}
              title={advantage.title}
              description={advantage.description}
              icon={advantage.icon}
            />
          ))}
          
          <div className="sm:col-span-2 border border-mig-accent/30 bg-mig-accent/5 p-6 rounded-sm">
            <div className="flex items-center gap-3 mb-4">
              <Database className="w-6 h-6 text-mig-accent" />
              <h3 className="text-xl text-mig-accent">Regional Intelligence Network</h3>
            </div>
            <p className="text-mig-silver">
              Our extensive network extends throughout East Africa, with field operatives and contacts
              in Tanzania, Uganda, Rwanda, Ethiopia, and Somalia. This regional presence allows us to
              track subjects and gather intelligence across borders.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KenyaAdvantagesSection;

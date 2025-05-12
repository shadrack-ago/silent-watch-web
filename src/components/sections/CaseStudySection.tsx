
import React from 'react';
import { Shield, CheckCircle, AlertCircle } from 'lucide-react';
import { Progress } from "@/components/ui/progress";

const CaseStudySection = () => {
  const timelineSteps = [
    {
      title: "Initial Assessment",
      description: "Client reported increasing inventory discrepancies at their Mombasa mining operation.",
      completed: true,
      icon: <CheckCircle className="w-5 h-5" />
    },
    {
      title: "Covert Team Deployment",
      description: "Placed undercover operatives within the mining facility and supply chain.",
      completed: true,
      icon: <CheckCircle className="w-5 h-5" />
    },
    {
      title: "Surveillance Implementation",
      description: "Installed discrete camera systems and implemented digital tracking.",
      completed: true,
      icon: <CheckCircle className="w-5 h-5" />
    },
    {
      title: "Evidence Collection",
      description: "Compiled video footage, M-Pesa transaction records, and testimony.",
      completed: true,
      icon: <CheckCircle className="w-5 h-5" />
    },
    {
      title: "Legal Action & Recovery",
      description: "Presented evidence to authorities, resulting in arrests and asset recovery.",
      completed: true,
      icon: <CheckCircle className="w-5 h-5" />
    }
  ];

  const results = [
    { label: "Assets Recovered", value: "86%" },
    { label: "Operation Duration", value: "47 Days" },
    { label: "Suspects Identified", value: "8" },
    { label: "Return on Investment", value: "1200%" }
  ];

  return (
    <section id="case-study" className="section-container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center">
            <div className="h-px bg-mig-silver w-8"></div>
            <span className="px-3 text-mig-silver text-sm tracking-widest">CASE STUDY</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">Mining Operation <br />Internal Theft Prevention</h2>
          
          <div className="border-l border-mig-silver/20 pl-6 py-2 mb-8">
            <p className="text-mig-silver italic">
              "The Magpie team identified our internal theft network within days. Their evidence was impeccable
              and legally sound, allowing us to take immediate action and recover most of our assets."
            </p>
            <p className="text-mig-accent mt-2 font-medium">— Operations Director, Multinational Mining Firm</p>
          </div>
          
          <div className="space-y-4 mb-8">
            <h3 className="text-mig-accent font-semibold text-lg">Challenge:</h3>
            <p className="text-mig-silver">
              A major mining operation in Mombasa was experiencing significant inventory losses
              despite implementing standard security measures. Initial security assessments
              failed to identify the source of the leakage.
            </p>
            
            <h3 className="text-mig-accent font-semibold text-lg">Solution:</h3>
            <p className="text-mig-silver">
              MIG deployed a hybrid intelligence approach, combining human intelligence with 
              advanced surveillance technology and financial tracking through Kenya's M-Pesa system.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            {results.map((result, index) => (
              <div key={index} className="bg-mig-navyLight p-4 border border-mig-silver/20 rounded-sm">
                <h4 className="text-mig-silver text-sm">{result.label}</h4>
                <p className="text-mig-accent text-xl font-bold mt-1">{result.value}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="border border-mig-silver/20 bg-mig-navyLight/50 p-8 rounded-sm shadow-lg">
          <h3 className="text-mig-accent font-semibold text-lg mb-6 flex items-center">
            <Shield className="w-5 h-5 mr-2" /> 
            Operation Timeline
          </h3>
          
          <div className="space-y-12">
            {timelineSteps.map((step, index) => (
              <div key={index} className="relative flex">
                <div className="flex flex-col items-center mr-4">
                  <div className={`rounded-full p-1 ${
                    step.completed ? 'bg-mig-accent/20 text-mig-accent' : 'bg-mig-navyLight text-mig-silver'
                  }`}>
                    {step.icon}
                  </div>
                  {index < timelineSteps.length - 1 && (
                    <div className="h-full w-px bg-mig-silver/20 my-1"></div>
                  )}
                </div>
                <div>
                  <h4 className="text-white font-medium">{step.title}</h4>
                  <p className="text-mig-silver mt-1">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 pt-8 border-t border-mig-silver/20">
            <div className="flex justify-between text-sm text-mig-silver mb-2">
              <span>Case Initiated</span>
              <span>Case Resolved</span>
            </div>
            <Progress value={100} className="h-1.5 bg-mig-navyLight" />
            <p className="mt-4 text-mig-silver text-sm flex items-center">
              <AlertCircle className="w-4 h-4 mr-2 text-mig-accent" />
              All evidence was legally obtained and admissible in Kenyan courts
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;

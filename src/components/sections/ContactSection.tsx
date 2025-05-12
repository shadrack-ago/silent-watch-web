
import React, { useState } from 'react';
import { Shield, Lock, AlertCircle, Check } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from '@/components/ui/checkbox';

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you'd handle form submission here
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <section id="contact" className="section-container bg-gradient-to-b from-mig-navy to-mig-navyLight">
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center">
          <div className="h-px bg-mig-silver w-8"></div>
          <span className="px-3 text-mig-silver text-sm tracking-widest">SECURE CONTACT</span>
          <div className="h-px bg-mig-silver w-8"></div>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mt-4">Confidential Consultation</h2>
        <p className="text-mig-silver max-w-2xl mx-auto mt-4">
          Submit your inquiry through our secure form. All communications are encrypted and
          protected by strict confidentiality protocols.
        </p>
      </div>
      
      <div className="max-w-3xl mx-auto border border-mig-silver/20 bg-mig-navyLight/50 p-8 rounded-sm shadow-lg">
        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex items-center gap-2 mb-6 text-mig-accent bg-mig-accent/5 p-3 border border-mig-accent/20 rounded-sm">
              <Lock className="w-5 h-5" />
              <span>This form is protected by end-to-end encryption</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-mig-silver">Full Name</Label>
                <Input 
                  id="name" 
                  placeholder="Your name" 
                  required 
                  className="bg-mig-navy border-mig-silver/20 text-white focus:border-mig-accent focus:ring-0"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-mig-silver">Email Address</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="you@company.com" 
                  required 
                  className="bg-mig-navy border-mig-silver/20 text-white focus:border-mig-accent focus:ring-0"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="company" className="text-mig-silver">Company/Organization (Optional)</Label>
              <Input 
                id="company" 
                placeholder="Your organization" 
                className="bg-mig-navy border-mig-silver/20 text-white focus:border-mig-accent focus:ring-0"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="service-type" className="text-mig-silver">Service Required</Label>
              <Select>
                <SelectTrigger className="bg-mig-navy border-mig-silver/20 text-white focus:border-mig-accent focus:ring-0">
                  <SelectValue placeholder="Select service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="investigations">Covert Investigations</SelectItem>
                  <SelectItem value="training">Tactical Training</SelectItem>
                  <SelectItem value="forensics">Forensic Evidence Analysis</SelectItem>
                  <SelectItem value="diplomatic">Diplomatic Intelligence</SelectItem>
                  <SelectItem value="custom">Custom Solution</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="message" className="text-mig-silver">Inquiry Details</Label>
              <Textarea 
                id="message" 
                placeholder="Provide details about your inquiry. Be as specific as possible while maintaining sensitive information security." 
                required
                className="bg-mig-navy border-mig-silver/20 text-white focus:border-mig-accent focus:ring-0 min-h-[120px]"
              />
            </div>
            
            <div className="flex items-start space-x-2">
              <Checkbox id="confidentiality" required />
              <div className="grid gap-1.5 leading-none">
                <Label htmlFor="confidentiality" className="text-mig-silver text-sm">
                  I understand that all information shared will be kept strictly confidential and that Magpie Intelligence Group will contact me securely.
                </Label>
              </div>
            </div>
            
            <Button type="submit" className="shield-button w-full mt-6">
              <Lock className="w-4 h-4 mr-2" />
              Submit Secure Inquiry
            </Button>
            
            <p className="text-xs text-mig-silver text-center mt-4">
              For urgent matters requiring immediate attention,<br />please use our secure phone line: +254 (0) XX XXX XXXX
            </p>
          </form>
        ) : (
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center p-4 bg-mig-accent/10 rounded-full mb-6">
              <Check className="w-8 h-8 text-mig-accent" />
            </div>
            <h3 className="text-2xl font-bold text-mig-accent mb-4">Inquiry Submitted Securely</h3>
            <p className="text-mig-silver">
              Thank you for contacting Magpie Intelligence Group. Your inquiry has been encrypted and securely transmitted to our team. A representative will contact you within 24 hours through your preferred communication method.
            </p>
            <div className="flex items-center justify-center gap-2 mt-6 text-mig-silver">
              <Shield className="w-5 h-5" />
              <span>Your information is protected by our confidentiality protocols</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactSection;


import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-medical-50/50 via-white to-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none"></div>
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-10 mb-10 lg:mb-0">
            <div className="slide-up">
              <span className="inline-block py-1 px-3 rounded-full bg-medical-100 text-medical-600 text-sm font-medium mb-4">
                Leading Medical Equipment Provider
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                <span className="block">Advanced Healthcare</span>
                <span className="text-medical-600">Equipment Solutions</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-lg">
                BGM Biomedical provides state-of-the-art medical equipment and comprehensive 
                services to healthcare facilities across India, enhancing patient care with reliable technology.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="font-medium">
                  Explore Our Products
                  <ArrowRight size={16} className="ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="font-medium">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="relative rounded-lg overflow-hidden shadow-2xl animate-fade-in">
              <img 
                src="https://images.unsplash.com/photo-1530026405186-ed1f139313f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                alt="Modern medical equipment" 
                className="w-full h-auto rounded-lg"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            
            <div className="absolute -bottom-8 -left-6 glass-card rounded-lg p-5 shadow-lg animate-fade-in animation-delay-300 hidden md:block">
              <div className="flex items-center">
                <div className="bg-medical-500 rounded-full p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium">ISO Certified</p>
                  <p className="text-xs text-gray-500">Quality Assured Products</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 glass-card rounded-lg p-5 shadow-lg animate-fade-in animation-delay-500 hidden md:block">
              <div className="flex items-center">
                <div className="bg-accent rounded-full p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium">24/7 Support</p>
                  <p className="text-xs text-gray-500">Expert Technical Assistance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

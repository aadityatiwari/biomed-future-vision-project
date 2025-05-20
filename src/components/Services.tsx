
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      name: "OEM Representative",
      description: "Representing multiple Original Equipment Manufacturers for quality medical products",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
    },
    {
      name: "Service & Support",
      description: "Technical assistance and maintenance for all medical equipment we provide",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      ),
    },
    {
      name: "Modules & Sensors",
      description: "High-quality medical modules and sensors for various medical applications",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
    },
    {
      name: "Technical Consultation",
      description: "Expert guidance on medical equipment selection and integration",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="block text-medical-600 text-sm font-semibold uppercase tracking-wider mb-2">OUR SERVICES</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Medical Equipment Solutions</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive services to support healthcare facilities with their medical equipment needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl border border-gray-100 p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] slide-up delay-100"
            >
              <div className="bg-medical-100 text-medical-600 p-3 rounded-full inline-flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.name}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <a href="#" className="text-medical-600 font-medium flex items-center hover:text-medical-700 transition-colors">
                Learn more
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button size="lg" className="text-base">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;

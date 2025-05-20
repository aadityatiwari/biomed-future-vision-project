
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const ServicesPage = () => {
  const mainServices = [
    {
      title: "Equipment Installation",
      description: "Professional setup and configuration of medical equipment in your facility",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
      features: [
        "Site assessment and preparation",
        "Equipment unboxing and assembly",
        "System configuration and calibration",
        "Integration with existing systems",
        "Staff training on equipment operation",
        "Documentation and handover"
      ],
      image: "https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
    },
    {
      title: "Maintenance & Repair",
      description: "Regular service and prompt repairs to ensure optimal equipment performance",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      ),
      features: [
        "Scheduled preventive maintenance",
        "Emergency repair services",
        "Parts replacement",
        "System upgrades and updates",
        "Performance testing",
        "Maintenance documentation"
      ],
      image: "https://images.unsplash.com/photo-1581092921461-7931834c357d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    {
      title: "Calibration Services",
      description: "Precise calibration to ensure accurate readings and optimal functionality",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      features: [
        "Regular calibration schedules",
        "Accuracy verification",
        "Measurement traceability",
        "Calibration certificates",
        "Compliance with regulatory standards",
        "Digital record keeping"
      ],
      image: "https://images.unsplash.com/photo-1581093804475-577d72e55338?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    {
      title: "Technical Consultation",
      description: "Expert guidance on equipment selection and facility planning",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      features: [
        "Needs assessment",
        "Equipment recommendation",
        "Facility space planning",
        "Technology roadmapping",
        "Budget optimization",
        "Risk assessment"
      ],
      image: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-medical-50/50 via-white to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block py-1 px-3 rounded-full bg-medical-100 text-medical-600 text-sm font-medium mb-4">
              OUR SERVICES
            </span>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Comprehensive <span className="text-medical-600">Medical Equipment Services</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              From installation and maintenance to calibration and technical consultation, we provide end-to-end services for all your medical equipment needs.
            </p>
            <Button size="lg" className="font-medium">
              Request Service Quote
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>
      
      {/* Main Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Core Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide a complete range of services to ensure your medical equipment operates at peak performance throughout its lifecycle.
            </p>
          </div>
          
          <div className="space-y-24">
            {mainServices.map((service, index) => (
              <div 
                key={index} 
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center`}
              >
                <div className={`lg:w-1/2 mb-10 lg:mb-0 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                  <div className="bg-medical-50 text-medical-600 p-3 rounded-lg inline-flex items-center justify-center mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
                  <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-start">
                        <CheckCircle size={20} className="text-medical-500 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button size="lg" className="font-medium">
                    Learn More
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                </div>
                
                <div className="lg:w-1/2">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="rounded-lg shadow-lg w-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Service Plans */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Service Plans</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose a service plan that meets your facility's specific needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="bg-gray-100 p-6 text-center">
                <h3 className="text-xl font-bold mb-1">Basic</h3>
                <div className="text-3xl font-bold text-gray-900 mb-2">₹25,000<span className="text-sm text-gray-500 font-normal">/year</span></div>
                <p className="text-gray-600">For small clinics and practices</p>
              </div>
              
              <div className="p-6">
                <ul className="space-y-3 mb-8">
                  {[
                    "Annual preventive maintenance",
                    "Phone technical support",
                    "2 emergency service calls",
                    "Parts at additional cost",
                    "Basic staff training",
                    "Standard response time"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle size={16} className="text-medical-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button className="w-full" variant="outline">Select Plan</Button>
              </div>
            </div>
            
            {/* Standard Plan */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 relative">
              <div className="absolute top-0 right-0 bg-medical-500 text-white px-3 py-1 text-xs font-medium">
                POPULAR
              </div>
              <div className="bg-medical-50 p-6 text-center">
                <h3 className="text-xl font-bold mb-1">Standard</h3>
                <div className="text-3xl font-bold text-gray-900 mb-2">₹50,000<span className="text-sm text-gray-500 font-normal">/year</span></div>
                <p className="text-gray-600">For medium-sized facilities</p>
              </div>
              
              <div className="p-6">
                <ul className="space-y-3 mb-8">
                  {[
                    "Bi-annual preventive maintenance",
                    "Phone and email technical support",
                    "5 emergency service calls",
                    "Parts up to ₹10,000 included",
                    "Comprehensive staff training",
                    "48-hour response time"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle size={16} className="text-medical-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button className="w-full">Select Plan</Button>
              </div>
            </div>
            
            {/* Premium Plan */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="bg-gray-100 p-6 text-center">
                <h3 className="text-xl font-bold mb-1">Premium</h3>
                <div className="text-3xl font-bold text-gray-900 mb-2">₹100,000<span className="text-sm text-gray-500 font-normal">/year</span></div>
                <p className="text-gray-600">For hospitals and large facilities</p>
              </div>
              
              <div className="p-6">
                <ul className="space-y-3 mb-8">
                  {[
                    "Quarterly preventive maintenance",
                    "24/7 technical support",
                    "Unlimited emergency service calls",
                    "Parts up to ₹25,000 included",
                    "Advanced staff training",
                    "24-hour response time"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle size={16} className="text-medical-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button className="w-full" variant="outline">Select Plan</Button>
              </div>
            </div>
          </div>
          
          <div className="mt-10 text-center">
            <p className="text-gray-600 mb-4">Need a custom service plan? We can create a solution tailored to your specific requirements.</p>
            <Button variant="outline">
              Contact for Custom Plan
            </Button>
          </div>
        </div>
      </section>
      
      {/* Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Service Process</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A streamlined approach to ensure efficient and effective service delivery.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform -translate-x-1/2"></div>
            
            <div className="space-y-12 md:space-y-0 relative">
              {[
                {
                  step: "01",
                  title: "Initial Assessment",
                  description: "We evaluate your equipment and identify service needs through comprehensive assessment."
                },
                {
                  step: "02",
                  title: "Service Planning",
                  description: "Our technical team develops a detailed service plan tailored to your specific requirements."
                },
                {
                  step: "03",
                  title: "Service Execution",
                  description: "Our certified technicians perform the necessary service using advanced tools and techniques."
                },
                {
                  step: "04",
                  title: "Quality Verification",
                  description: "We conduct thorough testing to ensure the equipment meets all performance standards."
                },
                {
                  step: "05",
                  title: "Documentation",
                  description: "Detailed service reports and certificates are provided for your records and compliance needs."
                }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className={`md:flex ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } relative mb-12 md:mb-24`}
                >
                  <div className="md:w-1/2 flex justify-center md:justify-end md:pr-8">
                    <div className={`w-full max-w-md ${index % 2 !== 0 ? 'md:text-right' : ''}`}>
                      <div className={`inline-block px-4 py-1 rounded-full bg-medical-100 text-medical-600 text-sm font-medium mb-2`}>
                        STEP {item.step}
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Point */}
                  <div className="hidden md:flex absolute left-1/2 top-0 transform -translate-x-1/2 mt-3 w-8 h-8 rounded-full bg-medical-500 text-white items-center justify-center">
                    <span className="font-bold">{item.step}</span>
                  </div>
                  
                  <div className="md:w-1/2 md:pl-8"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <CTA />
      <Footer />
    </div>
  );
};

export default ServicesPage;

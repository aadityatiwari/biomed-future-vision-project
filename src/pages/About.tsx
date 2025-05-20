
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Check } from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      name: "Management Team",
      role: "BGM Biomedical",
      image: "https://lh3.googleusercontent.com/p/AF1QipMTJ4VqCh-QmZC5xIqMxioWbCG4smDXQhHsLu_o=w1080-h608-p-no-v0",
      bio: "Our experienced management team brings decades of expertise in medical equipment and healthcare technologies."
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
              ABOUT BGM BIOMEDICAL
            </span>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              About <span className="text-medical-600">BGM Biomedical</span> Services
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Specialized in providing high-quality medical equipment modules, sensors, and parts to healthcare facilities across India.
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-12">
              <h2 className="text-3xl font-bold mb-6">Our Business</h2>
              <p className="text-gray-600 mb-4">
                BGM Biomedical Services Pvt. Ltd. is engaged in the business of patient monitoring modules, sensors, parts and sales & service of medical equipment.
              </p>
              <p className="text-gray-600 mb-4">
                We represent several OEMs (Original Equipment Manufacturers) from around the globe and provide service support to our clients.
              </p>
              <p className="text-gray-600">
                Our team of professionals has expertise in providing solutions for various healthcare facilities and hospitals.
              </p>
            </div>
            
            <div className="lg:w-1/2">
              <img 
                src="https://lh3.googleusercontent.com/p/AF1QipMTJ4VqCh-QmZC5xIqMxioWbCG4smDXQhHsLu_o=w1080-h608-p-no-v0" 
                alt="BGM Biomedical office" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Our Mission & Vision</h2>
              <p className="text-lg text-gray-600">
                Dedicated to providing quality medical equipment and services.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-md p-8">
                <div className="bg-medical-100 text-medical-600 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-gray-600">
                  To provide high-quality medical equipment modules, sensors, and parts along with exceptional service and technical support to healthcare facilities.
                </p>
                <ul className="mt-6 space-y-3">
                  {["Quality products", "Reliable service", "Technical expertise", "Customer satisfaction"].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <Check size={18} className="text-medical-500 mt-1 mr-2" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-8">
                <div className="bg-medical-100 text-medical-600 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-gray-600">
                  To be the leading provider of medical equipment modules and services, recognized for our quality products and exceptional technical support.
                </p>
                <ul className="mt-6 space-y-3">
                  {["Industry leadership", "Technical excellence", "Customer focus", "Healthcare advancement"].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <Check size={18} className="text-medical-500 mt-1 mr-2" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Team</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Meet our team of professionals dedicated to providing excellent medical equipment solutions.
            </p>
          </div>
          
          <div className="flex justify-center">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden max-w-md">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover object-center"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-medical-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Commitment */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Commitment</h2>
              <p className="text-lg text-gray-600">
                We are committed to providing high-quality products and services to our clients.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="bg-medical-100 text-medical-600 rounded-full p-3 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Quality Products</h3>
                    <p className="text-gray-600">Providing high-quality medical equipment modules and parts</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-medical-100 text-medical-600 rounded-full p-3 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Expert Service</h3>
                    <p className="text-gray-600">Technical support and service by experienced professionals</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-medical-100 text-medical-600 rounded-full p-3 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">OEM Partnerships</h3>
                    <p className="text-gray-600">Representing multiple Original Equipment Manufacturers</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-medical-100 text-medical-600 rounded-full p-3 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Customer Focus</h3>
                    <p className="text-gray-600">Dedicated to meeting the needs of healthcare facilities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;

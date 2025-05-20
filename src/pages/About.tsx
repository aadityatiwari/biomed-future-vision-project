
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Check } from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      name: "Dr. Ramesh Patel",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      bio: "Dr. Ramesh has over 25 years of experience in medical equipment technology and healthcare management."
    },
    {
      name: "Priya Singh",
      role: "Technical Director",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
      bio: "Priya leads our technical team with expertise in medical device engineering and quality assurance."
    },
    {
      name: "Ajay Kumar",
      role: "Service Manager",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      bio: "Ajay oversees all service operations ensuring prompt and reliable support for our clients."
    },
    {
      name: "Neha Sharma",
      role: "Business Development",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80",
      bio: "Neha develops strategic partnerships to expand our presence across healthcare institutions."
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
              Advancing Healthcare Through <span className="text-medical-600">Innovative Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Since our founding in 2005, we've been dedicated to providing high-quality medical equipment and exceptional service to healthcare facilities across India.
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-12">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                BGM Biomedical was founded with a vision to bridge the gap between advanced medical technology and healthcare facilities in India. What began as a small operation has grown into a trusted partner for hospitals and clinics nationwide.
              </p>
              <p className="text-gray-600 mb-4">
                Our journey started with a focus on patient monitoring systems, but we quickly expanded our portfolio to include a comprehensive range of medical equipment. Through strategic partnerships with global manufacturers, we've been able to bring cutting-edge technology to the Indian healthcare market.
              </p>
              <p className="text-gray-600">
                Today, BGM Biomedical stands as a testament to our commitment to quality, reliability, and customer satisfaction. We continue to evolve, embracing new technologies and approaches to better serve the healthcare community.
              </p>
            </div>
            
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80" 
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
                Guided by our core values, we strive to make a positive impact on healthcare delivery.
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
                  To enhance healthcare delivery by providing reliable medical equipment and exceptional service that enables healthcare professionals to focus on what matters most – patient care.
                </p>
                <ul className="mt-6 space-y-3">
                  {["Quality equipment", "Reliable service", "Technical expertise", "Customer satisfaction"].map((item, i) => (
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
                  To be the most trusted partner for medical equipment and services in India, recognized for our innovation, integrity, and commitment to advancing healthcare technology.
                </p>
                <ul className="mt-6 space-y-3">
                  {["Industry leadership", "Technological innovation", "Nationwide presence", "Healthcare advancement"].map((item, i) => (
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
            <h2 className="text-3xl font-bold mb-4">Our Leadership Team</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Meet the experts who drive our mission forward with their industry knowledge and dedication.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
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
      
      {/* Certifications */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Certifications & Standards</h2>
              <p className="text-lg text-gray-600">
                We adhere to the highest quality standards and industry best practices.
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
                    <h3 className="text-xl font-bold mb-2">ISO 13485:2016</h3>
                    <p className="text-gray-600">Medical devices quality management systems certification</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-medical-100 text-medical-600 rounded-full p-3 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">ISO 9001:2015</h3>
                    <p className="text-gray-600">Quality management systems certification</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-medical-100 text-medical-600 rounded-full p-3 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">CE Marking</h3>
                    <p className="text-gray-600">European conformity for medical devices</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-medical-100 text-medical-600 rounded-full p-3 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Indian FDA Registration</h3>
                    <p className="text-gray-600">Compliance with Indian regulatory requirements</p>
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

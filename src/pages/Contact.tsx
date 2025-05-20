
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-medical-50/50 via-white to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block py-1 px-3 rounded-full bg-medical-100 text-medical-600 text-sm font-medium mb-4">
              GET IN TOUCH
            </span>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              We're Here to <span className="text-medical-600">Support</span> You
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Have questions about our products or services? Our team is ready to assist you.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Phone */}
            <div className="bg-white rounded-xl shadow-sm p-8 hover:shadow-md transition-shadow text-center">
              <div className="bg-medical-50 text-medical-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-gray-600 mb-4">Our support team is available during business hours.</p>
              <a href="tel:+919876543210" className="text-medical-600 font-semibold hover:text-medical-700 transition-colors">
                +91 98765 43210
              </a>
            </div>
            
            {/* Email */}
            <div className="bg-white rounded-xl shadow-sm p-8 hover:shadow-md transition-shadow text-center">
              <div className="bg-medical-50 text-medical-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-gray-600 mb-4">Send us an email and we'll respond within 24 hours.</p>
              <a href="mailto:info@bgmbiomedical.com" className="text-medical-600 font-semibold hover:text-medical-700 transition-colors">
                info@bgmbiomedical.com
              </a>
            </div>
            
            {/* Location */}
            <div className="bg-white rounded-xl shadow-sm p-8 hover:shadow-md transition-shadow text-center">
              <div className="bg-medical-50 text-medical-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
              <p className="text-gray-600 mb-4">Our headquarters and main service center.</p>
              <address className="not-italic text-medical-600 font-semibold hover:text-medical-700 transition-colors">
                123 Medical Avenue<br />
                Bangalore, Karnataka, India
              </address>
            </div>
            
            {/* Hours */}
            <div className="bg-white rounded-xl shadow-sm p-8 hover:shadow-md transition-shadow text-center">
              <div className="bg-medical-50 text-medical-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Business Hours</h3>
              <p className="text-gray-600 mb-4">Our regular working hours.</p>
              <div className="text-medical-600 font-semibold">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 9:00 AM - 1:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Form & Map */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white rounded-xl shadow-md p-8">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        placeholder="John Doe"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-500 focus:border-medical-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        placeholder="john@example.com"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-500 focus:border-medical-500"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-500 focus:border-medical-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      placeholder="Product Inquiry"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-500 focus:border-medical-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                    <textarea
                      id="message"
                      rows={5}
                      placeholder="Tell us about your inquiry..."
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-500 focus:border-medical-500"
                    ></textarea>
                  </div>
                  
                  <div>
                    <Button className="w-full py-6 text-base" size="lg">
                      <Send size={16} className="mr-2" />
                      Send Message
                    </Button>
                  </div>
                </form>
              </div>
              
              {/* Map */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Our Location</h2>
                <div className="relative h-[400px] rounded-xl overflow-hidden shadow-md">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.90089673864!2d77.46612549979064!3d12.953945727636975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1672042648253!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="BGM Biomedical Location"
                  ></iframe>
                </div>
                
                <div className="mt-8 bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">BGM Biomedical Services Pvt. Ltd.</h3>
                  <p className="text-gray-600 mb-4">
                    Our headquarters in Bangalore serves as our main administrative office and technical support center. 
                    We also have regional offices in Delhi, Mumbai, and Chennai.
                  </p>
                  <div className="flex items-center text-medical-600">
                    <MapPin size={18} className="mr-2" />
                    <span>123 Medical Avenue, Bangalore, Karnataka, India - 560001</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600">
                Find answers to common questions about our services and support.
              </p>
            </div>
            
            <div className="space-y-6">
              {[
                {
                  question: "What areas do you provide service in?",
                  answer: "BGM Biomedical provides services across all major cities in India. Our headquarters is in Bangalore, with regional offices in Delhi, Mumbai, and Chennai. We also have service partners in many tier-2 cities to ensure nationwide coverage."
                },
                {
                  question: "How quickly can you respond to service requests?",
                  answer: "Our standard response time is 24-48 hours for non-critical equipment. For critical equipment covered under our premium service plans, we offer 4-8 hour response times. Emergency services are available 24/7 for clients with maintenance contracts."
                },
                {
                  question: "Do you offer equipment demonstrations?",
                  answer: "Yes, we provide comprehensive equipment demonstrations at our showrooms or at your facility. These demonstrations include hands-on experience with the equipment and detailed explanations of features and benefits."
                },
                {
                  question: "What payment methods do you accept?",
                  answer: "We accept bank transfers, checks, and major credit cards. For equipment purchases, we also offer financing options and installment plans through our banking partners."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-10 text-center">
              <p className="text-gray-600 mb-4">
                Don't see your question here? Contact our support team for assistance.
              </p>
              <Button variant="outline">
                View More FAQs
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;

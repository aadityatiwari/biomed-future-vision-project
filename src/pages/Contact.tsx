
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
              CONTACT US
            </span>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Get in <span className="text-medical-600">Touch</span> With Us
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Phone */}
            <div className="bg-white rounded-xl shadow-sm p-8 hover:shadow-md transition-shadow text-center">
              <div className="bg-medical-50 text-medical-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-gray-600 mb-4">Our team is available to assist you.</p>
              <a href="tel:+919717692952" className="text-medical-600 font-semibold hover:text-medical-700 transition-colors">
                +91 9717692952
              </a>
            </div>
            
            {/* Email */}
            <div className="bg-white rounded-xl shadow-sm p-8 hover:shadow-md transition-shadow text-center">
              <div className="bg-medical-50 text-medical-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-gray-600 mb-4">Send us an email with your inquiries.</p>
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
              <p className="text-gray-600 mb-4">Our office location.</p>
              <address className="not-italic text-medical-600 font-semibold hover:text-medical-700 transition-colors">
                2nd Floor, Office Complex<br />
                Green Valley Plaza, Jagriti Enclave<br />
                Delhi
              </address>
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
                        placeholder="Your Name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-500 focus:border-medical-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        placeholder="Your Email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-500 focus:border-medical-500"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      placeholder="Your Phone"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-500 focus:border-medical-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      placeholder="Subject"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-500 focus:border-medical-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                    <textarea
                      id="message"
                      rows={5}
                      placeholder="Your message here..."
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
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.0731415806333!2d77.3208083!3d28.604096699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5156ac54eff%3A0xf5149d54f665dd9!2sGreen%20Valley%20Plaza%2C%20Jagriti%20Enclave%2C%20Kaushambi%2C%20Ghaziabad%2C%20Uttar%20Pradesh%20201010!5e0!3m2!1sen!2sin!4v1653857705217!5m2!1sen!2sin"
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
                    Our office is located in Delhi. Feel free to visit us during business hours or contact us via phone or email.
                  </p>
                  <div className="flex items-center text-medical-600">
                    <MapPin size={18} className="mr-2" />
                    <span>2nd Floor, Office Complex, Green Valley Plaza, Jagriti Enclave, Delhi</span>
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

export default Contact;

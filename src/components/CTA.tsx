
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";

const CTA = () => {
  return (
    <section className="section bg-medical-600 text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <span className="text-medical-200 text-sm font-semibold uppercase tracking-wider mb-2 block">Get in Touch</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Medical Equipment or Services?</h2>
            <p className="text-medical-100 text-lg mb-8">
              Contact our team to discuss your medical equipment needs. We're here to provide solutions for your healthcare facility.
            </p>

            <div className="space-y-4">
              <div className="flex items-start">
                <Phone className="mr-4 h-5 w-5 text-medical-200" />
                <div>
                  <p className="font-medium">Call Us</p>
                  <p className="text-medical-100">+91 9717692952</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="mr-4 h-5 w-5 text-medical-200" />
                <div>
                  <p className="font-medium">Email Us</p>
                  <p className="text-medical-100">info@bgmbiomedical.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="mr-4 h-5 w-5 text-medical-200" />
                <div>
                  <p className="font-medium">Visit Us</p>
                  <p className="text-medical-100">Plot No. 15, 2nd Floor, Office Complex, Green Valley Plaza, Pocket B, Jagriti Enclave, Delhi, 110091</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white text-gray-800 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold mb-6">Request Information</h3>
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
                  <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1">Organization</label>
                  <input
                    type="text"
                    id="organization"
                    placeholder="Hospital/Clinic Name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-500 focus:border-medical-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-500 focus:border-medical-500"
                  />
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
              </div>

              <div>
                <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-1">Interested In</label>
                <select
                  id="interest"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-500 focus:border-medical-500"
                >
                  <option value="">Select an option</option>
                  <option value="product-information">Product Information</option>
                  <option value="service-request">Service Request</option>
                  <option value="consultation">Technical Consultation</option>
                  <option value="quote">Request Quote</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell us about your requirements..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-500 focus:border-medical-500"
                ></textarea>
              </div>

              <Button className="w-full py-6 text-base font-medium" size="lg">
                Submit Request
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

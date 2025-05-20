
const Testimonials = () => {
  return (
    <section className="section bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="block text-medical-600 text-sm font-semibold uppercase tracking-wider mb-2">TESTIMONIALS</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We've helped numerous healthcare facilities enhance their patient care with reliable medical equipment and services.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="max-w-3xl bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300 slide-up delay-100 relative">
            <div className="mb-6">
              <svg className="text-medical-200 w-12 h-12 absolute top-6 right-6" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 8c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6zM22 8c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z" />
              </svg>
              <p className="text-gray-600 italic relative z-10">
                "BGM Biomedical has consistently provided quality service and products to our hospital. Their team's expertise and prompt support have been invaluable to our operations."
              </p>
            </div>

            <div className="flex justify-center mt-8">
              <a href="#" className="inline-flex items-center text-medical-600 font-medium hover:text-medical-700 transition-colors">
                View more client testimonials
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

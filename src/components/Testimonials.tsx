
const Testimonials = () => {
  const testimonials = [
    {
      name: "Dr. Rajesh Kumar",
      role: "Chief Medical Officer",
      hospital: "City General Hospital",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      quote: "BGM Biomedical has been our trusted partner for over 5 years. Their equipment quality and after-sales service are exceptional. The technical team responds quickly to our needs, minimizing downtime."
    },
    {
      name: "Dr. Priya Sharma",
      role: "Hospital Director",
      hospital: "Meadows Medical Center",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      quote: "We've equipped our entire new wing with BGM Biomedical's products. Their consultative approach helped us choose the right equipment for our needs, and their installation team was professional and thorough."
    },
    {
      name: "Dr. Sunil Patel",
      role: "Head of Cardiology",
      hospital: "Heart Care Institute",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
      quote: "The cardiac monitoring systems from BGM Biomedical have significantly improved our diagnostic capabilities. Their calibration services ensure our equipment always provides accurate readings."
    }
  ];

  return (
    <section className="section bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="block text-medical-600 text-sm font-semibold uppercase tracking-wider mb-2">TESTIMONIALS</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We've helped hundreds of healthcare facilities enhance their patient care with reliable medical equipment and services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300 slide-up delay-100 relative"
            >
              <div className="mb-6">
                <svg className="text-medical-200 w-12 h-12 absolute top-6 right-6" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 8c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6zM22 8c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z" />
                </svg>
                <p className="text-gray-600 italic relative z-10">{testimonial.quote}</p>
              </div>

              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}, {testimonial.hospital}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="#" className="inline-flex items-center text-medical-600 font-medium hover:text-medical-700 transition-colors">
            View more success stories
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

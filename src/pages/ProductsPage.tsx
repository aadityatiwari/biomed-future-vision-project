import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { Button } from "@/components/ui/button";

const ProductsPage = () => {
  const categories = [
    {
      name: "Patient Monitoring",
      slug: "patient-monitoring",
      icon: "🫀"
    },
    {
      name: "Diagnostic Equipment",
      slug: "diagnostic",
      icon: "🔬"
    },
    {
      name: "Surgical Equipment",
      slug: "surgical",
      icon: "🔪"
    },
    {
      name: "Life Support",
      slug: "life-support",
      icon: "💨"
    },
    {
      name: "Imaging Systems",
      slug: "imaging",
      icon: "📷"
    },
    {
      name: "Laboratory Equipment",
      slug: "laboratory",
      icon: "🧪"
    }
  ];
  
  const products = [
    {
      name: "VitalCare 3000",
      category: "Patient Monitoring",
      image: "https://lh3.googleusercontent.com/p/AF1QipMTJ4VqCh-QmZC5xIqMxioWbCG4smDXQhHsLu_o=w1080-h608-p-no-v0",
      description: "Advanced patient monitor with integrated vital signs monitoring capabilities including ECG, SpO2, NIBP, temperature and respiration.",
      features: [
        "12.1\" color TFT display",
        "Touch screen interface",
        "Lithium-ion battery",
        "Network connectivity",
        "Central monitoring system compatible"
      ]
    },
    {
      name: "MediVent Plus",
      category: "Life Support",
      image: "https://lh3.googleusercontent.com/p/AF1QipO2_L5nrsCswRfW9Jw20TZjD93RuVxTxZmwu8hv=w1080-h608-p-no-v0",
      description: "High-performance ventilator for critical care settings with advanced ventilation modes and comprehensive monitoring.",
      features: [
        "Invasive and non-invasive modes",
        "Integrated battery backup",
        "Advanced alarm system",
        "Lung mechanics monitoring",
        "Low oxygen consumption"
      ]
    },
    {
      name: "DiagnoECG 12",
      category: "Diagnostic Equipment",
      image: "https://lh3.googleusercontent.com/p/AF1QipOxfX34L5RlhtjzmCu19LqAAgjUPr0NC2rl4Zue=w1080-h608-p-no-v0",
      description: "12-lead ECG system with advanced analysis algorithms for accurate cardiac diagnosis and reporting.",
      features: [
        "High-resolution recording",
        "Automatic interpretation",
        "Wireless connectivity",
        "Internal memory for 200 ECGs",
        "Compatible with EMR systems"
      ]
    },
    {
      name: "InfusionPro 4000",
      category: "Life Support",
      image: "https://lh3.googleusercontent.com/p/AF1QipNksJ0-QR3tILMUJSj_ExN2LfUZTqhbxtS8-LBJ=w1080-h608-p-no-v0",
      description: "Precision infusion pump for accurate delivery of medications, fluids, and nutrients in various clinical settings.",
      features: [
        "Programmable flow rates",
        "Anti-free-flow mechanism",
        "Drug library capability",
        "Multiple operation modes",
        "Occlusion and air detection alarms"
      ]
    },
    {
      name: "UltraScan X5",
      category: "Imaging Systems",
      image: "https://lh3.googleusercontent.com/p/AF1QipP5M2OCGUb1T-hJnGR2VgNVg5jm13UxaLn-t7gi=w1080-h608-p-no-v0",
      description: "Advanced ultrasound system with superior imaging performance for a wide range of clinical applications.",
      features: [
        "High-definition imaging",
        "Color Doppler",
        "3D/4D imaging capability",
        "Multiple probe options",
        "Image storage and transfer"
      ]
    },
    {
      name: "SurgicalLight LED6",
      category: "Surgical Equipment",
      image: "https://lh3.googleusercontent.com/p/AF1QipNwfOeviEdGEFp5-MUnth_kN-3MyzHDaUQgagw6=w1080-h608-p-no-v0",
      description: "High-performance LED surgical light system for optimal illumination during surgical procedures.",
      features: [
        "Shadow-free illumination",
        "Adjustable color temperature",
        "Long LED lifespan",
        "Sterilizable handle",
        "Low heat emission"
      ]
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
              PRODUCT CATALOG
            </span>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Advanced <span className="text-medical-600">Medical Equipment</span> for Modern Healthcare
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Explore our comprehensive range of high-quality medical equipment designed to enhance patient care and clinical outcomes.
            </p>
            
            <div className="flex flex-wrap justify-center gap-3">
              <Button size="lg" className="font-medium">
                Browse All Products
              </Button>
              <Button size="lg" variant="outline" className="font-medium">
                Request Catalog
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Product Categories</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Browse our equipment by category to find the perfect solutions for your healthcare facility.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <a 
                key={index} 
                href={`#${category.slug}`}
                className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
              >
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800">{category.name}</h3>
              </a>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Products</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our most popular high-quality medical equipment trusted by healthcare facilities across India.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="inline-block py-1 px-2 rounded-full bg-medical-50 text-medical-600 text-xs font-medium">
                      {product.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-500 mb-2">KEY FEATURES:</h4>
                    <ul className="space-y-1">
                      {product.features.slice(0, 3).map((feature, i) => (
                        <li key={i} className="text-sm text-gray-600 flex items-center">
                          <svg className="w-4 h-4 text-medical-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                      {product.features.length > 3 && (
                        <li className="text-sm text-gray-500">+ {product.features.length - 3} more features</li>
                      )}
                    </ul>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                    <Button size="sm">Request Quote</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg">
              View All Products
            </Button>
          </div>
        </div>
      </section>
      
      {/* Brands */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Trusted Brands</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We partner with leading manufacturers to bring you the highest quality medical equipment.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {[1, 2, 3, 4, 5, 6].map((brand) => (
              <div key={brand} className="grayscale hover:grayscale-0 transition-all duration-300">
                <div className="w-32 h-16 bg-gray-200 rounded flex items-center justify-center">
                  <span className="text-gray-500 font-semibold">Brand {brand}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Product Support */}
      <section className="py-16 bg-medical-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0">
                <h2 className="text-3xl font-bold mb-4">Complete Product Support</h2>
                <p className="text-gray-700 mb-6">
                  When you purchase equipment from BGM Biomedical, you receive comprehensive support throughout the product lifecycle.
                </p>
                
                <ul className="space-y-3">
                  {[
                    "Installation and setup by certified technicians",
                    "Staff training on equipment operation",
                    "Regular maintenance and calibration",
                    "Prompt technical support when you need it",
                    "Access to spare parts and accessories",
                    "Equipment upgrades and updates"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="w-5 h-5 text-medical-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8">
                  <Button>Contact Support</Button>
                </div>
              </div>
              
              <div className="md:w-1/2">
                <img 
                  src="https://lh3.googleusercontent.com/p/AF1QipNksJ0-QR3tILMUJSj_ExN2LfUZTqhbxtS8-LBJ=w1080-h608-p-no-v0" 
                  alt="Product Support" 
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <CTA />
      <Footer />
    </div>
  );
};

export default ProductsPage;


import { Button } from "@/components/ui/button";

const Products = () => {
  const products = [
    {
      name: "NIBP Modules",
      image: "https://lh3.googleusercontent.com/p/AF1QipOxfX34L5RlhtjzmCu19LqAAgjUPr0NC2rl4Zue=w1080-h608-p-no-v0",
      description: "Advanced non-invasive blood pressure monitoring modules",
      categories: ["Modules", "Monitoring"]
    },
    {
      name: "Patient Monitors",
      image: "https://lh3.googleusercontent.com/p/AF1QipMTJ4VqCh-QmZC5xIqMxioWbCG4smDXQhHsLu_o=w1080-h608-p-no-v0",
      description: "High-quality patient monitoring systems for critical care",
      categories: ["Monitoring", "Critical Care"]
    },
    {
      name: "SpO2 Sensors",
      image: "https://lh3.googleusercontent.com/p/AF1QipO2_L5nrsCswRfW9Jw20TZjD93RuVxTxZmwu8hv=w1080-h608-p-no-v0",
      description: "Reliable oxygen saturation sensors for accurate readings",
      categories: ["Sensors", "Monitoring"]
    },
    {
      name: "Service & Support",
      image: "https://lh3.googleusercontent.com/p/AF1QipNksJ0-QR3tILMUJSj_ExN2LfUZTqhbxtS8-LBJ=w1080-h608-p-no-v0",
      description: "Expert technical support and maintenance services",
      categories: ["Services", "Support"]
    }
  ];

  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="block text-medical-600 text-sm font-semibold uppercase tracking-wider mb-2">OUR PRODUCTS</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Quality Medical Equipment</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We offer a wide range of high-quality medical equipment and modules from industry-leading manufacturers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 slide-up delay-100">
              <div className="relative h-64">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-1">{product.name}</h3>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {product.categories.map((category, idx) => (
                        <span key={idx} className="bg-white/20 text-white text-xs px-2 py-1 rounded-full">
                          {category}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <Button variant="outline" size="sm">
                    Learn More
                  </Button>
                  <a href="#" className="text-medical-600 font-medium hover:text-medical-700 transition-colors">
                    View Specs
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button size="lg" className="text-base">
            Explore All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;


import { Button } from "@/components/ui/button";

const Products = () => {
  const products = [
    {
      name: "NIBP Modules",
      image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Advanced non-invasive blood pressure monitoring modules",
      categories: ["Modules", "Monitoring"]
    },
    {
      name: "Patient Monitors",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "High-quality patient monitoring systems for critical care",
      categories: ["Monitoring", "Critical Care"]
    },
    {
      name: "SpO2 Sensors",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Reliable oxygen saturation sensors for accurate readings",
      categories: ["Sensors", "Monitoring"]
    },
    {
      name: "Service & Support",
      image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
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

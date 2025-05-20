
import { Button } from "@/components/ui/button";

const Products = () => {
  const products = [
    {
      name: "Patient Monitors",
      image: "https://images.unsplash.com/photo-1581595219315-a187dd40c322?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      description: "Advanced vital signs monitoring with high-resolution displays",
      categories: ["ICU", "CCU", "General Ward"]
    },
    {
      name: "Ventilators",
      image: "https://images.unsplash.com/photo-1584744982491-665216d95f8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      description: "Life-supporting ventilation systems for critical care patients",
      categories: ["ICU", "Emergency"]
    },
    {
      name: "Infusion Pumps",
      image: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1240&q=80",
      description: "Precision fluid delivery systems for medication administration",
      categories: ["ICU", "OT", "General Ward"]
    },
    {
      name: "ECG Machines",
      image: "https://images.unsplash.com/photo-1579154341098-e4e158cc7f55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      description: "Comprehensive cardiac monitoring and diagnostic systems",
      categories: ["Cardiology", "ICU", "Emergency"]
    }
  ];

  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="block text-medical-600 text-sm font-semibold uppercase tracking-wider mb-2">OUR PORTFOLIO</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Medical Equipment</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We offer a wide range of high-quality medical equipment from industry-leading manufacturers.
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

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { X } from "lucide-react";

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  
  const categories = [
    { id: "all", name: "All Items" },
    { id: "products", name: "Products" },
    { id: "modules", name: "Modules" },
    { id: "sensors", name: "Sensors" }
  ];
  
  const galleryImages = [
    {
      id: 1,
      src: "https://lh3.googleusercontent.com/p/AF1QipMTJ4VqCh-QmZC5xIqMxioWbCG4smDXQhHsLu_o=w1080-h608-p-no-v0",
      alt: "Patient Monitoring Equipment",
      category: "products",
      title: "Patient Monitors",
      description: "Advanced patient monitoring equipment for healthcare facilities."
    },
    {
      id: 2,
      src: "https://lh3.googleusercontent.com/p/AF1QipOxfX34L5RlhtjzmCu19LqAAgjUPr0NC2rl4Zue=w1080-h608-p-no-v0",
      alt: "NIBP Modules",
      category: "modules",
      title: "NIBP Modules",
      description: "Non-invasive blood pressure monitoring modules for medical equipment."
    },
    {
      id: 3,
      src: "https://lh3.googleusercontent.com/p/AF1QipO2_L5nrsCswRfW9Jw20TZjD93RuVxTxZmwu8hv=w1080-h608-p-no-v0",
      alt: "SpO2 Sensors",
      category: "sensors",
      title: "SpO2 Sensors",
      description: "Oxygen saturation sensors for accurate patient monitoring."
    },
    {
      id: 4,
      src: "https://lh3.googleusercontent.com/p/AF1QipNksJ0-QR3tILMUJSj_ExN2LfUZTqhbxtS8-LBJ=w1080-h608-p-no-v0",
      alt: "Medical Equipment Service",
      category: "products",
      title: "Service & Support",
      description: "Professional technical service and support for medical equipment."
    }
  ];
  
  const filteredImages = activeCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(image => image.category === activeCategory);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-medical-50/50 via-white to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block py-1 px-3 rounded-full bg-medical-100 text-medical-600 text-sm font-medium mb-4">
              GALLERY
            </span>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Our <span className="text-medical-600">Products</span> & Services
            </h1>
            <p className="text-xl text-gray-600">
              Explore our collection of medical equipment, modules, and sensors.
            </p>
          </div>
        </div>
      </section>
      
      {/* Gallery */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Filter Categories */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category.id
                    ? "bg-medical-500 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {filteredImages.map((image) => (
              <div 
                key={image.id} 
                className="group relative overflow-hidden rounded-lg cursor-pointer shadow-sm hover:shadow-md transition-all duration-300"
                onClick={() => setLightboxImage(image.src)}
              >
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                  <p className="text-white/80 text-sm">{image.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No images found in this category.</p>
            </div>
          )}
          
          {/* Lightbox */}
          {lightboxImage && (
            <div 
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={() => setLightboxImage(null)}
            >
              <button 
                className="absolute top-4 right-4 text-white bg-black/20 hover:bg-black/40 p-2 rounded-full transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxImage(null);
                }}
              >
                <X size={24} />
              </button>
              <img 
                src={lightboxImage} 
                alt="Enlarged view" 
                className="max-w-full max-h-[85vh] object-contain" 
              />
            </div>
          )}
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Gallery;

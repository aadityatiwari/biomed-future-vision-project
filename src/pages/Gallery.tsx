
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { X } from "lucide-react";

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  
  const categories = [
    { id: "all", name: "All Items" },
    { id: "equipment", name: "Equipment" },
    { id: "installations", name: "Installations" },
    { id: "facilities", name: "Client Facilities" },
    { id: "events", name: "Events" }
  ];
  
  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      alt: "Patient monitoring equipment in ICU",
      category: "equipment",
      title: "ICU Monitoring System",
      description: "High-precision patient monitoring equipment installed in critical care unit."
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      alt: "Hospital room with medical equipment",
      category: "facilities",
      title: "Modern Hospital Room",
      description: "Fully equipped patient room with BGM Biomedical solutions."
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1581093457484-a2d88267771c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      alt: "Technician installing medical equipment",
      category: "installations",
      title: "Equipment Installation",
      description: "BGM technical team installing advanced diagnostic equipment."
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      alt: "Advanced surgical equipment",
      category: "equipment",
      title: "Surgical Equipment Suite",
      description: "State-of-the-art surgical equipment for precision procedures."
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1578496480157-697fc14d2e55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      alt: "Hospital staff training session",
      category: "events",
      title: "Staff Training Workshop",
      description: "Training session for medical professionals on new equipment usage."
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1153&q=80",
      alt: "Hospital lobby with BGM equipment",
      category: "facilities",
      title: "Modern Hospital Reception",
      description: "Well-equipped reception area with BGM technology integration."
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      alt: "Technical team servicing equipment",
      category: "installations",
      title: "Preventive Maintenance",
      description: "BGM technical team performing regular equipment maintenance."
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
      alt: "Surgical light installation",
      category: "installations",
      title: "Operating Room Setup",
      description: "Installation of advanced surgical lighting systems."
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      alt: "Medical conference with BGM booth",
      category: "events",
      title: "MedTech Conference 2023",
      description: "BGM Biomedical showcasing latest innovations at industry conference."
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      alt: "ECG machine",
      category: "equipment",
      title: "Advanced ECG System",
      description: "12-lead ECG system with integrated analysis software."
    },
    {
      id: 11,
      src: "https://images.unsplash.com/photo-1579154341098-e4e158cc7f55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      alt: "Ultrasound machine",
      category: "equipment",
      title: "High-Resolution Ultrasound",
      description: "Advanced imaging system for precise diagnostics."
    },
    {
      id: 12,
      src: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
      alt: "Award ceremony for BGM",
      category: "events",
      title: "Excellence in Service Award",
      description: "BGM Biomedical receiving industry recognition for outstanding service."
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
              Our <span className="text-medical-600">Equipment</span> in Action
            </h1>
            <p className="text-xl text-gray-600">
              Explore our gallery showcasing installations, equipment, client facilities, and events.
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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

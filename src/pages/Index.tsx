
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Services from "@/components/Services";
import Products from "@/components/Products";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Services />
      <Stats />
      <Products />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;

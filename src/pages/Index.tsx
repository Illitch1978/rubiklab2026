import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PlatformIntro from "@/components/PlatformIntro";
import Testimonials from "@/components/Testimonials";
import Stats from "@/components/Stats";

import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <Hero />
      <PlatformIntro />
      <Testimonials />
      <Stats />
      
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;

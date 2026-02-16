import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoTicker from "@/components/LogoTicker";
import PlatformIntro from "@/components/PlatformIntro";
import Testimonials from "@/components/Testimonials";
import Stats from "@/components/Stats";
import Security from "@/components/Security";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <LogoTicker />
      <PlatformIntro />
      <Testimonials />
      <Stats />
      <Security />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;

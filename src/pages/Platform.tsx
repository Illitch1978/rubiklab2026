import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PlatformHero from "@/components/platform/PlatformHero";
import ProductsGrid from "@/components/platform/ProductsGrid";
import WhyHarvey from "@/components/platform/WhyHarvey";
import PlatformStats from "@/components/platform/PlatformStats";
import PlatformTestimonials from "@/components/platform/PlatformTestimonials";
import Integrations from "@/components/platform/Integrations";
import CallToAction from "@/components/CallToAction";

const Platform = () => {
  return (
    <div className="min-h-screen theme-light bg-background text-foreground">
      <Navbar light />
      <PlatformHero />
      <ProductsGrid />
      <WhyHarvey />
      <PlatformStats />
      <PlatformTestimonials />
      <Integrations />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Platform;

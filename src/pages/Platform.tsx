import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PlatformHero from "@/components/platform/PlatformHero";
import WhyHarvey from "@/components/platform/WhyHarvey";
import PlatformStats from "@/components/platform/PlatformStats";
import PlatformTestimonials from "@/components/platform/PlatformTestimonials";
import ProductsGrid from "@/components/platform/ProductsGrid";
import Integrations from "@/components/platform/Integrations";
import Security from "@/components/Security";

const Platform = () => {
  return (
    <div className="min-h-screen theme-light bg-background text-foreground">
      <Navbar light />
      <PlatformHero />
      <WhyHarvey />
      <PlatformStats />
      <PlatformTestimonials />
      <ProductsGrid />
      <Integrations />
      <Security />
      <Footer />
    </div>
  );
};

export default Platform;

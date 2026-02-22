import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PlatformHero from "@/components/platform/PlatformHero";
import PipelineOverview from "@/components/platform/PipelineOverview";
import ProductsGrid from "@/components/platform/ProductsGrid";

import PlatformQuotes from "@/components/platform/PlatformQuotes";
import WhyHarvey from "@/components/platform/WhyHarvey";
import IntelligenceLeverage from "@/components/platform/IntelligenceLeverage";
import CallToAction from "@/components/CallToAction";

const Platform = () => {
  return (
    <div className="min-h-screen theme-light bg-background text-foreground overflow-x-hidden">
      <Navbar light />
      <PlatformHero />
      <PipelineOverview />
      <ProductsGrid />
      
      <PlatformQuotes />
      <WhyHarvey />
      <IntelligenceLeverage />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Platform;

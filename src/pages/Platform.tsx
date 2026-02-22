import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PlatformHero from "@/components/platform/PlatformHero";
import PipelineOverview from "@/components/platform/PipelineOverview";
import ProductsGrid from "@/components/platform/ProductsGrid";
import PlatformBenefits from "@/components/platform/PlatformBenefits";
import PlatformQuotes from "@/components/platform/PlatformQuotes";
import WhyHarvey from "@/components/platform/WhyHarvey";
import CallToAction from "@/components/CallToAction";

const Platform = () => {
  return (
    <div className="min-h-screen theme-light bg-background text-foreground overflow-x-hidden">
      <Navbar light />
      <PlatformHero />
      <PipelineOverview />
      <ProductsGrid />
      <PlatformBenefits />
      <PlatformQuotes />
      <WhyHarvey />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Platform;

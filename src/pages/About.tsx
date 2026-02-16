import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHero from "@/components/about/AboutHero";
import AboutPhotos from "@/components/about/AboutPhotos";
import AboutMission from "@/components/about/AboutMission";
import AboutValues from "@/components/about/AboutValues";
import AboutNews from "@/components/about/AboutNews";
import AboutCareers from "@/components/about/AboutCareers";
import AboutBenefits from "@/components/about/AboutBenefits";

const About = () => {
  return (
    <div className="min-h-screen theme-light bg-background text-foreground">
      <Navbar light />
      <AboutHero />
      <AboutPhotos />
      <AboutMission />
      <AboutValues />
      <AboutNews />
      <AboutCareers />
      <AboutBenefits />
      <Footer />
    </div>
  );
};

export default About;

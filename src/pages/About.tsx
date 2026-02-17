import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHero from "@/components/about/AboutHero";
import AboutPhotos from "@/components/about/AboutPhotos";
import AboutMission from "@/components/about/AboutMission";

const About = () => {
  return (
    <div className="min-h-screen theme-light bg-background text-foreground">
      <Navbar light />
      <AboutHero />
      <AboutPhotos />
      <AboutMission />
      <Footer />
    </div>
  );
};

export default About;

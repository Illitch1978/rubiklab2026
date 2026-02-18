import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Platform = () => {
  return (
    <div className="min-h-screen theme-light bg-background text-foreground">
      <Navbar light />
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-muted-foreground text-sm">Coming soon</p>
      </div>
      <Footer />
    </div>
  );
};

export default Platform;

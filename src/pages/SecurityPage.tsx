import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SecurityHero from "@/components/security/SecurityHero";
import Security from "@/components/Security";
import SecurityTrustBlock from "@/components/security/SecurityTrustBlock";
import SecurityFAQ from "@/components/security/SecurityFAQ";
import SecurityOperationalBlock from "@/components/security/SecurityOperationalBlock";
import SecurityBlog from "@/components/security/SecurityBlog";

const SecurityPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* 1 — Dark: Hero */}
      <SecurityHero />

      {/* 2 — Light: Architectural Foundation */}
      <div className="theme-light bg-background text-foreground">
        <Security />
      </div>

      {/* 3 — Light (continued): Trust, Data Protection, Isolation */}
      <div className="theme-light bg-background text-foreground">
        <SecurityTrustBlock />
      </div>

      {/* 4 — Dark: FAQ */}
      <SecurityFAQ />

      {/* 5 — Light: Operational Resilience grid */}
      <div className="theme-light bg-background text-foreground">
        <SecurityOperationalBlock />
      </div>

      {/* 6 — Dark: Final CTA */}
      <SecurityBlog />

      <Footer />
    </div>
  );
};

export default SecurityPage;

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
    <div className="min-h-screen theme-light bg-background text-foreground">
      <Navbar light />

      {/* 1 — Dark: Hero */}
      <SecurityHero />

      {/* 2 — Light: Architectural Foundation */}
      <Security />

      {/* 3 — Light (continued): Trust, Data Protection, Isolation */}
      <SecurityTrustBlock />

      {/* 4 — Dark: FAQ */}
      <SecurityFAQ />

      {/* 5 — Light: Operational Resilience grid */}
      <SecurityOperationalBlock />

      {/* 6 — Dark: Final CTA */}
      <SecurityBlog />

      <Footer />
    </div>
  );
};

export default SecurityPage;

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SecurityHero from "@/components/security/SecurityHero";
import EnterpriseProtection from "@/components/security/EnterpriseProtection";
import SecurityCertifications from "@/components/security/SecurityCertifications";
import SecurityFundamental from "@/components/security/SecurityFundamental";
import SecurityFAQ from "@/components/security/SecurityFAQ";
import SecurityBlog from "@/components/security/SecurityBlog";
import Security from "@/components/Security";

const SecurityPage = () => {
  return (
    <div className="min-h-screen theme-light bg-background text-foreground">
      <Navbar light />
      <SecurityHero />
      <Security />
      <EnterpriseProtection />
      <SecurityCertifications />
      <SecurityFundamental />
      <SecurityFAQ />
      <SecurityBlog />
      <Footer />
    </div>
  );
};

export default SecurityPage;

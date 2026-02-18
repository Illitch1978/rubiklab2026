import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SecurityHero from "@/components/security/SecurityHero";
import EnterpriseProtection from "@/components/security/EnterpriseProtection";
import SecurityFundamental from "@/components/security/SecurityFundamental";
import SecurityBlog from "@/components/security/SecurityBlog";
import Security from "@/components/Security";
import SecurityClientIsolation from "@/components/security/SecurityClientIsolation";
import SecurityAI from "@/components/security/SecurityAI";
import SecurityOperations from "@/components/security/SecurityOperations";
import SecurityEnterprise from "@/components/security/SecurityEnterprise";

const SecurityPage = () => {
  return (
    <div className="min-h-screen theme-light bg-background text-foreground">
      <Navbar light />
      <SecurityHero />
      <Security />
      <EnterpriseProtection />
      <SecurityFundamental />
      <SecurityClientIsolation />
      <SecurityAI />
      <SecurityOperations />
      <SecurityEnterprise />
      <SecurityBlog />
      <Footer />
    </div>
  );
};

export default SecurityPage;

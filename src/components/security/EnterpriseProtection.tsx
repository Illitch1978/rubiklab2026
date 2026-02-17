import { Shield, Globe, Lock, Settings, FileCheck, Search } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Dedicated Security Expertise",
    description: "An in-house security team spanning infrastructure, product, and operations with 24/7 coverage and end-to-end monitoring.",
  },
  {
    icon: Globe,
    title: "Data Sovereignty and Control",
    description: "Retain full control over your data. Decide which data to upload, set retention policies, delete data anytime, and keep everything in-region.",
  },
  {
    icon: Lock,
    title: "No Model Training",
    description: "Your data stays yours. Inputs, outputs, and uploaded documents are never used to train underlying models.",
  },
  {
    icon: Settings,
    title: "Enterprise-grade Features",
    description: "Default controls that enterprise teams expect: SAML SSO, audit logs, IP allow-listing, data lifecycle management, and more.",
  },
  {
    icon: FileCheck,
    title: "Enforceable Commitments",
    description: "Binding terms on data protection, data access, incident response SLAs, and controls aligned with SOC 2, ISO, GDPR and other standards.",
  },
  {
    icon: Search,
    title: "Independently Tested",
    description: "Partnerships with top-tier security firms to perform in-depth audits, offering external validation of the highest standards of resilience.",
  },
];

const EnterpriseProtection = () => {
  return (
    <section className="py-20 px-8 md:px-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-16">
          Enterprise-Grade Protection
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, i) => (
            <div key={i} className="space-y-4">
              <feature.icon className="w-8 h-8 text-foreground" strokeWidth={1.5} />
              <h3 className="text-lg font-serif font-medium text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnterpriseProtection;

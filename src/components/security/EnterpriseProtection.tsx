import { Shield, Globe, Lock, Settings, FileCheck, Search } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Dedicated security expertise",
    description: "An in-house security team oversees infrastructure, application layers and monitoring across environments.",
  },
  {
    icon: Globe,
    title: "Data sovereignty and control",
    description: "Clients retain control of their data. Hosting configurations and regional requirements can be aligned to internal policy.",
  },
  {
    icon: Lock,
    title: "No model training on client data",
    description: "Client inputs, documents and outputs are not used to train external models.",
  },
  {
    icon: Settings,
    title: "Enterprise-grade features",
    description: "Single sign-on, granular permissions, audit trails and controlled lifecycle management are built in.",
  },
  {
    icon: FileCheck,
    title: "Enforceable commitments",
    description: "Controls and processes align with recognised standards including ISO frameworks and SOC principles.",
  },
  {
    icon: Search,
    title: "Independently tested",
    description: "Regular external testing validates system resilience and operational discipline.",
  },
];

const EnterpriseProtection = () => {
  return (
    <section className="py-20 px-8 md:px-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-16">
          Enterprise-grade protection
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

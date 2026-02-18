import { Shield } from "lucide-react";

const certifications = [
  { name: "Independent Penetration Testing", link: "#" },
  { name: "Cyber Essentials", link: "#" },
  { name: "ISO 27001 aligned", link: "#" },
  { name: "GDPR compliance", link: "#" },
  { name: "Regional data controls", link: "#" },
];

const Security = () => {
  return (
    <section className="py-24 md:py-32 px-8 md:px-16">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-serif text-foreground mb-6">
          Built on controlled foundations
        </h3>
        <p className="text-muted-foreground text-base md:text-lg max-w-3xl mb-4 leading-relaxed">
          Rubiklab is designed for organisations that require oversight, accountability and regulatory alignment.
        </p>
        <p className="text-muted-foreground text-base md:text-lg max-w-3xl mb-4 leading-relaxed">
          We support enterprise authentication, audit logging, lifecycle management and role-based access control across integrated systems.
        </p>
        <p className="text-secondary-foreground text-base md:text-lg max-w-3xl mb-12 leading-relaxed font-medium">
          Security is embedded into ingestion, processing and output. Not layered on afterwards.
        </p>
        <a
          href="/security"
          className="text-sm text-foreground underline underline-offset-4 hover:text-accent transition-colors mb-16 inline-block"
        >
          Learn about security
        </a>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-12">
          {certifications.map((cert, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-3 p-6 border border-border rounded-lg hover:border-foreground/30 transition-colors"
            >
              <Shield className="w-8 h-8 text-muted-foreground" />
              <p className="text-xs font-medium text-foreground text-center leading-snug">{cert.name}</p>
              <a
                href={cert.link}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                Details
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Security;

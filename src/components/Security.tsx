import { Shield } from "lucide-react";

const certifications = [
  { name: "SOC2 II", link: "#" },
  { name: "CCPA", link: "#" },
  { name: "ISO 27001", link: "#" },
  { name: "GDPR", link: "#" },
];

const Security = () => {
  return (
    <section className="py-24 md:py-32 px-8 md:px-16 border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-2xl md:text-3xl font-serif text-foreground mb-6">
          Enterprise-grade security and controls
        </h3>
        <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
          Rubiklab meets the highest industry standards for security and compliance. We include all default controls that enterprise teams expect: SAML SSO, audit logs, IP allow-listing, data lifecycle management, and more.
        </p>
        <a
          href="#"
          className="text-sm text-foreground underline underline-offset-4 hover:text-accent transition-colors mb-16 inline-block"
        >
          More About Security
        </a>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {certifications.map((cert, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-3 p-6 border border-border rounded-lg hover:border-foreground/30 transition-colors"
            >
              <Shield className="w-8 h-8 text-muted-foreground" />
              <p className="text-sm font-medium text-foreground">{cert.name}</p>
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

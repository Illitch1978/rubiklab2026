import { Shield } from "lucide-react";

const certifications = [
  { name: "Pen Test A", link: "#" },
  { name: "Cyber Essentials", link: "#" },
  { name: "CCPA", link: "#" },
  { name: "ISO 27001", link: "#" },
  { name: "GDPR", link: "#" },
];

const Security = () => {
  return (
    <section className="py-24 md:py-32 px-8 md:px-16 border-t border-border bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-2xl md:text-3xl font-serif text-stone-800 mb-6">
          Built on governed infrastructure
        </h3>
        <p className="text-stone-600 text-base md:text-lg max-w-3xl mx-auto mb-4 leading-relaxed">
          Rubiklab is engineered for organisations that require control, transparency, and compliance.
        </p>
        <p className="text-stone-600 text-base md:text-lg max-w-3xl mx-auto mb-4 leading-relaxed">
          We support enterprise authentication, audit logging, lifecycle management, role-based access controls, and secure integrations across your technology stack.
        </p>
        <p className="text-stone-700 text-base md:text-lg max-w-3xl mx-auto mb-12 leading-relaxed font-medium">
          Our approach ensures that intelligence is not only powerful, but defensible.
        </p>
        <a
          href="/security"
          className="text-sm text-stone-700 underline underline-offset-4 hover:text-stone-900 transition-colors mb-16 inline-block"
        >
          Learn about Security
        </a>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-12">
          {certifications.map((cert, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-3 p-6 border border-stone-300 rounded-lg hover:border-stone-500 transition-colors"
            >
              <Shield className="w-8 h-8 text-stone-500" />
              <p className="text-sm font-medium text-stone-700">{cert.name}</p>
              <a
                href={cert.link}
                className="text-xs text-stone-500 hover:text-stone-800 transition-colors"
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

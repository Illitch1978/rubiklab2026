const features = [
  {
    title: "ISO 27001 certification",
  },
  {
    title: "Grade A penetration testing certification",
  },
  {
    title: "Regular third-party security audits",
  },
  {
    title: "Continuous compliance monitoring",
  },
];

const EnterpriseProtection = () => {
  return (
    <section className="py-20 px-8 md:px-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6">
          Tested and certified
        </h2>
        <p className="text-muted-foreground text-base md:text-lg max-w-3xl mb-8 leading-relaxed">
          Security claims are only meaningful when validated.
        </p>
        <p className="text-muted-foreground text-base md:text-lg max-w-3xl mb-4 leading-relaxed">
          Rubiklab maintains:
        </p>
        <ul className="text-muted-foreground text-base md:text-lg max-w-3xl mb-8 leading-relaxed space-y-2 list-none">
          {features.map((f, i) => (
            <li key={i}>• {f.title}</li>
          ))}
        </ul>
        <p className="text-muted-foreground text-base md:text-lg max-w-3xl mb-4 leading-relaxed">
          Our Information Security Management System includes documented risk assessments, independent audits and structured improvement cycles.
        </p>
        <p className="text-secondary-foreground text-base md:text-lg max-w-3xl font-medium leading-relaxed">
          Controls are tested, reviewed and strengthened continuously.
        </p>
      </div>
    </section>
  );
};

export default EnterpriseProtection;

const SecurityFundamental = () => {
  return (
    <section className="py-24 px-8 md:px-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6">
          Data protection by design
        </h2>
        <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8 max-w-3xl">
          Privacy is embedded into our development lifecycle, not added afterwards.
        </p>
        <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-4 max-w-3xl">
          We maintain compliance with:
        </p>
        <ul className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8 max-w-3xl space-y-2 list-none">
          <li>• GDPR</li>
          <li>• UK Data Protection Act 2018</li>
          <li>• CCPA</li>
          <li>• Industry-specific regulatory requirements</li>
        </ul>
        <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-2 max-w-3xl">
          Data processing follows strict role definitions.
        </p>
        <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-2 max-w-3xl">
          When acting as a processor, we operate solely under documented controller instructions.
        </p>
        <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8 max-w-3xl">
          When acting as a controller, we implement purpose limitation, minimisation and documented privacy impact assessments.
        </p>
        <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-4 max-w-3xl">
          International transfers follow recognised legal safeguards including Standard Contractual Clauses.
        </p>
        <p className="text-secondary-foreground text-base md:text-lg leading-relaxed max-w-3xl font-medium">
          Clients retain clarity over where data is stored and processed.
        </p>
      </div>
    </section>
  );
};

export default SecurityFundamental;

const SecurityOperations = () => {
  return (
    <>
      {/* Section 6 – Monitoring and incident response */}
      <section className="py-24 px-8 md:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6">
            Prepared for the unexpected
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8 max-w-3xl">
            Security is continuously monitored through layered detection systems.
          </p>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-4 max-w-3xl">
            Monitoring includes:
          </p>
          <ul className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8 max-w-3xl space-y-2 list-none">
            <li>• Real-time threat detection</li>
            <li>• Behavioural analysis</li>
            <li>• Network monitoring</li>
            <li>• Automated alerting</li>
          </ul>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-4 max-w-3xl">
            Our incident response framework includes:
          </p>
          <ul className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8 max-w-3xl space-y-2 list-none">
            <li>• Immediate containment</li>
            <li>• Threat eradication</li>
            <li>• Recovery procedures with defined RTO and RPO</li>
            <li>• Structured post-incident analysis</li>
          </ul>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-4 max-w-3xl">
            Business continuity planning ensures operational resilience through redundancy and geographic safeguards.
          </p>
          <p className="text-secondary-foreground text-base md:text-lg leading-relaxed max-w-3xl font-medium">
            Every incident strengthens the system.
          </p>
        </div>
      </section>

      {/* Section 7 – Access control and culture */}
      <section className="py-24 px-8 md:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6">
            Security is reinforced by people
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8 max-w-3xl">
            Protection is not only technical. It is procedural.
          </p>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-4 max-w-3xl">
            We enforce:
          </p>
          <ul className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8 max-w-3xl space-y-2 list-none">
            <li>• Role-based access control</li>
            <li>• Multi-factor authentication</li>
            <li>• Structured access reviews</li>
            <li>• Secure device management</li>
            <li>• Mandatory security training</li>
          </ul>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-4 max-w-3xl">
            Employees undergo continuous security awareness programmes.
          </p>
          <p className="text-secondary-foreground text-base md:text-lg leading-relaxed max-w-3xl font-medium">
            Human vigilance complements technical safeguards.
          </p>
        </div>
      </section>
    </>
  );
};

export default SecurityOperations;

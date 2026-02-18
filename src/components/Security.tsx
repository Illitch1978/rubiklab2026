const Security = () => {
  return (
    <section className="py-24 md:py-32 px-8 md:px-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6">
          Security is architectural
        </h2>
        <p className="text-muted-foreground text-base md:text-lg max-w-3xl mb-4 leading-relaxed">
          Rubiklab is engineered for organisations that require control, transparency and defensibility.
        </p>
        <p className="text-muted-foreground text-base md:text-lg max-w-3xl mb-8 leading-relaxed">
          Our platform is built on enterprise-grade cloud architecture using Google Cloud Platform, with primary operations hosted in Frankfurt to support EU data residency requirements.
        </p>
        <p className="text-muted-foreground text-base md:text-lg max-w-3xl mb-4 leading-relaxed">
          Security is implemented across every layer:
        </p>
        <ul className="text-muted-foreground text-base md:text-lg max-w-3xl mb-8 leading-relaxed space-y-2 list-none">
          <li>• AES-256 encryption for data at rest</li>
          <li>• TLS 1.2+ encryption for data in transit</li>
          <li>• Role-based access control and multi-factor authentication</li>
          <li>• Continuous monitoring and threat detection</li>
          <li>• Automated backup and integrity verification</li>
        </ul>
        <p className="text-secondary-foreground text-base md:text-lg max-w-3xl font-medium leading-relaxed">
          Protection begins at ingestion and continues throughout the full data lifecycle.
        </p>
      </div>
    </section>
  );
};

export default Security;

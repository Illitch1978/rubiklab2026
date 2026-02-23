const Security = () => {
  return (
    <section className="pt-14 md:pt-[56px] pb-12 md:pb-[48px] px-8 md:px-16">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
          Security is architectural
        </h2>

        <p className="text-muted-foreground text-base md:text-lg leading-[1.5] mb-3">
          Rubiklab is engineered for organisations that require control, transparency and defensibility.
        </p>
        <p className="text-muted-foreground text-base md:text-lg leading-[1.5] mb-3">
          Our platform is built on enterprise-grade cloud architecture using Google Cloud Platform, with primary operations hosted in Frankfurt to support EU data residency requirements.
        </p>
        <p className="text-muted-foreground text-base md:text-lg leading-[1.5] mb-3">
          Security is implemented across every layer of the platform, from ingestion through to output delivery.
        </p>

        <ul className="text-muted-foreground text-base md:text-lg space-y-[8px] list-none mt-3 mb-4 leading-[1.45]">
          <li>• AES-256 encryption for data at rest</li>
          <li>• TLS 1.2+ encryption for data in transit</li>
          <li>• Role-based access control and multi-factor authentication</li>
          <li>• Continuous monitoring and threat detection</li>
          <li>• Automated backup and integrity verification</li>
        </ul>

        <p className="text-foreground text-base md:text-lg font-medium leading-[1.5]">
          Protection begins at ingestion and continues throughout the full data lifecycle.
        </p>
      </div>
    </section>
  );
};

export default Security;

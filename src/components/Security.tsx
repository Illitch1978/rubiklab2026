const Security = () => {
  return (
    <section className="py-20 md:py-[80px] px-8 md:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6 max-w-[680px]">
          Security is architectural
        </h2>

        <p className="text-muted-foreground text-base md:text-lg max-w-[680px] leading-[1.5] mb-4">
          Rubiklab is engineered for organisations that require control, transparency and defensibility.
        </p>
        <p className="text-muted-foreground text-base md:text-lg max-w-[680px] leading-[1.5] mb-4">
          Our platform is built on enterprise-grade cloud architecture using Google Cloud Platform, with primary operations hosted in Frankfurt to support EU data residency requirements.
        </p>
        <p className="text-muted-foreground text-base md:text-lg max-w-[680px] leading-[1.5] mb-4">
          Security is implemented across every layer of the platform, from ingestion through to output delivery.
        </p>

        <ul className="text-muted-foreground text-base md:text-lg max-w-[680px] space-y-2 list-none mt-4 mb-5 leading-[1.45]">
          <li>• AES-256 encryption for data at rest</li>
          <li>• TLS 1.2+ encryption for data in transit</li>
          <li>• Role-based access control and multi-factor authentication</li>
          <li>• Continuous monitoring and threat detection</li>
          <li>• Automated backup and integrity verification</li>
        </ul>

        <p className="text-foreground text-base md:text-lg max-w-[680px] font-medium leading-[1.5]">
          Protection begins at ingestion and continues throughout the full data lifecycle.
        </p>
      </div>
    </section>
  );
};

export default Security;

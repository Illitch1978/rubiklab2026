const useCases = [
  "Due Diligence", "Fund Formation", "Contract Analysis", "Complex Workflows",
  "Document Storage", "Legal Research", "Deal Management",
];

const PlatformIntro = () => {
  return (
    <section className="py-24 md:py-32 px-8 md:px-16">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif leading-snug text-foreground">
          <span className="font-semibold">Harvey is AI designed for legal and professional services.</span>{" "}
          <span className="text-muted-foreground">
            Advance your expertise on a secure platform that lets you focus on high-value work.
          </span>
        </h2>
      </div>

      {/* Use case scrolling tags */}
      <div className="overflow-hidden mb-12">
        <div className="text-center mb-6">
          <p className="text-sm text-muted-foreground tracking-widest uppercase">
            The top legal teams use Harvey for
          </p>
        </div>
        <div className="flex items-center overflow-hidden">
          <div className="flex items-center gap-4 use-case-scroll whitespace-nowrap">
            {[...useCases, ...useCases].map((useCase, i) => (
              <span
                key={i}
                className="px-6 py-3 border border-border text-sm text-secondary-foreground rounded-full flex-shrink-0 hover:border-foreground/40 transition-colors"
              >
                {useCase}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center">
        <a
          href="#"
          className="text-sm text-foreground underline underline-offset-4 hover:text-accent transition-colors"
        >
          Explore Platform
        </a>
      </div>
    </section>
  );
};

export default PlatformIntro;

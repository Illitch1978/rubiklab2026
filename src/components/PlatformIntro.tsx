const capabilities = [
  "Knowledge Management", "Research Intelligence", "Multi-source Listening",
  "Signal Detection", "Expert Mapping", "Enterprise Search",
  "Content Governance", "Thought Leadership", "Data Monitoring",
  "Workflow Automation", "Social Listening",
];

const PlatformIntro = () => {
  return (
    <>
      {/* Section 1: Platform positioning */}
      <section className="py-24 md:py-32 px-8 md:px-16">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif leading-snug text-foreground">
            <span className="font-semibold">A knowledge intelligence platform for complex organisations.</span>
          </h2>
          <div className="mt-8 max-w-3xl mx-auto space-y-4">
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              Rubiklab transforms scattered documents, research, conversations, and external data into a structured, governed knowledge layer.
            </p>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              We ingest diverse sources, enforce rigorous tagging and validation, and enable secure AI and agent-driven workflows that operate across your existing systems.
            </p>
            <p className="text-secondary-foreground text-base md:text-lg leading-relaxed font-medium">
              This is not a chatbot layered over data. It is engineered infrastructure designed to support consequential decisions.
            </p>
          </div>
          <div className="mt-10">
            <a
              href="/platform"
              className="text-sm text-foreground underline underline-offset-4 hover:text-accent transition-colors"
            >
              Explore the Platform
            </a>
          </div>
        </div>
      </section>

      {/* Section 2: What teams use Rubiklab for */}
      <section className="py-24 md:py-32 px-8 md:px-16 border-t border-border">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-serif text-foreground mb-12">
            Built for environments where signal matters
          </h3>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {capabilities.map((cap, i) => (
              <span
                key={i}
                className="px-6 py-3 border border-border text-sm text-secondary-foreground rounded-full hover:border-foreground/40 transition-colors"
              >
                {cap}
              </span>
            ))}
          </div>

          <p className="text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            From law firms and research agencies to regulated enterprises and associations, Rubiklab structures knowledge at scale.
          </p>
        </div>
      </section>
    </>
  );
};

export default PlatformIntro;

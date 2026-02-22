const values = [
  {
    number: "01",
    title: "Accelerate without compromise",
    description:
      "Streamline research, drafting, and review into a single flow. Your teams stay focused on delivering world-class work — faster.",
  },
  {
    number: "02",
    title: "Collaborate with confidence",
    description:
      "One platform for firms and corporations to collaborate securely across every document, workflow, and communication channel.",
  },
  {
    number: "03",
    title: "Unlock institutional knowledge",
    description:
      "Your documents, data, and trusted third-party sources — unified in one governed environment built for precision.",
  },
];

const WhyHarvey = () => {
  return (
    <section className="py-24 md:py-32 px-8 md:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-16">
          Why the top performers choose Rubiklab
        </h2>

        <div className="grid md:grid-cols-3 gap-px bg-border rounded-xl overflow-hidden border border-border">
          {values.map((v, i) => (
            <div
              key={i}
              className="bg-card p-10 flex flex-col justify-between min-h-[280px] group hover:bg-secondary/50 transition-colors"
            >
              <span className="text-xs font-mono text-muted-foreground/50 tracking-widest">
                {v.number}
              </span>
              <div className="mt-auto">
                <h3 className="text-xl font-serif font-semibold text-foreground mb-4 leading-snug">
                  {v.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {v.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyHarvey;

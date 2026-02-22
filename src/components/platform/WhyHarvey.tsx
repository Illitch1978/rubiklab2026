const points = [
  {
    title: "Method before model",
    text: "Every project begins with preparation. Data is classified, structured and validated before analysis begins. Your frameworks, taxonomies and internal standards shape the work. Studio respects your methodology rather than replacing it.",
  },
  {
    title: "Diverse signal",
    text: "Internal archives, live external sources, surveys and market data sit in one governed environment. Teams can compare sentiment shifts with tracker results, campaign performance and historical insight in a single, connected view.",
  },
  {
    title: "Depth without distortion",
    text: "Reports follow your structure, your level of rigour and your tone of voice. Outputs are long form when needed, branded correctly, aligned to client expectations and built with traceable evidence behind every claim.",
  },
  {
    title: "Workflow continuity",
    text: "Studio integrates into how teams already operate. Multiple tasks can run in parallel while you explore data. Analysis, comparisons, summaries and structured outputs evolve together inside one environment rather than across spreadsheets and slide decks.",
  },
  {
    title: "Transparent reasoning",
    text: "Every conclusion is linked to prepared data and visible processing steps. Confidence indicators are explicit. Assumptions can be reviewed. Sources can be inspected before anything is shared externally.",
  },
  {
    title: "Orchestrated execution",
    text: "Studio enables structured, multi-step work. Themes can be investigated, trends compared, campaign logic drafted and outputs assembled in sequence. Teams guide the process while the system handles the heavy lifting.",
  },
];

const WhyHarvey = () => {
  return (
    <section className="py-24 md:py-32 px-8 md:px-16 border-t border-border">
      <div className="max-w-[1120px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-16">
          Why Studio is different
        </h2>
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
          {points.map((p, i) => (
            <div key={i}>
              <h3 className="text-lg font-serif font-semibold text-foreground mb-2">
                {p.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {p.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyHarvey;

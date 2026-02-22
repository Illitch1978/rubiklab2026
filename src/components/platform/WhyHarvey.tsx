const points = [
  {
    title: "Method before model",
    text: "AI interacts only with prepared, classified data. Deterministic pipelines come first.",
  },
  {
    title: "Diverse signal, not narrow datasets",
    text: "Legacy knowledge and live external data coexist in one governed environment.",
  },
  {
    title: "Workflow alignment",
    text: "Studio fits how teams already operate. It does not force behavioural change.",
  },
  {
    title: "Transparent reasoning",
    text: "Outputs can be traced, reviewed and challenged before distribution.",
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

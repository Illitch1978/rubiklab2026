const points = [
  {
    number: "1",
    title: "Your methodology, embedded",
    text: "Studio works within your existing structure. Your taxonomy, review process and brand voice are part of the workflow. Reports follow your format. Outputs reflect your standards.",
  },
  {
    number: "2",
    title: "From exploration to execution",
    text: "Track a sentiment shift. Compare it with survey data. Validate against historical reports. Turn it into a campaign narrative. All within one environment, with confidence metrics behind every claim.",
  },
  {
    number: "3",
    title: "Depth without fragmentation",
    text: "Legacy knowledge and live campaigns sit together. Historical insight strengthens current analysis automatically.",
  },
  {
    number: "4",
    title: "Confident before distribution",
    text: "Every output links back to prepared data and visible processing steps. Assumptions can be reviewed. Reasoning can be challenged.",
  },
  {
    number: "5",
    title: "Parallel investigations",
    text: "Launch multiple lines of inquiry while exploring the data. Compare regions, test hypotheses, generate segments and assemble the final narrative in Assisted Deck without switching tools.",
  },
  {
    number: "6",
    title: "Work that compounds",
    text: "As your library grows, Studio becomes more valuable. Institutional knowledge accumulates instead of disappearing into folders.",
  },
];

const WhyHarvey = () => {
  return (
    <section className="py-20 md:py-28 px-8 md:px-16 border-t border-border">
      <div className="max-w-[1120px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-14">
          How Studio changes the work
        </h2>
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
          {points.map((p, i) => (
            <div key={i}>
              <h3 className="text-lg font-serif font-semibold text-foreground mb-2">
                <span className="text-muted-foreground mr-2">{p.number}.</span>
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

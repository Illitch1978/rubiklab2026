const points = [
  {
    number: "1",
    title: "Your methodology, embedded",
    text: "Studio does not overwrite how you think. It embeds your structure, your taxonomy, your review process and your brand voice directly into the workflow. Reports follow your format. Outputs reflect your tone. Your team remains in control of how conclusions are shaped and communicated.",
  },
  {
    number: "2",
    title: "From exploration to execution",
    text: "You can identify a sentiment shift, compare it with your survey tracker, validate it against historical reports and turn it into a campaign narrative in one environment. Confidence metrics and traceable reasoning sit behind every claim. Nothing leaves the room without being grounded.",
  },
  {
    number: "3",
    title: "Multiple threads, one outcome",
    text: "Launch parallel investigations while you explore the data. Compare regions, test hypotheses, build segments, draft insights. Studio keeps everything structured and connected. You assemble the final story in Assisted Deck without jumping between Excel and PowerPoint.",
  },
  {
    number: "4",
    title: "Depth without fragmentation",
    text: "Legacy reports, live campaigns and external signals live together. Historical knowledge informs current work automatically. Teams stop recreating context and start building on it.",
  },
  {
    number: "5",
    title: "Confidence before distribution",
    text: "Every output is linked to prepared data and visible processing steps. Assumptions can be reviewed. Reasoning can be challenged. Decisions are made with clarity rather than speed alone.",
  },
  {
    number: "6",
    title: "Work that scales with you",
    text: "As your library grows, Studio becomes more valuable. Past thinking strengthens present analysis. Institutional knowledge compounds instead of disappearing into folders.",
  },
];

const WhyHarvey = () => {
  return (
    <section className="py-24 md:py-32 px-8 md:px-16 border-t border-border">
      <div className="max-w-[1120px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-16">
          How Studio changes the work
        </h2>
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
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

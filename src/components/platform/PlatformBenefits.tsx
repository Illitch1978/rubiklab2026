const benefits = [
  {
    title: "Research in days, not weeks",
    text: "Studio compresses complex research cycles. What once required weeks of consolidation, validation and reporting can now be completed in a single working day.",
  },
  {
    title: "No more summaries of summaries",
    text: "Insights are built from prepared, classified data. Outputs are traceable to original sources. No recursive summarisation. No guesswork layered on guesswork.",
  },
  {
    title: "Past work becomes active knowledge",
    text: "Import legacy reports, studies and internal archives. Add live campaigns and new signals. Studio connects historical context with current data in one continuous environment.",
  },
  {
    title: "Decisions backed by reasoning",
    text: "Every conclusion is linked to prepared data and transparent processing steps. You can inspect, challenge and refine outputs before they leave your organisation.",
  },
];

const PlatformBenefits = () => {
  return (
    <section className="py-24 md:py-32 px-8 md:px-16 border-t border-border">
      <div className="max-w-[1120px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-16">
          What changes when teams use Studio
        </h2>
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
          {benefits.map((b, i) => (
            <div key={i}>
              <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                {b.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {b.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformBenefits;

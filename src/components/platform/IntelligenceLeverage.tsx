const pillars = [
  {
    title: "Institutional memory",
    text: "Past work compounds. Every report, study and campaign enriches the next. Knowledge grows with your organisation rather than resetting with each project.",
  },
  {
    title: "Structured execution",
    text: "Multi-step research, parallel investigations and final assembly happen in one governed environment. No jumping between tools.",
  },
  {
    title: "Defensible decisions",
    text: "Every conclusion is traceable. Sources are visible. Reasoning can be inspected and challenged before anything is shared externally.",
  },
];

const IntelligenceLeverage = () => {
  return (
    <section className="py-24 md:py-32 px-8 md:px-16" style={{ background: 'hsl(20, 10%, 6%)', color: 'hsl(40, 30%, 92%)', borderTop: '1px solid hsl(20, 10%, 20%)' }}>
      <div className="max-w-[1120px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif mb-6">
          Intelligence becomes leverage
        </h2>
        <p className="text-base md:text-lg max-w-2xl leading-relaxed mb-16" style={{ color: 'hsl(30 10% 55%)' }}>
          Studio turns accumulated knowledge into a strategic asset.
          <br />
          Not a repository. Not a dashboard.
          <br />
          A working environment where structured data, disciplined reasoning and execution meet.
        </p>
        <div className="grid md:grid-cols-3 gap-12">
          {pillars.map((p, i) => (
            <div key={i}>
              <h3 className="text-lg font-serif font-semibold mb-3">{p.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'hsl(30 10% 55%)' }}>{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntelligenceLeverage;

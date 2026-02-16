const stats = [
  { value: "20+", label: "Average hours saved per month" },
  { value: "100,000+", label: "Professionals using Harvey" },
  { value: "1,000+", label: "Law firms and in-house legal teams" },
  { value: "60", label: "Countries Harvey is used in" },
  { value: "50+", label: "AmLaw 100 firms using Harvey" },
];

const Stats = () => {
  return (
    <section className="py-24 md:py-32 px-8 md:px-16 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-serif text-foreground text-center mb-16">
          Helping teams stay focused and see measurable results
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-4">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-2">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground leading-snug">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

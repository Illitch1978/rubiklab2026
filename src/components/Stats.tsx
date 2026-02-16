const stats = [
  { value: "Millions", label: "of documents structured" },
  { value: "Thousands", label: "of sources ingested" },
  { value: "Hundreds", label: "of workflows activated" },
  { value: "60+", label: "countries supported" },
  { value: "Am Law 100", label: "and global enterprises onboarded" },
];

const Stats = () => {
  return (
    <section className="py-24 md:py-32 px-8 md:px-16 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-serif text-foreground text-center mb-16">
          Intelligence at scale
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-4">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-2">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground leading-snug">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
        <p className="text-sm text-muted-foreground text-center mt-12 max-w-lg mx-auto">
          Structured knowledge becomes more valuable as it grows. Rubiklab is built to scale with you.
        </p>
      </div>
    </section>
  );
};

export default Stats;

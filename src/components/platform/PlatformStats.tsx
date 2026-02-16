const stats = [
  { value: "200K+", label: "queries run per day" },
  { value: "1.3M+", label: "files processed per day" },
  { value: "92%", label: "average monthly usage reported" },
];

const PlatformStats = () => {
  return (
    <section className="py-24 md:py-32 px-8 md:px-16 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-serif text-foreground text-center mb-16">
          Delivering value at scale
        </h3>
        <div className="grid grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-5xl md:text-6xl font-serif font-semibold text-foreground mb-3">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformStats;

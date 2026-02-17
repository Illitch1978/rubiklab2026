const stats = [
  { value: "650+", label: "Associates" },
  { value: "8", label: "Markets where we are currently hiring" },
  { value: "TIME100", label: "Most Influential Companies" },
];

const AboutHero = () => {
  return (
    <section className="pt-32 pb-20 px-8 md:px-16">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm font-medium text-foreground mb-6 tracking-wide">
          Company
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-[6.5rem] font-serif font-medium leading-[0.95] mb-20 text-foreground tracking-tight max-w-4xl">
          We're helping the world's best teams transform the way they work
        </h1>

        <div className="grid grid-cols-3 gap-8 pt-12">
          {stats.map((stat, i) => (
            <div key={i}>
              <p className="text-4xl md:text-6xl font-serif font-semibold text-foreground mb-2">
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

export default AboutHero;

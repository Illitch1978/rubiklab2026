const newsItems = [
  {
    source: "TIME",
    headline: "Named one of the Time100 Most Influential Companies",
    link: "#",
  },
  {
    source: "LinkedIn",
    headline: "Named a LinkedIn Top 50 Startup of 2025",
    link: "#",
  },
  {
    source: "CNBC",
    headline: "On the Disruptor 50 List of The Most Innovative AI Companies",
    link: "#",
  },
];

const AboutNews = () => {
  return (
    <section className="py-24 md:py-32 px-8 md:px-16 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-serif text-foreground mb-12">
          In the News
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {newsItems.map((item, i) => (
            <a
              key={i}
              href={item.link}
              className="group p-8 rounded-xl border border-border hover:border-foreground/20 transition-colors"
            >
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4">
                {item.source}
              </p>
              <p className="text-foreground font-serif text-lg leading-snug mb-6">
                {item.headline}
              </p>
              <span className="text-sm text-foreground group-hover:text-accent transition-colors">
                Read More →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutNews;

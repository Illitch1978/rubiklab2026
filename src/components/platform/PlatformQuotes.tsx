const quotes = [
  "We used to spend most of our time consolidating material. Now we spend it thinking.",
  "Bringing ten years of reports into Studio changed how we run new campaigns.",
  "For the first time, our outputs are both faster and more defensible.",
];

const PlatformQuotes = () => {
  return (
    <section className="py-24 md:py-32 px-8 md:px-16 border-t border-border">
      <div className="max-w-[1120px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-16">
          What teams tell us
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {quotes.map((q, i) => (
            <blockquote
              key={i}
              className="text-lg font-serif text-foreground leading-relaxed border-l-2 border-foreground/15 pl-6"
            >
              "{q}"
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformQuotes;

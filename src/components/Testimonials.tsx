const testimonials = [
  {
    quote:
      "The legal industry is evolving rapidly. Rubiklab gives us structured intelligence and the confidence to act with precision.",
    name: "Dr. Claudia Junker",
    title: "General Counsel",
    company: "Deutsche Telekom AG",
    hasStory: true,
  },
  {
    quote:
      "What we have built with Rubiklab is not just AI adoption. It is a disciplined knowledge architecture across the firm.",
    name: "Rich Robbins",
    title: "Director of Applied Artificial Intelligence",
    company: "Reed Smith",
    hasStory: false,
  },
  {
    quote:
      "Rubiklab has become part of our operating infrastructure. It has changed how we manage and activate insight.",
    name: "Marie-Cécile Martin",
    title: "Head of Legal Operations",
    company: "Syngenta Group",
    hasStory: true,
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 md:py-32 px-8 md:px-16 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-serif text-foreground mb-4 text-center">
          Trusted where decisions carry weight
        </h3>
        <p className="text-muted-foreground text-base md:text-lg text-center max-w-2xl mx-auto mb-16 leading-relaxed">
          Leading organisations rely on Rubiklab to structure knowledge, strengthen governance, and improve decision quality.
        </p>
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {testimonials.map((t, i) => (
            <div key={i} className="flex flex-col justify-between">
              <div>
                <div className="w-16 h-16 rounded-full bg-secondary mb-6" />
                <blockquote className="text-foreground text-lg md:text-xl font-serif leading-relaxed mb-6">
                  "{t.quote}"
                </blockquote>
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.title}</p>
                <p className="text-sm text-muted-foreground">{t.company}</p>
                {t.hasStory && (
                  <a
                    href="#"
                    className="text-sm text-foreground mt-3 inline-block hover:text-accent transition-colors"
                  >
                    Customer Story →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

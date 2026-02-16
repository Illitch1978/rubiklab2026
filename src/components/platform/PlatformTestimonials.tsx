const testimonials = [
  {
    quote:
      "When it comes to AI and technology, it's all about learning by doing. You won't figure everything out right away, but the more you engage with it, the more opportunities you'll see.",
    name: "Thomas Laubert",
    title: "General Counsel",
    company: "Bayer",
  },
  {
    quote:
      "Harvey is a tremendous tool that fits perfectly with our culture and our way of approaching legal thinking and legal delivery.",
    name: "Omar Puertas-Alvarez",
    title: "Partner",
    company: "Cuatrecasas",
  },
  {
    quote:
      "What we have seen at Reed Smith with Harvey is by far the most successful firm technology adoption story I have ever been a part of.",
    name: "Rich Robbins",
    title: "Director of Applied Artificial Intelligence",
    company: "Reed Smith",
  },
];

const PlatformTestimonials = () => {
  return (
    <section className="py-24 md:py-32 px-8 md:px-16 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <div key={i} className="flex flex-col justify-between">
              <div>
                <div className="w-16 h-16 rounded-full bg-secondary mb-6" />
                <blockquote className="text-foreground text-lg font-serif leading-relaxed mb-6">
                  "{t.quote}"
                </blockquote>
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.title}</p>
                <p className="text-sm text-muted-foreground">{t.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformTestimonials;

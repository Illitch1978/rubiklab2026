const testimonials = [
  {
    quote:
      "This is a fantastic testament to your technical capabilities and hard work. We have gone up against two billion dollar companies with huge resources and come out on top!",
    name: "David Kekwick",
    title: "Innovation Director / Co-Founder",
    company: "LexHR",
  },
  {
    quote:
      "I want to take this opportunity to thank you all for your diligence and tireless support in helping us get to this point. This is truly revolutionary for our industry, and I can only see the power of what we have built together expanding moving forward.",
    name: "Rachel Blake",
    title: "Manager Global Insights",
    company: "IFPA",
  },
  {
    quote:
      "Meridian West have been collaborating with Rubiklab for well over a year now. It is a real delight working with the Rubiklab team. They have deep expertise in research and AI. They are responsive, creative, and entrepreneurial. I would highly recommend them.",
    name: "Ben Kent",
    title: "Founder Director",
    company: "Meridian West",
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
              <blockquote className="text-foreground text-lg md:text-xl font-serif leading-relaxed mb-6">
                "{t.quote}"
              </blockquote>
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

export default Testimonials;

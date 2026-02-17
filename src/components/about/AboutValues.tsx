import { Target, Minimize2, Flame } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Decisiveness",
    description:
      "We value deliberate action over overanalysis. When you're moving as fast as we need to, we check the weather, move forward, and avoid wasting time on items that are not mission-critical.",
  },
  {
    icon: Minimize2,
    title: "Simplicity",
    description:
      "The technology that powers our product is complex, as are our clients' challenges. But our solutions can't be. We believe complexity appreciates and simplicity scales.",
  },
  {
    icon: Flame,
    title: "Job's Not Finished",
    description:
      "We recognize there is always more we can do to solve our clients' biggest challenges. Our team is comprised of people who want to be the best at what they do and are never satisfied with the status quo.",
  },
];

const AboutValues = () => {
  return (
    <section className="py-24 md:py-32 px-8 md:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
          Our Values
        </h2>
        <p className="text-muted-foreground text-base md:text-lg max-w-2xl mb-16 leading-relaxed">
          We want Harvey's values to be a commitment to our customers, a testament to our ambition, and a leading indicator to our candidates and employees on the culture we aim to build.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <div
              key={i}
              className="p-8 rounded-xl bg-card border border-border hover:border-foreground/20 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-6">
                <v.icon className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                {v.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {v.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutValues;

import { Zap, Users, BookOpen } from "lucide-react";

const values = [
  {
    icon: Zap,
    title: "Move fast, stay sharp",
    description:
      "Streamline your entire process, from researching, drafting to reviewing. Your teams will stay focused on delivering world-class work.",
  },
  {
    icon: Users,
    title: "Collaborate with confidence",
    description:
      "One platform for firms and corporations to collaborate securely across every document, workflow, and email. Connect internally and externally without sacrificing control.",
  },
  {
    icon: BookOpen,
    title: "Put your knowledge to work",
    description:
      "Your institutional knowledge, from documents and data to trusted third-party sources, unified in one environment built for precision.",
  },
];

const WhyHarvey = () => {
  return (
    <section className="py-24 md:py-32 px-8 md:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-16">
          Why the top performers choose Rubiklab
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <div
              key={i}
              className="relative p-8 rounded-xl bg-card border border-border overflow-hidden group hover:border-foreground/20 transition-colors"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
              <div className="relative z-10">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyHarvey;

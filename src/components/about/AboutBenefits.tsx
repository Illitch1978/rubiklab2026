import { Heart, DollarSign, Baby, Clock, BookOpen, Brain, Utensils, Award } from "lucide-react";

const benefits = [
  { icon: Heart, label: "Comprehensive health, dental, and vision insurance" },
  { icon: DollarSign, label: "Company sponsored retirement plan" },
  { icon: Baby, label: "18 weeks paid parental leave" },
  { icon: Clock, label: "Flexible time off" },
  { icon: BookOpen, label: "Annual learning & development stipend" },
  { icon: Brain, label: "Mental health support" },
  { icon: Utensils, label: "Daily lunch in-office" },
  { icon: Award, label: '"Rubiklab Holiday" sabbatical after 4 years' },
];

const AboutBenefits = () => {
  return (
    <section className="py-24 md:py-32 px-8 md:px-16 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-serif text-foreground mb-4">
          What We Offer
        </h3>
        <p className="text-muted-foreground text-base max-w-xl mb-12 leading-relaxed">
          At Rubiklab, your well-being is our priority. Our benefits package is designed to support your health and financial security.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="flex flex-col items-start gap-3 p-6 rounded-xl border border-border"
            >
              <b.icon className="w-5 h-5 text-muted-foreground" />
              <p className="text-sm text-foreground leading-snug">{b.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutBenefits;

import { useState } from "react";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";

const testimonials = [
  {
    quote:
      "The legal industry is evolving rapidly. Rubiklab gives us structured intelligence and the confidence to act with precision.",
    name: "Dr. Claudia Junker",
    title: "General Counsel",
    company: "Deutsche Telekom AG",
    image: testimonial1,
  },
  {
    quote:
      "What we have built with Rubiklab is not just AI adoption. It is a disciplined knowledge architecture across the firm.",
    name: "Rich Robbins",
    title: "Director of Applied Artificial Intelligence",
    company: "Reed Smith",
    image: testimonial2,
  },
  {
    quote:
      "Rubiklab has become part of our operating infrastructure. It has changed how we manage and activate insight.",
    name: "Marie-Cécile Martin",
    title: "Head of Legal Operations",
    company: "Syngenta Group",
    image: testimonial3,
  },
];

const Testimonials = () => {
  const [active, setActive] = useState(0);
  const t = testimonials[active];

  return (
    <section className="py-24 md:py-32 px-8 md:px-16 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-serif text-foreground mb-4 text-center">
          Trusted where decisions carry weight
        </h3>
        <p className="text-muted-foreground text-base md:text-lg text-center max-w-2xl mx-auto mb-16 leading-relaxed">
          Leading organisations rely on Rubiklab to structure knowledge, strengthen governance, and improve decision quality.
        </p>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center mb-12">
          {/* Portrait */}
          <div className="flex justify-center md:justify-end">
            <div className="w-[320px] h-[400px] md:w-[400px] md:h-[500px] overflow-hidden rounded-sm">
              <img
                src={t.image}
                alt={t.name}
                className="w-full h-full object-cover transition-opacity duration-500"
              />
            </div>
          </div>

          {/* Quote */}
          <div className="flex flex-col justify-center">
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-serif text-foreground leading-snug mb-8">
              "{t.quote}"
            </blockquote>
            <div>
              <p className="text-sm font-medium text-foreground">{t.name}</p>
              <p className="text-sm text-muted-foreground">{t.title}</p>
              <p className="text-sm text-muted-foreground">{t.company}</p>
            </div>
          </div>
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center gap-4">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-[2px] transition-all duration-300 ${
                i === active
                  ? "w-24 bg-foreground"
                  : "w-16 bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
              aria-label={`View testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

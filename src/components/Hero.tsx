import { useState, useEffect, useMemo } from "react";
import heroNew1 from "@/assets/hero-new-1.png";
import heroNew2 from "@/assets/hero-new-2.png";
import heroNew3 from "@/assets/hero-new-3.png";
import heroNew5 from "@/assets/hero-new-5.png";

const allSlides = [heroNew1, heroNew2, heroNew3, heroNew5];

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const Hero = () => {
  const slides = useMemo(() => shuffle(allSlides), []);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Sliding images */}
      {slides.map((src, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-[2000ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <img
            src={src}
            alt={`Professional at work ${i + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Subtle gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-background/20 to-transparent" />

      {/* Content */}
      <div className="relative z-10 px-8 md:px-16 max-w-3xl pt-24">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium leading-[0.95] mb-8 text-foreground">
          Activated Intelligence
          <span
            className="inline-block w-3 h-3 md:w-4 md:h-4 rounded-full ml-1 align-baseline animate-pulse"
            style={{ backgroundColor: "hsl(var(--accent))" }}
          />
        </h1>
        <p className="text-lg md:text-xl text-secondary-foreground max-w-lg mb-10 leading-relaxed">
          Rubiklab structures fragmented knowledge, separates signal from noise, and activates workflows across legal, research, and enterprise systems.
        </p>
        <a
          href="#"
          className="inline-block border border-foreground/60 text-foreground px-8 py-3 text-sm tracking-wide hover:bg-foreground hover:text-primary-foreground transition-all duration-300"
        >
          Request a Demo
        </a>
      </div>
    </section>
  );
};

export default Hero;

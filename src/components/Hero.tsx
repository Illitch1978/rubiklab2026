import { useState, useEffect, useMemo } from "react";
import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";
import heroSlide4 from "@/assets/hero-slide-4.jpg";

const allSlides = [heroSlide1, heroSlide2, heroSlide3, heroSlide4];

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
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Sliding images */}
      {slides.map((src, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <img
            src={src}
            alt={`Professional at work ${i + 1}`}
            className="w-full h-full object-cover transition-transform duration-[6000ms] ease-out"
            style={{
              transform: i === current ? "scale(1.05)" : "scale(1)",
            }}
          />
        </div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-background/50" />

      {/* Content */}
      <div className="relative z-10 px-8 md:px-16 max-w-3xl pt-24">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium leading-[0.95] mb-8 text-foreground">
          Structured Intelligence.<br />Real Decisions.
        </h1>
        <p className="text-lg md:text-xl text-secondary-foreground max-w-lg mb-10 leading-relaxed">
          Rubiklab structures fragmented knowledge, separates signal from noise, and activates governed AI workflows across legal, research, and enterprise systems.
        </p>
        <a
          href="#"
          className="inline-block border border-foreground/60 text-foreground px-8 py-3 text-sm tracking-wide hover:bg-foreground hover:text-primary-foreground transition-all duration-300"
        >
          Request a Demo
        </a>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-8 md:left-16 z-10 flex gap-2">
        {slides.map((_, i) => (
          <div
            key={i}
            className="h-0.5 rounded-full transition-all duration-500"
            style={{
              width: i === current ? "2rem" : "0.75rem",
              backgroundColor: i === current
                ? "hsl(var(--foreground))"
                : "hsl(var(--foreground) / 0.3)",
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;

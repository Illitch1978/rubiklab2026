import { useState, useEffect, useCallback } from "react";
import platformSlide1 from "@/assets/platform-slide-1.png";
import platformSlide2 from "@/assets/platform-slide-2.png";
import platformSlide4 from "@/assets/platform-slide-4.png";

const slides = [
  { label: "Dashboard", image: platformSlide1 },
  { label: "Data Audit", image: platformSlide2 },
  { label: "Key Learnings", image: platformSlide4 },
];

const PlatformHero = () => {
  const [active, setActive] = useState(0);

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(next, 4000);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <section className="min-h-screen flex items-center">
      <div className="w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-16 px-8 md:px-16 pt-24">
        {/* Left: text — no max-w container, same as Security/About heroes */}
        <div className="lg:w-[35%] flex-shrink-0">
          <h1 className="text-5xl md:text-7xl lg:text-[6.5rem] font-serif font-medium leading-[0.95] mb-6 text-foreground tracking-tight">
            Introducing<br />Studio<span
              className="inline-block w-3 h-3 md:w-4 md:h-4 rounded-full ml-1 align-baseline animate-pulse"
              style={{ backgroundColor: "hsl(210 60% 55%)" }}
            />
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-md leading-relaxed">
            Weeks of research. One working day.
          </p>
        </div>

        {/* Right: carousel — 65% width for larger display */}
        <div className="lg:w-[65%] w-full">
          <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-foreground/10 shadow-2xl bg-muted">
            {slides.map((slide, i) => (
              <div
                key={i}
                className="absolute inset-0 transition-all duration-700 ease-in-out"
                style={{
                  opacity: i === active ? 1 : 0,
                  transform: i === active ? "scale(1)" : "scale(0.96)",
                  pointerEvents: i === active ? "auto" : "none",
                }}
              >
                <img
                  src={slide.image}
                  alt={slide.label}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-4">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="w-2 h-2 rounded-full transition-all duration-300 focus:outline-none"
                style={{
                  background: i === active ? "hsl(210 60% 55%)" : "hsl(210 20% 30%)",
                  transform: i === active ? "scale(1.3)" : "scale(1)",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformHero;

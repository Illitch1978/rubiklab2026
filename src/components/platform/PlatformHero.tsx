import { useState, useEffect, useCallback } from "react";

const slides = [
  {
    label: "Dashboard",
    bg: "hsl(210 25% 12%)",
    accent: "hsl(210 60% 55%)",
  },
  {
    label: "Analysis View",
    bg: "hsl(220 25% 12%)",
    accent: "hsl(190 60% 50%)",
  },
  {
    label: "Report Builder",
    bg: "hsl(200 25% 12%)",
    accent: "hsl(40 60% 55%)",
  },
  {
    label: "Signal Explorer",
    bg: "hsl(215 25% 12%)",
    accent: "hsl(280 50% 55%)",
  },
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
            We transform raw, unstructured signal into validated, source-traced
            intelligence. Built for organisations where accuracy is non-negotiable.
          </p>
        </div>

        {/* Right: carousel — 65% width for larger display */}
        <div className="lg:w-[65%] w-full">
          <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-foreground/10 shadow-2xl">
            {slides.map((slide, i) => (
              <div
                key={i}
                className="absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ease-in-out"
                style={{
                  background: slide.bg,
                  opacity: i === active ? 1 : 0,
                  transform: i === active ? "scale(1)" : "scale(0.96)",
                  pointerEvents: i === active ? "auto" : "none",
                }}
              >
                <div
                  className="w-[90%] h-[80%] rounded-lg border border-white/10 p-6 flex flex-col gap-4"
                  style={{ background: "hsl(210 20% 8% / 0.6)" }}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                      <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                      <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                    </div>
                    <div className="flex-1 h-5 rounded bg-white/5" />
                  </div>
                  <div className="flex-1 grid grid-cols-3 gap-3">
                    <div className="col-span-2 rounded-lg bg-white/5 flex items-end p-4">
                      <div className="flex items-end gap-2 w-full h-[60%]">
                        {[65, 40, 80, 55, 90, 45, 70, 60].map((h, j) => (
                          <div
                            key={j}
                            className="flex-1 rounded-t transition-all duration-500"
                            style={{
                              height: `${h}%`,
                              background: i === active ? slide.accent : "hsl(210 20% 25%)",
                              opacity: i === active ? 0.8 : 0.3,
                            }}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col gap-3">
                      <div className="flex-1 rounded-lg bg-white/5 p-3">
                        <div className="w-full h-3 rounded bg-white/10 mb-2" />
                        <div className="w-2/3 h-3 rounded bg-white/10" />
                      </div>
                      <div className="flex-1 rounded-lg bg-white/5 p-3">
                        <div className="w-full h-3 rounded bg-white/10 mb-2" />
                        <div className="w-1/2 h-3 rounded bg-white/10" />
                      </div>
                    </div>
                  </div>
                </div>

                <p
                  className="font-mono text-xs tracking-widest uppercase mt-4"
                  style={{ color: slide.accent }}
                >
                  {slide.label}
                </p>
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
                  background: i === active ? slides[active].accent : "hsl(210 20% 30%)",
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

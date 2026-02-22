import { useState, useEffect, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import aboutSlide1 from "@/assets/about-slide-1.png";
import aboutSlide2 from "@/assets/about-slide-2.png";
import aboutSlide3 from "@/assets/about-slide-3.png";
import aboutSlide4 from "@/assets/about-slide-4.png";

const aboutSlides = [aboutSlide1, aboutSlide2, aboutSlide3, aboutSlide4];

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
/* ── LOCKED TYPE SYSTEM ──────────────────────────────────────────────
 * H2  – All section heads:  text-[36px] md:text-[44px] lg:text-[52px]
 * Body:                     text-[16px] md:text-[17px] lg:text-[18px]
 * Small:                    text-[13px] md:text-[14px]
 * ─────────────────────────────────────────────────────────────────── */

const container = "max-w-[1120px] mx-auto px-6 md:px-12 lg:px-[72px]";
const sectionPad = "py-14 md:py-[72px] lg:py-24";

const h2 =
  "font-serif font-medium text-[36px] md:text-[44px] lg:text-[52px] leading-[1.05] tracking-tight text-foreground max-w-[16ch]";
const bodyText =
  "text-[16px] md:text-[17px] lg:text-[18px] leading-[1.6] text-muted-foreground max-w-[60ch]";
const smallText =
  "text-[13px] md:text-[14px] leading-[1.6] text-muted-foreground";
const emphasis =
  "text-[16px] md:text-[17px] lg:text-[18px] leading-[1.6] text-foreground font-medium max-w-[60ch]";

const AboutHeroSection = () => {
  const slides = useMemo(() => shuffle(aboutSlides), []);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Static first image to prevent flicker */}
      <img
        src={aboutSlide1}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Sliding images */}
      {slides.map((src, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-[2000ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <img
            src={src}
            alt={`Rubiklab team ${i + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-background/20 to-transparent" />
      <Navbar />
      <div className="relative z-10 flex items-center min-h-screen px-8 md:px-16">
        <div className="max-w-3xl pt-24">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium leading-[0.95] mb-6 text-foreground tracking-tight whitespace-nowrap">
            We build with care<span className="inline-block w-3 h-3 md:w-4 md:h-4 rounded-full ml-2 animate-pulse" style={{ backgroundColor: "hsl(var(--accent))", verticalAlign: "0.1em" }} />
          </h1>
          <p className="text-lg md:text-xl text-secondary-foreground max-w-lg leading-relaxed">
            We help organisations make sense of complexity without sacrificing judgement, depth or integrity.
          </p>
        </div>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* ═══ IMAGE SLIDESHOW HERO ═══ */}
      <AboutHeroSection />

      {/* ═══ LIGHT NARRATIVE CHAPTER ═══ */}
      <div className="theme-light bg-background text-foreground">

        {/* Section 1 — When knowledge fragments */}
        <section className={sectionPad}>
          <div className={container}>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 lg:gap-6">
              {/* Left column: heading */}
              <div className="md:col-span-6">
                <h2 className={`${h2} mb-4`}>
                  When knowledge fragments, risk grows
                </h2>
              </div>
              {/* Right column: supporting copy */}
              <div className="md:col-span-6 space-y-3">
                <p className={bodyText}>
                  Organisations generate more knowledge than they can govern, trust, or activate.
                </p>
                <p className={bodyText}>
                  Insight sits in reports, transcripts, dashboards, archives, inboxes, shared drives, and external feeds. Legacy systems coexist with real‑time data. Different formats. Different languages. Different standards.
                </p>
                <p className={bodyText}>
                  Layering AI on top of this does not resolve the problem. It often amplifies inconsistency.
                </p>
                <p className={`${emphasis} mt-5`}>
                  When decisions matter, intelligence must be grounded, traceable, and complete.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 — Technology should adapt */}
        <section className={`${sectionPad} !pt-0`}>
          <div className={container}>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 lg:gap-6">
              <div className="md:col-span-6">
                <h2 className={`${h2} mb-4`}>
                  Technology should adapt to people
                </h2>
              </div>
              <div className="md:col-span-6 space-y-3">
                <p className={bodyText}>
                  We design workflows around existing practices, not the other way around. Analysts, lawyers, researchers and editors remain in control. The system supports their judgement rather than replacing it.
                </p>
                <p className={bodyText}>
                  Automation is introduced where it reduces friction. Oversight remains where it protects quality.
                </p>
                <p className={`${emphasis} mt-5`}>
                  The result is adoption without disruption.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ═══ DARK SYSTEM BLOCK ═══ */}
      <div className="bg-background text-foreground">

        {/* Section 3 — How Rubiklab works */}
        <section className={sectionPad}>
          <div className={container}>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 lg:gap-6">
              <div className="md:col-span-9">
                <h2 className={`${h2} mb-4`}>
                  How Rubiklab works
                </h2>
                <div className="space-y-3">
                  <p className={bodyText}>
                    We bring internal archives and live external signals into one coherent environment.
                  </p>
                  <p className={bodyText}>
                    Documents, research, conversations, reviews, regulatory material, market signals and historical records coexist in one ecosystem.
                  </p>
                  <p className={bodyText}>
                    Data is prepared, classified and validated before any AI layer interacts with it.
                  </p>
                </div>
                <p className={`${emphasis} mt-5 mb-5`}>
                  This matters.
                </p>
                <div className="space-y-3">
                  <p className={bodyText}>
                    Because our analysis does not rely solely on probabilistic language models. It is anchored in prepared data, defined taxonomies and transparent processing steps.
                  </p>
                  <p className={bodyText}>
                    The result is deeper signal across formats and languages, without losing traceability.
                  </p>
                  <p className={bodyText}>
                    Users can explore broadly, ask complex questions, and follow the reasoning behind every output.
                  </p>
                </div>
                <p className={`${emphasis} mt-5`}>
                  Curiosity is encouraged. Confidence follows.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 — What makes the difference */}
        <section className={sectionPad}>
          <div className={container}>
            <h2 className={`${h2} mb-4 !max-w-none`}>
              What makes the difference
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {[
                { title: "Diverse signals, not narrow datasets", body: "We combine legacy records with dynamic external sources across markets and formats to reduce blind spots and improve perspective." },
                { title: "Method before model", body: "AI is applied to prepared, classified data. Deterministic pipelines come first, models operate on governed inputs." },
                { title: "Workflow alignment", body: "Technology fits existing roles and responsibilities, supporting judgement instead of forcing behavioural change." },
                { title: "Clarity of reasoning", body: "Outputs can be inspected, traced and challenged. Every conclusion is linked to prepared data and transparent processing steps." },
                { title: "Depth across formats and languages", body: "Text, transcripts, reports, reviews and regulatory material are analysed consistently across markets and languages." },
                { title: "Tailored output, not generic templates", body: "Reports adapt to each client's tone, structure and context so intelligence reflects how the organisation actually operates." },
              ].map((item) => (
                <div key={item.title} className="p-6">
                  <h3 className="text-[16px] font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className={smallText}>
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
            <p className={`${emphasis} mt-8`}>
              This is where reliability comes from.
            </p>
          </div>
        </section>
      </div>

      {/* ═══ LIGHT: Built for complex environments ═══ */}
      <div className="theme-light bg-background text-foreground">
        <section className={`${sectionPad} !pt-[72px] md:!pt-24 lg:!pt-32`}>
          <div className={container}>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 lg:gap-6">
              <div className="md:col-span-7">
                <h2 className={`${h2} mb-4`}>
                  Built for complex environments
                </h2>
              </div>
              <div className="md:col-span-5 space-y-3">
                <p className={bodyText}>Legal teams navigating intricate matters.</p>
                <p className={bodyText}>Research organisations interpreting diverse signals.</p>
                <p className={bodyText}>Healthcare and publishing groups managing sensitive knowledge.</p>
                <p className={bodyText}>Enterprises operating across multiple jurisdictions.</p>
                <p className={`${emphasis} mt-5`}>
                  In these settings, ambiguity has consequences.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ LIGHT: Intelligence that holds up ═══ */}
        <section className={sectionPad}>
          <div className={container}>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 lg:gap-6">
              <div className="md:col-span-7">
                <h2 className={`${h2} mb-4`}>
                  Intelligence that holds up under scrutiny
                </h2>
              </div>
              <div className="md:col-span-5 space-y-3">
                <p className={bodyText}>Scale without method creates noise.</p>
                <p className={bodyText}>Automation without discipline creates risk.</p>
                <p className={`${emphasis} mt-5`}>
                  As AI becomes embedded in organisations, the difference will not be speed. It will be integrity.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3 mt-7">
              <a
                href="/platform"
                className="inline-block border border-foreground/40 text-foreground px-8 py-3 text-[14px] tracking-wide hover:bg-foreground hover:text-background transition-all duration-300"
              >
                Explore the platform
              </a>
              <a
                href="#"
                className="inline-block border border-foreground/40 text-foreground px-8 py-3 text-[14px] tracking-wide hover:bg-foreground hover:text-background transition-all duration-300"
              >
                Request a demo
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default About;

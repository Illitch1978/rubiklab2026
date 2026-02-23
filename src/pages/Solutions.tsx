import { useState, useEffect, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import solutionsSlide1 from "@/assets/solutions-slide-1.png";
import solutionsSlide2 from "@/assets/solutions-slide-2.png";
import solutionsSlide3 from "@/assets/solutions-slide-3.png";
import solutionsSlide4 from "@/assets/solutions-slide-4.png";

const allSlides = [solutionsSlide1, solutionsSlide2, solutionsSlide3, solutionsSlide4];

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* ── TYPE SYSTEM (matches About page) ───────────────────────────────
 * H2  – text-[36px] md:text-[44px] lg:text-[52px]
 * Body – text-[16px] md:text-[17px] lg:text-[18px]
 * Small – text-[13px] md:text-[14px]
 * ─────────────────────────────────────────────────────────────────── */

const container = "max-w-[1120px] mx-auto px-6 md:px-12 lg:px-[72px]";
const sectionPad = "py-14 md:py-[72px] lg:py-24";

const h2 =
  "font-serif font-medium text-[36px] md:text-[44px] lg:text-[52px] leading-[1.05] tracking-tight text-foreground";
const bodyText =
  "text-[16px] md:text-[17px] lg:text-[18px] leading-[1.6] text-muted-foreground max-w-[60ch]";
const emphasis =
  "text-[16px] md:text-[17px] lg:text-[18px] leading-[1.6] text-foreground font-medium max-w-[60ch]";
const smallText = "text-[13px] md:text-[14px] leading-[1.6] text-muted-foreground";

/* ── SOLUTION ENVIRONMENT DATA ─────────────────────────────────────── */
const environments = [
  {
    label: "Legal",
    title: "Legal intelligence that stands up to scrutiny",
    context:
      "Law firms and in-house legal teams operate across jurisdictions, matters and regulatory demands. Insight must be complete, traceable and defensible.",
    outcomes: [
      "Consolidate submissions, research, transcripts and external signals into one governed environment",
      "Compare positions across firms, practice areas and jurisdictions",
      "Surface credible experts and validated reasoning",
      "Generate outputs aligned to firm voice and client expectations",
    ],
    closing: "When decisions affect clients, reputation and risk, clarity must be earned.",
  },
  {
    label: "Market Research",
    title: "Signal across fragmented conversations",
    context:
      "Research teams work across surveys, transcripts, social listening, legacy reports and client archives. The challenge is not volume. It is coherence.",
    outcomes: [
      "Combine primary research with live external data",
      "Analyse structured and unstructured material consistently",
      "Track themes across markets and languages",
      "Deliver outputs that align to client tone and reporting standards",
    ],
    closing: "Curiosity scales. Confidence follows.",
  },
  {
    label: "Healthcare",
    title: "Knowledge in regulated environments",
    context:
      "Healthcare organisations manage sensitive, multi-source information across compliance frameworks.",
    outcomes: [
      "Integrate research, regulatory material and external discourse",
      "Maintain traceability and auditability across outputs",
      "Compare perception, evidence and policy narratives",
      "Enable teams to ask complex questions safely",
    ],
    closing: "In regulated systems, reliability is not optional.",
  },
  {
    label: "Publishing",
    title: "Editorial intelligence at scale",
    context:
      "Publishers manage vast archives alongside dynamic author, reader and market signals.",
    outcomes: [
      "Connect legacy archives with live discourse",
      "Analyse text across formats and languages",
      "Surface thematic depth across decades of material",
      "Support editorial teams without disrupting existing processes",
    ],
    closing: "Insight should deepen judgement, not replace it.",
  },
  {
    label: "Enterprise & Associations",
    title: "Cross-functional intelligence",
    context:
      "Large organisations operate across departments, geographies and standards.",
    outcomes: [
      "Align internal records with market and policy signals",
      "Compare performance, narrative and perception",
      "Enable governed AI workflows without replacing existing systems",
      "Deliver tailored outputs aligned to organisational structure",
    ],
    closing: "When ambiguity has consequences, dependable understanding matters.",
  },
];

const sharedFoundation = [
  "Prepared data before AI interaction",
  "Traceable reasoning across formats and languages",
  "Workflow alignment instead of disruption",
  "Outputs tailored to context",
];

/* ── COMPONENT ────────────────────────────────────────────────────── */

const Solutions = () => {
  const slides = useMemo(() => shuffle(allSlides), []);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />

      {/* ═══ FULL VIEWPORT HERO ═══ */}
      <div className="relative min-h-screen flex flex-col">
        {/* Static first image to prevent flicker */}
        <img
          src={solutionsSlide1}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Sliding background images */}
        {slides.map((src, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-[2000ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
            style={{ opacity: i === current ? 1 : 0 }}
          >
            <img
              src={src}
              alt={`Solutions environment ${i + 1}`}
              className="w-full h-full object-cover object-center"
            />
          </div>
        ))}
        {/* Dark overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-transparent pointer-events-none" />

        {/* Hero content — matches home page alignment */}
        <div className="relative z-10 flex-1 flex items-center">
          <div className="px-8 md:px-16 max-w-3xl pt-24">
            <h1 className="text-5xl md:text-7xl lg:text-[6.5rem] font-serif font-medium leading-[0.95] mb-8 text-foreground tracking-tight">
              Applied Intelligence
              <span
                className="inline-block w-3 h-3 md:w-4 md:h-4 rounded-full ml-1 align-baseline animate-pulse"
                style={{ backgroundColor: "hsl(var(--accent))" }}
              />
            </h1>
            <p className={`${bodyText} max-w-[52ch]`}>
              Rubiklab brings diverse signals and aligned workflows into environments where accuracy matters.
            </p>
          </div>
        </div>
      </div>

      {/* ═══ LIGHT: How we apply the platform ═══ */}
      <div className="theme-light bg-background text-foreground">
        <section className={sectionPad}>
          <div className={container}>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 lg:gap-6">
              <div className="md:col-span-5">
                <h2 className={`${h2} mb-4 max-w-[16ch]`}>
                  From complexity to dependable action
                </h2>
              </div>
              <div className="md:col-span-7 space-y-3">
                <p className={bodyText}>
                  Our platform adapts to the environment it serves. Legal teams, research organisations, healthcare groups and enterprise functions each require different workflows, controls and outputs.
                </p>
                <p className={`${emphasis}`}>
                  The underlying discipline remains the same. The application changes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ LIGHT: Solutions by environment ═══ */}
        <section id="environments" className={`${sectionPad} !pt-0`}>
          <div className={container}>
            <div className="space-y-0 divide-y divide-border">
              {environments.map((env, i) => (
                <div key={i} className="py-14 md:py-[72px] grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 lg:gap-12">
                  {/* Left: label + title */}
                  <div className="md:col-span-5">
                    <p className="text-[12px] uppercase tracking-[0.15em] text-muted-foreground mb-4">
                      {env.label}
                    </p>
                    <h3 className="font-serif font-medium text-[24px] md:text-[28px] lg:text-[32px] leading-[1.1] tracking-tight text-foreground max-w-[22ch]">
                      {env.title}
                    </h3>
                  </div>

                  {/* Right: context + outcomes + closing */}
                  <div className="md:col-span-7 space-y-6">
                    <p className={bodyText}>{env.context}</p>

                    <ul className="space-y-3">
                      {env.outcomes.map((outcome, j) => (
                        <li key={j} className="flex gap-3 items-start">
                          <span className="mt-[0.45em] w-1 h-1 rounded-full bg-foreground/50 shrink-0" />
                          <span className={smallText + " text-foreground/80"}>{outcome}</span>
                        </li>
                      ))}
                    </ul>

                    <p className={`${emphasis} border-t border-border pt-6`}>
                      {env.closing}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* ═══ DARK: Common foundation ═══ */}
      <div className="bg-background text-foreground">
        <section className={sectionPad}>
          <div className={container}>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 lg:gap-12">
              <div className="md:col-span-5">
                <h2 className={`${h2} mb-4 max-w-[16ch]`}>
                  Common foundation. Different applications.
                </h2>
              </div>
              <div className="md:col-span-7 space-y-6">
                <p className={bodyText}>
                  Every solution combines diverse internal and external data, deterministic preparation, transparent reasoning and workflows that align to how teams already operate.
                </p>
                <ul className="space-y-3">
                  {sharedFoundation.map((item, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <span className="mt-[0.45em] w-1 h-1 rounded-full bg-foreground/50 shrink-0" />
                      <span className={smallText + " text-foreground/70"}>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className={emphasis}>
                  Intelligence should fit the organisation. Not the other way around.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ DARK: Built around your reality ═══ */}
        <section className="py-12 md:py-16 lg:py-20">
          <div className={container}>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 lg:gap-12">
              <div className="md:col-span-5">
                <h2 className={`${h2} max-w-[16ch]`}>
                  Built around your reality
                </h2>
              </div>
              <div className="md:col-span-7 space-y-6">
                <p className={bodyText}>
                  While many organisations adopt one of our defined solutions, others require a more tailored environment.
                </p>
                <p className={bodyText}>
                  Around a third of our work involves designing and implementing custom intelligence frameworks built on the same core architecture as Studio.
                </p>
                <p className={emphasis}>We work with clients to:</p>
                <ul className="space-y-3">
                  {[
                    "Integrate proprietary systems and internal taxonomies",
                    "Embed existing methodologies and reporting standards",
                    "Build structured environments for grants, consortium projects or specialist research programmes",
                    "Develop domain-specific intelligence layers with governance and auditability built in",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <span className="mt-[0.45em] w-1 h-1 rounded-full bg-foreground/50 shrink-0" />
                      <span className={smallText + " text-foreground/70"}>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className={emphasis}>
                  The foundation remains the same. The configuration adapts.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ DARK: Closing CTA ═══ */}
        <section className={`${sectionPad} border-t border-border`}>
          <div className={container}>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 lg:gap-12">
              <div className="md:col-span-7">
                <h2 className={`${h2} mb-4 max-w-[20ch]`}>
                  See it applied to your environment
                </h2>
                <p className={`${bodyText} mb-8`}>
                  Tell us how your organisation works. We will show you how the system adapts.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="#"
                    className="inline-block border border-foreground/40 text-foreground px-8 py-3 text-[14px] tracking-wide hover:bg-foreground hover:text-background transition-all duration-300"
                  >
                    Request a demo
                  </a>
                  <a
                    href="/platform"
                    className="inline-block border border-foreground/40 text-foreground px-8 py-3 text-[14px] tracking-wide hover:bg-foreground hover:text-background transition-all duration-300"
                  >
                    Explore the platform
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="theme-light bg-background text-foreground">
        <Footer />
      </div>
    </div>
  );
};

export default Solutions;

import { useState } from "react";

/* ── Stage data ── */
const stages = [
  {
    num: "01",
    title: "Raw Signal Ingestion",
    what: "We absorb knowledge in its native form. Reports, transcripts, dashboards, archives and live external feeds enter a single controlled environment. Nothing is summarised yet. Nothing is guessed.",
    why: "Reliable intelligence begins with complete input. Fragmented sources create blind spots.",
    sees: "A unified intake view showing every imported source, format and language — all timestamped and tracked.",
  },
  {
    num: "02",
    title: "Noise Filtration Gate",
    what: "A 25-step protocol removes duplicates, detects synthetic content and scores source credibility. Automated loops, bot-generated noise and anomalies are filtered before any analysis begins.",
    why: "Conclusions drawn from dirty data are unreliable. Clean foundations make every downstream step defensible.",
    sees: "A filtration log showing what was removed, why, and how many signals passed through to the next stage.",
  },
  {
    num: "03",
    title: "Harmonisation Substrate",
    what: "Validated signals are standardised across languages, enriched with metadata and aligned chronologically. Named entities are extracted and provenance tags are attached to every fragment.",
    why: "Analysis requires structured data. Without harmonisation, patterns stay hidden inside incompatible formats.",
    sees: "A structured data view with enriched entities, timeline alignment and source provenance for every signal.",
  },
  {
    num: "04",
    title: "Hybrid Intelligence Engine",
    what: "Three analytical axes work simultaneously: semantic similarity and clustering, statistical frequency and co-occurrence, and temporal event-sequence mapping with anomaly detection.",
    why: "Single-method analysis misses complexity. Combining approaches surfaces patterns no single technique would find alone.",
    sees: "A multi-layer analysis dashboard showing clusters, statistical correlations and event timelines — all interlinked.",
  },
  {
    num: "05",
    title: "Constitutional Orchestration",
    what: "A governance layer defines agent rules, evidence standards and quality baselines. Coordinated agents — noise auditors, clustering agents, statistical verifiers — execute within strict constitutional constraints.",
    why: "Uncontrolled AI produces inconsistent results. Constitutional rules ensure every output meets defined quality thresholds.",
    sees: "An orchestration panel showing active agents, their rules, quality scores and the narrative they are building.",
  },
  {
    num: "06",
    title: "Validation & Delivery",
    what: "Outputs pass through evidence-linking and coverage checks. Deliverables — executive briefs, thematic boards, presentations — are configured to your tone, format and visual identity.",
    why: "Intelligence is only useful if it is trusted. Validation gates ensure nothing leaves the system without traceable evidence.",
    sees: "A delivery console with configurable output formats, evidence trails and direct push to CRMs, dashboards or knowledge bases.",
  },
];

/* ── Main component ── */

const PipelineOverview = () => {
  const [active, setActive] = useState(0);
  const current = stages[active];

  return (
    <section className="relative overflow-hidden min-h-screen flex flex-col justify-center" style={{ background: "hsl(210 25% 8%)" }}>
      {/* Blueprint grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(210 60% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(210 60% 50%) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(210 60% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(210 60% 50%) 1px, transparent 1px)",
          backgroundSize: "12px 12px",
        }}
      />

      <div className="relative z-10 px-8 md:px-16 py-20 md:py-28">
        <div className="max-w-[1120px] mx-auto">

          {/* Header */}
          <div className="mb-8 md:mb-12">
            <p className="font-mono text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "hsl(210 60% 55%)" }}>
              System Architecture // Intelligence Studio
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight max-w-3xl mb-5" style={{ color: "hsl(40 30% 90%)" }}>
              Six stages from raw signal to validated intelligence
            </h2>
            <p className="text-base md:text-lg leading-relaxed max-w-2xl" style={{ color: "hsl(210 15% 55%)" }}>
              Every output in Studio follows a disciplined, traceable path. Click each stage to see how intelligence is built.
            </p>
          </div>

          {/* Horizontal stepper bar */}
          <div className="relative mb-10">
            <div className="absolute top-[24px] left-0 right-0 h-px" style={{ background: "hsl(210 50% 25%)" }} />
            <div className="relative flex justify-between">
              {stages.map((stage, i) => {
                const isActive = i === active;
                const isPast = i < active;
                return (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className="group flex flex-col items-center gap-3 relative z-10 focus:outline-none"
                    style={{ flex: 1 }}
                  >
                    <div
                      className="w-[44px] h-[44px] md:w-[52px] md:h-[52px] rounded-sm border flex items-center justify-center transition-all duration-300"
                      style={{
                        borderColor: isActive ? "hsl(210 60% 55%)" : isPast ? "hsl(210 50% 35%)" : "hsl(210 40% 25%)",
                        background: isActive ? "hsl(210 50% 15%)" : "hsl(210 25% 10%)",
                        boxShadow: isActive ? "0 0 20px hsl(210 60% 40% / 0.3)" : "none",
                      }}
                    >
                      <span
                        className="font-mono text-sm md:text-base font-semibold transition-colors duration-300"
                        style={{ color: isActive ? "hsl(210 60% 70%)" : isPast ? "hsl(210 50% 50%)" : "hsl(210 40% 35%)" }}
                      >
                        {stage.num}
                      </span>
                    </div>
                    <span
                      className="hidden lg:block font-mono text-[11px] tracking-wide text-center leading-tight max-w-[140px] transition-colors duration-300"
                      style={{ color: isActive ? "hsl(40 30% 85%)" : "hsl(210 15% 40%)" }}
                    >
                      {stage.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active stage detail card */}
          <div
            className="border rounded-lg p-6 md:p-8 transition-all duration-300"
            style={{ borderColor: "hsl(210 30% 20%)", background: "hsl(210 25% 7%)" }}
          >
            <div className="flex items-baseline gap-3 mb-2">
              <span className="font-mono text-base font-semibold" style={{ color: "hsl(210 60% 60%)" }}>
                {current.num}
              </span>
              <h3 className="text-xl md:text-2xl font-serif" style={{ color: "hsl(40 30% 90%)" }}>
                {current.title}
              </h3>
            </div>

            <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: "hsl(40 20% 75%)" }}>
              {current.what}
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="border rounded-md p-5" style={{ borderColor: "hsl(210 30% 18%)", background: "hsl(210 25% 9%)" }}>
                <p className="font-mono text-xs tracking-[0.15em] uppercase mb-3" style={{ color: "hsl(210 50% 50%)" }}>
                  Why this matters
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "hsl(210 15% 55%)" }}>
                  {current.why}
                </p>
              </div>
              <div className="border rounded-md p-5" style={{ borderColor: "hsl(210 30% 18%)", background: "hsl(210 25% 9%)" }}>
                <p className="font-mono text-xs tracking-[0.15em] uppercase mb-3" style={{ color: "hsl(210 50% 50%)" }}>
                  What you see
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "hsl(210 15% 55%)" }}>
                  {current.sees}
                </p>
              </div>
            </div>
          </div>

          {/* Prev / Next nav */}
          <div className="flex justify-between mt-4">
            <button
              onClick={() => setActive(Math.max(0, active - 1))}
              disabled={active === 0}
              className="font-mono text-sm px-5 py-2.5 rounded border transition-all disabled:opacity-20"
              style={{ borderColor: "hsl(210 30% 25%)", color: "hsl(210 60% 60%)" }}
            >
              ← Previous
            </button>
            <button
              onClick={() => setActive(Math.min(stages.length - 1, active + 1))}
              disabled={active === stages.length - 1}
              className="font-mono text-sm px-5 py-2.5 rounded border transition-all disabled:opacity-20"
              style={{ borderColor: "hsl(210 30% 25%)", color: "hsl(210 60% 60%)" }}
            >
              Next →
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PipelineOverview;

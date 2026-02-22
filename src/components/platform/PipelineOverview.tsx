import { useState } from "react";

/* ── Sub-components ── */

const Chip = ({ label, detail }: { label: string; detail: string }) => (
  <div
    className="px-3 py-2 rounded border font-mono"
    style={{ borderColor: "hsl(210 30% 20%)", background: "hsl(210 25% 9%)" }}
  >
    <p className="text-[11px] font-medium" style={{ color: "hsl(40 20% 80%)" }}>{label}</p>
    <p className="text-[10px]" style={{ color: "hsl(210 15% 45%)" }}>{detail}</p>
  </div>
);

const FilterStep = ({ num, label, detail }: { num: string; label: string; detail: string }) => (
  <div className="flex items-start gap-3">
    <span
      className="font-mono text-[10px] font-semibold w-6 h-6 flex items-center justify-center rounded border flex-shrink-0 mt-0.5"
      style={{ borderColor: "hsl(210 40% 30%)", color: "hsl(210 60% 60%)" }}
    >
      {num}
    </span>
    <div>
      <p className="font-mono text-xs font-medium" style={{ color: "hsl(40 20% 80%)" }}>{label}</p>
      <p className="font-mono text-[10px]" style={{ color: "hsl(210 15% 45%)" }}>{detail}</p>
    </div>
  </div>
);

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <p className="font-mono text-[10px] tracking-[0.15em] uppercase mb-3" style={{ color: "hsl(210 50% 50%)" }}>
    {children}
  </p>
);

const FlowLabel = ({ children }: { children: React.ReactNode }) => (
  <div className="mt-4 pt-3 border-t" style={{ borderColor: "hsl(210 30% 20%)" }}>
    <p className="font-mono text-[10px] font-medium tracking-wide" style={{ color: "hsl(210 60% 55%)" }}>
      ↓ {children}
    </p>
  </div>
);

/* ── Stage data ── */
const stages = [
  {
    num: "01",
    title: "Raw Signal Ingestion",
    subtitle: "Absorb all knowledge in one place. Zero structural limitations.",
    content: (
      <div className="space-y-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            { label: "Reports & Docs", detail: "Unstructured repositories" },
            { label: "Global Coverage", detail: "50+ languages" },
            { label: "Media Streams", detail: "Audio & video" },
            { label: "Scale Intake", detail: "100,000+ deep sources" },
            { label: "Financial Data", detail: "Transactional sheets" },
          ].map((c, i) => (
            <Chip key={i} label={c.label} detail={c.detail} />
          ))}
        </div>
        <FlowLabel>Unified Signal Intake Gate</FlowLabel>
      </div>
    ),
  },
  {
    num: "02",
    title: "Noise Filtration Gate",
    subtitle: "Rubiklab's 25-step protocol for defensible foundations.",
    content: (
      <div className="space-y-6">
        <div className="space-y-2">
          {[
            { num: "I", label: "Signal Integrity Layer", detail: "Parsing & packet validation" },
            { num: "II", label: "Bot & Synthetic Detection", detail: "Filters automated / LLM-amplified loops" },
            { num: "III", label: "Duplicate Suppression", detail: "Prevents artificial signal inflation" },
            { num: "IV", label: "Credibility Filtering", detail: "Source scoring & anomaly culling" },
          ].map((f, i) => (
            <FilterStep key={i} num={f.num} label={f.label} detail={f.detail} />
          ))}
        </div>
        <FlowLabel>Clean State Validated · Zero-Noise Feed</FlowLabel>
      </div>
    ),
  },
  {
    num: "03",
    title: "Harmonisation Substrate",
    subtitle: "Converting into an analytical structure. No generation yet.",
    content: (
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <SectionLabel>Substrate Processing Pipeline</SectionLabel>
          <ol className="space-y-1.5">
            {["Language Standardisation", "Tokenisation & Parsing", "Metadata Enrichment", "Named Entity Extraction", "Chronology Alignment", "Provenance & Source Tags", "PII Governance Controls"].map((s, i) => (
              <li key={i} className="font-mono text-xs flex gap-2" style={{ color: "hsl(40 20% 75%)" }}>
                <span style={{ color: "hsl(210 50% 45%)" }}>{i + 1}.</span>
                {s}
              </li>
            ))}
          </ol>
        </div>
        <div>
          <SectionLabel>Applied Mathematical Techniques</SectionLabel>
          <ul className="space-y-1.5">
            {["NLP Multi-lingual Pipelines", "High-Dimensional Embedding", "Deep Statistical Normalisation"].map((t, i) => (
              <li key={i} className="font-mono text-xs" style={{ color: "hsl(40 20% 75%)" }}>{t}</li>
            ))}
          </ul>
        </div>
      </div>
    ),
  },
  {
    num: "04",
    title: "Hybrid Intelligence Engine",
    subtitle: "Combining semantic, statistical, and relational analysis.",
    content: (
      <div className="space-y-6">
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <SectionLabel>Semantic Axis</SectionLabel>
            <ul className="space-y-1">
              {["Embedding indexing", "Context similarity", "Topic modelling", "N-dim clustering"].map((s, i) => (
                <li key={i} className="font-mono text-xs" style={{ color: "hsl(40 20% 75%)" }}>{s}</li>
              ))}
            </ul>
          </div>
          <div>
            <SectionLabel>Statistical Axis</SectionLabel>
            <ul className="space-y-1">
              {["Frequency distribution", "Co-occurrence", "Sentiment bias", "Corroboration"].map((s, i) => (
                <li key={i} className="font-mono text-xs" style={{ color: "hsl(40 20% 75%)" }}>{s}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t pt-4 space-y-4" style={{ borderColor: "hsl(210 30% 20%)" }}>
          <div>
            <SectionLabel>Temporal Alignment Layer</SectionLabel>
            <p className="font-mono text-xs" style={{ color: "hsl(40 20% 75%)" }}>
              Event Sequence Mapping & Temporal Anomaly Detection
            </p>
          </div>
          <div>
            <SectionLabel>Hyper-Relational Matrix</SectionLabel>
            <div className="flex flex-wrap gap-2">
              {["Deep Graph Synthesis", "Entity Relationships", "Confidence Weighted"].map((g, i) => (
                <span key={i} className="px-3 py-1.5 font-mono text-[10px] rounded border" style={{ borderColor: "hsl(210 40% 30%)", color: "hsl(210 60% 65%)" }}>
                  {g}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    num: "05",
    title: "Constitutional Orchestration",
    subtitle: "Governance layer defining rules and interacting agents.",
    content: (
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <SectionLabel>Constitutional Framework</SectionLabel>
          <ul className="space-y-1.5">
            {["Sequence Rules & Agent Constraints", "Evidence Definitions & Traceability", "Diversity & Coverage Mandates", "Quality Scoring Baselines"].map((f, i) => (
              <li key={i} className="font-mono text-xs" style={{ color: "hsl(40 20% 75%)" }}>{f}</li>
            ))}
          </ul>
        </div>
        <div>
          <SectionLabel>Coordinated Agentic Array</SectionLabel>
          <div className="flex flex-wrap gap-2 mb-3">
            {["Noise Auditor", "Clustering Agent", "Stat Verifier", "Risk Detect"].map((a, i) => (
              <span key={i} className="px-3 py-1.5 font-mono text-[10px] rounded border" style={{ borderColor: "hsl(210 40% 30%)", color: "hsl(40 20% 75%)" }}>
                {a}
              </span>
            ))}
          </div>
          <p className="font-mono text-[10px]" style={{ color: "hsl(210 50% 55%)" }}>
            → Narrative Synthesis & Quality Scoring
          </p>
        </div>
      </div>
    ),
  },
  {
    num: "06",
    title: "Validation & Configuration",
    subtitle: "Secure output gates and methodology formatting.",
    content: (
      <div className="space-y-5">
        <div>
          <SectionLabel>Embedded Validation Gate</SectionLabel>
          <ul className="space-y-1">
            <li className="font-mono text-xs" style={{ color: "hsl(40 20% 75%)" }}>1. Evidence Linking (trace to source graph)</li>
            <li className="font-mono text-xs" style={{ color: "hsl(40 20% 75%)" }}>2. Coverage Checks (representational balance)</li>
          </ul>
        </div>
        <div className="border-t pt-4" style={{ borderColor: "hsl(210 30% 20%)" }}>
          <SectionLabel>Configurable Deliverables</SectionLabel>
          <div className="flex flex-wrap gap-2 mb-2">
            {["Executive Briefs", "Thematic Boards", "Presentations"].map((d, i) => (
              <span key={i} className="px-3 py-1.5 font-mono text-[10px] rounded border" style={{ borderColor: "hsl(210 40% 30%)", color: "hsl(40 20% 75%)" }}>
                {d}
              </span>
            ))}
          </div>
          <p className="font-mono text-[10px]" style={{ color: "hsl(210 40% 45%)" }}>
            Fully customisable: tone, corporate formatting, and visual identity.
          </p>
        </div>
        <div className="border-t pt-4" style={{ borderColor: "hsl(210 30% 20%)" }}>
          <SectionLabel>Enterprise Integration Delivery</SectionLabel>
          <p className="font-mono text-xs" style={{ color: "hsl(40 20% 75%)" }}>
            Automated push to CRMs, BI Dashboards, CMS, and Internal Knowledge Bases.
          </p>
        </div>
      </div>
    ),
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
          <div className="mb-12 md:mb-16">
            <p className="font-mono text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "hsl(210 60% 55%)" }}>
              System Architecture // Intelligence Studio
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight max-w-3xl" style={{ color: "hsl(40 30% 90%)" }}>
              Six stages from raw signal to validated intelligence
            </h2>
          </div>

          {/* Horizontal stepper bar */}
          <div className="relative mb-10">
            {/* Connector line */}
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
                    {/* Node */}
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
                    {/* Title (hidden on small screens) */}
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
            className="border rounded-lg p-6 md:p-8 transition-all duration-300 min-h-[420px]"
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
            <p className="text-base mb-6 leading-relaxed" style={{ color: "hsl(210 15% 50%)" }}>
              {current.subtitle}
            </p>
            {current.content}
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

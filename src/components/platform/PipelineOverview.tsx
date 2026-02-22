import { Link } from "react-router-dom";

const PipelineOverview = () => {
  return (
    <section className="relative overflow-hidden" style={{ background: "hsl(210 25% 8%)" }}>
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
          <div className="mb-16 md:mb-20">
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase mb-4" style={{ color: "hsl(210 60% 55%)" }}>
              System Architecture // Intelligence Studio
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif leading-tight max-w-3xl" style={{ color: "hsl(40 30% 90%)" }}>
              Six stages from raw signal to validated intelligence
            </h2>
          </div>

          {/* Pipeline flow */}
          <div className="relative">
            {/* Vertical connector line */}
            <div
              className="absolute left-[23px] md:left-[27px] top-0 bottom-0 w-px hidden md:block"
              style={{ background: "hsl(210 50% 30%)" }}
            />

            <div className="space-y-0">

              {/* Stage 01 */}
              <StageBlock num="01" title="Raw Signal Ingestion" subtitle="Absorb all knowledge in one place. Zero structural limitations.">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  <Chip label="Reports & Docs" detail="Unstructured repositories" />
                  <Chip label="Global Coverage" detail="50+ languages" />
                  <Chip label="Media Streams" detail="Audio & video" />
                  <Chip label="Scale Intake" detail="100,000+ deep sources" />
                  <Chip label="Financial Data" detail="Transactional sheets" />
                </div>
                <FlowLabel>Unified Signal Intake Gate</FlowLabel>
              </StageBlock>

              {/* Stage 02 */}
              <StageBlock num="02" title="Noise Filtration Gate" subtitle="Rubiklab's 25-step protocol for defensible foundations.">
                <div className="space-y-2">
                  <FilterStep num="I" label="Signal Integrity Layer" detail="Parsing & packet validation" />
                  <FilterStep num="II" label="Bot & Synthetic Detection" detail="Filters automated / LLM-amplified loops" />
                  <FilterStep num="III" label="Duplicate Suppression" detail="Prevents artificial signal inflation" />
                  <FilterStep num="IV" label="Credibility Filtering" detail="Source scoring & anomaly culling" />
                </div>
                <FlowLabel>Clean State Validated · Zero-Noise Feed</FlowLabel>
              </StageBlock>

              {/* Stage 03 */}
              <StageBlock num="03" title="Harmonisation Substrate" subtitle="Converting into an analytical structure. No generation yet.">
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
                        <li key={i} className="font-mono text-xs" style={{ color: "hsl(40 20% 75%)" }}>
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </StageBlock>

              {/* Stage 04 */}
              <StageBlock num="04" title="Hybrid Intelligence Engine" subtitle="Combining semantic, statistical, and relational analysis.">
                <div className="grid sm:grid-cols-2 gap-6 mb-6">
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
                        <span
                          key={i}
                          className="px-3 py-1.5 font-mono text-[10px] rounded border"
                          style={{ borderColor: "hsl(210 40% 30%)", color: "hsl(210 60% 65%)" }}
                        >
                          {g}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </StageBlock>

              {/* Stage 05 */}
              <StageBlock num="05" title="Constitutional Orchestration" subtitle="Governance layer defining rules and interacting agents.">
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
                        <span
                          key={i}
                          className="px-3 py-1.5 font-mono text-[10px] rounded border"
                          style={{ borderColor: "hsl(210 40% 30%)", color: "hsl(40 20% 75%)" }}
                        >
                          {a}
                        </span>
                      ))}
                    </div>
                    <p className="font-mono text-[10px]" style={{ color: "hsl(210 50% 55%)" }}>
                      → Narrative Synthesis & Quality Scoring
                    </p>
                  </div>
                </div>
              </StageBlock>

              {/* Stage 06 */}
              <StageBlock num="06" title="Validation & Configuration" subtitle="Secure output gates and methodology formatting." last>
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
                        <span
                          key={i}
                          className="px-3 py-1.5 font-mono text-[10px] rounded border"
                          style={{ borderColor: "hsl(210 40% 30%)", color: "hsl(40 20% 75%)" }}
                        >
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
              </StageBlock>

            </div>
          </div>

          {/* Security foundation bar */}
          <div
            className="mt-16 md:mt-20 border rounded-lg p-8 md:p-10"
            style={{ borderColor: "hsl(210 30% 20%)", background: "hsl(210 25% 6%)" }}
          >
            <div className="flex flex-col md:flex-row md:items-start gap-8">
              <div className="md:w-1/3">
                <p className="font-mono text-[10px] tracking-[0.3em] uppercase mb-2" style={{ color: "hsl(210 60% 55%)" }}>
                  Foundation
                </p>
                <h3 className="text-xl md:text-2xl font-serif mb-2" style={{ color: "hsl(40 30% 90%)" }}>
                  Security Layer
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "hsl(210 15% 50%)" }}>
                  Universal data protection underpinning the production lifecycle.
                </p>
              </div>
              <div className="md:w-2/3 grid sm:grid-cols-2 gap-5">
                {[
                  { title: "Encryption & Data Protection", items: ["End-to-end encryption (TLS 1.2/1.3)", "Encryption at rest (AES-256)", "Cryptographic key management"] },
                  { title: "Access Control & Identity", items: ["Role-based access & least privilege", "MFA and enterprise SSO (SAML/OIDC)", "Automated authentication monitoring"] },
                  { title: "Data Isolation & Processing", items: ["Logical tenant isolation", "Zero client data used for tuning", "Secure sandboxed analytical nodes"] },
                  { title: "Infrastructure & Resilience", items: ["Hardened cloud hosting instances", "Network isolation & private subnets", "Centralised incident response logging"] },
                ].map((block, i) => (
                  <div key={i}>
                    <p className="font-mono text-[10px] tracking-wide uppercase mb-2" style={{ color: "hsl(210 50% 55%)" }}>
                      {block.title}
                    </p>
                    <ul className="space-y-0.5">
                      {block.items.map((item, j) => (
                        <li key={j} className="font-mono text-[10px]" style={{ color: "hsl(210 15% 50%)" }}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6 pt-4 border-t" style={{ borderColor: "hsl(210 30% 20%)" }}>
              <Link
                to="/security"
                className="font-mono text-xs underline underline-offset-4 transition-opacity hover:opacity-70"
                style={{ color: "hsl(210 60% 60%)" }}
              >
                Read more about our security architecture →
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

/* ── Sub-components ── */

const StageBlock = ({
  num,
  title,
  subtitle,
  children,
  last,
}: {
  num: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
  last?: boolean;
}) => (
  <div className={`relative md:pl-16 pb-12 md:pb-16 ${last ? "" : ""}`}>
    {/* Node dot */}
    <div
      className="hidden md:flex absolute left-0 top-1 w-[54px] h-[54px] items-center justify-center z-10"
    >
      <div
        className="w-[54px] h-[54px] rounded-sm border flex items-center justify-center"
        style={{ borderColor: "hsl(210 40% 30%)", background: "hsl(210 25% 10%)" }}
      >
        <span className="font-mono text-sm font-semibold" style={{ color: "hsl(210 60% 60%)" }}>
          {num}
        </span>
      </div>
    </div>

    <div
      className="border rounded-lg p-6 md:p-8"
      style={{ borderColor: "hsl(210 30% 20%)", background: "hsl(210 25% 7%)" }}
    >
      {/* Mobile number */}
      <span className="md:hidden font-mono text-sm font-semibold mb-2 block" style={{ color: "hsl(210 60% 60%)" }}>
        {num}
      </span>
      <h3 className="text-lg md:text-xl font-serif mb-1" style={{ color: "hsl(40 30% 90%)" }}>
        {title}
      </h3>
      <p className="text-sm mb-5 leading-relaxed" style={{ color: "hsl(210 15% 50%)" }}>
        {subtitle}
      </p>
      {children}
    </div>

    {/* Connector arrow */}
    {!last && (
      <div className="hidden md:flex justify-center mt-2 mb-0 ml-[11px]" style={{ width: "32px" }}>
        <svg width="12" height="20" viewBox="0 0 12 20" fill="none">
          <path d="M6 0 L6 14 M2 10 L6 16 L10 10" stroke="hsl(210 50% 35%)" strokeWidth="1.5" />
        </svg>
      </div>
    )}
  </div>
);

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

export default PipelineOverview;

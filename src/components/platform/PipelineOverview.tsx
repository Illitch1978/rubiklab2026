import { Link } from "react-router-dom";

const stages = [
  {
    num: "01",
    title: "Raw Signal Ingestion",
    subtitle: "Absorb all knowledge in one place. Zero structural limitations.",
    details: [
      { label: "Reports & Documents", desc: "Unstructured repositories, PDFs, presentations, spreadsheets" },
      { label: "Global Coverage", desc: "50+ languages with native multi-lingual pipelines" },
      { label: "Media Streams", desc: "Audio, video, and transcript ingestion" },
      { label: "Scale Intake", desc: "100,000+ deep sources continuously monitored" },
      { label: "Financial Data", desc: "Transactional sheets and structured datasets" },
    ],
  },
  {
    num: "02",
    title: "Noise Filtration Gate",
    subtitle: "Rubiklab's 25-step protocol for defensible foundations.",
    details: [
      { label: "Signal Integrity Layer", desc: "Parsing and packet validation" },
      { label: "Bot & Synthetic Detection", desc: "Filters automated and LLM-amplified loops" },
      { label: "Duplicate Suppression", desc: "Prevents artificial signal inflation" },
      { label: "Credibility Filtering", desc: "Source scoring and anomaly culling" },
    ],
    closing: "Clean state validated — zero-noise feed for normalisation.",
  },
  {
    num: "03",
    title: "Harmonisation Substrate",
    subtitle: "Converting into an analytical structure. No generation yet.",
    steps: [
      "Language Standardisation",
      "Tokenisation & Parsing",
      "Metadata Enrichment",
      "Named Entity Extraction",
      "Chronology Alignment",
      "Provenance & Source Tags",
      "PII Governance Controls",
    ],
    techniques: [
      "NLP Multi-lingual Pipelines",
      "High-Dimensional Embedding",
      "Deep Statistical Normalisation",
    ],
  },
  {
    num: "04",
    title: "Hybrid Intelligence Engine",
    subtitle: "Combining semantic, statistical, and relational analysis.",
    axes: [
      {
        name: "Semantic Axis",
        items: ["Embedding indexing", "Context similarity", "Topic modelling", "N-dim clustering"],
      },
      {
        name: "Statistical Axis",
        items: ["Frequency distribution", "Co-occurrence", "Sentiment bias", "Corroboration"],
      },
    ],
    temporal: "Event Sequence Mapping & Temporal Anomaly Detection",
    graph: ["Deep Graph Synthesis", "Entity Relationships", "Confidence Weighted"],
  },
  {
    num: "05",
    title: "Constitutional Orchestration",
    subtitle: "Governance layer defining rules and interacting agents.",
    framework: [
      "Sequence Rules & Agent Constraints",
      "Evidence Definitions & Traceability",
      "Diversity & Coverage Mandates",
      "Quality Scoring Baselines",
    ],
    agents: ["Noise Auditor", "Clustering Agent", "Stat Verifier", "Risk Detect"],
    agentClosing: "Narrative Synthesis & Quality Scoring",
  },
  {
    num: "06",
    title: "Validation & Configuration",
    subtitle: "Secure output gates and methodology formatting.",
    validation: [
      "Evidence Linking — trace to source graph",
      "Coverage Checks — representational balance",
    ],
    deliverables: ["Executive Briefs", "Thematic Boards", "Presentations"],
    deliverableNote: "Fully customisable: tone, corporate formatting, and visual identity.",
    integration: "Automated push to CRMs, BI Dashboards, CMS, and Internal Knowledge Bases.",
  },
];

const PipelineOverview = () => {
  return (
    <section className="pt-8 pb-24 md:pb-32">
      {/* Section intro */}
      <div className="px-8 md:px-16 mb-20">
        <div className="max-w-[1120px] mx-auto">
          <p className="text-sm font-medium text-muted-foreground mb-4 tracking-wide uppercase">
            Architecture
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground leading-tight max-w-3xl">
            Six stages from raw signal to validated intelligence
          </h2>
        </div>
      </div>

      {/* Pipeline stages */}
      <div className="space-y-0">
        {stages.map((stage, idx) => (
          <div
            key={stage.num}
            className={`px-8 md:px-16 py-16 md:py-20 ${
              idx % 2 === 0 ? "" : "bg-secondary/30"
            }`}
          >
            <div className="max-w-[1120px] mx-auto">
              <div className="grid md:grid-cols-12 gap-8 md:gap-12">
                {/* Left: number + title */}
                <div className="md:col-span-4">
                  <span className="text-xs font-mono text-muted-foreground tracking-widest">
                    {stage.num}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-serif text-foreground mt-2 mb-3">
                    {stage.title}
                  </h3>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    {stage.subtitle}
                  </p>
                </div>

                {/* Right: content */}
                <div className="md:col-span-8">
                  {/* Stage 1 & 2: details list */}
                  {stage.details && (
                    <div className="space-y-4">
                      {stage.details.map((d, i) => (
                        <div key={i} className="flex gap-4">
                          <span className="text-xs font-mono text-muted-foreground mt-1 w-4 flex-shrink-0">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <div>
                            <p className="text-foreground text-sm font-medium">{d.label}</p>
                            <p className="text-muted-foreground text-sm">{d.desc}</p>
                          </div>
                        </div>
                      ))}
                      {stage.closing && (
                        <p className="text-secondary-foreground text-sm font-medium mt-6 pt-4 border-t border-border">
                          {stage.closing}
                        </p>
                      )}
                    </div>
                  )}

                  {/* Stage 3: steps + techniques */}
                  {stage.steps && (
                    <div className="grid sm:grid-cols-2 gap-8">
                      <div>
                        <p className="text-xs font-mono text-muted-foreground mb-4 tracking-wide uppercase">
                          Processing Pipeline
                        </p>
                        <ol className="space-y-2">
                          {stage.steps.map((s, i) => (
                            <li key={i} className="text-sm text-foreground flex gap-3">
                              <span className="text-muted-foreground font-mono text-xs mt-0.5 w-4 flex-shrink-0">
                                {i + 1}.
                              </span>
                              {s}
                            </li>
                          ))}
                        </ol>
                      </div>
                      {stage.techniques && (
                        <div>
                          <p className="text-xs font-mono text-muted-foreground mb-4 tracking-wide uppercase">
                            Mathematical Techniques
                          </p>
                          <ul className="space-y-2">
                            {stage.techniques.map((t, i) => (
                              <li key={i} className="text-sm text-foreground">
                                {t}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Stage 4: axes + graph */}
                  {stage.axes && (
                    <div className="space-y-8">
                      <div className="grid sm:grid-cols-2 gap-8">
                        {stage.axes.map((axis, i) => (
                          <div key={i}>
                            <p className="text-xs font-mono text-muted-foreground mb-3 tracking-wide uppercase">
                              {axis.name}
                            </p>
                            <ul className="space-y-1.5">
                              {axis.items.map((item, j) => (
                                <li key={j} className="text-sm text-foreground">{item}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                      {stage.temporal && (
                        <div className="pt-4 border-t border-border">
                          <p className="text-xs font-mono text-muted-foreground mb-2 tracking-wide uppercase">
                            Temporal Alignment Layer
                          </p>
                          <p className="text-sm text-foreground">{stage.temporal}</p>
                        </div>
                      )}
                      {stage.graph && (
                        <div className="pt-4 border-t border-border">
                          <p className="text-xs font-mono text-muted-foreground mb-3 tracking-wide uppercase">
                            Hyper-Relational Matrix
                          </p>
                          <div className="flex flex-wrap gap-3">
                            {stage.graph.map((g, i) => (
                              <span
                                key={i}
                                className="px-4 py-2 border border-border text-xs text-secondary-foreground rounded-full"
                              >
                                {g}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Stage 5: framework + agents */}
                  {stage.framework && (
                    <div className="grid sm:grid-cols-2 gap-8">
                      <div>
                        <p className="text-xs font-mono text-muted-foreground mb-4 tracking-wide uppercase">
                          Constitutional Framework
                        </p>
                        <ul className="space-y-2">
                          {stage.framework.map((f, i) => (
                            <li key={i} className="text-sm text-foreground">{f}</li>
                          ))}
                        </ul>
                      </div>
                      {stage.agents && (
                        <div>
                          <p className="text-xs font-mono text-muted-foreground mb-4 tracking-wide uppercase">
                            Agentic Array
                          </p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {stage.agents.map((a, i) => (
                              <span
                                key={i}
                                className="px-3 py-1.5 border border-border text-xs text-foreground rounded"
                              >
                                {a}
                              </span>
                            ))}
                          </div>
                          {stage.agentClosing && (
                            <p className="text-sm text-secondary-foreground font-medium">
                              {stage.agentClosing}
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Stage 6: validation + deliverables + integration */}
                  {stage.validation && (
                    <div className="space-y-8">
                      <div>
                        <p className="text-xs font-mono text-muted-foreground mb-3 tracking-wide uppercase">
                          Embedded Validation Gate
                        </p>
                        <ul className="space-y-2">
                          {stage.validation.map((v, i) => (
                            <li key={i} className="text-sm text-foreground">{v}</li>
                          ))}
                        </ul>
                      </div>
                      {stage.deliverables && (
                        <div className="pt-4 border-t border-border">
                          <p className="text-xs font-mono text-muted-foreground mb-3 tracking-wide uppercase">
                            Configurable Deliverables
                          </p>
                          <div className="flex flex-wrap gap-3 mb-3">
                            {stage.deliverables.map((d, i) => (
                              <span
                                key={i}
                                className="px-4 py-2 border border-border text-xs text-foreground rounded-full"
                              >
                                {d}
                              </span>
                            ))}
                          </div>
                          {stage.deliverableNote && (
                            <p className="text-sm text-muted-foreground">{stage.deliverableNote}</p>
                          )}
                        </div>
                      )}
                      {stage.integration && (
                        <div className="pt-4 border-t border-border">
                          <p className="text-xs font-mono text-muted-foreground mb-2 tracking-wide uppercase">
                            Enterprise Integration Delivery
                          </p>
                          <p className="text-sm text-foreground">{stage.integration}</p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Security summary */}
      <div className="px-8 md:px-16 pt-16 md:pt-20">
        <div className="max-w-[1120px] mx-auto border-t border-border pt-12">
          <div className="grid md:grid-cols-12 gap-8 md:gap-12">
            <div className="md:col-span-4">
              <span className="text-xs font-mono text-muted-foreground tracking-widest">
                FOUNDATION
              </span>
              <h3 className="text-2xl md:text-3xl font-serif text-foreground mt-2 mb-3">
                Security Layer
              </h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                Universal data protection underpinning the production lifecycle.
              </p>
            </div>
            <div className="md:col-span-8">
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  {
                    title: "Encryption & Data Protection",
                    items: ["End-to-end encryption (TLS 1.2/1.3)", "Encryption at rest (AES-256)", "Cryptographic key management"],
                  },
                  {
                    title: "Access Control & Identity",
                    items: ["Role-based access & least privilege", "MFA and enterprise SSO (SAML/OIDC)", "Automated authentication monitoring"],
                  },
                  {
                    title: "Data Isolation & Processing",
                    items: ["Logical tenant isolation", "Zero client data used for tuning", "Secure sandboxed analytical nodes"],
                  },
                  {
                    title: "Infrastructure & Resilience",
                    items: ["Hardened cloud hosting instances", "Network isolation & private subnets", "Centralised incident response logging"],
                  },
                ].map((block, i) => (
                  <div key={i}>
                    <p className="text-sm font-medium text-foreground mb-2">{block.title}</p>
                    <ul className="space-y-1">
                      {block.items.map((item, j) => (
                        <li key={j} className="text-xs text-muted-foreground">{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link
                  to="/security"
                  className="text-sm text-foreground underline underline-offset-4 hover:text-accent transition-colors"
                >
                  Read more about our security architecture →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PipelineOverview;

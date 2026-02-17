import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ── LOCKED TYPE SYSTEM ──────────────────────────────────────────────
 * H1  – Hero only:       text-4xl md:text-6xl lg:text-[4.5rem]
 * H2  – Section heads:   text-3xl md:text-[2.75rem] lg:text-5xl
 * H3  – Sub-labels:      text-xl md:text-2xl
 * Body:                  text-base
 * Lead:                  text-lg md:text-xl
 * Small / muted:         text-sm text-muted-foreground
 * ─────────────────────────────────────────────────────────────────── */

const pageContainer = "max-w-[1320px] mx-auto px-8 md:px-12 lg:px-16";
const prose = "max-w-[760px] mx-auto";

const h1 = "text-4xl md:text-6xl lg:text-[4.5rem] font-serif font-medium leading-[1.12] tracking-tight text-foreground";
const h2 = "text-3xl md:text-[2.75rem] lg:text-5xl font-serif font-medium leading-[1.14] tracking-[-0.01em] text-foreground";
const lead = "text-lg md:text-xl text-secondary-foreground leading-relaxed";
const body = "text-base text-muted-foreground leading-relaxed";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* SECTION 1 — DARK HERO */}
      <div className="bg-background text-foreground">
        <Navbar />
        <section className="pt-52 pb-[160px]">
          <div className={pageContainer}>
            <div className={prose}>
              <h1 className={`${h1} mb-12`}>
                Why Rubiklab exists
              </h1>
              <p className={`${lead} mb-10`} style={{ maxWidth: '100%' }}>
                Organisations generate more knowledge than they can govern, trust, or activate.
              </p>
              <div className="space-y-6">
                <p className={body}>
                  Documents accumulate. Research multiplies. Conversations expand across systems.
                  <br />
                  External data flows continuously.
                </p>
                <p className={body}>
                  Most AI tools attempt to layer automation on top of that complexity.
                </p>
                <p className={body}>
                  We built Rubiklab to solve the structural problem underneath it.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* SECTION 2 — LIGHT CORE NARRATIVE */}
      <div className="theme-light bg-background text-foreground">

        {/* 2A — Structural Challenge */}
        <section className="pt-[160px] pb-[140px]">
          <div className={pageContainer}>
            <div className={prose}>
              <h2 className={`${h2} mb-12`}>
                Without structure, knowledge creates risk
              </h2>
              <div className="space-y-6">
                <p className={body}>
                  Fragmented systems create duplication, blind spots, and noise. Valuable insight sits buried inside documents, transcripts, reports, and external data that are never properly connected.
                </p>
                <p className={body}>
                  AI layered onto fragmentation does not solve the problem. It magnifies it.
                </p>
                <p className="text-base text-foreground leading-relaxed font-medium mt-10">
                  When decisions matter, intelligence must be dependable.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 2B — What We Built */}
        <section className="pb-[140px]">
          <div className={pageContainer}>
            <div className={prose}>
              <h2 className={`${h2} mb-12`}>
                Infrastructure before automation
              </h2>
              <p className={`${body} mb-10`}>
                Rubiklab is a structured knowledge layer designed for complex organisations.
              </p>
              <div className="space-y-4 mb-16">
                <p className={body}>We connect internal and external sources.</p>
                <p className={body}>We apply rigorous tagging and validation.</p>
                <p className={body}>We enforce governance and transparency.</p>
                <p className={body}>We enable secure AI and agent-driven workflows.</p>
              </div>
              <div className="space-y-2">
                <p className="text-base text-foreground leading-relaxed font-medium">Automation follows architecture.</p>
                <p className="text-base text-foreground leading-relaxed font-medium">Activation follows structure.</p>
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* SECTION 3 — DARK SYSTEM BLOCK (How + Principles) */}
      <div className="bg-background text-foreground">
        <section className="pt-[160px] pb-[140px]">
          <div className="max-w-[1160px] mx-auto px-8 md:px-12 lg:px-16">
            <h2 className={`${h2} mb-16`}>
              How Rubiklab works
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-14 gap-y-12">
              {[
                { title: "Ingest", body: "We unify fragmented documents, research, conversations, and external data into a controlled foundation." },
                { title: "Structure", body: "We apply rigorous tagging and classification to ensure consistency and traceability." },
                { title: "Govern", body: "We enforce access controls, auditability, and lifecycle management across systems." },
                { title: "Activate", body: "We enable secure AI and agent-driven workflows built on governed intelligence." },
              ].map((item) => (
                <div key={item.title}>
                  <h3 className="text-xl md:text-2xl font-serif font-semibold text-foreground mb-4">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-[160px]">
          <div className="max-w-[1160px] mx-auto px-8 md:px-12 lg:px-16">
            <h2 className={`${h2} mb-16`}>
              Our principles
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-20 gap-y-14">
              {[
                { title: "Structure over shortcuts", body: "Durable systems outperform temporary solutions." },
                { title: "Governance over hype", body: "Trust and defensibility matter more than novelty." },
                { title: "Signal over volume", body: "More data does not equal better decisions." },
                { title: "Activation over storage", body: "Knowledge should move organisations forward." },
              ].map((item) => (
                <div key={item.title}>
                  <h3 className="text-xl md:text-2xl font-serif font-semibold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className={body}>
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* SECTION 4 — LIGHT CONSEQUENTIAL */}
      <div className="theme-light bg-background text-foreground">
        <section className="pt-[160px] pb-[140px]">
          <div className={pageContainer}>
            <div className={prose}>
              <h2 className={`${h2} mb-12`}>
                Built for consequential environments
              </h2>
              <p className={`${body} mb-10`}>
                Rubiklab serves organisations where decision quality carries weight.
              </p>
              <div className="space-y-6 mb-14">
                <p className={body}>Legal teams navigating complex matters.</p>
                <p className={body}>Research organisations interpreting diverse signals.</p>
                <p className={body}>Healthcare and publishing groups managing regulated knowledge.</p>
                <p className={body}>Enterprises and associations operating across multiple jurisdictions.</p>
              </div>
              <p className="text-base text-foreground leading-relaxed font-medium">
                When the stakes are high, clarity is a capability.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* SECTION 5 — LIGHT CLOSING */}
      <div className="theme-light bg-background text-foreground">
        <section className="py-[140px]">
          <div className={pageContainer}>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 lg:gap-x-12">
              <div className="md:col-span-7 mb-10">
                <h2 className="text-4xl md:text-6xl lg:text-[4.5rem] font-serif font-medium leading-[1.08] tracking-[-0.01em] text-foreground">
                  The future requires structure
                </h2>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 lg:gap-x-12">
              <div className="md:col-span-6">
                <p className={`${body} mb-16`}>
                  As organisations adopt AI and agent driven systems, structured foundations become essential.
                </p>
                <div className="space-y-2 mb-20">
                  <p className="text-base text-foreground leading-relaxed font-medium">
                    Activation without structure creates noise.
                  </p>
                  <p className="text-base text-foreground leading-relaxed font-medium">
                    Structure creates advantage.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/platform"
                    className="inline-block border border-foreground/40 text-foreground px-8 py-3 text-sm tracking-wide hover:bg-foreground hover:text-background transition-all duration-300"
                  >
                    Explore the platform
                  </a>
                  <a
                    href="#"
                    className="inline-block border border-foreground/40 text-foreground px-8 py-3 text-sm tracking-wide hover:bg-foreground hover:text-background transition-all duration-300"
                  >
                    Request a demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default About;

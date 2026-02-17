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

      {/* SECTION 1 — LIGHT: When knowledge fragments */}
      <div className="theme-light bg-background text-foreground">
        <section className="pt-[160px] pb-[140px]">
          <div className={pageContainer}>
            <div className={prose}>
              <h2 className={`${h2} mb-12`}>
                When knowledge fragments, risk grows
              </h2>
              <p className={`${lead} mb-10`}>
                Organisations rarely struggle with lack of information. They struggle with fragmentation.
              </p>
              <div className="space-y-6">
                <p className={body}>
                  Insight sits in reports, transcripts, dashboards, archives, inboxes, shared drives, and external feeds. Legacy systems coexist with real‑time data. Different formats. Different languages. Different standards.
                </p>
                <p className={body}>
                  Layering AI on top of this does not resolve the problem. It often amplifies inconsistency.
                </p>
                <p className="text-base text-foreground leading-relaxed font-medium mt-10">
                  When decisions matter, intelligence must be grounded, traceable, and complete.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2 — LIGHT: Technology should adapt */}
        <section className="pb-[140px]">
          <div className={pageContainer}>
            <div className={prose}>
              <h2 className={`${h2} mb-12`}>
                Technology should adapt to people
              </h2>
              <p className={`${body} mb-6`}>
                Most systems force teams to change how they work.
              </p>
              <p className={`${body} mb-10`}>
                Rubiklab works differently.
              </p>
              <div className="space-y-6 mb-14">
                <p className={body}>
                  We design workflows around existing practices, not the other way around. Analysts, lawyers, researchers and editors remain in control. The system supports their judgement rather than replacing it.
                </p>
                <p className={body}>
                  Automation is introduced where it reduces friction. Oversight remains where it protects quality.
                </p>
              </div>
              <p className="text-base text-foreground leading-relaxed font-medium">
                The result is adoption without disruption.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* SECTION 3 — DARK: How Rubiklab works */}
      <div className="bg-background text-foreground">
        <section className="pt-[160px] pb-[140px]">
          <div className="max-w-[1160px] mx-auto px-8 md:px-12 lg:px-16">
            <h2 className={`${h2} mb-12`}>
              How Rubiklab works
            </h2>
            <div className={`${prose} ml-0`}>
              <div className="space-y-6 mb-14">
                <p className={body}>
                  We bring together internal archives and live external data into a single governed environment.
                </p>
                <p className={body}>
                  Documents, research, conversations, reviews, regulatory material, market signals and historical records coexist in one ecosystem.
                </p>
                <p className={body}>
                  Data is cleaned, tagged and validated using deterministic pipelines before any AI layer interacts with it.
                </p>
              </div>
              <p className="text-base text-foreground leading-relaxed font-medium mb-14">
                This matters.
              </p>
              <div className="space-y-6 mb-14">
                <p className={body}>
                  Because our analysis does not rely solely on probabilistic language models. It is anchored in prepared data, defined taxonomies and transparent processing steps.
                </p>
                <p className={body}>
                  The outcome is deeper signal across both structured and unstructured sources, across multiple languages, without losing traceability.
                </p>
                <p className={body}>
                  Users can explore broadly, ask complex questions, and follow the reasoning behind every output.
                </p>
              </div>
              <p className="text-base text-foreground leading-relaxed font-medium">
                Curiosity is encouraged. Confidence is earned.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 4 — DARK: What makes the difference */}
        <section className="pb-[160px]">
          <div className="max-w-[1160px] mx-auto px-8 md:px-12 lg:px-16">
            <h2 className={`${h2} mb-16`}>
              What makes the difference
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-20 gap-y-14">
              {[
                { title: "Diverse signals, not narrow datasets", body: "We combine legacy records with dynamic external sources to avoid blind spots." },
                { title: "Method before model", body: "AI is applied to prepared data, not raw noise." },
                { title: "Workflow alignment", body: "Technology fits existing roles and responsibilities." },
                { title: "Clarity of reasoning", body: "Outputs can be inspected, traced and challenged." },
                { title: "Depth across formats and languages", body: "Text, transcripts, reports, reviews and regulatory material analysed consistently across markets." },
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
            <p className="text-base text-foreground leading-relaxed font-medium mt-16">
              This is where reliability comes from.
            </p>
          </div>
        </section>
      </div>

      {/* SECTION 5 — LIGHT: Built for complex environments */}
      <div className="theme-light bg-background text-foreground">
        <section className="pt-[160px] pb-[140px]">
          <div className={pageContainer}>
            <div className={prose}>
              <h2 className={`${h2} mb-12`}>
                Built for complex environments
              </h2>
              <div className="space-y-6 mb-14">
                <p className={body}>Legal teams navigating intricate matters.</p>
                <p className={body}>Research organisations interpreting diverse signals.</p>
                <p className={body}>Healthcare and publishing groups managing sensitive knowledge.</p>
                <p className={body}>Enterprises operating across multiple jurisdictions.</p>
              </div>
              <p className={`${body} mb-2`}>
                These organisations operate beyond simple reporting.
              </p>
              <p className="text-base text-foreground leading-relaxed font-medium">
                They require dependable understanding.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* SECTION 6 — LIGHT: Intelligence that holds up */}
      <div className="theme-light bg-background text-foreground">
        <section className="pt-[180px] pb-[160px]">
          <div className={pageContainer}>
            <div className={prose}>
              <h2 className={`${h2} mb-12`}>
                Intelligence that holds up under scrutiny
              </h2>
              <p className={`${body} mb-10`}>
                As AI becomes embedded in organisations, the difference will not be speed. It will be integrity.
              </p>
              <div className="space-y-6 mb-14">
                <p className={body}>Scale without method creates noise.</p>
                <p className={body}>Automation without discipline creates risk.</p>
              </div>
              <p className="text-base text-foreground leading-relaxed font-medium mb-20">
                Rubiklab exists to ensure intelligence remains reliable as systems grow more complex.
              </p>
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
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default About;

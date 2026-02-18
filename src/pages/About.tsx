import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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

const About = () => {
  return (
    <div className="min-h-screen">
      {/* ═══ DARK HERO ═══ */}
      <div className="bg-background text-foreground">
        <Navbar />
        <section className="pt-32 pb-20 px-8 md:px-16">
           <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl md:text-7xl lg:text-[6.5rem] font-serif font-medium leading-[0.95] mb-20 text-foreground tracking-tight max-w-4xl">
              Why Rubiklab exists
            </h1>
          </div>
        </section>
      </div>

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
                <p className="text-[18px] md:text-[19px] lg:text-[20px] leading-[1.6] text-muted-foreground max-w-[60ch]">
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
                { title: "Diverse signals, not narrow datasets", body: "We combine legacy records with dynamic external sources to avoid blind spots." },
                { title: "Method before model", body: "AI is applied to prepared data, not raw noise." },
                { title: "Workflow alignment", body: "Technology fits existing roles and responsibilities." },
                { title: "Clarity of reasoning", body: "Outputs can be inspected, traced and challenged." },
                { title: "Depth across formats and languages", body: "Text, transcripts, reports, reviews and regulatory material analysed consistently across markets." },
                { title: "Tailored output, not generic templates", body: "Automated reports adapt to each client's tone of voice, branding and structure — because intelligence should speak the way your organisation does." },
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
                  They operate where ambiguity has consequences.
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

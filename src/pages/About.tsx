import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const gridContainer = "max-w-[1320px] mx-auto px-8 md:px-12 lg:px-16";
const grid12 = "grid grid-cols-1 md:grid-cols-12 gap-x-8 lg:gap-x-12";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* SECTION 1 — DARK HERO */}
      <div className="bg-background text-foreground">
        <Navbar />
        <section className="pt-40 pb-[160px]">
          <div className={gridContainer}>
            <div className={grid12}>
              <h1 className="md:col-span-8 text-5xl md:text-7xl lg:text-[5.5rem] font-serif font-medium leading-[1.08] tracking-tight text-foreground mb-10">
                Why Rubiklab exists
              </h1>
            </div>
            <div className={grid12}>
              <div className="md:col-span-6">
                <p className="text-lg md:text-xl text-secondary-foreground leading-relaxed mb-12">
                  Organisations generate more knowledge than they can govern, trust, or activate.
                </p>
                <div className="space-y-6">
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Documents accumulate. Research multiplies. Conversations expand across systems. External data flows continuously.
                  </p>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Most AI tools attempt to layer automation on top of that complexity.
                  </p>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    We built Rubiklab to solve the structural problem underneath it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* SECTION 2 — LIGHT CORE NARRATIVE */}
      <div className="theme-light bg-background text-foreground">

        {/* 2A — Structural Challenge */}
        <section className="pt-[140px] pb-[120px]">
          <div className={gridContainer}>
            <div className={grid12}>
              <div className="md:col-span-6">
                <h2 className="text-3xl md:text-5xl lg:text-[3.5rem] font-serif font-medium leading-[1.12] tracking-[-0.01em] text-foreground">
                  Without structure,<br />
                  knowledge creates risk
                </h2>
              </div>
              <div className="md:col-span-6 md:pt-4 mt-10 md:mt-0">
                <div className="space-y-6">
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Fragmented systems produce duplication, blind spots, and noise. Valuable insight is buried inside documents, transcripts, reports, and external sources that are never properly connected.
                  </p>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    AI without governance amplifies that fragility.
                  </p>
                  <p className="text-base text-foreground leading-relaxed font-medium mt-12">
                    In consequential environments, fragile intelligence is unacceptable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2B — What We Built */}
        <section className="pb-[120px]">
          <div className={gridContainer}>
            <div className={grid12}>
              <div className="md:col-span-6">
                <h2 className="text-4xl md:text-6xl lg:text-[4rem] font-serif font-medium leading-[1.1] tracking-[-0.01em] text-foreground">
                  Infrastructure<br />
                  before automation
                </h2>
              </div>
              <div className="md:col-span-6 md:pt-4 mt-10 md:mt-0">
                <p className="text-base text-muted-foreground leading-relaxed mb-10">
                  Rubiklab is a structured knowledge layer designed for complex organisations.
                </p>
                <div className="space-y-4 mb-16">
                  <p className="text-base text-foreground/80 leading-relaxed">We ingest diverse internal and external sources.</p>
                  <p className="text-base text-foreground/80 leading-relaxed">We apply rigorous tagging and validation.</p>
                  <p className="text-base text-foreground/80 leading-relaxed">We enforce governance and transparency.</p>
                  <p className="text-base text-foreground/80 leading-relaxed">We enable secure AI and agent driven workflows.</p>
                </div>
                <div className="space-y-2">
                  <p className="text-base text-foreground leading-relaxed font-medium">Automation follows architecture.</p>
                  <p className="text-base text-foreground leading-relaxed font-medium">Activation follows structure.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2C — How Rubiklab Works */}
        <section className="pb-[120px]">
          <div className={gridContainer}>
            <div className={grid12}>
              <div className="md:col-span-6 mb-12 md:mb-16">
                <h2 className="text-3xl md:text-5xl font-serif font-medium leading-[1.12] tracking-[-0.01em] text-foreground">
                  How Rubiklab works
                </h2>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
              {[
                { title: "Ingest", body: "We unify fragmented documents, research, conversations, and external data into a controlled foundation." },
                { title: "Structure", body: "We apply rigorous tagging and classification to ensure consistency and traceability." },
                { title: "Govern", body: "We enforce access controls, auditability, and lifecycle management across systems." },
                { title: "Activate", body: "We enable secure AI and agent driven workflows built on governed intelligence." },
              ].map((item) => (
                <div key={item.title}>
                  <h3 className="text-2xl font-serif font-semibold text-foreground mb-4">
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

        {/* 2D — Our Principles */}
        <section className="pb-[140px]">
          <div className={gridContainer}>
            <div className={grid12}>
              <div className="md:col-span-5 mb-12 md:mb-0">
                <h2 className="text-3xl md:text-5xl font-serif font-medium leading-[1.12] tracking-[-0.01em] text-foreground">
                  Our principles
                </h2>
              </div>
              <div className="md:col-span-6 md:col-start-7 space-y-14">
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
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* SECTION 3 — DARK EMPHASIS */}
      <div className="bg-background text-foreground">
        <section className="py-[140px]">
          <div className={gridContainer}>
            <div className={grid12}>
              <div className="md:col-span-7 mb-10">
                <h2 className="text-3xl md:text-5xl lg:text-[3.5rem] font-serif font-medium leading-[1.12] tracking-[-0.01em] text-foreground">
                  Built for consequential<br />
                  environments
                </h2>
              </div>
            </div>
            <div className={grid12}>
              <div className="md:col-span-6 mb-16 md:mb-0">
                <p className="text-lg text-secondary-foreground leading-relaxed mb-20">
                  Rubiklab serves organisations where decision quality carries weight.
                </p>
                <div className="space-y-5">
                  <p className="text-base font-medium text-foreground leading-relaxed tracking-wide">Structure is not optional.</p>
                  <p className="text-base font-medium text-foreground leading-relaxed tracking-wide">Governance is not decorative.</p>
                  <p className="text-base font-medium text-foreground leading-relaxed tracking-wide">Signal integrity is critical.</p>
                </div>
              </div>
              <div className="md:col-span-5 md:col-start-8">
                <div className="space-y-8">
                  <p className="text-base text-muted-foreground leading-relaxed">Legal teams navigating complex matters.</p>
                  <p className="text-base text-muted-foreground leading-relaxed">Research organisations interpreting diverse signals.</p>
                  <p className="text-base text-muted-foreground leading-relaxed">Healthcare and publishing groups managing regulated knowledge.</p>
                  <p className="text-base text-muted-foreground leading-relaxed">Enterprises and associations operating across multiple jurisdictions.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* SECTION 4 — LIGHT CLOSING */}
      <div className="theme-light bg-background text-foreground">
        <section className="py-[140px]">
          <div className={gridContainer}>
            <div className={grid12}>
              <div className="md:col-span-7 mb-10">
                <h2 className="text-4xl md:text-6xl lg:text-[4.5rem] font-serif font-medium leading-[1.08] tracking-[-0.01em] text-foreground">
                  The future requires structure
                </h2>
              </div>
            </div>
            <div className={grid12}>
              <div className="md:col-span-6">
                <p className="text-base text-muted-foreground leading-relaxed mb-16">
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

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* SECTION 1 — DARK HERO */}
      <div className="bg-background text-foreground">
        <Navbar />
        <section className="pt-36 pb-32 md:pb-40 px-8 md:px-16">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-serif font-medium leading-[0.95] tracking-tight text-foreground mb-16">
              Why Rubiklab exists
            </h1>
            <p className="text-lg md:text-xl text-secondary-foreground leading-relaxed mb-12 max-w-[38ch]">
              Organisations generate more knowledge than they can govern, trust, or activate.
            </p>
            <div className="max-w-[60ch] space-y-6">
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
        </section>
      </div>

      {/* SECTION 2 — LIGHT CORE NARRATIVE (single continuous background) */}
      <div className="theme-light bg-background text-foreground">

        {/* 2A — Structural Challenge */}
        <section className="pt-32 md:pt-40 pb-24 md:pb-32 px-8 md:px-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl lg:text-[3.5rem] font-serif font-medium leading-[1.05] tracking-tight text-foreground mb-14">
              Knowledge without structure creates risk
            </h2>
            <div className="max-w-[60ch] space-y-6">
              <p className="text-base text-muted-foreground leading-relaxed">
                Fragmented systems produce duplication, blind spots, and noise. Valuable insight is buried inside documents, transcripts, reports, and external sources that are never properly connected.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                AI without governance amplifies that fragility.
              </p>
              <p className="text-base text-foreground leading-relaxed font-medium mt-10">
                In consequential environments, fragile intelligence is unacceptable.
              </p>
            </div>
          </div>
        </section>

        {/* 2B — What We Built */}
        <section className="pb-24 md:pb-32 px-8 md:px-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl lg:text-[4rem] font-serif font-medium leading-[1] tracking-tight text-foreground mb-14">
              Infrastructure before automation
            </h2>
            <div className="max-w-[60ch]">
              <p className="text-base text-muted-foreground leading-relaxed mb-10">
                Rubiklab is a structured knowledge layer designed for complex organisations.
              </p>
              <div className="space-y-3 mb-14">
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
        </section>

        {/* 2C — How Rubiklab Works */}
        <section className="pb-24 md:pb-32 px-8 md:px-16">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif font-medium leading-[1.05] tracking-tight text-foreground mb-16">
              How Rubiklab works
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-10">
              {[
                { title: "Ingest", body: "We unify fragmented documents, research, conversations, and external data into a controlled foundation." },
                { title: "Structure", body: "We apply rigorous tagging and classification to ensure consistency and traceability." },
                { title: "Govern", body: "We enforce access controls, auditability, and lifecycle management across systems." },
                { title: "Activate", body: "We enable secure AI and agent driven workflows built on governed intelligence." },
              ].map((item) => (
                <div key={item.title}>
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
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
        <section className="pb-32 md:pb-40 px-8 md:px-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif font-medium leading-[1.05] tracking-tight text-foreground mb-20">
              Our principles
            </h2>
            <div className="space-y-16">
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
        </section>
      </div>

      {/* SECTION 3 — DARK EMPHASIS */}
      <div className="bg-background text-foreground">
        <section className="py-32 md:py-40 px-8 md:px-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl lg:text-[3.5rem] font-serif font-medium leading-[1.05] tracking-tight text-foreground mb-14">
              Built for consequential environments
            </h2>
            <p className="text-lg text-secondary-foreground leading-relaxed mb-14 max-w-[50ch]">
              Rubiklab serves organisations where decision quality carries weight.
            </p>
            <div className="space-y-4 mb-20">
              <p className="text-base text-muted-foreground leading-relaxed">Legal teams navigating complex matters.</p>
              <p className="text-base text-muted-foreground leading-relaxed">Research organisations interpreting diverse signals.</p>
              <p className="text-base text-muted-foreground leading-relaxed">Healthcare and publishing groups managing regulated knowledge.</p>
              <p className="text-base text-muted-foreground leading-relaxed">Enterprises and associations operating across multiple jurisdictions.</p>
            </div>
            <div className="space-y-3">
              <p className="text-base font-medium text-foreground leading-relaxed">Structure is not optional.</p>
              <p className="text-base font-medium text-foreground leading-relaxed">Governance is not decorative.</p>
              <p className="text-base font-medium text-foreground leading-relaxed">Signal integrity is critical.</p>
            </div>
          </div>
        </section>
      </div>

      {/* SECTION 4 — LIGHT CLOSING */}
      <div className="theme-light bg-background text-foreground">
        <section className="py-32 md:py-40 px-8 md:px-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl lg:text-[4rem] font-serif font-medium leading-[1] tracking-tight text-foreground mb-14">
              The future requires structure
            </h2>
            <div className="max-w-[60ch] space-y-6 mb-14">
              <p className="text-base text-muted-foreground leading-relaxed">
                As organisations adopt AI and agent driven systems, structured foundations become essential.
              </p>
              <div className="mt-10 space-y-2">
                <p className="text-base text-foreground leading-relaxed font-medium">
                  Activation without structure creates noise.
                </p>
                <p className="text-base text-foreground leading-relaxed font-medium">
                  Structure creates advantage.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-16">
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
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default About;

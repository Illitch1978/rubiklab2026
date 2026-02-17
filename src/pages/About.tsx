import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* SECTION 1 — DARK */}
      <div className="bg-background text-foreground">
        <Navbar />
        <section className="pt-36 pb-28 md:pb-36 px-8 md:px-16">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-serif font-medium leading-[0.95] tracking-tight text-foreground mb-16">
              Why Rubiklab exists
            </h1>
            <p className="text-lg md:text-xl text-secondary-foreground leading-relaxed mb-10 max-w-[38ch]">
              Organisations generate more knowledge than they can govern, trust, or activate.
            </p>
            <div className="max-w-[65ch] space-y-6">
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

      {/* SECTION 2 — LIGHT */}
      <div className="theme-light bg-background text-foreground">
        <section className="py-28 md:py-36 px-8 md:px-16">
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
              <p className="text-base text-foreground leading-relaxed font-medium">
                In consequential environments, fragile intelligence is unacceptable.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* SECTION 3 — DARK */}
      <div className="bg-background text-foreground">
        <section className="py-28 md:py-36 px-8 md:px-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl lg:text-[4.5rem] font-serif font-medium leading-[1] tracking-tight text-foreground mb-14">
              Infrastructure before automation
            </h2>
            <div className="max-w-[60ch] space-y-8">
              <p className="text-base text-muted-foreground leading-relaxed">
                Rubiklab is a structured knowledge layer designed for complex organisations.
              </p>
              <div className="space-y-3">
                <p className="text-base text-secondary-foreground leading-relaxed">We ingest diverse internal and external sources.</p>
                <p className="text-base text-secondary-foreground leading-relaxed">We apply rigorous tagging and validation.</p>
                <p className="text-base text-secondary-foreground leading-relaxed">We enforce governance and transparency.</p>
                <p className="text-base text-secondary-foreground leading-relaxed">We enable secure AI and agent driven workflows.</p>
              </div>
              <div className="pt-4 space-y-2">
                <p className="text-base text-foreground leading-relaxed">Automation follows architecture.</p>
                <p className="text-base text-foreground leading-relaxed">Activation follows structure.</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* SECTION 4 — LIGHT */}
      <div className="theme-light bg-background text-foreground">
        <section className="py-28 md:py-36 px-8 md:px-16">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif font-medium leading-[1.05] tracking-tight text-foreground mb-16">
              How Rubiklab works
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
              {[
                {
                  title: "Ingest",
                  body: "We unify fragmented documents, research, conversations, and external data into a controlled foundation.",
                },
                {
                  title: "Structure",
                  body: "We apply rigorous tagging, validation, and classification to ensure consistency and traceability.",
                },
                {
                  title: "Govern",
                  body: "We enforce access controls, lifecycle management, and auditability across systems.",
                },
                {
                  title: "Activate",
                  body: "We enable secure AI and agent driven workflows that operate on governed intelligence.",
                },
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
      </div>

      {/* SECTION 5 — DARK */}
      <div className="bg-background text-foreground">
        <section className="py-28 md:py-36 px-8 md:px-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif font-medium leading-[1.05] tracking-tight text-foreground mb-20">
              Our principles
            </h2>
            <div className="space-y-16">
              {[
                {
                  title: "Structure over shortcuts",
                  body: "Durable systems outperform temporary solutions.",
                },
                {
                  title: "Governance over hype",
                  body: "Trust and defensibility matter more than novelty.",
                },
                {
                  title: "Signal over volume",
                  body: "More data does not equal better decisions.",
                },
                {
                  title: "Activation over storage",
                  body: "Knowledge should move organisations forward.",
                },
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

      {/* SECTION 6 — LIGHT */}
      <div className="theme-light bg-background text-foreground">
        <section className="py-28 md:py-36 px-8 md:px-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif font-medium leading-[1.05] tracking-tight text-foreground mb-14">
              Built for consequential environments
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-14 max-w-[50ch]">
              Rubiklab serves organisations where decision quality carries weight.
            </p>
            <div className="space-y-4 mb-16">
              {[
                "Legal teams navigating complex matters.",
                "Research organisations interpreting diverse signals.",
                "Healthcare and publishing groups managing regulated knowledge.",
                "Enterprises and associations operating across multiple jurisdictions.",
              ].map((line) => (
                <p key={line} className="text-base text-foreground leading-relaxed">
                  {line}
                </p>
              ))}
            </div>
            <div className="space-y-2">
              <p className="text-base font-medium text-foreground leading-relaxed">Structure is not optional.</p>
              <p className="text-base font-medium text-foreground leading-relaxed">Governance is not decorative.</p>
              <p className="text-base font-medium text-foreground leading-relaxed">Signal integrity is critical.</p>
            </div>
          </div>
        </section>
      </div>

      {/* SECTION 7 — DARK (Closing) */}
      <div className="bg-background text-foreground">
        <section className="py-28 md:py-36 px-8 md:px-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl lg:text-[4.5rem] font-serif font-medium leading-[1] tracking-tight text-foreground mb-14">
              The future requires structure
            </h2>
            <div className="max-w-[60ch] space-y-6 mb-16">
              <p className="text-base text-muted-foreground leading-relaxed">
                As organisations adopt AI and agent driven systems, structured foundations become essential.
              </p>
              <p className="text-base text-foreground leading-relaxed">
                Activation without structure creates noise.
              </p>
              <p className="text-base text-foreground leading-relaxed font-medium">
                Structure creates advantage.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/platform"
                className="inline-block border border-foreground/60 text-foreground px-8 py-3 text-sm tracking-wide hover:bg-foreground hover:text-primary-foreground transition-all duration-300"
              >
                Explore the platform
              </a>
              <a
                href="#"
                className="inline-block border border-foreground/60 text-foreground px-8 py-3 text-sm tracking-wide hover:bg-foreground hover:text-primary-foreground transition-all duration-300"
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

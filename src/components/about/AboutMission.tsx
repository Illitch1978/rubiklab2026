const investors = ["OpenAI", "Sequoia", "Kleiner Perkins", "a16z", "Google Ventures", "EQT"];

const AboutMission = () => {
  return (
    <section className="py-24 md:py-32 px-8 md:px-16 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-8">
          Designed to scale
        </h2>
        <p className="text-muted-foreground text-base md:text-lg max-w-3xl leading-relaxed mb-12">
          Harvey is domain-specific AI for legal and professional services. Our products streamline workflows in areas including contract analysis, due diligence, compliance, and litigation to drive efficiency and value. Global law firms and Fortune 500 enterprises around the world use Harvey to enable faster, smarter decision-making.
        </p>

        <div className="flex flex-wrap gap-6 items-center mb-16">
          {investors.map((name, i) => (
            <span
              key={i}
              className="text-sm font-medium text-muted-foreground/70 tracking-wide"
            >
              {name}
            </span>
          ))}
        </div>

        <blockquote className="border-l-2 border-foreground/20 pl-8 py-4 max-w-2xl">
          <p className="text-xl md:text-2xl font-serif text-foreground leading-relaxed mb-4">
            "If we took Harvey away from our staff, there'd be a riot."
          </p>
          <footer>
            <p className="text-sm font-semibold text-foreground">Bivek Sharma</p>
            <p className="text-sm text-muted-foreground">
              Chief AI Officer, PwC UK and AI Leader, EMEA
            </p>
          </footer>
        </blockquote>
      </div>
    </section>
  );
};

export default AboutMission;

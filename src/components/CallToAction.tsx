const CallToAction = () => {
  return (
    <section className="py-24 md:py-32 px-8 md:px-16 border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mb-8">
          Insight you can trace and test
        </h3>
        <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          In Studio, conclusions are not endpoints. They can be unpacked, reviewed and strengthened. Every finding is linked to its sources, processing steps and confidence levels, so teams can examine the reasoning, compare alternatives and refine assumptions before acting. Past reports, live data and new initiatives sit in one governed environment, making it possible to revisit earlier work, test new hypotheses and move from exploration to execution with clarity and control.
        </p>
        <a
          href="#"
          className="inline-block border border-foreground/60 text-foreground px-8 py-3 text-sm tracking-wide hover:bg-foreground hover:text-primary-foreground transition-all duration-300"
        >
          Request a Demo
        </a>
      </div>
    </section>
  );
};

export default CallToAction;

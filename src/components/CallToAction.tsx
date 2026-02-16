const CallToAction = () => {
  return (
    <section className="py-24 md:py-32 px-8 md:px-16 border-t border-border">
      <div className="max-w-3xl mx-auto text-center">
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mb-8">
          Activate your intelligence
        </h3>
        <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          If your organisation depends on complex knowledge, fragmented data, or high-stakes decisions, Rubiklab provides the structure, governance, and activation layer required to move forward with confidence.
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

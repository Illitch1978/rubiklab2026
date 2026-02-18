const SecurityBlog = () => {
  return (
    <section className="py-24 px-8 md:px-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6">
          Security that holds under scrutiny
        </h2>
        <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-4 max-w-3xl">
          As AI becomes embedded into decision-making systems, reliability matters more than speed.
        </p>
        <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-10 max-w-3xl">
          Rubiklab is built so intelligence remains dependable as complexity grows.
        </p>
        <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-3xl">
          For detailed documentation or a technical briefing, our team is{" "}
          <a
            href="mailto:support@rubiklab.ai"
            className="text-accent underline underline-offset-4 hover:opacity-80 transition-opacity"
          >
            available
          </a>
          .
        </p>
      </div>
    </section>
  );
};

export default SecurityBlog;

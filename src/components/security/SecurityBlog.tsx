const SecurityBlog = () => {
  return (
    <section className="py-24 px-8 md:px-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6">
          Security is a prerequisite
        </h2>
        <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-10 max-w-3xl">
          Explore our documentation or request a detailed security briefing.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#"
            className="inline-block bg-foreground text-background px-6 py-3 text-sm font-medium rounded hover:opacity-90 transition-opacity"
          >
            Access Security Documentation
          </a>
          <a
            href="mailto:support@rubiklab.ai"
            className="inline-block border border-border text-foreground px-6 py-3 text-sm font-medium rounded hover:border-foreground/50 transition-colors"
          >
            Request a Security Briefing
          </a>
        </div>
      </div>
    </section>
  );
};

export default SecurityBlog;

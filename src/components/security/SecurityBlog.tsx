const SecurityBlog = () => {
  return (
    <section className="py-[140px] px-8 md:px-16 bg-[hsl(20,10%,6%)]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-[hsl(40,30%,92%)] mb-6 max-w-[680px]">
          Security is a prerequisite
        </h2>
        <p className="text-[hsl(30,10%,55%)] text-base md:text-lg leading-relaxed mb-12 max-w-[680px]">
          Explore our documentation or request a detailed security briefing.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#"
            className="inline-block bg-[hsl(40,30%,92%)] text-[hsl(20,10%,6%)] px-6 py-3 text-sm font-medium rounded hover:opacity-90 transition-opacity"
          >
            Access Security Documentation
          </a>
          <a
            href="mailto:support@rubiklab.ai"
            className="inline-block border border-[hsl(20,10%,28%)] text-[hsl(40,30%,92%)] px-6 py-3 text-sm font-medium rounded hover:border-[hsl(40,30%,60%)] transition-colors"
          >
            Request a Security Briefing
          </a>
        </div>
      </div>
    </section>
  );
};

export default SecurityBlog;

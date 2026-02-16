const SecurityHero = () => {
  return (
    <section className="pt-32 pb-20 px-8 md:px-16">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm font-medium text-foreground mb-6">Security</p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-foreground leading-[1.05] mb-12">
          For the Most<br />Sensitive Matters
        </h1>
        <p className="text-muted-foreground text-base md:text-lg max-w-md mb-10 leading-relaxed">
          Harvey keeps your client data safe with world-class security and data privacy measures.
        </p>
        <a
          href="#"
          className="inline-block bg-foreground text-background px-6 py-3 text-sm font-medium rounded hover:opacity-90 transition-opacity"
        >
          Explore Security Portal
        </a>
      </div>
    </section>
  );
};

export default SecurityHero;

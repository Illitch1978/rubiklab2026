const SecurityFundamental = () => {
  return (
    <section className="py-24 px-8 md:px-16">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-serif text-foreground mb-6">
          Security is operational, not cosmetic
        </h3>
        <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-4 max-w-3xl">
          Data protection spans the full lifecycle.
        </p>
        <ul className="text-muted-foreground text-base md:text-lg leading-relaxed mb-4 max-w-3xl space-y-2 list-none">
          <li>Access is controlled.</li>
          <li>Data is encrypted in transit and at rest.</li>
          <li>Processing pipelines are deterministic before any AI interaction.</li>
          <li>Administrative actions are logged and traceable.</li>
        </ul>
        <p className="text-secondary-foreground text-base md:text-lg leading-relaxed mb-10 max-w-3xl font-medium">
          Oversight remains possible at every stage.
        </p>
        <a
          href="#"
          className="inline-block bg-foreground text-background px-6 py-3 text-sm font-medium rounded hover:opacity-90 transition-opacity"
        >
          Explore security documentation
        </a>
      </div>
    </section>
  );
};

export default SecurityFundamental;

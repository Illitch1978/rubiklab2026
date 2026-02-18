const SecurityClientIsolation = () => {
  return (
    <section className="py-24 px-8 md:px-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6">
          Client environments are segregated
        </h2>
        <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-4 max-w-3xl">
          Client data is logically and operationally segregated.
        </p>
        <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-4 max-w-3xl">
          Each environment operates with distinct processing boundaries, preventing cross-client exposure.
        </p>
        <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8 max-w-3xl">
          Processing occurs within isolated computation environments, even during high-load analytical operations.
        </p>
        <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-4 max-w-3xl">
          Access controls operate at multiple levels:
        </p>
        <ul className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8 max-w-3xl space-y-2 list-none">
          <li>• Granular client-level permissions</li>
          <li>• Internal least-privilege enforcement</li>
          <li>• Comprehensive audit logging</li>
        </ul>
        <p className="text-secondary-foreground text-base md:text-lg leading-relaxed max-w-3xl font-medium">
          Every access event is traceable.
        </p>
      </div>
    </section>
  );
};

export default SecurityClientIsolation;

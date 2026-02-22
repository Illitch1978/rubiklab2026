const ProductsGrid = () => {
  return (
    <section className="py-24 md:py-32 px-8 md:px-16 border-t border-border">
      <div className="max-w-[1120px] mx-auto text-center">
        <h3 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
          Experience Studio in action
        </h3>
        <p className="text-base text-muted-foreground max-w-xl mx-auto leading-relaxed mb-3">
          Explore a real project environment with live data, structured reasoning and traceable outputs.
        </p>
        <p className="text-sm text-muted-foreground/70 mb-10">
          This is a live project environment. The same system our clients use.
        </p>
        <a
          href="#"
          className="inline-block text-sm tracking-wide px-8 py-3 border border-foreground/20 text-foreground hover:bg-foreground hover:text-background transition-colors duration-300"
        >
          Explore a live project
        </a>
      </div>
    </section>
  );
};

export default ProductsGrid;

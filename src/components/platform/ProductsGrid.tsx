const ProductsGrid = () => {
  return (
    <section className="py-24 md:py-32 px-8 md:px-16 border-t border-border">
      <div className="max-w-[1120px] mx-auto">
        <div className="rounded-xl border border-dashed border-foreground/20 bg-secondary/30 flex flex-col items-center justify-center py-32 md:py-40 px-8">
          <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-3">
            Coming Soon
          </p>
          <h3 className="text-2xl md:text-3xl font-serif text-foreground mb-3 text-center">
            Live Demo
          </h3>
          <p className="text-sm text-muted-foreground text-center max-w-md leading-relaxed">
            An interactive environment where you can explore the platform first-hand. No setup required.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductsGrid;

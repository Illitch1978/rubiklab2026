const clients = [
  "Gleiss Lutz", "CMS", "Cuatrecasas", "Thompson Hine", "Merck",
  "Comcast", "Dentons", "BakerHostetler", "P&G", "Vinson & Elkins",
  "Reed Smith", "PwC", "O'Melveny", "Macfarlanes", "A&O Shearman",
];

const LogoTicker = () => {
  return (
    <section className="relative border-t border-border bg-background py-5 overflow-hidden">
      <div className="flex items-center">
        <div className="flex items-center gap-12 logo-scroll whitespace-nowrap">
          {[...clients, ...clients].map((name, i) => (
            <span
              key={i}
              className="text-sm font-medium text-muted-foreground/70 tracking-wide flex-shrink-0"
            >
              {name}
            </span>
          ))}
        </div>
      </div>

      <div className="absolute right-0 top-0 bottom-0 flex items-center pr-4">
        <a
          href="#"
          className="text-xs border border-border text-secondary-foreground px-4 py-2 hover:bg-secondary transition-colors bg-background z-10"
        >
          Our Customers
        </a>
      </div>
    </section>
  );
};

export default LogoTicker;

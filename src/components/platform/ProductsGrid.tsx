import { MessageSquare, FolderLock, GitBranch, Search, Globe } from "lucide-react";

const products = [
  {
    icon: MessageSquare,
    name: "Assistant",
    description: "Ask questions, analyze documents, and draft faster with domain-specific AI.",
    link: "#",
  },
  {
    icon: FolderLock,
    name: "Vault",
    description: "Securely store, organize, and bulk analyze legal documents.",
    link: "#",
  },
  {
    icon: GitBranch,
    name: "Workflows",
    description: "Run pre-built workflows or build your own, tailored to your firm's needs.",
    link: "#",
  },
  {
    icon: Search,
    name: "Knowledge",
    description: "Research complex legal, regulatory, and tax questions across domains.",
    link: "#",
  },
  {
    icon: Globe,
    name: "Ecosystem",
    description: "Leverage the power of Harvey where you already work.",
    link: "#",
  },
];

const ProductsGrid = () => {
  return (
    <section className="py-24 md:py-32 px-8 md:px-16 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-4 max-w-2xl">
          <span className="font-semibold">One platform engineered to elevate your entire team.</span>{" "}
          <span className="text-muted-foreground">
            Navigate every legal challenge with purpose-built tools.
          </span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {products.map((p, i) => (
            <a
              key={i}
              href={p.link}
              className="group p-8 rounded-xl bg-card border border-border hover:border-foreground/20 transition-all"
            >
              <div className="w-full aspect-[4/3] rounded-lg bg-secondary mb-6 flex items-center justify-center overflow-hidden">
                <p.icon className="w-12 h-12 text-muted-foreground/40" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                {p.name}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {p.description}
              </p>
              <span className="text-sm text-foreground group-hover:text-accent transition-colors">
                Learn More →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsGrid;

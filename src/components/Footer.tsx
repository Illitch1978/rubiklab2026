import { Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-10 md:py-14 lg:py-20">
      <div className="max-w-[1120px] mx-auto px-6 md:px-12 lg:px-[72px]">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-6 lg:gap-8 mb-16">
          {/* Brand column */}
          <div className="col-span-2">
            <a href="/" className="flex items-baseline gap-0.5 mb-4">
              <span className="font-serif text-xl font-bold text-[hsl(0,0%,30%)]">rubiklab</span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent mb-0.5 animate-pulse" />
            </a>
            <p className="text-[13px] md:text-[14px] leading-[1.5] text-muted-foreground max-w-xs mb-6">
              Knowledge systems for legal, research, healthcare, publishing and regulated enterprises.
            </p>
            <div className="text-[12px] md:text-[13px] leading-[1.45] text-muted-foreground/70 space-y-0.5">
              <p>Rubiklab Ltd</p>
              <p>1A Falmer Court</p>
              <p>London Road</p>
              <p>Uckfield</p>
              <p>TN22 1HN</p>
              <p>United Kingdom</p>
            </div>
            <p className="text-[11px] md:text-[12px] text-muted-foreground/50 mt-3">
              Part of the Rubiklab–DataExpert Group
            </p>
            <a
              href="https://www.linkedin.com/company/rubiklab"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </div>

          {/* Platform */}
          <div>
            <p className="text-[14px] font-medium text-foreground mb-4">Platform</p>
            <ul className="space-y-2">
              {[
                { label: "Overview", href: "/platform" },
                { label: "Studio", href: "/platform" },
                { label: "Knowledge Layer", href: "/platform" },
                { label: "Integrations", href: "/platform" },
                { label: "Security", href: "/security" },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-[13px] md:text-[14px] text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <p className="text-[14px] font-medium text-foreground mb-4">Solutions</p>
            <ul className="space-y-2">
              {[
                { label: "Legal", href: "/solutions" },
                { label: "Market Research", href: "/solutions" },
                { label: "Healthcare", href: "/solutions" },
                { label: "Publishing", href: "/solutions" },
                { label: "Enterprise & Associations", href: "/solutions" },
                { label: "Custom environments", href: "/solutions#custom" },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-[13px] md:text-[14px] text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-[14px] font-medium text-foreground mb-4">Company</p>
            <ul className="space-y-2">
              {[
                { label: "About", href: "/about" },
                { label: "Security", href: "/security" },
                { label: "Contact", href: "/about#contact" },
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-[13px] md:text-[14px] text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground">
            © 2026 Rubiklab Ltd
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

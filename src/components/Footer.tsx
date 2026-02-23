const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className} width="16" height="16">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

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
              Part of the Rubiklab–<a href="https://dataexpert.hu/" target="_blank" rel="noopener noreferrer" className="hover:text-muted-foreground transition-colors">DataExpert</a> Group
            </p>
          </div>

          {/* Platform */}
          <div>
            <p className="text-[14px] font-medium text-foreground mb-4">Platform</p>
            <ul className="space-y-2">
              {[
                { label: "Overview", href: "/" },
                { label: "Studio", href: "/platform" },
                { label: "Knowledge Layer", href: "/platform#blueprint" },
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
          <div className="flex items-center gap-4">
            <p className="text-xs text-muted-foreground">
              © 2026 Rubiklab Ltd
            </p>
            <a
              href="https://www.linkedin.com/company/rubiklab"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground/60 hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

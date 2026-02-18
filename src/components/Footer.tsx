const Footer = () => {
  return (
    <footer className="border-t border-border py-14 md:py-[72px] lg:py-24">
      <div className="max-w-[1120px] mx-auto px-6 md:px-12 lg:px-[72px]">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4 lg:gap-6 mb-16">
          <div className="col-span-2">
            <div className="flex items-baseline gap-0.5 mb-4">
              <span className="font-serif text-xl font-bold text-foreground">rubiklab</span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent mb-0.5 animate-pulse" />
            </div>
            <p className="text-[13px] md:text-[14px] leading-[1.6] text-muted-foreground max-w-xs">
              Knowledge systems for legal, research, healthcare, publishing, and regulated enterprises.
            </p>
          </div>

          <div>
            <p className="text-[14px] font-medium text-foreground mb-4">Platform</p>
            <ul className="space-y-2">
              {["Overview", "Knowledge Layer", "Workflows", "Integrations", "Security"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-[13px] md:text-[14px] text-muted-foreground hover:text-foreground transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[14px] font-medium text-foreground mb-4">Sectors</p>
            <ul className="space-y-2">
              {["Legal", "Market Research", "Healthcare", "Publishing", "Enterprise & Associations"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-[13px] md:text-[14px] text-muted-foreground hover:text-foreground transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[14px] font-medium text-foreground mb-4">Company</p>
            <ul className="space-y-2">
              {["About", "Careers", "Contact", "Security & Compliance"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-[13px] md:text-[14px] text-muted-foreground hover:text-foreground transition-colors">
                    {link}
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
              Terms of Services
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

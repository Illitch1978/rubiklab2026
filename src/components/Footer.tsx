const footerLinks = {
  Platform: ["Overview", "Assistant", "Vault", "Knowledge", "Workflows", "Ecosystem"],
  Solutions: ["Innovation", "In-House", "Transactional", "Litigation", "Mid-Sized Firms", "Collaboration"],
  Resources: ["Blog", "Videos", "Guides", "Press Kit"],
  Company: ["About", "Newsroom", "Security", "Careers"],
};

const Footer = () => {
  return (
    <footer className="border-t border-border py-16 px-8 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-baseline gap-0.5">
              <span className="font-serif text-xl font-bold text-foreground">rubiklab</span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent mb-0.5 animate-pulse" />
            </div>
          </div>
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <p className="text-sm font-medium text-foreground mb-4">{category}</p>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground">
            © 2026 Rubiklab. All rights reserved.
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

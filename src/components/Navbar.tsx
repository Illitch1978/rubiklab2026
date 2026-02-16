import { useState } from "react";
import { ChevronDown } from "lucide-react";

const navItems = [
  { label: "Platform", hasDropdown: true },
  { label: "Solutions", hasDropdown: true },
  { label: "Customers", hasDropdown: false },
  { label: "Security", hasDropdown: false },
  { label: "Resources", hasDropdown: true },
  { label: "About", hasDropdown: true },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 bg-background/80 backdrop-blur-md">
      <div className="font-serif text-2xl font-bold tracking-tight text-foreground">
        Harvey
      </div>

      <div className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <button
            key={item.label}
            className="flex items-center gap-1 text-sm text-secondary-foreground hover:text-foreground transition-colors"
          >
            {item.label}
            {item.hasDropdown && <ChevronDown className="w-3.5 h-3.5" />}
          </button>
        ))}
      </div>

      <button className="text-sm text-secondary-foreground hover:text-foreground transition-colors">
        Login
      </button>
    </nav>
  );
};

export default Navbar;

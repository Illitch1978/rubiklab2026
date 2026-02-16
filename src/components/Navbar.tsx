import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const navItems = [
  { label: "Platform", hasDropdown: true, href: "/platform" },
  { label: "Solutions", hasDropdown: true, href: "#" },
  { label: "Customers", hasDropdown: false, href: "#" },
  { label: "Security", hasDropdown: false, href: "#" },
  { label: "Resources", hasDropdown: true, href: "#" },
  { label: "About", hasDropdown: true, href: "/about" },
];

interface NavbarProps {
  light?: boolean;
}

const Navbar = ({ light }: NavbarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 backdrop-blur-md ${light ? 'bg-background/90' : 'bg-background/80'}`}>
      <Link to="/" className="font-serif text-2xl font-bold tracking-tight text-foreground">
        Harvey
      </Link>

      <div className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <Link
            key={item.label}
            to={item.href}
            className="flex items-center gap-1 text-sm text-secondary-foreground hover:text-foreground transition-colors"
          >
            {item.label}
            {item.hasDropdown && <ChevronDown className="w-3.5 h-3.5" />}
          </Link>
        ))}
      </div>

      <button className="text-sm text-secondary-foreground hover:text-foreground transition-colors">
        Login
      </button>
    </nav>
  );
};

export default Navbar;

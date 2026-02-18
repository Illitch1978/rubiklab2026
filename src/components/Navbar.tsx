import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Platform", href: "/platform" },
  { label: "Solutions", href: "/solutions" },
  { label: "Security", href: "/security" },
  { label: "Resources", href: "#" },
];

interface NavbarProps {
  light?: boolean;
}

const Navbar = ({ light }: NavbarProps) => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Pages with full-viewport heroes keep the nav visible always
      const fullViewportPages = ["/solutions", "/platform", "/security", "/"];
      if (fullViewportPages.includes(location.pathname)) {
        setHidden(false);
        return;
      }
      // Shorter pages (e.g. /about) hide nav after scrolling past compact hero
      const threshold = 320;
      setHidden(window.scrollY > threshold);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 transition-opacity duration-300 ${hidden ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
      <Link to="/" className="flex items-baseline gap-0.5 group">
        <span className="font-serif text-2xl font-bold tracking-tight text-foreground group-hover:text-accent transition-colors">
          rubiklab
        </span>
        <span className="w-1.5 h-1.5 rounded-full bg-accent mb-0.5 animate-pulse" />
      </Link>

      <div className="hidden md:flex items-center gap-8 ml-auto mr-8">
        {navItems.map((item) => (
          <Link
            key={item.label}
            to={item.href}
            className={`text-sm transition-colors ${location.pathname === item.href ? "text-accent font-medium" : "text-secondary-foreground hover:text-foreground"}`}
          >
            {item.label}
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

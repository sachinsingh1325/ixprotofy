import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed w-full top-4 z-50 px-4">
      <div className="container mx-auto">
        <div className="glass-card rounded-2xl px-6 py-4 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-gradient hover-scale">
            DesignStudio
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`transition-smooth relative ${
                  isActive(item.path) ? "text-primary font-semibold" : "text-foreground hover:text-primary"
                } after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-gradient-primary after:bottom-0 after:left-0 after:scale-x-0 hover:after:scale-x-100 after:transition-smooth ${
                  isActive(item.path) ? "after:scale-x-100" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button variant="hero" asChild className="shadow-neon-blue hover:shadow-neon-purple">
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>

          <button
            className="md:hidden text-foreground hover-scale"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 glass-card rounded-2xl p-6 animate-slide-up">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block py-3 px-4 rounded-xl transition-smooth ${
                  isActive(item.path) 
                    ? "text-primary font-semibold glass" 
                    : "text-foreground hover:glass hover:text-primary"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button variant="hero" asChild className="w-full mt-4 shadow-neon-blue">
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                Get Started
              </Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

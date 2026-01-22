import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="font-display text-xl font-bold text-foreground">
            &lt;dev/&gt;
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm font-medium"
              >
                {item.label}
              </a>
            ))}
            <a href="#contact">
              <Button variant="glow" size="sm">
                Get In Touch
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4 animate-fade-in">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setIsOpen(false)}>
              <Button variant="glow" size="sm" className="w-fit">
                Get In Touch
              </Button>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

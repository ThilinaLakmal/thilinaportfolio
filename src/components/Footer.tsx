const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <a href="#" className="font-display text-xl font-bold text-foreground">
            &lt;dev/&gt;
          </a>
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Alex Morgan. Built with passion.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#about"
              className="text-muted-foreground hover:text-primary text-sm transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-muted-foreground hover:text-primary text-sm transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-muted-foreground hover:text-primary text-sm transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

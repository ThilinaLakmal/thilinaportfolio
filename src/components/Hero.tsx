import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Content */}
          <div className="space-y-6 opacity-0 animate-slide-in-left">
            <p className="font-display text-foreground text-sm tracking-wider">
              HELLO, I'M
            </p>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight text-[hsl(210_20%_98%)]">
              Thilina <span>Lakmal</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground font-medium">
              Full-Stack Software Engineer
            </h2>
            <p className="text-muted-foreground max-w-md leading-relaxed">
              I craft elegant solutions to complex problems, building scalable
              web applications with modern technologies. Passionate about clean
              code, user experience, and continuous learning.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
              >
                <Github size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#contact"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
              >
                <Mail size={18} />
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Button variant="glow" size="lg">
                View My Work
              </Button>
              <Button variant="outline" size="lg">
                Download CV
              </Button>
            </div>
          </div>

          {/* Right Profile Image */}
          <div className="flex justify-center lg:justify-center opacity-0 animate-slide-in-right">
            <div className="relative group cursor-pointer">
              {/* Outer glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary blur-2xl opacity-30 animate-pulse-glow group-hover:opacity-50 transition-opacity duration-500" />
              
              {/* Decorative border rings */}
              <div className="absolute -inset-3 rounded-full border border-primary/30 group-hover:border-primary/50 group-hover:-inset-4 transition-all duration-500" />
              <div className="absolute -inset-6 rounded-full border border-primary/20 group-hover:border-primary/30 group-hover:-inset-8 transition-all duration-500" />
              
              {/* Profile image */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/50 shadow-[0_0_40px_hsl(217_91%_60%/0.3)] group-hover:shadow-[0_0_60px_hsl(217_91%_60%/0.5)] group-hover:scale-[1.02] transition-all duration-500">
                <img
                  src={profileImage}
                  alt="Software Engineer"
                  className="w-full h-full object-cover object-[center_15%] group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Floating badge - Available for hire style with green */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-secondary/10 border border-secondary/50 rounded-full px-4 py-2 shadow-lg backdrop-blur-sm">
                <p className="font-display text-xs text-secondary font-medium">
                  ✓ Available for Hire
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fade-in animation-delay-1000">
          <span className="text-muted-foreground text-xs tracking-wider">
            SCROLL DOWN
          </span>
          <ArrowDown size={16} className="text-primary animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Code, Sparkles, Zap } from "lucide-react";
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
            {/* Available badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-secondary/50 bg-secondary/10 backdrop-blur-sm">
              <Sparkles size={14} className="text-secondary" />
              <span className="text-secondary text-sm font-medium">Full Stack Developer</span>
              <Zap size={14} className="text-secondary" />
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="text-gradient">Hi, I'm </span>
              <span className="text-[hsl(var(--foreground-emphasis))]">Thilina</span>
              <br />
              <span className="text-[hsl(var(--foreground-emphasis))]">Lakmal</span>
            </h1>
            
            <h2 className="text-xl md:text-2xl font-medium">
              <span className="text-muted-foreground">Software Engineering Undergraduate </span>
              <span className="text-gradient">at SLIIT</span>
            </h2>
            
            <p className="text-muted-foreground max-w-md leading-relaxed">
              Passionate about web development and crafting elegant code. Currently focused on building meaningful digital experiences and solving complex problems with simple, beautiful solutions. <span className="text-primary font-medium"></span>
              Currently focused on building meaningful digital experiences and solving complex problems with simple, beautiful solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a href="#projects">
                <Button variant="glow" size="lg" className="gap-2">
                  <Code size={18} />
                  VIEW MY WORK
                </Button>
              </a>
              <a href="#contact">
                <Button variant="outline" size="lg" className="bg-card/50 backdrop-blur-sm">
                  Get In Touch
                </Button>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-4">
              <a
                href="https://github.com/ThilinaLakmal"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl border border-border bg-card/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:bg-primary/10 transition-all duration-300 backdrop-blur-sm"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/thilina-lakmal-90b3163a1/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl border border-border bg-card/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:bg-primary/10 transition-all duration-300 backdrop-blur-sm"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#contact"
                className="w-12 h-12 rounded-xl border border-border bg-card/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:bg-primary/10 transition-all duration-300 backdrop-blur-sm"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Right Profile Image */}
          <div className="flex justify-center lg:justify-center opacity-0 animate-slide-in-right">
            <div className="relative group cursor-pointer">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary blur-2xl opacity-30 animate-pulse-glow group-hover:opacity-50 transition-opacity duration-500" />
              
              <div 
                className="absolute -inset-6 rounded-full border-2 border-dashed border-secondary/40 group-hover:border-secondary/60 transition-all duration-500"
                style={{ animation: 'spin 30s linear infinite' }} 
              />
              <div 
                className="absolute -inset-12 rounded-full border-2 border-dashed border-primary/30 group-hover:border-primary/50 transition-all duration-500"
                style={{ animation: 'spin 40s linear infinite reverse' }} 
              />
              
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary via-secondary to-primary opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-background shadow-[0_0_40px_hsl(217_91%_60%/0.3)] group-hover:shadow-[0_0_60px_hsl(217_91%_60%/0.5)] group-hover:scale-[1.02] transition-all duration-500">
                <img
                  src={profileImage}
                  alt="Thilina Lakmal - Software Engineer"
                  className="w-full h-full object-cover object-[center_15%] group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="absolute -top-2 -right-4 md:right-0 bg-card/90 border border-border rounded-xl px-4 py-2 shadow-lg backdrop-blur-sm animate-float">
                <p className="font-display text-xs text-foreground font-medium">
                  SLIIT (UG)
                </p>
              </div>

              <div className="absolute top-1/3 -right-8 md:-right-12 bg-card/90 border border-border rounded-xl p-3 shadow-lg backdrop-blur-sm animate-float" style={{ animationDelay: '1s' }}>
                <Code size={18} className="text-primary" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fade-in animation-delay-1000">
          <span className="text-muted-foreground text-sm">Explore</span>
          <div className="w-10 h-10 rounded-full border border-secondary/50 bg-secondary/10 flex items-center justify-center">
            <ArrowDown size={18} className="text-secondary animate-bounce" />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
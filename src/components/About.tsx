import { Code2, Rocket, Users, Zap, Sparkles } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable, and well-documented code.",
    gradient: "from-blue-500 to-cyan-400",
    shadowColor: "shadow-blue-500/20",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Optimizing applications for speed and efficiency.",
    gradient: "from-purple-500 to-pink-400",
    shadowColor: "shadow-purple-500/20",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working effectively in agile, cross-functional teams.",
    gradient: "from-emerald-500 to-teal-400",
    shadowColor: "shadow-emerald-500/20",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "Staying current with emerging technologies and trends.",
    gradient: "from-orange-500 to-amber-400",
    shadowColor: "shadow-orange-500/20",
  },
];

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/3 left-1/4 w-[300px] h-[300px] bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      {/* Decorative grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="font-display text-primary text-sm tracking-wider">ABOUT ME</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[hsl(210_20%_98%)] mb-4">
            About Me
          </h2>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto leading-relaxed">
            Crafting digital experiences with precision and creativity
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left Content */}
          <div 
            className={`space-y-6 transition-all duration-700 delay-150 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
          >
            <div className="relative rounded-xl bg-card overflow-hidden p-8 group transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10"
              style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
            >
              {/* Gradient top border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-blue-400 to-transparent transition-all duration-500 group-hover:h-1.5" />
              
              {/* Hover glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
              
              <div className="relative z-10 space-y-5">
                <p className="text-muted-foreground leading-relaxed">
                  I'm a software engineer with over 5 years of experience building
                  web applications that make a difference. My journey started with
                  curiosity about how things work on the internet, and it evolved
                  into a passion for creating seamless digital experiences.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I specialize in full-stack development, working with modern
                  technologies like React, Node.js, TypeScript, and cloud services.
                  I believe in writing code that's not just functional, but elegant
                  and maintainable.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies,
                  contributing to open-source projects, or mentoring aspiring
                  developers. I'm always excited about new challenges and
                  opportunities to learn.
                </p>
              </div>

              {/* Bottom shine effect */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>

          {/* Right Highlights Grid */}
          <div 
            className={`grid sm:grid-cols-2 gap-6 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
          >
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className={`relative rounded-xl bg-card overflow-hidden group transition-all duration-500 hover:scale-[1.05] hover:-translate-y-2 hover:shadow-2xl ${item.shadowColor}`}
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  transformStyle: 'preserve-3d', 
                  perspective: '1000px' 
                }}
              >
                {/* Gradient top border */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient} to-transparent transition-all duration-500 group-hover:h-1.5`} />
                
                {/* Hover glow effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
                
                <div className="p-6 relative z-10">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <item.icon className="text-primary-foreground" size={26} />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors duration-300">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom shine effect */}
                <div className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent ${item.gradient.includes('blue') ? 'via-blue-500/50' : item.gradient.includes('purple') ? 'via-purple-500/50' : item.gradient.includes('emerald') ? 'via-emerald-500/50' : 'via-orange-500/50'} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

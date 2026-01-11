import { Code2, Rocket, Users, Zap } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable, and well-documented code.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Optimizing applications for speed and efficiency.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working effectively in agile, cross-functional teams.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "Staying current with emerging technologies and trends.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-display text-foreground text-sm tracking-wider mb-2">
            ABOUT ME
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Passionate <span className="text-foreground">Developer</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left Content */}
          <div className="space-y-6">
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

          {/* Right Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

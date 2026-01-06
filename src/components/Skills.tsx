const skills = {
  frontend: [
    { name: "React", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "Next.js", level: 85 },
    { name: "Tailwind CSS", level: 95 },
    { name: "Vue.js", level: 75 },
  ],
  backend: [
    { name: "Node.js", level: 90 },
    { name: "Python", level: 85 },
    { name: "PostgreSQL", level: 85 },
    { name: "GraphQL", level: 80 },
    { name: "Redis", level: 75 },
  ],
  tools: [
    "Git",
    "Docker",
    "AWS",
    "CI/CD",
    "Jest",
    "Figma",
    "Linux",
    "MongoDB",
  ],
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative bg-card/50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-display text-primary text-sm tracking-wider mb-2">
            EXPERTISE
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Technical <span className="text-gradient">Skills</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Frontend Skills */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Frontend
            </h3>
            <div className="space-y-4">
              {skills.frontend.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Backend Skills */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-secondary" />
              Backend
            </h3>
            <div className="space-y-4">
              {skills.backend.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-secondary to-primary rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Technologies */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary" />
              Tools & Technologies
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-4 py-2 bg-muted rounded-lg text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors duration-300 border border-transparent hover:border-primary/30"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

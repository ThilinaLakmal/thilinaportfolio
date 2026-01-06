import { Code2, Server, Database, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    color: "from-blue-500 to-blue-400",
    iconBg: "bg-gradient-to-br from-blue-500 to-blue-400",
    borderColor: "from-blue-500 via-cyan-400 to-transparent",
    technologies: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: Server,
    color: "from-emerald-500 to-teal-400",
    iconBg: "bg-gradient-to-br from-emerald-500 to-teal-400",
    borderColor: "from-emerald-500 via-teal-400 to-transparent",
    technologies: ["Node.js", "Express", "PHP", "Java", "Python"],
  },
  {
    title: "Databases",
    icon: Database,
    color: "from-purple-500 to-pink-400",
    iconBg: "bg-gradient-to-br from-purple-500 to-pink-400",
    borderColor: "from-purple-500 via-pink-400 to-transparent",
    technologies: ["MySQL", "MongoDB", "Firebase"],
  },
  {
    title: "Tools & Others",
    icon: Wrench,
    color: "from-amber-500 to-orange-400",
    iconBg: "bg-gradient-to-br from-amber-500 to-orange-400",
    borderColor: "from-amber-500 via-orange-400 to-transparent",
    technologies: ["Git", "GitHub", "VS Code", "Figma", "Postman"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            A comprehensive toolkit I use to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="relative rounded-xl bg-card overflow-hidden group cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/10"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient top border with animation */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${category.borderColor} transition-all duration-500 group-hover:h-1.5`}
              />

              {/* Hover glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />

              <div className="p-8 pb-10 relative z-10">
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`w-14 h-14 rounded-xl ${category.iconBg} flex items-center justify-center shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-xl`}
                  >
                    <category.icon className="text-primary-foreground transition-transform duration-300 group-hover:scale-110" size={28} />
                  </div>
                  <div className="transition-transform duration-300 group-hover:translate-x-1">
                    <h3 className="text-2xl font-semibold">{category.title}</h3>
                    <p className="text-muted-foreground text-base">
                      {category.technologies.length} technologies
                    </p>
                  </div>
                </div>

                {/* Technology Tags */}
                <div className="flex flex-wrap gap-4">
                  {category.technologies.map((tech, techIndex) => (
                    <span
                      key={tech}
                      className="px-5 py-2.5 bg-muted/50 rounded-lg text-base font-medium text-foreground border border-border/50 
                        hover:border-primary/50 hover:bg-primary/10 hover:text-primary hover:scale-105 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/20
                        transition-all duration-300 cursor-default"
                      style={{ animationDelay: `${techIndex * 50}ms` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom shine effect on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

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
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="relative rounded-xl bg-card overflow-hidden group"
            >
              {/* Gradient top border */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${category.borderColor}`}
              />

              <div className="p-6">
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`w-14 h-14 rounded-xl ${category.iconBg} flex items-center justify-center shadow-lg`}
                  >
                    <category.icon className="text-primary-foreground" size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                    <p className="text-muted-foreground text-sm">
                      {category.technologies.length} technologies
                    </p>
                  </div>
                </div>

                {/* Technology Tags */}
                <div className="flex flex-wrap gap-3">
                  {category.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-muted/50 rounded-lg text-sm font-medium text-foreground border border-border/50 hover:border-primary/30 hover:bg-muted transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

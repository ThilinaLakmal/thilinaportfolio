import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "CloudSync Dashboard",
    description:
      "A real-time analytics dashboard for cloud infrastructure monitoring with advanced visualization and alerting capabilities.",
    tags: ["React", "TypeScript", "D3.js", "Node.js", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    github: "#",
    live: "#",
  },
  {
    title: "DevFlow",
    description:
      "An AI-powered code review platform that helps development teams maintain code quality and accelerate PR reviews.",
    tags: ["Next.js", "Python", "OpenAI", "Redis", "Docker"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
    github: "#",
    live: "#",
  },
  {
    title: "FinTrack Pro",
    description:
      "A comprehensive personal finance management app with budgeting, investment tracking, and financial goal planning.",
    tags: ["React Native", "Node.js", "MongoDB", "Stripe", "AWS"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    github: "#",
    live: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-display text-foreground text-sm tracking-wider mb-2">
            PORTFOLIO
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Featured <span className="text-foreground">Projects</span>
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-muted text-xs rounded-md text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2 py-1 bg-muted text-xs rounded-md text-muted-foreground">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3 pt-2">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github}>
                      <Github size={16} />
                      Code
                    </a>
                  </Button>
                  <Button variant="default" size="sm" asChild>
                    <a href={project.live}>
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

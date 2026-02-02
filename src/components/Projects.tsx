import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Hotel Management System",
    description:
      "A real-time analytics dashboard for cloud infrastructure monitoring with advanced visualization and alerting capabilities.",
    tags: ["React", "TypeScript", "D3.js", "Node.js", "PostgreSQL"],
    image: "https://acropolium.com/img/cases/hotel-management-system-development-for-a-hospitality-technology-provider/img01.jpg",
    github: "https://github.com/ThilinaLakmal/hotel-management-system.git",
    
  },
  {
    title: "Online Ticket Booking System",
    description:
      "An AI-powered code review platform that helps development teams maintain code quality and accelerate PR reviews.",
    tags: ["Next.js", "Python", "OpenAI", "Redis", "Docker"],
    image: "https://fieldcamp.ai/_next/image/?url=https%3A%2F%2Fcms.fieldcamp.ai%2Fwp-content%2Fuploads%2F2025%2F08%2Ffeature-what-is-online-booking-system-scaled.webp&w=1920&q=75",
    github: "https://github.com/ThilinaLakmal/ticket-booking-system.git",
    
  },
  {
    title: "MOVIE HUB",
    description:
      "A comprehensive personal finance management app with budgeting, investment tracking, and financial goal planning.",
    tags: ["React Native", "Node.js", "MongoDB", "Stripe", "AWS"],
    image: "https://yt3.googleusercontent.com/Q_XIqKWkS9yitQwzbjndbmhf8JlbpETeHDPfDB5jyL_sC0fgPpUWgGvfwIXC7ZvyJ2SAinGXSw=s900-c-k-c0x00ffffff-no-rj",
    github: "https://github.com/ThilinaLakmal/moviehub.git",
    
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
          <h2 className="text-4xl md:text-5xl font-bold text-[hsl(210_20%_98%)]">
            Featured Projects
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

                {/* Links - Live Demo uses success green */}
                <div className="flex items-center gap-3 pt-2">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github}>
                      <Github size={16} />
                      Code
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

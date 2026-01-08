import { Award, BookOpen, GraduationCap } from "lucide-react";

const education = [
  {
    type: "degree",
    icon: GraduationCap,
    title: "M.S. Computer Science",
    institution: "Stanford University",
    year: "2018 - 2020",
    description:
      "Specialized in Machine Learning and Distributed Systems. GPA: 3.9/4.0",
  },
  {
    type: "degree",
    icon: BookOpen,
    title: "B.S. Software Engineering",
    institution: "MIT",
    year: "2014 - 2018",
    description:
      "Dean's List all semesters. Senior thesis on microservices architecture.",
  },
];

const certifications = [
  {
    name: "AWS Solutions Architect",
    issuer: "Amazon Web Services",
    year: "2023",
  },
  {
    name: "Google Cloud Professional",
    issuer: "Google",
    year: "2022",
  },
  {
    name: "MongoDB Certified Developer",
    issuer: "MongoDB",
    year: "2021",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-24 relative bg-card/50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-display text-primary text-sm tracking-wider mb-2">
            BACKGROUND
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Education & <span className="text-gradient">Certifications</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Education Timeline */}
          <div className="space-y-8">
            <h3 className="text-xl font-semibold mb-6">Academic Background</h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-px bg-border" />

              {education.map((item, index) => (
                <div key={item.title} className="relative pl-16 pb-8 last:pb-0">
                  {/* Timeline dot */}
                  <div className="absolute left-0 w-12 h-12 rounded-full bg-card border border-primary/50 flex items-center justify-center shadow-[0_0_20px_hsl(160_84%_50%/0.2)]">
                    <item.icon className="text-primary" size={20} />
                  </div>

                  <div className="bg-card p-6 rounded-xl border border-border hover:border-primary/30 transition-colors">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h4 className="font-semibold">{item.title}</h4>
                      <span className="text-xs text-primary font-display">
                        {item.year}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm mb-2">
                      {item.institution}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-8">
            <h3 className="text-xl font-semibold mb-6">
              Professional Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary/30 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Award className="text-primary" size={20} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium">{cert.name}</h4>
                    <p className="text-muted-foreground text-sm">
                      {cert.issuer}
                    </p>
                  </div>
                  <span className="text-xs text-muted-foreground font-display">
                    {cert.year}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

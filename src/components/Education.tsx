import { Award, Calendar, GraduationCap, MapPin } from "lucide-react";

const education = [
  {
    icon: GraduationCap,
    title: "BSc (Hons) in Information Technology",
    institution: "Sri Lanka Institute of Information Technology (SLIIT)",
    year: "2023 - Present",
    location: "Malabe, Sri Lanka",
    description:
      "Specializing in Information Technology with focus on software development, web technologies, and database management. Active participant in coding clubs and hackathons.",
    isCurrent: true,
  },
  {
    icon: GraduationCap,
    title: "G.C.E. Advanced Level",
    institution: "High School",
    year: "2018 - 2020",
    location: "Wellawaya, Sri Lanka",
    description:
      "Completed Advanced Level education with focus on Mathematics and Science streams.",
    isCurrent: false,
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
          <p className="font-display text-foreground text-sm tracking-wider mb-2">
            BACKGROUND
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[hsl(210_20%_98%)]">Education</h2>
          <p className="text-muted-foreground mt-4">
            My academic journey and qualifications
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Education Timeline */}
          <div className="space-y-8">
            {education.map((item, index) => (
              <div key={item.title} className="relative flex gap-6">
                {/* Left side - Icon with gradient line */}
                <div className="flex flex-col items-center">
                  {/* Icon container */}
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-[0_0_20px_hsl(217_91%_60%/0.3)] flex-shrink-0">
                    <item.icon className="text-[#0a1a3d]" size={24} />
                  </div>
                  {/* Gradient timeline line */}
                  {index < education.length - 1 && (
                    <div className="w-1 flex-1 mt-4 rounded-full bg-gradient-to-b from-primary via-secondary to-primary/50" />
                  )}
                </div>

                {/* Right side - Content card */}
                <div className="flex-1 pb-8">
                  <div className="bg-card p-6 rounded-xl border-l-4 border-l-primary border border-border hover:border-primary/30 transition-colors">
                    {/* Header with title and current badge */}
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <h4 className="text-xl font-bold">{item.title}</h4>
                      {item.isCurrent && (
                        <span className="px-4 py-1 rounded-full bg-secondary/10 border border-secondary/50 text-secondary text-sm font-medium">
                          ✓ Current
                        </span>
                      )}
                    </div>

                    {/* Institution name */}
                    <p className="text-primary font-medium mb-4">
                      {item.institution}
                    </p>

                    {/* Date and Location tags */}
                    <div className="flex flex-wrap gap-3 mb-4">
                      <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted/50 text-muted-foreground text-sm">
                        <Calendar size={14} />
                        {item.year}
                      </span>
                      <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted/50 text-muted-foreground text-sm">
                        <MapPin size={14} />
                        {item.location}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="mt-16">
            <h3 className="text-xl font-semibold mb-6 text-center">
              Professional Certifications
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary/30 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Award className="text-[#0a1a3d]" size={20} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium">{cert.name}</h4>
                    <p className="text-muted-foreground text-sm">
                      {cert.issuer} • {cert.year}
                    </p>
                  </div>
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

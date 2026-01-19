import { useState, useEffect, useRef } from "react";
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
    borderColor: "from-primary via-blue-400 to-transparent",
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
    borderColor: "from-secondary via-emerald-400 to-transparent",
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
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1) {
              setTimeout(() => {
                setVisibleCards((prev) => new Set([...prev, index]));
              }, index * 150);
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="education" className="py-24 relative bg-background">
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

        <div className="max-w-4xl mx-auto">
          {/* Education Cards Grid */}
          <div className="flex flex-col gap-8">
            {education.map((item, index) => (
              <div
                key={item.title}
                ref={(el) => (cardRefs.current[index] = el)}
                className={`relative rounded-xl bg-card overflow-hidden group cursor-pointer transition-all duration-500 hover:scale-[1.03] hover:-translate-y-3 hover:shadow-2xl hover:shadow-primary/20
                  ${visibleCards.has(index) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                  }`}
                style={{ 
                  transformStyle: 'preserve-3d',
                  perspective: '1000px'
                }}
              >
                {/* Gradient top border with animation */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.borderColor} transition-all duration-500 group-hover:h-1.5`}
                />

                {/* Hover glow effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />

                <div className="p-6 relative z-10">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:shadow-xl">
                      <item.icon className="text-[#0a1a3d]" size={24} />
                    </div>
                    <div className="flex-1 transition-transform duration-300 group-hover:translate-x-1">
                      {item.isCurrent && (
                        <span className="inline-block px-2.5 py-0.5 rounded-full bg-secondary/10 border border-secondary/50 text-secondary text-xs font-medium mb-1">
                          ✓ Current
                        </span>
                      )}
                      <h4 className="text-lg font-bold">{item.title}</h4>
                    </div>
                  </div>

                  {/* Institution name */}
                  <p className="text-primary font-medium text-base mb-3">
                    {item.institution}
                  </p>

                  {/* Date and Location tags */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-muted/50 rounded-lg text-sm font-medium text-foreground border border-border/50 
                      hover:border-primary/50 hover:bg-primary/10 hover:text-primary hover:scale-105 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/20
                      transition-all duration-300 cursor-default">
                      <Calendar size={13} />
                      {item.year}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-muted/50 rounded-lg text-sm font-medium text-foreground border border-border/50 
                      hover:border-primary/50 hover:bg-primary/10 hover:text-primary hover:scale-105 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/20
                      transition-all duration-300 cursor-default">
                      <MapPin size={13} />
                      {item.location}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom shine effect on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="mt-16">
            <h3 className="text-xl font-semibold mb-6 text-center">
              Professional Certifications
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={cert.name}
                  className="relative flex items-center gap-4 p-4 bg-card rounded-xl border border-border overflow-hidden group cursor-pointer transition-all duration-500 hover:scale-[1.03] hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/20"
                >
                  {/* Gradient top border */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-transparent transition-all duration-500 group-hover:h-1.5" />
                  
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
                  
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg relative z-10">
                    <Award className="text-[#0a1a3d]" size={20} />
                  </div>
                  <div className="flex-1 relative z-10 transition-transform duration-300 group-hover:translate-x-1">
                    <h4 className="font-medium">{cert.name}</h4>
                    <p className="text-muted-foreground text-sm">
                      {cert.issuer} • {cert.year}
                    </p>
                  </div>
                  
                  {/* Bottom shine effect */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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

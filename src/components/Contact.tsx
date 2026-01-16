import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, MapPin, Send, Twitter, Sparkles, MessageSquare, Coffee } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "thilina.lakmal@email.com",
      href: "mailto:thilina.lakmal@email.com",
      gradient: "from-blue-500 to-cyan-400",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Colombo, Sri Lanka",
      href: null,
      gradient: "from-emerald-500 to-teal-400",
    },
  ];

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      {/* Decorative grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="font-display text-primary text-sm tracking-wider">GET IN TOUCH</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[hsl(210_20%_98%)] mb-4">
            Let's Work Together
          </h2>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto leading-relaxed">
            Have a project in mind? I'd love to hear about it. Let's create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Contact Info Card */}
          <div 
            className={`lg:col-span-2 space-y-6 transition-all duration-700 delay-150 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
          >
            {/* Main info card */}
            <div className="relative rounded-xl bg-card overflow-hidden group transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20"
              style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
            >
              {/* Gradient top border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-blue-400 to-transparent transition-all duration-500 group-hover:h-1.5" />
              
              {/* Hover glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
              
              <div className="p-8 relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-blue-400 flex items-center justify-center shadow-lg">
                    <MessageSquare className="text-primary-foreground" size={22} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Contact Info</h3>
                    <p className="text-muted-foreground text-sm">Reach out anytime</p>
                  </div>
                </div>

                <div className="space-y-5">
                  {contactMethods.map((method, index) => (
                    <div 
                      key={method.label}
                      className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/30 transition-all duration-300 group/item cursor-pointer"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className={`w-11 h-11 rounded-lg bg-gradient-to-br ${method.gradient} flex items-center justify-center shadow-md group-hover/item:scale-110 transition-transform duration-300`}>
                        <method.icon className="text-primary-foreground" size={18} />
                      </div>
                      <div>
                        <p className="text-muted-foreground text-xs uppercase tracking-wider">{method.label}</p>
                        {method.href ? (
                          <a href={method.href} className="font-medium hover:text-primary transition-colors">
                            {method.value}
                          </a>
                        ) : (
                          <p className="font-medium">{method.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom shine effect */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Social Links Card */}
            <div className="relative rounded-xl bg-card overflow-hidden group transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 hover:shadow-2xl hover:shadow-secondary/20"
              style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
            >
              {/* Gradient top border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-emerald-400 to-transparent transition-all duration-500 group-hover:h-1.5" />
              
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-secondary/5 via-transparent to-primary/5 pointer-events-none" />
              
              <div className="p-8 relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-emerald-400 flex items-center justify-center shadow-lg">
                    <Coffee className="text-primary-foreground" size={22} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Let's Connect</h3>
                    <p className="text-muted-foreground text-sm">Follow my journey</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className="w-12 h-12 rounded-xl bg-muted/50 border border-border/50 flex items-center justify-center text-muted-foreground 
                        hover:text-primary hover:border-primary/50 hover:bg-primary/10 hover:scale-110 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20
                        transition-all duration-300"
                      style={{ animationDelay: `${index * 100}ms` }}
                      aria-label={social.label}
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>

          {/* Contact Form Card */}
          <div 
            className={`lg:col-span-3 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
          >
            <div className="relative rounded-xl bg-card overflow-hidden group transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10"
              style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
            >
              {/* Gradient top border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-400 to-transparent transition-all duration-500" />
              
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 pointer-events-none" />
              
              <div className="p-8 relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-400 flex items-center justify-center shadow-lg">
                    <Send className="text-primary-foreground" size={22} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Send a Message</h3>
                    <p className="text-muted-foreground text-sm">I'll respond within 24 hours</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground/90">Your Name</label>
                      <Input
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="bg-muted/30 border-border/50 focus:border-primary focus:bg-muted/50 transition-all duration-300 h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground/90">Your Email</label>
                      <Input
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="bg-muted/30 border-border/50 focus:border-primary focus:bg-muted/50 transition-all duration-300 h-12"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground/90">Your Message</label>
                    <Textarea
                      placeholder="Tell me about your project, ideas, or just say hello..."
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      className="bg-muted/30 border-border/50 focus:border-primary focus:bg-muted/50 transition-all duration-300 resize-none"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    variant="glow" 
                    size="lg" 
                    className="w-full h-14 text-base font-semibold group/btn"
                  >
                    <Send size={18} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                    Send Message
                  </Button>
                </form>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

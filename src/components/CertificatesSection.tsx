import { Award } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const certificates = [
  { title: "Graphic Design Certificate", issuer: "Coursera", year: "2023", image: "/placeholder.svg" },
  { title: "Adobe Certified Professional", issuer: "Adobe", year: "2023", image: "/placeholder.svg" },
  { title: "Brand Identity Design", issuer: "Skillshare", year: "2022", image: "/placeholder.svg" },
  { title: "Excellence in Design Award", issuer: "Design Awards", year: "2024", image: "/placeholder.svg" },
];

const CertificatesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="certificates" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6" ref={ref}>
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <Award className="text-primary" size={28} />
            <span className="text-primary font-medium tracking-widest uppercase text-sm">Achievements</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Certificates & <span className="text-gradient-gold">Awards</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert, i) => (
            <div
              key={i}
              className={`group rounded-xl border border-border bg-card overflow-hidden transition-all duration-500 hover:border-primary/50 hover:shadow-[var(--shadow-gold)] ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="aspect-[4/3] bg-muted flex items-center justify-center overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h3 className="font-heading font-semibold text-foreground text-sm mb-1">{cert.title}</h3>
                <p className="text-muted-foreground text-xs">{cert.issuer} · {cert.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;

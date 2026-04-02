import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ExternalLink } from "lucide-react";

const links = [
  {
    label: "Fiverr",
    url: "https://www.fiverr.com/s/xXB0K81",
    desc: "Hire me on Fiverr",
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/aijaz-ali-38b042391/",
    desc: "Connect professionally",
  },
  {
    label: "Shopify Store Preview",
    url: "https://urbanclutch1.myshopify.com/",
    desc: "Password: AZHE",
  },
];

const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contact" className="py-24 bg-surface">
      <div ref={ref} className={`container mx-auto px-6 max-w-3xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-center mb-4">
          Let's <span className="text-gradient-gold">Connect</span>
        </h2>
        <div className="w-16 h-1 bg-gradient-gold mx-auto mb-6 rounded-full" />
        <p className="text-center text-muted-foreground mb-12">
          Ready to elevate your brand? Reach out through any of the platforms below.
        </p>

        <div className="grid gap-6">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-6 bg-card border border-border rounded-xl hover:border-gold/50 hover-glow transition-all group"
            >
              <div>
                <h4 className="font-heading font-semibold text-foreground text-lg group-hover:text-gold transition-colors">
                  {link.label}
                </h4>
                <p className="text-sm text-muted-foreground">{link.desc}</p>
              </div>
              <ExternalLink size={20} className="text-muted-foreground group-hover:text-gold transition-colors shrink-0" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

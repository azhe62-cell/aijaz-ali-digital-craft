import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-24 bg-surface">
      <div ref={ref} className={`container mx-auto px-6 max-w-4xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-center mb-4">
          About <span className="text-gradient-gold">Me</span>
        </h2>
        <div className="w-16 h-1 bg-gradient-gold mx-auto mb-12 rounded-full" />

        <div className="bg-card border border-border rounded-2xl p-8 md:p-12 hover-glow">
          <p className="text-foreground text-lg leading-relaxed mb-6">
            I'm <span className="text-gold font-semibold">Aijaz Ali</span>, a 2nd year law student with a deep passion for digital creativity and e-commerce innovation. I specialize in crafting premium graphic designs and building high-converting Shopify stores.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            My focus lies at the intersection of modern design principles and data-driven e-commerce strategies. Whether it's a striking brand identity or a conversion-optimized online store, I deliver work that not only looks premium but performs exceptionally.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            {[
              { num: "50+", label: "Projects" },
              { num: "30+", label: "Happy Clients" },
              { num: "2+", label: "Years Exp." },
              { num: "100%", label: "Dedication" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-heading font-bold text-gold">{stat.num}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

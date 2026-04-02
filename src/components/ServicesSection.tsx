import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Palette, ShoppingBag, RefreshCw, TrendingUp, Search } from "lucide-react";

const services = [
  { icon: Palette, title: "Graphic Design", desc: "Premium posters, flyers, logos, and complete brand identities that stand out." },
  { icon: ShoppingBag, title: "Shopify Store Creation", desc: "Custom Shopify stores built from scratch with premium themes and modern UI." },
  { icon: RefreshCw, title: "Shopify Redesign", desc: "Transform existing stores into high-converting, visually stunning experiences." },
  { icon: TrendingUp, title: "Conversion Optimization", desc: "Data-driven improvements to maximize your store's sales and performance." },
  { icon: Search, title: "Product Research", desc: "Winning product identification and market analysis for profitable niches." },
];

const ServicesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="services" className="py-24">
      <div ref={ref} className={`container mx-auto px-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-center mb-4">
          My <span className="text-gradient-gold">Services</span>
        </h2>
        <div className="w-16 h-1 bg-gradient-gold mx-auto mb-16 rounded-full" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <div key={s.title} className="group p-8 bg-card border border-border rounded-2xl hover:border-gold/50 hover-glow transition-all">
              <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                <s.icon size={24} className="text-gold" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-3">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

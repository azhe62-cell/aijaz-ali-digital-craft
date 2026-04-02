import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ExternalLink } from "lucide-react";

import posterImg from "@/assets/portfolio-poster1.jpg";
import flyerImg from "@/assets/portfolio-flyer1.jpg";
import flyer2Img from "@/assets/portfolio-flyer2.png";
import logoImg from "@/assets/portfolio-logo1.jpg";
import brandImg from "@/assets/portfolio-brand1.jpg";
import shop1Img from "@/assets/portfolio-shop1.jpg";
import shop2Img from "@/assets/portfolio-shop2.jpg";

const designWorks = [
  { img: posterImg, title: "Premium Poster Design", category: "Poster" },
  { img: flyerImg, title: "Luxury Event Flyer", category: "Flyer" },
  { img: logoImg, title: "Brand Logo Design", category: "Logo" },
  { img: brandImg, title: "Complete Brand Identity", category: "Branding" },
];

const ecomWorks = [
  { img: shop1Img, title: "Fashion E-commerce Store", desc: "Clean UI • Premium Look • High Conversion" },
  { img: shop2Img, title: "Product Landing Store", desc: "Conversion-Focused • Modern Design • SEO Optimized" },
];

type Tab = "design" | "ecommerce";

const PortfolioSection = () => {
  const [tab, setTab] = useState<Tab>("design");
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="portfolio" className="py-24 bg-surface">
      <div ref={ref} className={`container mx-auto px-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-center mb-4">
          My <span className="text-gradient-gold">Portfolio</span>
        </h2>
        <div className="w-16 h-1 bg-gradient-gold mx-auto mb-12 rounded-full" />

        {/* Tab buttons */}
        <div className="flex justify-center gap-4 mb-12">
          {[
            { key: "design" as Tab, label: "Graphic Design" },
            { key: "ecommerce" as Tab, label: "E-commerce Projects" },
          ].map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`px-6 py-3 rounded-lg font-heading font-medium text-sm transition-all ${
                tab === t.key
                  ? "bg-gradient-gold text-primary-foreground shadow-gold"
                  : "border border-border text-muted-foreground hover:border-gold/50 hover:text-gold"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Design grid */}
        {tab === "design" && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {designWorks.map((work) => (
              <div key={work.title} className="group relative overflow-hidden rounded-xl border border-border hover:border-gold/50 transition-all hover-glow">
                <img src={work.img} alt={work.title} loading="lazy" className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
                  <span className="text-xs text-gold uppercase tracking-widest mb-2">{work.category}</span>
                  <h4 className="font-heading font-semibold text-foreground text-center">{work.title}</h4>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* E-commerce grid */}
        {tab === "ecommerce" && (
          <div className="grid md:grid-cols-2 gap-8">
            {ecomWorks.map((work) => (
              <div key={work.title} className="group overflow-hidden rounded-xl border border-border hover:border-gold/50 transition-all hover-glow">
                <div className="overflow-hidden">
                  <img src={work.img} alt={work.title} loading="lazy" className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6 bg-card">
                  <h4 className="font-heading font-semibold text-lg text-foreground mb-2 flex items-center gap-2">
                    {work.title} <ExternalLink size={14} className="text-gold" />
                  </h4>
                  <p className="text-sm text-muted-foreground">{work.desc}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioSection;

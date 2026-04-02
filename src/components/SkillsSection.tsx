import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Palette, ShoppingBag, PenTool, Layers, Search, Settings, Package, Sparkles } from "lucide-react";

const designSkills = [
  { icon: PenTool, label: "Poster Design" },
  { icon: Layers, label: "Flyer Design" },
  { icon: Sparkles, label: "Logo Design" },
  { icon: Palette, label: "Branding & Visual Identity" },
];

const ecomSkills = [
  { icon: ShoppingBag, label: "Shopify Store Design & Redesign" },
  { icon: Palette, label: "Conversion-Focused UI/UX" },
  { icon: Search, label: "Store SEO Optimization" },
  { icon: Settings, label: "App Integration" },
  { icon: Package, label: "Product Hunting & Winning Product Research" },
  { icon: Sparkles, label: "Premium Theme Customization" },
];

const SkillsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="skills" className="py-24">
      <div ref={ref} className={`container mx-auto px-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-center mb-4">
          My <span className="text-gradient-gold">Skills</span>
        </h2>
        <div className="w-16 h-1 bg-gradient-gold mx-auto mb-16 rounded-full" />

        <div className="grid md:grid-cols-2 gap-12">
          {/* Graphic Design */}
          <div>
            <h3 className="font-heading text-xl font-semibold text-gold mb-6 flex items-center gap-2">
              <Palette size={20} /> Graphic Designing
            </h3>
            <div className="grid gap-4">
              {designSkills.map((skill) => (
                <div key={skill.label} className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:border-gold/50 hover-glow transition-all">
                  <skill.icon size={20} className="text-gold shrink-0" />
                  <span className="text-foreground">{skill.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* E-commerce */}
          <div>
            <h3 className="font-heading text-xl font-semibold text-gold mb-6 flex items-center gap-2">
              <ShoppingBag size={20} /> E-commerce / Shopify
            </h3>
            <div className="grid gap-4">
              {ecomSkills.map((skill) => (
                <div key={skill.label} className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:border-gold/50 hover-glow transition-all">
                  <skill.icon size={20} className="text-gold shrink-0" />
                  <span className="text-foreground">{skill.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

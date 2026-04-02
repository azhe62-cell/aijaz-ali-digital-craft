import { ArrowDown } from "lucide-react";

const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Subtle background elements */}
    <div className="absolute inset-0 bg-background">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gold/5 blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-gold/3 blur-[100px]" />
    </div>

    <div className="relative z-10 container mx-auto px-6 text-center">
      <p className="animate-fade-up text-gold font-body text-sm md:text-base tracking-[0.3em] uppercase mb-6">
        Graphic Designer & E-commerce Specialist
      </p>

      <h1 className="animate-fade-up-delay-1 font-heading text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 max-w-4xl mx-auto">
        Building Premium Digital Experiences &{" "}
        <span className="text-gradient-gold">High-Converting Stores</span>
      </h1>

      <p className="animate-fade-up-delay-2 text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12">
        Crafting visually stunning designs and Shopify stores that drive results.
      </p>

      <div className="animate-fade-up-delay-2 flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="#portfolio"
          className="px-8 py-4 bg-gradient-gold text-primary-foreground font-heading font-semibold rounded-lg hover-glow hover:scale-105 transition-transform"
        >
          View My Work
        </a>
        <a
          href="#contact"
          className="px-8 py-4 border border-gold text-gold font-heading font-semibold rounded-lg hover:bg-gold/10 transition-all"
        >
          Contact Me
        </a>
      </div>
    </div>

    {/* Scroll indicator */}
    <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold animate-bounce">
      <ArrowDown size={24} />
    </a>
  </section>
);

export default HeroSection;

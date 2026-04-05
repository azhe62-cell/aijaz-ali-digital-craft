import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ExternalLink, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast({ title: "Please fill in all fields", variant: "destructive" });
      return;
    }
    toast({ title: "Message sent!", description: "Thanks for reaching out. I'll get back to you soon." });
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section id="contact" className="py-24 bg-surface">
      <div ref={ref} className={`container mx-auto px-6 max-w-5xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-center mb-4">
          Let's <span className="text-gradient-gold">Connect</span>
        </h2>
        <div className="w-16 h-1 bg-gradient-gold mx-auto mb-6 rounded-full" />
        <p className="text-center text-muted-foreground mb-12">
          Ready to elevate your brand? Reach out through any of the platforms below.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="bg-card border border-border rounded-xl p-8">
            <h3 className="font-heading text-xl font-semibold mb-6">
              Send a <span className="text-gold">Message</span>
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-background/50 border-border/50"
              />
              <Input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-background/50 border-border/50"
              />
              <Textarea
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="bg-background/50 border-border/50 min-h-[120px]"
              />
              <Button type="submit" className="w-full bg-gold hover:bg-gold/90 text-primary-foreground">
                <Send className="mr-2 h-4 w-4" /> Send Message
              </Button>
            </form>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-6 justify-center">
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
      </div>
    </section>
  );
};

export default ContactSection;

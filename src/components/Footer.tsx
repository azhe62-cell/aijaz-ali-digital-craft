import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Footer = () => {
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
    <footer className="py-16 border-t border-border bg-card/50">
      <div className="container mx-auto px-6">
        <div className="max-w-xl mx-auto mb-10">
          <h3 className="text-2xl font-bold text-center mb-2">
            Get In <span className="text-gold">Touch</span>
          </h3>
          <p className="text-muted-foreground text-center text-sm mb-6">
            Have a project in mind? Let's talk!
          </p>
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
        <div className="text-center pt-6 border-t border-border/50">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()}{" "}
            <span className="text-gold font-medium">Aijaz Ali</span> — All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

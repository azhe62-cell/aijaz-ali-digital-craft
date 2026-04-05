const Footer = () => (
  <footer className="py-8 border-t border-border">
    <div className="container mx-auto px-6 text-center">
      <p className="text-muted-foreground text-sm">
        © {new Date().getFullYear()}{" "}
        <span className="text-gold font-medium">Aijaz Ali</span> — All Rights Reserved
      </p>
    </div>
  </footer>
);

export default Footer;

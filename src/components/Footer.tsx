const Footer = () => {
  return (
    <footer className="py-8 px-6 bg-secondary/30 border-t border-primary/10">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Pritam Thopate. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
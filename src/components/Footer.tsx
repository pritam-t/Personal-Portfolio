"use client";

import { Github, Linkedin, Mail, Twitter, Heart, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/pritam-t",
      label: "GitHub",
      hoverColor: "hover:text-gray-400"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/pritam-thopate/",
      label: "LinkedIn",
      hoverColor: "hover:text-blue-500"
    },
    {
      icon: Twitter,
      href: "https://twitter.com",
      label: "Twitter",
      hoverColor: "hover:text-blue-400"
    },
    {
      icon: Mail,
      href: "mailto:pritamthopate27@gmail.com",
      label: "Email",
      hoverColor: "hover:text-red-400"
    }
  ];

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-background to-secondary/30 border-t border-primary/10 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Decorative Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 py-12 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Pritam Thopate
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Software Developer passionate about creating innovative solutions through mobile development, AI, and robotics.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.label !== "Email" ? "_blank" : undefined}
                    rel={social.label !== "Email" ? "noopener noreferrer" : undefined}
                    className={`w-12 h-12 rounded-full bg-secondary/50 hover:bg-gradient-to-br hover:from-primary/20 hover:to-accent/20 border-2 border-primary/20 hover:border-primary flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg ${social.hoverColor}`}
                    aria-label={social.label}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-foreground">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-primary group-hover:w-4 transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-foreground">Get In Touch</h4>
            <div className="space-y-3 text-muted-foreground">
              <p className="flex items-start gap-2">
                <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <a href="mailto:pritamthopate27@gmail.com" className="hover:text-primary transition-colors break-all">
                  pritamthopate27@gmail.com
                </a>
              </p>
              <p className="text-sm leading-relaxed">
                Available for freelance projects, collaborations, and full-time opportunities.
              </p>
              <Button
                className="mt-4 bg-gradient-to-r from-primary to-accent hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-primary/50"
                asChild
              >
                <a href="#contact">
                  Let's Connect
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} Pritam Thopate. All rights reserved. 
            <span className="inline-flex items-center gap-1 ml-2">
              Made with <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" /> in India
            </span>
          </p>

          {/* Back to Top Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={scrollToTop}
            className="group rounded-full hover:bg-primary/10 transition-all duration-300"
          >
            <span className="mr-2 text-sm">Back to Top</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" />
          </Button>
        </div>

        {/* Additional Info */}
        <div className="mt-8 text-center">
          <p className="text-xs text-muted-foreground">
            Built with React, TypeScript, and Tailwind CSS • Hosted on Vercel
          </p>
        </div>
      </div>

      {/* Scroll Indicator Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary opacity-50" />
    </footer>
  );
};

export default Footer;
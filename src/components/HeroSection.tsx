"use client";

import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin, Mail, Download, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const roles = [
    "Software Developer",
    "Mobile App Developer",
    "Robotics Engineer",
    "AI Enthusiast"
  ];

  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Subtle Grid Pattern Background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, #fff 1px, transparent 1px),
                           linear-gradient(to bottom, #fff 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Gradient Orb */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Side - Text Content */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}>

            {/* Greeting Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Available for opportunities
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[1.1] tracking-tight">
                Pritam
                <br />
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                  Thopate
                </span>
              </h1>

              {/* Animated Role */}
              <div className="h-12 flex items-center">
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-400">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                    {roles[currentRole]}
                  </span>
                </h2>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg lg:text-xl text-gray-400 leading-relaxed max-w-xl">
              3rd Year CS Engineering student passionate about creating innovative solutions through{" "}
              <span className="text-white font-semibold">mobile development</span>,{" "}
              <span className="text-white font-semibold">AI</span>, and{" "}
              <span className="text-white font-semibold">robotics</span>.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-6 max-w-lg">
              {[
                { value: "6+", label: "Projects" },
                { value: "3+", label: "Years Experience" },
                { value: "🏆", label: "Gold Medal" }
              ].map((stat, i) => (
                <div key={i} className="text-center lg:text-left">
                  <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="group bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 text-lg px-8 py-6 rounded-xl font-semibold"
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                View My Work
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-2 border-gray-700 hover:border-primary hover:bg-primary/10 transition-all duration-300 text-lg px-8 py-6 rounded-xl font-semibold"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Get In Touch
              </Button>

              <Button
                variant="ghost"
                size="lg"
                className="border-2 border-gray-700 hover:border-accent hover:bg-accent/10 transition-all duration-300 text-lg px-6 py-6 rounded-xl"
                asChild
              >
                <a href="public\resume\Pritam_Thopate_Resume.pdf" download>
                  <Download className="w-5 h-5" />
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              {[
                { icon: Github, href: "https://github.com/pritam-t", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/pritam-thopate/", label: "LinkedIn" },
                { icon: Mail, href: "mailto:pritamthopate27@gmail.com", label: "Email" }
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={label !== "Email" ? "_blank" : undefined}
                  rel={label !== "Email" ? "noopener noreferrer" : undefined}
                  className="w-12 h-12 rounded-xl border-2 border-gray-700 hover:border-primary hover:bg-primary/10 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Side - Visual Element */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}>

            {/* Decorative Circle */}
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Outer decorative ring */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-pulse" style={{ animationDuration: '3s' }} />
              <div className="absolute inset-4 rounded-full border border-accent/20 animate-pulse" style={{ animationDuration: '4s', animationDelay: '0.5s' }} />

              {/* Main circle with gradient */}
              <div className="absolute inset-8 rounded-full bg-gradient-to-br from-primary/20 via-transparent to-accent/20 backdrop-blur-sm border border-white/10">
                {/* Profile Image Placeholder */}
                {/* Profile Image */}
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  <img
                    src="\public\images\profile.jpeg"
                    alt="Pritam Thopate"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>

              </div>

              {/* Floating Tech Icons */}
              <div className="absolute top-1/4 -left-4 w-20 h-20 rounded-2xl bg-slate-800/80 backdrop-blur-sm border border-white/10 flex items-center justify-center shadow-xl animate-float">
                <span className="text-3xl">⚛️</span>
              </div>

              <div className="absolute top-1/2 -right-8 w-24 h-24 rounded-2xl bg-slate-800/80 backdrop-blur-sm border border-white/10 flex items-center justify-center shadow-xl animate-float" style={{ animationDelay: '0.5s' }}>
                <span className="text-4xl">📱</span>
              </div>

              <div className="absolute bottom-1/4 -left-8 w-16 h-16 rounded-2xl bg-slate-800/80 backdrop-blur-sm border border-white/10 flex items-center justify-center shadow-xl animate-float" style={{ animationDelay: '1s' }}>
                <span className="text-2xl">🤖</span>
              </div>

              <div className="absolute bottom-8 right-1/4 w-20 h-20 rounded-2xl bg-slate-800/80 backdrop-blur-sm border border-white/10 flex items-center justify-center shadow-xl animate-float" style={{ animationDelay: '1.5s' }}>
                <span className="text-3xl">🎨</span>
              </div>
            </div>

            {/* Featured Achievement Badge */}
            <div className="absolute top-0 right-0 px-6 py-4 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm border border-yellow-500/30 rounded-2xl shadow-2xl">
              <div className="flex items-center gap-3">
                <span className="text-3xl">🏆</span>
                <div>
                  <div className="text-sm font-semibold text-yellow-400">Gold Medal</div>
                  <div className="text-xs text-gray-400">FIRST Global 2022</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-gray-500 uppercase tracking-wider">Scroll Down</span>
          <ChevronDown className="w-6 h-6 text-primary" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
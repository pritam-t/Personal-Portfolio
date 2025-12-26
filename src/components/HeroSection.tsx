"use client";

import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin, Mail, Download, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);

  const roles = [
    "Software Developer",
    "Mobile App Developer",
    "Robotics Engineer",
    "AI Enthusiast",
  ];

  useEffect(() => setIsVisible(true), []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div
            className={`space-y-8 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            {/* Availability */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-xs sm:text-sm text-primary">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              Available for opportunities
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight">
              Pritam
              <br />
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
                Thopate
              </span>
            </h1>

            {/* Role */}
            <div className="h-10">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                {roles[currentRole]}
              </h2>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-gray-400 max-w-xl">
              3rd Year CS Engineering student passionate about{" "}
              <span className="text-white font-semibold">mobile development</span>,{" "}
              <span className="text-white font-semibold">AI</span>, and{" "}
              <span className="text-white font-semibold">robotics</span>.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 max-w-md">
              {[
                { value: "6+", label: "Projects" },
                { value: "3+", label: "Years" },
                { value: "🏆", label: "Gold" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-primary to-accent text-lg px-8 py-6 rounded-xl font-semibold"
                onClick={() =>
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                View My Work
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-gray-700 text-lg px-8 py-6 rounded-xl"
                onClick={() =>
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Get In Touch
              </Button>

              <Button variant="ghost" size="lg" asChild className="w-full sm:w-auto">
                <a href="/resume/Pritam_Resume.pdf" download>
                  <Download className="w-5 h-5" />
                </a>
              </Button>
            </div>

            {/* Socials */}
            <div className="flex gap-4 pt-4">
              {[
                { icon: Github, href: "https://github.com/pritam-t" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/pritam-thopate/" },
                { icon: Mail, href: "mailto:pritamthopate27@gmail.com" },
              ].map(({ icon: Icon, href }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl border border-gray-700 flex items-center justify-center hover:border-primary transition"
                >
                  <Icon className="w-5 h-5 text-gray-400 hover:text-primary" />
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="relative max-w-sm sm:max-w-md mx-auto">
            <div className="relative aspect-square rounded-full bg-gradient-to-br from-primary/20 to-accent/20 p-2">
              <div className="w-full h-full rounded-full overflow-hidden border border-white/10">
                <img
                  src="/images/profile.jpg"
                  alt="Pritam Thopate"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Badge */}
            <div className="mt-6 lg:absolute lg:top-0 lg:right-0 px-5 py-3 bg-yellow-500/20 border border-yellow-500/30 rounded-xl text-center">
              <div className="text-sm font-semibold text-yellow-400">🏆 Gold Medal</div>
              <div className="text-xs text-gray-400">FIRST Global 2022</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block">
        <ChevronDown className="w-6 h-6 text-primary" />
      </div>
    </section>
  );
};

export default HeroSection;

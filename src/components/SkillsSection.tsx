"use client";

import { Code, Layers, Lightbulb, Sparkles, Zap, Rocket } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const colorMap = {
  cyan: {
    bg: "bg-cyan-500/20",
    text: "text-cyan-400",
  },
  purple: {
    bg: "bg-purple-500/20",
    text: "text-purple-400",
  },
  pink: {
    bg: "bg-pink-500/20",
    text: "text-pink-400",
  },
};

const SkillsSection = () => {
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  /* Intersection Observer */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  /* Mouse spotlight – scoped to section */
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    section.addEventListener("mousemove", handleMouseMove);
    return () => section.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
      skills: ["Java", "Python", "C++", "Dart", "JavaScript", "HTML/CSS", "MySQL", "MongoDB"],
    },
    {
      title: "Frameworks",
      icon: Layers,
      gradient: "from-purple-500 via-pink-500 to-rose-500",
      skills: ["Flutter", "Android SDK", "Firebase", "Supabase", "Git", "Arduino", "ESP-32", "SolidWorks", "Spring"],
    },
    {
      title: "Domains",
      icon: Lightbulb,
      gradient: "from-orange-500 via-amber-500 to-yellow-500",
      skills: ["Mobile App Dev", "AI Integration", "Robotics", "Automation", "Prompt Engineering", "DSA"],
    },
  ];

  const featuredSkills = [
    { name: "Flutter", icon: Zap, color: "cyan" },
    { name: "AI Integration", icon: Sparkles, color: "purple" },
    { name: "Robotics", icon: Rocket, color: "pink" },
  ] as const;

  return (
    <section
      ref={sectionRef}
      className="min-h-screen py-32 px-4 md:px-6 bg-black text-white relative flex items-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-40 hidden md:block">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-500 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-cyan-500 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-1/2 w-[500px] h-[500px] bg-pink-500 rounded-full blur-3xl animate-blob animation-delay-4000" />
      </div>

      {/* Mouse Spotlight */}
      <div
        className="absolute w-96 h-96 rounded-full pointer-events-none"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid grid-cols-12 gap-4">

          {/* Header */}
          <div className={`col-span-12 lg:col-span-8 bg-white/5 backdrop-blur-2xl rounded-3xl p-12 border border-white/10 transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0 translate-y-10"}`}>
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full">
                <Sparkles className="w-4 h-4" />
                Tech Stack
              </span>
              <h2 className="text-5xl font-bold">
                Building with <br />
                <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
                  modern tools
                </span>
              </h2>
              <p className="text-white/60 max-w-xl text-lg">
                Crafting digital experiences with cutting-edge technologies.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className={`col-span-12 lg:col-span-4 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 backdrop-blur-2xl rounded-3xl p-8 border border-white/10 transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0 translate-y-10"}`}>
            <div className="text-6xl font-bold">23+</div>
            <p className="text-white/60">Technologies mastered</p>
          </div>

          {/* Featured Skills */}
          {featuredSkills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className={`col-span-6 md:col-span-4 bg-white/5 backdrop-blur-2xl rounded-3xl p-6 border border-white/10 transition-all duration-700 hover:scale-105 ${isVisible ? "opacity-100" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${i * 100 + 200}ms` }}
              >
                <div className={`w-12 h-12 rounded-2xl ${colorMap[skill.color].bg} flex items-center justify-center mb-4`}>
                  <Icon className={`w-6 h-6 ${colorMap[skill.color].text}`} />
                </div>
                <div className="text-lg font-semibold">{skill.name}</div>
                <div className="text-sm text-white/40">Specialized</div>
              </div>
            );
          })}

          {/* Categories */}
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            const hovered = hoveredCategory === index;

            return (
              <div
                key={category.title}
                onMouseEnter={() => setHoveredCategory(index)}
                onMouseLeave={() => setHoveredCategory(null)}
                className={`col-span-12 md:col-span-6 lg:col-span-4 bg-white/5 backdrop-blur-2xl rounded-3xl p-8 border transition-all duration-500 cursor-pointer
                ${hovered ? "border-white/30 scale-105" : "border-white/10 hover:border-white/20"}
                ${isVisible ? "opacity-100" : "opacity-0 translate-y-10"}`}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.gradient} p-[1px]`}>
                    <div className="w-full h-full bg-black rounded-2xl flex items-center justify-center">
                      <Icon className="w-7 h-7" />
                    </div>
                  </div>
                  <span className="text-xs text-white/40">{category.skills.length} items</span>
                </div>

                <h3 className="text-2xl font-bold mb-4">{category.title}</h3>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map(skill => (
                    <span
                      key={skill}
                      className={`px-3 py-1.5 rounded-full text-sm border transition-all
                      ${hovered
                        ? `bg-gradient-to-r ${category.gradient} text-white border-transparent`
                        : "bg-white/5 text-white/70 border-white/20"}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes blob {
          0%,100% { transform: translate(0,0) scale(1); }
          50% { transform: translate(30px,-40px) scale(1.1); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
};

export default SkillsSection;

"use client";

import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Filter, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const ProjectCard = ({ project, index, isVisible }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`group relative transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow Effect on Hover */}
      <div className={`absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500`} />
      
      <div className="relative p-6 bg-gradient-to-br from-slate-800 via-slate-850 to-slate-900 border border-blue-500/20 rounded-2xl hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 hover:scale-[1.02] overflow-hidden h-full flex flex-col">
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-accent/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
        
        <div className="relative z-10 space-y-4 flex-1 flex flex-col">
          {/* Logo + Title Section */}
          <div className="flex items-start gap-4 mb-2">
            {project.logo && (
              <div className="relative flex-shrink-0">
                <div className="w-20 h-20 rounded-xl overflow-hidden border-2 border-gray-600/30 group-hover:border-primary/50 transition-all duration-300 group-hover:scale-110">
                  <img
                    src={project.logo}
                    alt={`${project.title} logo`}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Badge for Featured Projects */}
                {project.featured && (
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-xs">⭐</span>
                  </div>
                )}
              </div>
            )}
            <div className="flex-1">
              <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent transition-all duration-300">
                {project.title}
              </h3>
              {project.year && (
                <span className="text-xs text-blue-400 bg-blue-500/10 px-2 py-1 rounded-full mt-2 inline-block">
                  {project.year}
                </span>
              )}
            </div>
          </div>

          {/* Description */}
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed flex-1">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-2.5 py-1 text-xs font-medium bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/30 hover:bg-blue-500/20 hover:scale-105 transition-all duration-200 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Metrics if available */}
          {project.metrics && (
            <div className="grid grid-cols-2 gap-3 pt-3">
              {project.metrics.map((metric, idx) => (
                <div key={idx} className="text-center p-2 bg-secondary/30 rounded-lg">
                  <div className="text-lg font-bold text-primary">{metric.value}</div>
                  <div className="text-xs text-muted-foreground">{metric.label}</div>
                </div>
              ))}
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white text-sm font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 shadow-lg hover:shadow-blue-500/50"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            )}
            {project.codeUrl && (
              <a
                href={project.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-4 bg-gray-700 hover:bg-gray-600 text-white text-sm font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 shadow-lg"
              >
                <Github className="w-4 h-4" />
                Source Code
              </a>
            )}
            {!project.demoUrl && !project.codeUrl && (
              <div className="flex-1 text-center text-sm text-gray-400 py-2.5 px-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
                🔒 Private Project
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "MediScan+",
      logo: "/images/logo/mediscan.png",
      description: "Mobile healthcare assistant app with AI-powered symptom checking, medicine scanning, and health profiling. Integrated Google Maps for medical facilities and SQLite for offline persistence.",
      technologies: ["Flutter", "SQLite", "REST APIs", "AI Integration", "Android SDK"],
      category: "Mobile",
      demoUrl: null,
      codeUrl: "https://github.com/pritam-t/MediScan.git",
      featured: true,
      year: "2024",
      metrics: [
        { value: "5+", label: "Features" },
        { value: "AI", label: "Powered" }
      ]
    },
    {
      title: "TrackStack",
      logo: "/images/logo/trackstack.png",
      description: "Cross-platform habit and task tracking app with dynamic progress visualization and real-time statistics. Implemented swipe-based UI for enhanced user engagement.",
      technologies: ["Flutter", "Dart", "SharedPreferences", "Android SDK"],
      category: "Mobile",
      demoUrl: null,
      codeUrl: "https://github.com/pritam-t/TrackStack",
      year: "2024"
    },
    {
      title: "OVERLAYS_PS",
      logo: "/images/logo/overlays.jpg",
      description: "Snapchat Lens for virtual clothing try-on using real-time garment overlay and body tracking. Featured on Snapchat, addressing online shopping return rates.",
      technologies: ["Lens Studio", "JavaScript", "Computer Vision", "Snapchat"],
      category: "AR/VR",
      demoUrl: "https://www.snapchat.com/lens/ff4d3b97297a4667b634aaa5314a5b9e?share_id=8jW2_BNf_I0&locale=en-IN",
      codeUrl: null,
      featured: true,
      year: "2024",
      metrics: [
        { value: "2nd", label: "Place" },
        { value: "AR", label: "Technology" }
      ]
    },
    {
      title: "ASTRA",
      logo: "/images/logo/astra.png",
      description: "Smart warehouse automation system with autonomous robot for package sorting. Built Flutter companion app with QR code scanning and Bluetooth communication.",
      technologies: ["Flutter", "Java", "Arduino", "Bluetooth", "Python", "OpenCV", "SolidWorks"],
      category: "Robotics",
      demoUrl: "https://www.linkedin.com/posts/pritam-thopate_flutter-dart-arduino-activity-7327950791837667329-4Hr7?utm_source=share&utm_medium=member_desktop",
      codeUrl: "https://github.com/pritam-t/ASTRA-The-Smart-Warehouse-Automation.git",
      featured: true,
      year: "2024",
      metrics: [
        { value: "30%", label: "Efficiency" },
        { value: "1st", label: "Prize" }
      ]
    },
    {
      title: "RoboHub",
      logo: "/images/logo/robohub.png",
      description: "Interactive web platform for sharing robotics projects with code previews, schematics, and video demonstrations. Features collaborative discussions and project categorization.",
      technologies: ["HTML", "CSS", "JavaScript"],
      category: "Web",
      demoUrl: null,
      codeUrl: "https://github.com/pritam-t/Robo-Hub",
      year: "2023"
    },
    {
      title: "Multi Calculator",
      logo: "/images/logo/multicalc.png",
      description: "Versatile Java-based calculator with multiple operational modes including scientific functions and unit conversions. Features intuitive GUI with optimized algorithms.",
      technologies: ["Flutter", "Dart3", "Hive", "Encrypt", "Android SDK"],
      category: "Mobile",
      demoUrl: null,
      codeUrl: "https://github.com/pritam-t/Multi_Calculator",
      year: "2023"
    }
  ];

  const categories = ["All", "Mobile", "Robotics", "AR/VR", "Web"];
  
  const filteredProjects = selectedFilter === "All" 
    ? projects 
    : projects.filter(p => p.category === selectedFilter);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-slate-950 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Animated Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />

      <div className="w-full max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6 border border-primary/20">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
            </span>
            <span className="text-sm font-semibold text-primary">Portfolio</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 text-white">
            Featured <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Here are some of the projects I've worked on. Each one represents a unique challenge and learning experience.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-1000 delay-200 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <div className="flex items-center gap-2 text-sm text-muted-foreground mr-2">
            <Filter className="w-4 h-4" />
            <span>Filter:</span>
          </div>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedFilter(category)}
              className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                selectedFilter === category
                  ? "bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/30 scale-105"
                  : "bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground hover:scale-105"
              }`}
            >
              {category}
              {category !== "All" && (
                <span className="ml-2 text-xs opacity-70">
                  ({projects.filter(p => p.category === category).length})
                </span>
              )}
            </button>
          ))}
          {selectedFilter !== "All" && (
            <button
              onClick={() => setSelectedFilter("All")}
              className="px-4 py-2.5 rounded-full bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              <X className="w-4 h-4" />
              Clear
            </button>
          )}
        </div>

        {/* Project Stats */}
        <div className={`grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-12 transition-all duration-1000 delay-300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          {[
            { value: filteredProjects.length, label: "Projects" },
            { value: new Set(filteredProjects.flatMap(p => p.technologies)).size, label: "Technologies" },
            { value: filteredProjects.filter(p => p.featured).length, label: "Featured" }
          ].map((stat, i) => (
            <div key={i} className="text-center p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl border border-primary/20">
              <div className="text-3xl font-bold text-primary mb-1">{stat.value}+</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* View More Section */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <div className="inline-flex flex-col items-center gap-4 p-8 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl border border-primary/20">
            <p className="text-lg text-muted-foreground">
              Want to see more of my work?
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-primary/50"
              asChild
            >
              <a href="https://github.com/pritam-t" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                View GitHub Profile
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
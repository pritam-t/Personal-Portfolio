import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const ProjectCard = ({ project }) => {
  return (
    <div className="group p-6 bg-gradient-to-br from-slate-800 to-slate-900 border border-blue-500/20 rounded-xl hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105">
      <div className="space-y-4">
        
        {/* Logo + Title Section */}
        <div className="flex items-center gap-4 mb-2">
          {project.logo && (
            <img
              src={project.logo}
              alt={`${project.title} logo`}
              className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg border border-gray-600/30 group-hover:shadow-md group-hover:shadow-blue-500/30 transition-shadow flex-shrink-0"
            />
          )}
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            {project.title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-2.5 py-1 text-xs font-medium bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/30"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-4">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2 px-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <ExternalLink className="w-4 h-4" />
              Demo
            </a>
          )}
          {project.codeUrl && (
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2 px-3 bg-gray-700 hover:bg-gray-600 text-white text-sm font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <Github className="w-4 h-4" />
              Code
            </a>
          )}
          {!project.demoUrl && !project.codeUrl && (
            <div className="flex-1 text-center text-sm text-gray-400 py-2 px-3 bg-gray-800/50 rounded-lg">
              Private Project
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const projects = [
    {
      title: "MediScan+",
      logo: "/images/logo/mediscan.png", // Add your logo paths here
      description: "Mobile healthcare assistant app with AI-powered symptom checking, medicine scanning, and health profiling. Integrated Google Maps for medical facilities and SQLite for offline persistence.",
      technologies: ["Flutter", "SQLite", "REST APIs", "AI Integration", "Android SDK"],
      demoUrl: null,
      codeUrl: "https://github.com/pritam-t/MediScan.git"
    },
    {
      title: "TrackStack",
      logo: "/images/logo/trackstack.png",
      description: "Cross-platform habit and task tracking app with dynamic progress visualization and real-time statistics. Implemented swipe-based UI for enhanced user engagement.",
      technologies: ["Flutter", "Dart", "SharedPreferences", "Android SDK"],
      demoUrl: null,
      codeUrl: "https://github.com/pritam-t/TrackStack"
    },
    {
      title: "OVERLAYS_PS",
      logo: "/images/logo/overlays.jpg",
      description: "Snapchat Lens for virtual clothing try-on using real-time garment overlay and body tracking. Featured on Snapchat, addressing online shopping return rates.",
      technologies: ["Lens Studio", "JavaScript", "Computer Vision", "Snapchat"],
      demoUrl: "https://www.snapchat.com/lens/ff4d3b97297a4667b634aaa5314a5b9e?share_id=8jW2_BNf_I0&locale=en-IN",
      codeUrl: null
    },
    {
      title: "ASTRA",
      logo: "/images/logo/astra.png",
      description: "Smart warehouse automation system with autonomous robot for package sorting. Built Flutter companion app with QR code scanning and Bluetooth communication.",
      technologies: ["Flutter", "Java", "Arduino", "Bluetooth", "Python", "OpenCV", "SolidWorks"],
      demoUrl: "https://www.linkedin.com/posts/pritam-thopate_flutter-dart-arduino-activity-7327950791837667329-4Hr7?utm_source=share&utm_medium=member_desktop&rcm=ACoAAETeaHwBZj82urcTDJWxZHTLwzlJlio70CE",
      codeUrl: "https://github.com/pritam-t/ASTRA-The-Smart-Warehouse-Automation.git"
    },
    {
      title: "RoboHub",
      logo: "/images/logo/robohub.png",
      description: "Interactive web platform for sharing robotics projects with code previews, schematics, and video demonstrations. Features collaborative discussions and project categorization.",
      technologies: ["HTML", "CSS", "JavaScript"],
      demoUrl: null,
      codeUrl: "https://github.com/pritam-t/Robo-Hub"
    },
    {
      title: "Multi Calculator",
      logo: "/images/logo/multicalc.png",
      description: "Versatile Java-based calculator with multiple operational modes including scientific functions and unit conversions. Features intuitive GUI with optimized algorithms.",
      technologies: ["Flutter", "Dart3", "Hive", "Encrypt", "Android SDK"],
      demoUrl: null,
      codeUrl: "https://github.com/pritam-t/Multi_Calculator"
    }
  ];

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-slate-950">
      <div className="w-full max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-white">
            Featured Projects
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Here are some of the projects I've worked on. Each one represents a unique challenge and learning experience.
          </p>
        </div>

        {/* Projects Grid - Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "MediScan+",
      description: "Mobile healthcare assistant app with AI-powered symptom checking, medicine scanning, and health profiling. Integrated Google Maps for medical facilities and SQLite for offline persistence.",
      technologies: ["Flutter", "SQLite", "REST APIs", "AI Integration"],
      demoUrl: null,
      codeUrl: null
    },
    {
      title: "TrackStack", 
      description: "Cross-platform habit and task tracking app with dynamic progress visualization and real-time statistics. Implemented swipe-based UI for enhanced user engagement.",
      technologies: ["Flutter", "Dart", "SharedPreferences"],
      demoUrl: null,
      codeUrl: "https://github.com/pritam-t/TrackStack"
    },
    {
      title: "OVERLAYS_PS",
      description: "Snapchat Lens for virtual clothing try-on using real-time garment overlay and body tracking. Featured on Snapchat, addressing online shopping return rates.",
      technologies: ["Lens Studio", "JavaScript", "Computer Vision"],
      demoUrl: null,
      codeUrl: null
    },
    {
      title: "ASTRA",
      description: "Smart warehouse automation system with autonomous robot for package sorting. Built Flutter companion app with QR code scanning and Bluetooth communication.",
      technologies: ["Flutter", "Java", "Arduino", "Bluetooth"],
      demoUrl: null,
      codeUrl: null
    },
    {
      title: "RoboHub",
      description: "Interactive web platform for sharing robotics projects with code previews, schematics, and video demonstrations. Features collaborative discussions and project categorization.",
      technologies: ["HTML", "CSS", "JavaScript"],
      demoUrl: null,
      codeUrl: "https://github.com/pritam-t/Robo-Hub"
    },
    {
      title: "Multi Calculator",
      description: "Versatile Java-based calculator with multiple operational modes including scientific functions and unit conversions. Features intuitive GUI with optimized algorithms.",
      technologies: ["Java", "Swing", "GUI"],
      demoUrl: null,
      codeUrl: "https://github.com/pritam-t/Multi_Calculator"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Here are some of the projects I've worked on. Each one represents a unique challenge and learning experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="p-6 bg-gradient-card border-primary/20 hover:shadow-glow-primary transition-smooth hover:scale-105">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 pt-4">
                  {project.demoUrl && (
                    <Button variant="outline" size="sm" className="flex-1" asChild>
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  )}
                  {project.codeUrl && (
                    <Button variant="ghost" size="sm" className="flex-1" asChild>
                      <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  )}
                  {!project.demoUrl && !project.codeUrl && (
                    <div className="flex-1 text-center text-sm text-muted-foreground py-2">
                      Private Project
                    </div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;
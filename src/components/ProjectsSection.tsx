import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Project Title 1",
      description: "A brief description of your amazing project. Explain what it does, what technologies you used, and what makes it special.",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      title: "Project Title 2", 
      description: "Another awesome project showcasing your skills. Describe the challenges you faced and how you solved them.",
      technologies: ["Next.js", "Node.js", "PostgreSQL"],
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      title: "Project Title 3",
      description: "A third project that demonstrates your versatility and expertise in different areas of software development.",
      technologies: ["Vue.js", "Python", "MongoDB"],
      demoUrl: "#",
      codeUrl: "#"
    }
  ];

  return (
    <section className="py-20 px-6">
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
                  <Button variant="outline" size="sm" className="flex-1">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                  <Button variant="ghost" size="sm" className="flex-1">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
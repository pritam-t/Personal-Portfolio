import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Layers, Lightbulb } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6 text-primary" />,
      skills: ["Java", "Python", "C++", "Dart", "JavaScript", "HTML/CSS", "MySQL","MongoDB"]
    },
    {
      title: "Frameworks & Tools",
      icon: <Layers className="w-6 h-6 text-primary" />,
      skills: ["Flutter", "Android SDK", "Firebase", "Supabase", "Git", "Arduino", "ESP-32", "SolidWorks","Spring"]
    },
    {
      title: "Domains & Expertise",
      icon: <Lightbulb className="w-6 h-6 text-primary" />,
      skills: ["Mobile App Development", "AI Integration", "Robotics", "Automation", "Prompt Engineering", "DSA"]
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-secondary/60 to-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Technologies and tools I use to turn ideas into real-world solutions.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="p-6 bg-gradient-to-br from-card via-card/90 to-card border border-primary/10 rounded-xl shadow-lg hover:shadow-primary/30 transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  {category.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center text-foreground mb-6">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="secondary"
                    className="px-4 py-2 text-sm bg-primary/10 text-primary border border-primary/20 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-200 hover:scale-105"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Animated Dots */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-6">
            Always learning and exploring new technologies
          </p>
          <div className="flex justify-center gap-2">
            <span className="w-3 h-3 bg-primary rounded-full animate-pulse"></span>
            <span className="w-3 h-3 bg-accent rounded-full animate-pulse delay-150"></span>
            <span className="w-3 h-3 bg-primary rounded-full animate-pulse delay-300"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

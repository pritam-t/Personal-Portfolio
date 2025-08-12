import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js", "HTML5/CSS3"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Python", "Express", "PostgreSQL", "MongoDB", "REST APIs"]
    },
    {
      title: "Tools & Others",
      skills: ["Git", "Docker", "AWS", "Linux", "Jest", "CI/CD"]
    }
  ];

  return (
    <section className="py-20 px-6 bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-6 bg-gradient-card border-primary/20 hover:shadow-glow-primary transition-smooth">
              <h3 className="text-xl font-semibold mb-4 text-center text-foreground">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex} 
                    variant="secondary" 
                    className="bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-primary-foreground transition-smooth"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-6">
            Always learning and exploring new technologies
          </p>
          <div className="flex justify-center">
            <div className="flex gap-2">
              <div className="w-3 h-3 bg-primary rounded-full animate-glow-pulse"></div>
              <div className="w-3 h-3 bg-accent rounded-full animate-glow-pulse" style={{animationDelay: '0.2s'}}></div>
              <div className="w-3 h-3 bg-primary rounded-full animate-glow-pulse" style={{animationDelay: '0.4s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
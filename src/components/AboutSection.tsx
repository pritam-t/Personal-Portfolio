import { Card } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
          About Me
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          I'm a passionate software engineer with a love for creating elegant solutions to complex problems.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-foreground">
            My Journey
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            With several years of experience in software development, I've had the opportunity to work 
            on diverse projects ranging from web applications to mobile apps. I believe in writing 
            clean, maintainable code and creating user experiences that make a difference.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            When I'm not coding, you can find me exploring new technologies, contributing to open-source 
            projects, or sharing knowledge with the developer community.
          </p>
        </div>

        <Card className="p-8 bg-gradient-card border-primary/20">
          <h3 className="text-xl font-semibold mb-6 text-foreground">Quick Facts</h3>
          <ul className="space-y-4 text-muted-foreground">
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 bg-primary rounded-full animate-glow-pulse"></div>
              Years of Experience: [Add your experience]
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 bg-accent rounded-full animate-glow-pulse"></div>
              Location: [Add your location]
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 bg-primary rounded-full animate-glow-pulse"></div>
              Education: [Add your education]
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 bg-accent rounded-full animate-glow-pulse"></div>
              Interests: [Add your interests]
            </li>
          </ul>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;
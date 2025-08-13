import { Card } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
          About Me
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          I'm a passionate Computer Science Engineering student and software developer specializing in mobile app development, 
          AI integration, and robotics automation.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-foreground">
            My Journey
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Currently pursuing B.E. in Computer Science Engineering at Terna Engineering College, Navi Mumbai. 
            I have hands-on experience in Flutter development, robotics programming, and AI integration through 
            internships at The Innovation Story and NE Worldwide. As a Google Student Brand Ambassador, I represent 
            Google's developer ecosystem on campus.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            My achievements include winning the Gold Medal for Best Robot Design at FIRST Global Challenge 2022 
            representing India, and multiple wins in national robotics competitions. I'm passionate about mentoring 
            teams and contributing to the tech community through innovative solutions.
          </p>
        </div>

        <Card className="p-8 bg-gradient-card border-primary/20">
          <h3 className="text-xl font-semibold mb-6 text-foreground">Quick Facts</h3>
          <ul className="space-y-4 text-muted-foreground">
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 bg-primary rounded-full animate-glow-pulse"></div>
              Current Year: 3rd Year B.E. CSE
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 bg-accent rounded-full animate-glow-pulse"></div>
              Location: Navi Mumbai, India
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 bg-primary rounded-full animate-glow-pulse"></div>
              Education: Terna Engineering College
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 bg-accent rounded-full animate-glow-pulse"></div>
              Specialties: Mobile Dev, AI, Robotics
            </li>
          </ul>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;
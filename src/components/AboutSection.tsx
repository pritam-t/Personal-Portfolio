import { Card } from "@/components/ui/card";
import { GraduationCap, Briefcase } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 px-6 max-w-5xl mx-auto">
      {/* Section Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
          My Journey
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          From a passionate CS student to representing India on the global stage in robotics competitions.
        </p>
      </div>

      {/* Education */}
      <Card className="p-8 mb-10 bg-gradient-card border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="flex items-center gap-3 mb-6">
          <GraduationCap className="w-8 h-8 text-primary" />
          <h3 className="text-2xl font-semibold text-foreground">Education</h3>
        </div>
        <div className="space-y-3">
          <p className="text-lg font-medium text-foreground">B.E. in Computer Science Engineering</p>
          <p className="text-muted-foreground">Terna Engineering College, Navi Mumbai</p>
          <p className="text-sm text-muted-foreground">Aug 2023 – March 2027 (3rd Year)</p>
        </div>
      </Card>

      {/* Professional Experience */}
      <Card className="p-8 bg-gradient-card border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="flex items-center gap-3 mb-6">
          <Briefcase className="w-8 h-8 text-primary" />
          <h3 className="text-2xl font-semibold text-foreground">Professional Experience</h3>
        </div>

        <div className="space-y-8">
          {[
            {
              title: "Software Development Intern – Robotics & Programming",
              period: "June 2024 – May 2025",
              company: "The Innovation Story",
              description: [
                "Developed software systems for autonomous robots used in the FIRST Tech Challenge (FTC), implementing Java-based control logic, image processing pipelines, and sensor integrations.",
                "Designed and optimized robot software architecture to improve automation accuracy and reliability.",
                "Led technical guidance sessions for teams on programming, system architecture, and automation workflows, contributing to award-winning robot designs.",
                "Involved in R&D to integrate advanced software features, reducing execution time by 20% in competition scenarios."
              ]
            },
            {
              title: "Google Student Brand Ambassador",
              period: "August 2025 – Present",
              company: "Google",
              description: [
                "Representing Google on campus, leading student engagement, organizing events, and promoting Google's developer ecosystem."
              ]
            },
            {
              title: "DBMS & Marketing Intern",
              period: "May 2023 – Dec 2023",
              company: "NE Worldwide",
              description: [
                "Designed and managed database systems for efficient data handling.",
                "Assisted in marketing initiatives and data-driven decision-making."
              ]
            }
          ].map((exp, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border border-muted-foreground/10 bg-background shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                <h4 className="text-lg font-semibold text-foreground">{exp.title}</h4>
                <span className="text-sm text-muted-foreground">{exp.period}</span>
              </div>
              <p className="text-primary font-medium mb-2">{exp.company}</p>
              <ul className="list-disc list-inside text-muted-foreground text-sm leading-relaxed space-y-1">
                {Array.isArray(exp.description)
                  ? exp.description.map((point, i) => <li key={i}>{point}</li>)
                  : <li>{exp.description}</li>}
              </ul>
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
};

export default AboutSection;

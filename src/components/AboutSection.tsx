import { Card } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
          My Journey
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          From a passionate CS student to representing India on the global stage in robotics competitions.
        </p>
      </div>

      <div className="space-y-12">
        {/* Education */}
        <Card className="p-8 bg-gradient-card border-primary/20">
          <h3 className="text-2xl font-semibold mb-4 text-foreground">Education</h3>
          <div className="space-y-2">
            <p className="text-lg font-medium text-foreground">B.E. in Computer Science Engineering</p>
            <p className="text-muted-foreground">Terna Engineering College, Navi Mumbai</p>
            <p className="text-sm text-muted-foreground">Aug 2023 – March 2027 (3rd Year)</p>
          </div>
        </Card>

        {/* Experience */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-foreground">Professional Experience</h3>
          <div className="grid gap-6">
            <Card className="p-6 bg-gradient-card border-primary/20">
              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                  <h4 className="text-lg font-semibold text-foreground">Software Development Intern – Robotics & Programming</h4>
                  <span className="text-sm text-muted-foreground">June 2024 – May 2025</span>
                </div>
                <p className="text-primary font-medium">The Innovation Story</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Developed software systems for autonomous robots using Java, image processing, and sensor integration. 
                  Contributed to control algorithms, R&D, and software optimization.
                </p>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-card border-primary/20">
              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                  <h4 className="text-lg font-semibold text-foreground">Google Student Brand Ambassador</h4>
                  <span className="text-sm text-muted-foreground">Feb 2025 – Present</span>
                </div>
                <p className="text-primary font-medium">Google</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Representing Google on campus, leading student engagement, organizing events, and promoting Google's developer ecosystem.
                </p>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-card border-primary/20">
              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                  <h4 className="text-lg font-semibold text-foreground">DBMS & Marketing Intern</h4>
                  <span className="text-sm text-muted-foreground">May 2023 – Dec 2023</span>
                </div>
                <p className="text-primary font-medium">NE Worldwide</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Designed and managed database systems for efficient data handling. Assisted in marketing initiatives and data-driven decision-making.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
import { Card } from "@/components/ui/card";
import { Trophy, Medal, Award, Star } from "lucide-react";

const AchievementsSection = () => {
  const achievements = [
    {
      title: "FIRST Global Challenge 2022 - Gold Medal",
      description:
        "Represented India at Geneva; awarded Gold Medal for Best Robot Design (Sofia Kovalevskaya Award) among 180+ participating nations.",
      icon: Trophy,
      color: "text-yellow-500",
      year: "2022",
      image: "/images/FC.jpg"
    },
    {
      title: "FIRST Tech Challenge India 2022 - Runner-Up",
      description:
        "Secured Runner-Up position showcasing advanced autonomous programming and engineering design skills.",
      icon: Medal,
      color: "text-gray-400",
      year: "2022",
      image: "/images/FTC_2021.jpg"
    },
    {
      title: "KJSIT-INTECH 2K24 - 1st Prize",
      description:
        "Won 1st Prize for developing ASTRA – Smart Warehouse Automation system that improved sorting efficiency by 30%.",
      icon: Award,
      color: "text-yellow-500",
      year: "2024",
      image: "/images/KJSIT.jpg"
    },
    {
      title: "Snap AR Lens Hackathon - 2nd Place",
      description:
        "Achieved 2nd Place by creating 'OVERLAYS_PS', a real-time virtual clothing try-on lens featured on Snapchat.",
      icon: Star,
      color: "text-primary",
      year: "2024",
      image: "/images/Snap_AR.jpg"
    },
    {
      title: "Amazon Future Engineer Summit - 3rd Place",
      description:
        "Earned 3rd Place at Careers of the Future Summit 2025 for innovative software-driven solution addressing modern industry challenges.",
      icon: Award,
      color: "text-orange-500",
      year: "2025",
      image: "/images/Edu_Summit.jpg"
    },
    {
      title: "FTC 2025 - Design Award Finalist",
      description:
        "Recognized as Finalist and 1st Runner-Up for Design Award for mentoring Team Educo #25222 in autonomous robotics software design.",
      icon: Medal,
      color: "text-blue-500",
      year: "2025",
      image: "/images/FTC_2025.jpg"
    }
  ];

  return (
    <section className="py-20 px-6 bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Achievements & Recognition 
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Milestones that define my journey in robotics, software development, and innovation.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <Card
                key={index}
                className="p-6 bg-gradient-card border-primary/20 hover:shadow-glow-primary transition-smooth"
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="p-3 bg-gradient-primary rounded-lg flex-shrink-0">
                    <IconComponent className="w-6 h-6 text-primary-foreground" />
                  </div>

                  {/* Text Content */}
                  <div className="space-y-3 flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-foreground">
                        {achievement.title}
                      </h3>
                      <span className="text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                        {achievement.year}
                      </span>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {achievement.description}
                    </p>

                    {/* Image */}
                    <div className="mt-4">
                        <img
                          src={achievement.image}
                          alt={achievement.title}
                          className="w-full h-64 object-cover rounded-lg border border-muted-foreground/20"
                        />
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;

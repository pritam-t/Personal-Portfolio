"use client";

import { useState } from "react";
import { Trophy, Medal, Award, Star, Zap, Users } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Achievement Card Component
const AchievementCard = ({ achievement, onClick }) => {
  const IconComponent = achievement.icon;
  
  return (
    <div
      onClick={onClick}
      className="cursor-pointer p-6 bg-gradient-to-br from-slate-800 to-slate-900 border border-blue-500/20 rounded-xl hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105"
    >
      {/* Header with Icon and Year */}
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="p-3 bg-blue-600 rounded-lg flex-shrink-0">
          <IconComponent className="w-6 h-6 text-white" />
        </div>
        <span className="text-xs font-semibold text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full">
          {achievement.year}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-white mb-3 line-clamp-2">
        {achievement.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-gray-300 mb-4 line-clamp-3">
        {achievement.description}
      </p>

      {/* Preview Image - Smaller */}
      {achievement.images?.[0] && (
        <div className="relative overflow-hidden rounded-lg border border-gray-600/30">
          <img
            src={achievement.images[0]}
            alt={achievement.title}
            className="w-full h-64 sm:h-72 md:h-80 object-cover hover:scale-110 transition-transform duration-300"
          />
        </div>
      )}
    </div>
  );
};

// Modal Content Component
const AchievementModal = ({ achievement, onClose }) => {
  return (
    <DialogContent className="max-w-2xl sm:max-w-3xl md:max-w-4xl max-h-[90vh] overflow-hidden flex flex-col bg-slate-900 border border-blue-500/30 rounded-2xl">
      {/* Header - Sticky */}
      <DialogHeader className="flex-shrink-0 pb-4 border-b border-gray-700">
        <div className="flex items-start gap-3 mb-2">
          <div className="p-2 bg-blue-600 rounded-lg flex-shrink-0">
            {achievement.icon && <achievement.icon className="w-5 h-5 text-white" />}
          </div>
          <DialogTitle className="text-xl sm:text-2xl font-bold text-white">
            {achievement.title}
          </DialogTitle>
        </div>
        <DialogDescription className="text-xs sm:text-sm text-gray-400 mt-2 ml-1">
          {achievement.location && `Location: ${achievement.location}`}
          {achievement.location && achievement.year && " • "}
          Year: {achievement.year}
        </DialogDescription>
        {achievement.theme && (
          <div className="text-xs sm:text-sm text-blue-400 mt-2 font-semibold ml-1">
            Theme: {achievement.theme}
          </div>
        )}
        {achievement.role && (
          <div className="text-xs sm:text-sm text-purple-400 mt-2 font-semibold ml-1">
            Role: {achievement.role}
          </div>
        )}
      </DialogHeader>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto min-h-0 space-y-6 py-6 px-1 sm:px-0">
        {/* Carousel */}
        {(achievement.images?.length > 0 || achievement.video) && (
          <div className="px-4">
            <Carousel className="w-full">
              <CarouselContent>
                {achievement.images?.map((img, i) => (
                  <CarouselItem key={`img-${i}`} className="flex justify-center">
                    <img
                      src={img}
                      alt={`Slide ${i + 1}`}
                      className="w-full max-w-md h-auto max-h-72 object-cover rounded-lg border border-gray-600"
                    />
                  </CarouselItem>
                ))}
                {achievement.video && (
                  <CarouselItem className="flex justify-center">
                    <video
                      controls
                      className="w-full max-w-md h-auto max-h-72 object-cover rounded-lg border border-gray-600"
                      src={achievement.video}
                    />
                  </CarouselItem>
                )}
              </CarouselContent>
              {(achievement.images?.length > 1 || achievement.video) && (
                <>
                  <CarouselPrevious className="left-0" />
                  <CarouselNext className="right-0" />
                </>
              )}
            </Carousel>
          </div>
        )}

        {/* Description */}
        <div className="px-4">
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed whitespace-pre-line">
            {achievement.description}
          </p>
        </div>

        {/* Highlights Section */}
        {achievement.highlights && achievement.highlights.length > 0 && (
          <div className="px-4">
            <h4 className="text-sm font-semibold text-blue-400 mb-3">Key Contributions:</h4>
            <ul className="space-y-2">
              {achievement.highlights.map((highlight, i) => (
                <li key={i} className="text-sm text-gray-300 flex gap-3">
                  <span className="text-blue-400 font-bold flex-shrink-0">•</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Footer - Sticky */}
      <div className="flex-shrink-0 pt-4 border-t border-gray-700 px-4">
        <button
          onClick={onClose}
          className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
        >
          Close
        </button>
      </div>
    </DialogContent>
  );
};

// Main Component
const AchievementsSection = () => {
  const [selectedAchievement, setSelectedAchievement] = useState(null);

  const achievements = [
    {
      title: "FIRST Global Challenge 2022 – Gold Medal",
      description: "Represented India at Geneva; awarded Gold Medal for Best Robot Design (Sofia Kovalevskaya Award) among 182 participating nations.",
      location: "Geneva, Switzerland",
      theme: "Carbon Capture – Innovating Solutions to Reduce Global Carbon Emissions",
      icon: Trophy,
      year: "2022",
      images: ["/images/FC.jpg", "/images/FC_team.jpg"],
      video: "/videos/FC_demo.mp4",
      highlights: [
        "Designed and implemented autonomous control algorithms using Java and sensor fusion techniques for consistent path accuracy and efficient task execution",
        "Integrated multiple sensors including gyroscopes, ultrasonic sensors, and encoders to enhance navigation and environment awareness",
        "Developed modular subsystems for motor control, object detection, and task sequencing to improve reusability and debugging efficiency",
        "Applied PID tuning for movement precision and fine control over servo-based manipulators",
        "Optimized robot weight and balance to achieve peak maneuverability without performance drops",
        "Led software and control systems development in a five-member interdisciplinary team using agile engineering approach with five iterative prototypes",
        "Achieved the only robot to flawlessly complete all assigned tasks within time constraints"
      ]
    },
    {
      title: "FIRST Tech Challenge 2022 – National Runner-Up",
      description: "Secured Runner-Up position at National level showcasing advanced autonomous programming and engineering design skills.",
      location: "India",
      theme: "Freight Frenzy – Automation and Precision Robotics",
      icon: Medal,
      year: "2022",
      images: ["/images/FTC_2021.jpg"],
      highlights: [
        "Developed control algorithms and automation logic in Java, integrating multiple sensors such as IMUs, encoders, and distance sensors to ensure accurate movement and consistent alignment",
        "Used OpenCV for real-time object detection to autonomously detect freight zones and adjust trajectory accordingly",
        "Implemented PID tuning and modular subsystem design for dynamic control of motors and servos for precise arm and lift operations",
        "Optimized tele-operated mode, reducing control delay and improving task completion speed",
        "Built one of the most consistent performing robots of the season, validating efforts in software stability, design innovation, and strategy execution"
      ]
    },
    {
      title: "KJSIT-INTECH 2K24 - 1st Prize",
      description: "Won 1st Prize for developing ASTRA – Smart Warehouse Automation system that improved sorting efficiency by 30%.",
      location: "Mumbai, India",
      theme: "Industrial Automation and Smart Logistics",
      icon: Zap,
      year: "2024",
      images: ["/images/KJSIT.jpg", "/images/KJSIT_demo.jpg"],
      highlights: [
        "Led software and system integration aspects, building seamless link between hardware and software",
        "Implemented QR code-based identification system to determine package destinations with high accuracy",
        "Developed Flutter mobile application for scanning QR codes and sending encoded destination data via Bluetooth communication",
        "Programmed onboard Arduino microcontroller in C++ to interpret data and autonomously navigate to correct storage zones",
        "Designed algorithms for path optimization, collision avoidance, and load management for smooth operation in dynamic environments",
        "Successfully reduced manual sorting time by nearly 30% with strong real-world applicability for small and medium-sized enterprises"
      ]
    },
    {
      title: "Snap AR Lens Hackathon - 2nd Place",
      description: "Achieved 2nd Place by creating 'OVERLAYS_PS', a real-time virtual clothing try-on lens for augmented reality e-commerce.",
      theme: "Augmented Reality for E-Commerce Innovation",
      location: "Organized by Snap Inc.",
      icon: Star,
      year: "2024",
      images: ["/images/Snap_AR.jpg"],
      video: "/videos/snap_ar_demo.mp4",
      highlights: [
        "Designed fully interactive 3D AR experience using Snap Lens Studio for real-time clothing visualization and virtual try-on",
        "Focused on real-time texture rendering, 3D object animation, and gesture recognition scripting using Lens Studio's JavaScript-based environment",
        "Optimized performance for mobile devices using compressed assets and lightweight shader effects to ensure smooth 60 FPS performance",
        "Created virtual try-on experience bridging gap between digital interaction and physical visualization in e-commerce",
        "Recognized by judges for blend of creativity, usability, and technical precision among competitive national entries"
      ]
    },
    {
      title: "Amazon Future Engineer Summit - 3rd Place",
      description: "Earned 3rd Place at Careers of the Future Summit 2025 for innovative software-driven solutions addressing modern industry challenges.",
      location: "Taj Palace, New Delhi",
      icon: Award,
      year: "2025",
      images: ["/images/Edu_Summit.jpg"],
      highlights: [
        "Represented FIRST Tech Challenge Robot and STEMverse projects at Amazon's Careers of the Future Summit 2025",
        "Presented technical and design architecture of robotics solutions focusing on control logic, automation workflows, and software-driven mechanical coordination",
        "Engaged in discussions on scalable robotics applications and STEM education with Amazon leaders and industry experts",
        "Interacted directly with Amazon's senior leadership including Amit Agarwal (SVP, Amazon India)",
        "Networked with influential creators including Rajeev Makhni and Raj Shamani for insights on leveraging technology for meaningful change",
        "Project recognized for innovation, technical depth, and educational impact"
      ]
    },
    {
      title: "FIRST Tech Challenge 2025 – Design Award Finalist",
      description: "Recognized as Finalist and 1st Runner-Up for Design Award for mentoring Team Educo #25222 in autonomous robotics software design.",
      location: "Balewadi Stadium, Pune",
      role: "Programming & Technical Mentor",
      icon: Users,
      year: "2025",
      images: ["/images/FTC_2025.jpg"],
      highlights: [
        "Returned to FTC 2025 as Programming Mentor for Team Educo #25222, guiding students through every stage of the competition from software design to real-time testing",
        "Trained team in developing modular Java codebases for robot subsystems and implementing PID control systems for motor precision",
        "Introduced vision processing concepts, helping team improve robot's object detection and alignment performance",
        "Contributed to design reviews, ensuring robot met engineering criteria like mechanical reliability, code optimization, and ease of maintenance",
        "Team reached National Finals under mentorship, earning 1st Runner-Up Design Award and Finalist title",
        "Strengthened leadership, communication, and problem-solving skills while inspiring young engineers through hands-on innovation"
      ]
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-slate-950">
      <div className="w-full max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-white">
            Achievements & Recognition
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Milestones that define my journey in robotics, software development, and innovation.
          </p>
        </div>

        {/* Achievements Grid - Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={index}
              achievement={achievement}
              onClick={() => setSelectedAchievement(achievement)}
            />
          ))}
        </div>
      </div>

      {/* Modal Dialog */}
      <Dialog open={!!selectedAchievement} onOpenChange={() => setSelectedAchievement(null)}>
        {selectedAchievement && (
          <AchievementModal
            achievement={selectedAchievement}
            onClose={() => setSelectedAchievement(null)}
          />
        )}
      </Dialog>
    </section>
  );
};

export default AchievementsSection;
"use client";

import { useState } from "react";
import { Trophy, Medal, Award, Star, Zap, Users, ChevronRight } from "lucide-react";
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

// Timeline Achievement Card Component
const TimelineCard = ({ achievement, index, onClick }) => {
  const IconComponent = achievement.icon;
  const isEven = index % 2 === 0;
  
  return (
    <div className="relative flex items-center gap-8 group">
      {/* Timeline line connector */}
      <div className="absolute left-1/2 top-0 w-0.5 h-full bg-gradient-to-b from-blue-500/50 to-transparent -z-10" />
      
      {/* Content wrapper - alternating sides */}
      <div className={`flex items-center w-full gap-8 ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
        {/* Card Container - One unified card */}
        <div className={`flex-1 ${isEven ? 'pr-8' : 'pl-8'}`}>
          <div
            onClick={onClick}
            className={`flex ${isEven ? 'flex-row' : 'flex-row-reverse'} gap-6 cursor-pointer p-6 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl hover:border-blue-500/60 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-1 max-w-3xl ${isEven ? 'ml-auto' : 'mr-auto'}`}
          >
            {/* Image Side */}
            {achievement.images?.[0] && (
              <div className="relative w-48 h-48 flex-shrink-0 rounded-xl overflow-hidden border border-slate-700/50">
                <img
                  src={achievement.images[0]}
                  alt={achievement.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
              </div>
            )}
            
            {/* Icon placeholder if no image */}
            {!achievement.images?.[0] && (
              <div className="w-48 h-48 flex-shrink-0 rounded-xl bg-gradient-to-br from-slate-700/50 to-slate-800/50 border border-slate-700/50 flex items-center justify-center">
                <IconComponent className="w-16 h-16 text-blue-500/30" />
              </div>
            )}

            {/* Text Content Side */}
            <div className="flex-1 flex flex-col justify-center">
              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3 leading-tight group-hover:text-blue-300 transition-colors">
                {achievement.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-400 leading-relaxed mb-4">
                {achievement.description}
              </p>

              {/* Theme tag if exists */}
              {achievement.theme && (
                <p className="text-xs text-blue-300/80 italic mb-2 leading-relaxed">
                  {achievement.theme}
                </p>
              )}

              {/* Meta info - Location and Year */}
              <div className="flex items-center gap-4 text-xs text-gray-500">
                {achievement.location && (
                  <span className="flex items-center gap-1">
                    <span>📍</span>
                    <span>{achievement.location}</span>
                  </span>
                )}
                <span className="flex items-center gap-1">
                  <span>📅</span>
                  <span>{achievement.year}</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Center Icon Node */}
        <div className="relative flex-shrink-0 z-10">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 border-4 border-slate-950 shadow-lg shadow-blue-500/30 flex items-center justify-center group-hover:scale-110 group-hover:shadow-blue-500/50 transition-all duration-300">
            <IconComponent className="w-7 h-7 text-white" />
          </div>
          {/* Pulse effect */}
          <div className="absolute inset-0 rounded-full bg-blue-500/30 animate-ping opacity-0 group-hover:opacity-100" />
        </div>

        {/* Spacer for alternating layout */}
        <div className="flex-1" />
      </div>
    </div>
  );
};

// Mobile Card Component (stacked view)
const MobileCard = ({ achievement, onClick }) => {
  const IconComponent = achievement.icon;
  
  return (
    <div className="relative pl-12">
      {/* Vertical line */}
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/50 to-blue-500/20" />
      
      {/* Icon node */}
      <div className="absolute left-0 top-6 w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 border-2 border-slate-950 flex items-center justify-center shadow-lg shadow-blue-500/30">
        <IconComponent className="w-4 h-4 text-white" />
      </div>

      {/* Content card - Horizontal layout */}
      <div
        onClick={onClick}
        className="mb-8 cursor-pointer flex gap-4 p-5 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-xl hover:border-blue-500/60 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300"
      >
        {/* Image section */}
        {achievement.images?.[0] && (
          <div className="relative overflow-hidden w-28 h-28 flex-shrink-0 rounded-lg border border-slate-700/50">
            <img
              src={achievement.images[0]}
              alt={achievement.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />
          </div>
        )}

        {/* Icon placeholder if no image */}
        {!achievement.images?.[0] && (
          <div className="w-28 h-28 flex-shrink-0 rounded-lg bg-gradient-to-br from-slate-700/50 to-slate-800/50 border border-slate-700/50 flex items-center justify-center">
            <IconComponent className="w-10 h-10 text-blue-500/30" />
          </div>
        )}

        {/* Text content */}
        <div className="flex-1 flex flex-col justify-center min-w-0">
          {/* Title */}
          <h3 className="text-base font-bold text-white mb-2 line-clamp-2">
            {achievement.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-gray-400 leading-relaxed mb-3 line-clamp-2">
            {achievement.description}
          </p>

          {/* Meta info */}
          <div className="flex items-center gap-3 text-xs text-gray-500">
            {achievement.location && (
              <span className="flex items-center gap-1">
                <span>📍</span>
                <span className="truncate">{achievement.location}</span>
              </span>
            )}
            <span className="flex items-center gap-1">
              <span>📅</span>
              <span>{achievement.year}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Modal Content Component
const AchievementModal = ({ achievement, onClose }) => {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  
  // Combine images and video into one media array
  const mediaItems = [
    ...(achievement.images || []).map(img => ({ type: 'image', src: img })),
    ...(achievement.video ? [{ type: 'video', src: achievement.video }] : [])
  ];

  const nextMedia = () => {
    setCurrentMediaIndex((prev) => (prev + 1) % mediaItems.length);
  };

  const prevMedia = () => {
    setCurrentMediaIndex((prev) => (prev - 1 + mediaItems.length) % mediaItems.length);
  };

  return (
    <DialogContent className="max-w-7xl max-h-[95vh] overflow-hidden bg-slate-950 border border-slate-800 rounded-2xl p-0 [&>button]:hidden">
      <div className="flex flex-col h-[95vh]">
        {/* Header */}
        <div className="flex-shrink-0 flex items-center justify-between px-6 py-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
              {achievement.icon && <achievement.icon className="w-5 h-5 text-white" />}
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">
                {achievement.title}
              </h2>
              <div className="flex items-center gap-3 text-xs text-gray-500">
                <span>{achievement.location}</span>
                <span>•</span>
                <span>{achievement.year}</span>
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-slate-800 text-gray-400 hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 flex overflow-hidden">
          {/* Left - Media Gallery */}
          <div className="w-full lg:w-3/5 bg-slate-900 flex items-center justify-center relative p-6">
            {mediaItems.length > 0 ? (
              <>
                {/* Media Display */}
                <div className="relative w-full h-full flex items-center justify-center">
                  {mediaItems[currentMediaIndex].type === 'image' ? (
                    <img
                      src={mediaItems[currentMediaIndex].src}
                      alt={`Media ${currentMediaIndex + 1}`}
                      className="max-w-full max-h-full object-contain rounded-lg"
                    />
                  ) : (
                    <video
                      controls
                      className="max-w-full max-h-full object-contain rounded-lg"
                      src={mediaItems[currentMediaIndex].src}
                      key={currentMediaIndex}
                    />
                  )}
                </div>

                {/* Navigation Arrows */}
                {mediaItems.length > 1 && (
                  <>
                    <button
                      onClick={prevMedia}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 backdrop-blur-sm hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-all"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={nextMedia}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 backdrop-blur-sm hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-all"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </>
                )}

                {/* Media Counter */}
                {mediaItems.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/60 backdrop-blur-md rounded-full text-white text-sm font-medium">
                    {currentMediaIndex + 1} / {mediaItems.length}
                  </div>
                )}

                {/* Thumbnail Strip */}
                {mediaItems.length > 1 && (
                  <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-2 max-w-md overflow-x-auto px-4 py-2 bg-black/40 backdrop-blur-md rounded-full">
                    {mediaItems.map((item, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentMediaIndex(idx)}
                        className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                          idx === currentMediaIndex
                            ? 'border-blue-500 scale-110'
                            : 'border-transparent opacity-60 hover:opacity-100'
                        }`}
                      >
                        {item.type === 'image' ? (
                          <img src={item.src} alt={`Thumb ${idx + 1}`} className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full bg-slate-800 flex items-center justify-center">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <div className="flex items-center justify-center h-full">
                {achievement.icon && <achievement.icon className="w-32 h-32 text-slate-700" />}
              </div>
            )}
          </div>

          {/* Right - Details */}
          <div className="hidden lg:block lg:w-2/5 border-l border-slate-800 overflow-y-auto">
            <div className="p-6 space-y-6">
              {/* Tags */}
              {(achievement.role || achievement.theme) && (
                <div className="flex flex-wrap gap-2">
                  {achievement.role && (
                    <span className="px-3 py-1.5 bg-purple-500/10 text-purple-400 text-xs font-medium rounded-full border border-purple-500/20">
                      {achievement.role}
                    </span>
                  )}
                  {achievement.theme && (
                    <span className="px-3 py-1.5 bg-blue-500/10 text-blue-400 text-xs font-medium rounded-full border border-blue-500/20">
                      Theme: {achievement.theme}
                    </span>
                  )}
                </div>
              )}

              {/* Description */}
              <div>
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Overview</h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {achievement.description}
                </p>
              </div>

              {/* Key Contributions */}
              {achievement.highlights && achievement.highlights.length > 0 && (
                <div>
                  <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Key Contributions</h3>
                  <div className="space-y-3">
                    {achievement.highlights.map((highlight, i) => (
                      <div key={i} className="flex gap-3 group">
                        <div className="flex-shrink-0 w-5 h-5 mt-0.5 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/30 group-hover:bg-blue-500/30 transition-colors">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                        </div>
                        <p className="text-sm text-gray-400 leading-relaxed">
                          {highlight}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Details (shown below media on mobile) */}
        <div className="lg:hidden border-t border-slate-800 overflow-y-auto max-h-[40vh]">
          <div className="p-6 space-y-6">
            {/* Tags */}
            {(achievement.role || achievement.theme) && (
              <div className="flex flex-wrap gap-2">
                {achievement.role && (
                  <span className="px-3 py-1.5 bg-purple-500/10 text-purple-400 text-xs font-medium rounded-full border border-purple-500/20">
                    {achievement.role}
                  </span>
                )}
                {achievement.theme && (
                  <span className="px-3 py-1.5 bg-blue-500/10 text-blue-400 text-xs font-medium rounded-full border border-blue-500/20">
                    Theme: {achievement.theme}
                  </span>
                )}
              </div>
            )}

            {/* Description */}
            <div>
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Overview</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                {achievement.description}
              </p>
            </div>

            {/* Key Contributions */}
            {achievement.highlights && achievement.highlights.length > 0 && (
              <div>
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Key Contributions</h3>
                <div className="space-y-3">
                  {achievement.highlights.map((highlight, i) => (
                    <div key={i} className="flex gap-3">
                      <div className="flex-shrink-0 w-5 h-5 mt-0.5 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                      </div>
                      <p className="text-sm text-gray-400 leading-relaxed">
                        {highlight}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
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
      images: ["/images/FC.jpg", "/images/sec/FGC.jpg"],
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
      images: ["/images/FTC_2021.jpg","/images/sec/FTC_2022.jpg"],
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
      images: ["/images/KJSIT.jpg", "/images/sec/Astra.jpg"],
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
      images: ["/images/Snap_AR.jpg","/images/sec/Snap.jpg"],
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
      images: ["/images/Edu_Summit.jpg","/images/sec/Edu.jpg"],
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
      images: ["/images/FTC_2025.jpg","/images/sec/FTC_2025.jpg"],
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
    <section className="relative py-20 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/5 via-transparent to-transparent" />
      
      <div className="relative w-full max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4 px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full">
            <span className="text-sm font-semibold text-blue-400">Journey Through Time</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white tracking-tight">
            Achievements Timeline
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            A chronological journey through milestones in robotics, innovation, and technology.
          </p>
        </div>

        {/* Desktop Timeline View (hidden on mobile) */}
        <div className="hidden lg:block space-y-16">
          {achievements.map((achievement, index) => (
            <TimelineCard
              key={index}
              achievement={achievement}
              index={index}
              onClick={() => setSelectedAchievement(achievement)}
            />
          ))}
        </div>

        {/* Mobile Stacked View (visible on mobile/tablet) */}
        <div className="lg:hidden">
          {achievements.map((achievement, index) => (
            <MobileCard
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
import React, { useState, useEffect } from "react";

// Import portfolio data
import { portfolioData } from "../data/portfolioData";

// Import Components
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import GitHubActivity from "../components/GitHubActivity";
import Projects from "../components/Projects";
import Achievements from "../components/Achievements";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

// UI Effects
import SplashScreen from "../components/SplashScreen";
import CustomCursor from "../components/CustomCursor";
import BackgroundParticles from "../components/BackgroundParticles";
import RoverRobot from "../components/RoverRobot";
import TerminalMode from "../components/TerminalMode";
import ScrollProgress from "../components/ScrollProgress";

export default function Portfolio() {

  const [showSplash, setShowSplash] = useState(true);
  const [contentReady, setContentReady] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);

  // Smooth scroll behavior
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(
          this.getAttribute("href")
        );

        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }
      });
    });
  }, []);

  const handleSplashComplete = () => {
    setContentReady(true);
  };

  return (
    <div className="bg-black text-white min-h-screen relative overflow-hidden">

      {/* Splash Screen */}
      {showSplash && (
        <SplashScreen onComplete={handleSplashComplete} />
      )}

      {/* Main Content */}
      {contentReady && (
        <>
          {/* UI Effects */}
          <BackgroundParticles />
          <CustomCursor />
          <ScrollProgress />

          {/* Main Sections */}
          <Header onTerminalOpen={() => setTerminalOpen(true)} />
          <Hero data={portfolioData.personal} />
          <About data={portfolioData.personal} />
          <Skills data={portfolioData.skills} />
          <Experience data={portfolioData.experiences} />
          <GitHubActivity data={portfolioData.githubStats} />
          <Projects data={portfolioData.projects} />
          <Achievements data={portfolioData.achievements} />
          <Contact data={portfolioData.social} />
          <Footer data={portfolioData.social} />

          {/* Interactive Components */}
          <RoverRobot />
          <TerminalMode
            isOpen={terminalOpen}
            onClose={() => setTerminalOpen(false)}
          />
        </>
      )}

    </div>
  );
}
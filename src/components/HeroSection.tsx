import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Pritam Thopate
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8 font-light">
            Software Developer • Native App Developer • Google Student Brand Ambassador
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            3rd Year CS Engineering student passionate about mobile development, AI integration, and robotics. 
            Gold medalist at FIRST Global Challenge representing India.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6">
              View My Work
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              Get In Touch
            </Button>
          </div>

          <div className="flex justify-center gap-6">
            <Button variant="ghost" size="icon" className="hover:scale-110 transition-spring" asChild>
              <a href="https://github.com/pritam-t" target="_blank" rel="noopener noreferrer">
                <Github className="w-6 h-6" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="hover:scale-110 transition-spring" asChild>
              <a href="https://www.linkedin.com/in/pritam-thopate/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-6 h-6" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="hover:scale-110 transition-spring" asChild>
              <a href="mailto:pritamthopate27@gmail.com">
                <Mail className="w-6 h-6" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-primary" />
      </div>
    </section>
  );
};

export default HeroSection;
import React, { useState, useEffect, useRef, memo } from 'react';
import { Mail, Github, Linkedin, ExternalLink, Award, Code, Cpu, Smartphone, Menu, X, ChevronDown, Calendar, MapPin, GraduationCap, Heart, Send, Zap, Terminal, Database, Star, GitFork, Activity } from 'lucide-react';
import { Download } from 'lucide-react';
import { portfolioData } from "./data/portfolioData";
import "./styles/global.css";
import { supabase } from "./lib/supabaseClient";


// Custom Cursor Component with Crosshair
// Dynamic Background Particles
const BackgroundParticles = () => {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5
  }));

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute bg-yellow-400 rounded-full opacity-20"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animation: `float ${particle.duration}s ease-in-out infinite`,
            animationDelay: `${particle.delay}s`,
            boxShadow: `0 0 ${particle.size * 3}px rgba(251, 191, 36, 0.3)`
          }}
        />
      ))}
      
      {/* Diagonal lines */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(15)].map((_, i) => (
          <div
            key={`line-${i}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent"
            style={{
              top: `${i * 7}%`,
              left: 0,
              right: 0,
              transform: `rotate(${i % 2 === 0 ? 1 : -1}deg)`,
              animation: `shimmer ${15 + i}s linear infinite`,
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}
      </div>

      {/* Rotating hexagon patterns */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 opacity-5">
        <div className="absolute inset-0 border-2 border-white/20 animate-spin-slow"
          style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
        />
      </div>

      <div className="absolute bottom-1/4 left-1/4 w-48 h-48 opacity-5">
        <div className="absolute inset-0 border-2 border-white/20 animate-spin-reverse"
          style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
        />
      </div>
    </div>
  );
};

// Custom Cursor Component - Targeting System Design
const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || 
          e.target.closest('a') || e.target.closest('button') ||
          e.target.classList.contains('skill-logo') ||
          e.target.classList.contains('project-card')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <>
      {/* Main cursor circle */}
      <div
        className="custom-cursor"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: isHovering 
            ? 'translate(-50%, -50%) scale(1.5)' 
            : isClicking 
            ? 'translate(-50%, -50%) scale(0.8)' 
            : 'translate(-50%, -50%) scale(1)',
        }}
      />
      
      {/* Horizontal crosshair line */}
      <div
        className="cursor-line-h"
        style={{
          left: `${position.x - 20}px`,
          top: `${position.y}px`,
        }}
      />
      
      {/* Vertical crosshair line */}
      <div
        className="cursor-line-v"
        style={{
          left: `${position.x}px`,
          top: `${position.y - 20}px`,
        }}
      />

      {/* Corner brackets for targeting effect when hovering */}
      {isHovering && (
        <>
          {/* Top-left bracket */}
          <div
            style={{
              position: 'fixed',
              left: `${position.x - 25}px`,
              top: `${position.y - 25}px`,
              width: '10px',
              height: '10px',
              borderTop: '2px solid #fbbf24',
              borderLeft: '2px solid #fbbf24',
              pointerEvents: 'none',
              zIndex: 10001,
              boxShadow: '0 0 10px rgba(251, 191, 36, 0.8)',
              transition: 'all 0.2s ease'
            }}
          />
          {/* Top-right bracket */}
          <div
            style={{
              position: 'fixed',
              left: `${position.x + 15}px`,
              top: `${position.y - 25}px`,
              width: '10px',
              height: '10px',
              borderTop: '2px solid #fbbf24',
              borderRight: '2px solid #fbbf24',
              pointerEvents: 'none',
              zIndex: 10001,
              boxShadow: '0 0 10px rgba(251, 191, 36, 0.8)',
              transition: 'all 0.2s ease'
            }}
          />
          {/* Bottom-left bracket */}
          <div
            style={{
              position: 'fixed',
              left: `${position.x - 25}px`,
              top: `${position.y + 15}px`,
              width: '10px',
              height: '10px',
              borderBottom: '2px solid #fbbf24',
              borderLeft: '2px solid #fbbf24',
              pointerEvents: 'none',
              zIndex: 10001,
              boxShadow: '0 0 10px rgba(251, 191, 36, 0.8)',
              transition: 'all 0.2s ease'
            }}
          />
          {/* Bottom-right bracket */}
          <div
            style={{
              position: 'fixed',
              left: `${position.x + 15}px`,
              top: `${position.y + 15}px`,
              width: '10px',
              height: '10px',
              borderBottom: '2px solid #fbbf24',
              borderRight: '2px solid #fbbf24',
              pointerEvents: 'none',
              zIndex: 10001,
              boxShadow: '0 0 10px rgba(251, 191, 36, 0.8)',
              transition: 'all 0.2s ease'
            }}
          />
        </>
      )}
    </>
  );
};

// Enhanced Splash Screen
const SplashScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState('INITIALIZING SYSTEMS');
  const [isVisible, setIsVisible] = useState(true);

  const messages = [
    'LOADING ROBOTICS MODULES',
    'COMPILING JAVA BACKEND',
    'DEPLOYING MOBILE APPS',
    'CONFIGURING ARDUINO BOARDS',
    'INITIALIZING DATABASES',
    'LAUNCHING PORTFOLIO'
  ];

  useEffect(() => {
    let messageIndex = 0;
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(onComplete, 500);
          }, 500);
          return 100;
        }
        
        // Update message every 15%
        if (prev % 15 === 0 && messageIndex < messages.length) {
          setMessage(messages[messageIndex]);
          messageIndex++;
        }
        
        return prev + 1;
      });
    }, 25);

    return () => clearInterval(progressInterval);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 50px, #fbbf24 50px, #fbbf24 51px),
                        repeating-linear-gradient(90deg, transparent, transparent 50px, #fbbf24 50px, #fbbf24 51px)`
        }}></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-2xl">
        <div className="mb-12">
          <div className="border-4 border-white/20 p-8 md:p-12 bg-black inline-block">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-4 tracking-tighter animate-pulse">
              PRITAM THOPATE
            </h1>
            <div className="flex items-center justify-center gap-3 text-yellow-400">
              <Cpu className="animate-spin" size={24} strokeWidth={3} />
              <span className="text-sm md:text-base font-black tracking-widest">{message}</span>
              <Terminal className="animate-pulse" size={24} strokeWidth={3} />
            </div>
          </div>
        </div>

        <div className="max-w-md mx-auto">
          <div className="border-4 border-white h-8 relative overflow-hidden bg-black">
            <div 
              className="absolute left-0 top-0 bottom-0 bg-yellow-400 transition-all duration-100 flex items-center justify-center"
              style={{ width: `${progress}%` }}
            >
              <span className="text-black font-black text-sm">{progress}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Typewriter Effect Hook
const useTypewriter = (texts, speed = 100) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[currentIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentText.length) {
          setDisplayText(currentText.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (charIndex > 0) {
          setDisplayText(currentText.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setCurrentIndex((currentIndex + 1) % texts.length);
        }
      }
    }, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentIndex, texts, speed]);

  return displayText;
};

// Project Modal Component with Architecture Viewer
const ProjectModal = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [hoveredNode, setHoveredNode] = useState(null);

  if (!project) return null;

  const getNodeColor = (type) => {
    const colors = {
      input: '#fbbf24',
      processor: '#10b981',
      middleware: '#f59e0b',
      storage: '#3b82f6',
      cloud: '#8b5cf6',
      output: '#ef4444'
    };
    return colors[type] || '#6b7280';
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90" onClick={onClose}>
      <div className="border-4 border-white/20 bg-black max-w-6xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="border-b-4 border-white/20 p-6 flex items-start justify-between sticky top-0 bg-black z-10">
          <div>
            <div className="text-6xl mb-4">{project.icon}</div>
            <h2 className="text-2xl md:text-4xl font-black text-white mb-2">{project.title}</h2>
            <span className="text-yellow-400 font-black text-sm">{project.category}</span>
          </div>
          <button onClick={onClose} className="text-white hover:text-yellow-400 transition-colors">
            <X size={32} strokeWidth={3} />
          </button>
        </div>

        {/* Tabs */}
        <div className="border-b-4 border-white/20 flex">
          {['overview', 'architecture', 'features'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-4 font-black text-sm tracking-wider transition-all ${
                activeTab === tab 
                  ? 'bg-yellow-400 text-black border-r-4 border-white/20' 
                  : 'text-white hover:bg-white/10'
              }`}
            >
              {tab.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="p-6">
          {activeTab === 'overview' && (
            <div className="space-y-8">
              <div>
                <h3 className="text-yellow-400 font-black text-sm mb-3 tracking-wider">DESCRIPTION</h3>
                <p className="text-white leading-relaxed">{project.fullDescription}</p>
              </div>

              <div>
                <h3 className="text-yellow-400 font-black text-sm mb-3 tracking-wider">TECHNOLOGIES USED</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="px-4 py-2 border-2 border-white/20 text-yellow-400 font-black text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <a href={project.github} className="flex-1 py-4 border-4 border-white text-white hover:bg-yellow-400 hover:border-white/20 hover:text-black transition-all font-black text-sm tracking-wider flex items-center justify-center gap-2">
                  <Github size={20} strokeWidth={3} />
                  VIEW CODE
                </a>
                <a href={project.live} className="flex-1 py-4 bg-yellow-400 text-black hover:bg-white transition-all font-black text-sm tracking-wider flex items-center justify-center gap-2">
                  <ExternalLink size={20} strokeWidth={3} />
                  LIVE DEMO
                </a>
              </div>
            </div>
          )}

          {activeTab === 'architecture' && project.architecture && (
            <div>
              <h3 className="text-yellow-400 font-black text-sm mb-6 tracking-wider">SYSTEM ARCHITECTURE</h3>
              
              {/* Architecture Diagram */}
              <div className="border-4 border-white p-8 bg-black/50 min-h-[400px] relative overflow-x-auto">
                <svg width="100%" height="500" className="min-w-[800px]">
                  {/* Connections */}
                  {project.architecture.connections.map((conn, idx) => {
                    const fromNode = project.architecture.nodes.find(n => n.id === conn.from);
                    const toNode = project.architecture.nodes.find(n => n.id === conn.to);
                    const fromIndex = project.architecture.nodes.indexOf(fromNode);
                    const toIndex = project.architecture.nodes.indexOf(toNode);
                    
                    const x1 = 100 + (fromIndex % 3) * 250;
                    const y1 = 100 + Math.floor(fromIndex / 3) * 150;
                    const x2 = 100 + (toIndex % 3) * 250;
                    const y2 = 100 + Math.floor(toIndex / 3) * 150;
                    
                    return (
                      <g key={idx}>
                        <line
                          x1={x1}
                          y1={y1}
                          x2={x2}
                          y2={y2}
                          stroke="#fbbf24"
                          strokeWidth="3"
                          strokeDasharray="5,5"
                          className="opacity-50"
                        />
                        {/* Arrow */}
                        <polygon
                          points={`${x2},${y2} ${x2-8},${y2-8} ${x2-8},${y2+8}`}
                          fill="#fbbf24"
                          className="opacity-50"
                        />
                      </g>
                    );
                  })}
                  
                  {/* Nodes */}
                  {project.architecture.nodes.map((node, idx) => {
                    const x = 100 + (idx % 3) * 250;
                    const y = 100 + Math.floor(idx / 3) * 150;
                    const isHovered = hoveredNode === node.id;
                    
                    return (
                      <g 
                        key={node.id}
                        onMouseEnter={() => setHoveredNode(node.id)}
                        onMouseLeave={() => setHoveredNode(null)}
                        className="cursor-pointer"
                      >
                        <rect
                          x={x - 60}
                          y={y - 30}
                          width="120"
                          height="60"
                          fill="black"
                          stroke={getNodeColor(node.type)}
                          strokeWidth={isHovered ? "4" : "3"}
                          className="transition-all"
                        />
                        <text
                          x={x}
                          y={y}
                          textAnchor="middle"
                          dominantBaseline="middle"
                          fill="white"
                          className="font-black text-xs pointer-events-none"
                          style={{ whiteSpace: 'pre-line' }}
                        >
                          {node.label.split('\n').map((line, i) => (
                            <tspan key={i} x={x} dy={i === 0 ? 0 : 14}>{line}</tspan>
                          ))}
                        </text>
                      </g>
                    );
                  })}
                </svg>
                
                {/* Hovered Node Description */}
                {hoveredNode && (
                  <div className="mt-4 p-4 border-4 border-white/20 bg-black">
                    <h4 className="text-yellow-400 font-black text-sm mb-2">
                      {project.architecture.nodes.find(n => n.id === hoveredNode)?.label.replace('\n', ' ')}
                    </h4>
                    <p className="text-white text-sm">
                      {project.architecture.nodes.find(n => n.id === hoveredNode)?.description}
                    </p>
                  </div>
                )}
                
                {/* Legend */}
                <div className="mt-6 flex flex-wrap gap-4">
                  <div className="text-xs font-black text-white">LEGEND:</div>
                  {['input', 'processor', 'middleware', 'storage', 'cloud', 'output'].map(type => (
                    <div key={type} className="flex items-center gap-2">
                      <div className="w-4 h-4" style={{ backgroundColor: getNodeColor(type) }}></div>
                      <span className="text-xs font-black text-white uppercase">{type}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'features' && (
            <div>
              <h3 className="text-yellow-400 font-black text-sm mb-6 tracking-wider">KEY FEATURES</h3>
              <div className="grid md:grid-cols-2 gap-3">
                {project.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3 border-2 border-white/20 p-4 hover:border-white/20 transition-colors">
                    <div className="w-2 h-2 bg-yellow-400 mt-2 flex-shrink-0"></div>
                    <span className="text-white font-medium text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const GitHubActivity = memo(() => {
  const [ref, isVisible] = useInView();
  const [githubStats, setGithubStats] = useState(null);

  useEffect(() => {
    async function fetchGitHubData() {
      try {
        const userRes = await fetch("https://api.github.com/users/pritam-t");
        const user = await userRes.json();

        const repoRes = await fetch("https://api.github.com/users/pritam-t/repos");
        const repos = await repoRes.json();

        // Calculate stars
        const totalStars = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0);

        // Calculate languages
        const languageCount = {};
        repos.forEach(repo => {
          if (repo.language) {
            languageCount[repo.language] =
              (languageCount[repo.language] || 0) + 1;
          }
        });

        const languages = Object.keys(languageCount).map(lang => ({
          name: lang,
          percentage: Math.round((languageCount[lang] / repos.length) * 100),
          color: "#fbbf24"
        }));

        // Recent activity
        const recentActivity = repos
          .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
          .slice(0, 5)
          .map(repo => ({
            type: "commit",
            repo: repo.name,
            message: repo.description || "Repository updated",
            date: new Date(repo.updated_at).toLocaleDateString()
          }));

        // Fake weekly contributions (GitHub REST API doesn't provide this)
        const weeklyContributions = [3, 5, 2, 7, 4, 6, 3];

        setGithubStats({
          repositories: user.public_repos,
          stars: totalStars,
          contributions: user.followers, // placeholder
          languages,
          weeklyContributions,
          recentActivity
        });

      } catch (error) {
        console.error("GitHub API error:", error);
      }
    }

    fetchGitHubData();
  }, []);

  if (!githubStats) {
    return (
      <section id="github" className="py-20 bg-black text-white text-center">
        Loading GitHub data...
      </section>
    );
  }

  return (
    <section id="github" className="py-20 bg-black border-t-4 border-white/20">
      <div className="container mx-auto px-6 max-w-7xl">

        {/* Header */}
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-100 translate-y-0"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white mb-4 tracking-tighter">
            GITHUB ACTIVITY
          </h2>
          <div className="w-24 h-2 bg-yellow-400 mb-8"></div>
          <p className="text-white text-lg mb-12 font-medium">
            Live coding activity and repository statistics from GitHub
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {[
            { icon: <Activity size={32} strokeWidth={3} />, label: "FOLLOWERS", value: githubStats.contributions },
            { icon: <Star size={32} strokeWidth={3} />, label: "STARS", value: githubStats.stars },
            { icon: <Github size={32} strokeWidth={3} />, label: "REPOSITORIES", value: githubStats.repositories },
            { icon: <Code size={32} strokeWidth={3} />, label: "LANGUAGES", value: githubStats.languages.length }
          ].map((stat, idx) => (
            <div
              key={idx}
              className="border-4 border-white p-6 bg-black hover:border-white/20 transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-yellow-400 mb-4">{stat.icon}</div>
              <div className="text-4xl font-black text-white mb-2">{stat.value}</div>
              <div className="text-yellow-400 font-black text-xs tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Languages */}
        <div className="grid md:grid-cols-2 gap-8">

          <div className="border-4 border-white p-6 bg-black">
            <h3 className="text-yellow-400 font-black text-lg mb-6">LANGUAGES USED</h3>

            {githubStats.languages.map((lang, idx) => (
              <div key={idx} className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="text-white font-black text-sm">{lang.name}</span>
                  <span className="text-yellow-400 font-black text-sm">
                    {lang.percentage}%
                  </span>
                </div>

                <div className="h-3 bg-white/10">
                  <div
                    className="h-full"
                    style={{
                      width: `${lang.percentage}%`,
                      backgroundColor: lang.color
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Weekly Contributions */}
          <div className="border-4 border-white p-6 bg-black">
            <h3 className="text-yellow-400 font-black text-lg mb-6">
              WEEKLY ACTIVITY
            </h3>

            <div className="flex items-end justify-between gap-2 h-40">
              {githubStats.weeklyContributions.map((count, idx) => {
                const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
                const height =
                  (count /
                    Math.max(...githubStats.weeklyContributions)) *
                  100;

                return (
                  <div key={idx} className="flex-1 flex flex-col items-center">
                    <div className="w-full bg-white/10 flex-1 relative">
                      <div
                        className="absolute bottom-0 left-0 right-0 bg-yellow-400"
                        style={{ height: `${height}%` }}
                      ></div>
                    </div>
                    <span className="text-white text-xs mt-1">{days[idx]}</span>
                    <span className="text-yellow-400 text-xs">{count}</span>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Recent Activity */}
        <div className="mt-12 border-4 border-white p-6 bg-black">
          <h3 className="text-yellow-400 font-black text-lg mb-6">
            RECENT REPOSITORY ACTIVITY
          </h3>

          {githubStats.recentActivity.map((activity, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 p-4 border-b border-white/10"
            >
              <GitFork className="text-yellow-400" size={20} />

              <div>
                <div className="text-white font-black text-sm">
                  {activity.repo}
                </div>

                <div className="text-white/70 text-sm">
                  {activity.message}
                </div>

                <div className="text-yellow-400 text-xs">
                  {activity.date}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
});


// Project Modal Component (old version to replace)
const ProjectModal_OLD = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90" onClick={onClose}>
      <div className="border-4 border-white/20 bg-black max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="border-b-4 border-white/20 p-6 flex items-start justify-between sticky top-0 bg-black z-10">
          <div>
            <div className="text-6xl mb-4">{project.icon}</div>
            <h2 className="text-2xl md:text-4xl font-black text-white mb-2">{project.title}</h2>
            <span className="text-yellow-400 font-black text-sm">{project.category}</span>
          </div>
          <button onClick={onClose} className="text-white hover:text-yellow-400 transition-colors">
            <X size={32} strokeWidth={3} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          {/* Description */}
          <div>
            <h3 className="text-yellow-400 font-black text-sm mb-3 tracking-wider">DESCRIPTION</h3>
            <p className="text-white leading-relaxed">{project.fullDescription}</p>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-yellow-400 font-black text-sm mb-3 tracking-wider">KEY FEATURES</h3>
            <div className="grid md:grid-cols-2 gap-3">
              {project.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3 border-2 border-white/20 p-3 hover:border-white/20 transition-colors">
                  <div className="w-2 h-2 bg-yellow-400 mt-2 flex-shrink-0"></div>
                  <span className="text-white font-medium text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-yellow-400 font-black text-sm mb-3 tracking-wider">TECHNOLOGIES USED</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="px-4 py-2 border-2 border-white/20 text-yellow-400 font-black text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-4 pt-4">
            <a href={project.github} className="flex-1 py-4 border-4 border-white text-white hover:bg-yellow-400 hover:border-white/20 hover:text-black transition-all font-black text-sm tracking-wider flex items-center justify-center gap-2">
              <Github size={20} strokeWidth={3} />
              VIEW CODE
            </a>
            <a href={project.live} className="flex-1 py-4 bg-yellow-400 text-black hover:bg-white transition-all font-black text-sm tracking-wider flex items-center justify-center gap-2">
              <ExternalLink size={20} strokeWidth={3} />
              LIVE DEMO
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// Terminal Mode Component
const TerminalMode = ({ isOpen, onClose }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'output', text: 'PORTFOLIO TERMINAL v1.0' },
    { type: 'output', text: 'Type "help" for available commands' },
    { type: 'output', text: '─'.repeat(50) }
  ]);
  const inputRef = useRef(null);

  const commands = {
    help: () => [
      'Available commands:',
      '  whoami     - Display personal info',
      '  skills     - List technical skills',
      '  projects   - Show all projects',
      '  experience - Work experience',
      '  contact    - Contact information',
      '  clear      - Clear terminal',
      '  exit       - Close terminal'
    ],
    whoami: () => [
      `Name: ${portfolioData.personal.name}`,
      `Title: ${portfolioData.personal.title}`,
      `Location: ${portfolioData.personal.location}`,
      `Education: ${portfolioData.personal.education.degree}`,
      `GitHub: ${portfolioData.personal.github}`
    ],
    skills: () => {
      const skills = portfolioData.skills.flatMap(cat => 
        cat.items.map(skill => `  ${skill.name}: ${'█'.repeat(Math.floor(skill.level/10))}${'░'.repeat(10-Math.floor(skill.level/10))} ${skill.level}%`)
      );
      return ['Technical Skills:', ...skills];
    },
    projects: () => {
      const projects = portfolioData.projects.map((p, i) => 
        `  ${i + 1}. ${p.title} (${p.category})`
      );
      return ['Projects:', ...projects];
    },
    experience: () => {
      const exp = portfolioData.experiences.map(e => 
        `  ${e.title} @ ${e.company} (${e.duration})`
      );
      return ['Work Experience:', ...exp];
    },
    contact: () => [
      'Contact Information:',
      `  Email: ${portfolioData.personal.email}`,
      `  GitHub: ${portfolioData.social.github}`,
      `  LinkedIn: ${portfolioData.social.linkedin}`
    ],
    clear: () => null,
    exit: () => {
      onClose();
      return null;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    
    setHistory(prev => [...prev, { type: 'input', text: `> ${input}` }]);
    
    if (cmd === 'clear') {
      setHistory([]);
    } else if (commands[cmd]) {
      const output = commands[cmd]();
      if (output) {
        setHistory(prev => [...prev, ...output.map(text => ({ type: 'output', text }))]);
      }
    } else if (cmd) {
      setHistory(prev => [...prev, { type: 'error', text: `Command not found: ${cmd}` }]);
    }
    
    setInput('');
  };

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90" onClick={onClose}>
      <div className="border-4 border-white/20 bg-black w-full max-w-4xl h-[600px] flex flex-col" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="border-b-4 border-white/20 p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Terminal className="text-yellow-400" size={24} strokeWidth={3} />
            <span className="text-yellow-400 font-black text-sm tracking-wider">TERMINAL MODE</span>
          </div>
          <button onClick={onClose} className="text-white hover:text-yellow-400 transition-colors">
            <X size={24} strokeWidth={3} />
          </button>
        </div>

        {/* Output */}
        <div className="flex-1 p-4 overflow-y-auto font-mono text-sm">
          {history.map((item, idx) => (
            <div key={idx} className={`mb-2 ${
              item.type === 'input' ? 'text-yellow-400' : 
              item.type === 'error' ? 'text-red-500' : 
              'text-white'
            }`}>
              {item.text}
            </div>
          ))}
        </div>

        {/* Input */}
        <form onSubmit={handleSubmit} className="border-t-4 border-white/20 p-4 flex items-center gap-2">
          <span className="text-yellow-400 font-black">{'>'}</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent text-white outline-none font-mono"
            placeholder="Type command..."
          />
        </form>
      </div>
    </div>
  );
};

// Circular Skill Chart Component
// Modern Skill Card Component with Logos
const SkillCard = memo(({ skill, delay = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [ref, isVisible] = useInView();

  return (
    <div 
      ref={ref}
      className={`group relative transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="glass-panel border border-white/20 p-6 flex flex-col items-center gap-4 hover:border-white/20 hover:scale-105 transition-all duration-300 hover:glow-yellow-strong relative overflow-hidden">
        {/* Background Glow Effect */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at center, ${skill.color}15, transparent 70%)`
          }}
        ></div>

        {/* Logo */}
        <div className="relative z-10">
          <img
            src={
              skill.iconUrl
                ? skill.iconUrl
                : `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon.split('-')[0]}/${skill.icon}.svg`
            }
            alt={skill.name}
            className="w-16 h-16 skill-logo"
            loading="lazy"
            onError={(e) => {
              if (!skill.iconUrl) {
                e.target.src = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon.split('-')[0]}/${skill.icon.replace("original","plain")}.svg`;
              }
            }}
          />
        </div>

        {/* Name */}
        <span className="text-white font-black text-sm text-center relative z-10 group-hover:text-yellow-400 transition-colors">
          {skill.name}
        </span>
      </div>
    </div>
  );
});

// Rover Robot with enhanced interactivity
const RoverRobot = () => {
  const [position, setPosition] = useState(-100);
  const [isMoving, setIsMoving] = useState(true);
  const [direction, setDirection] = useState(1);
  const [robotStyle, setRobotStyle] = useState('classic');
  const [showConsole, setShowConsole] = useState(false);



  const cycleStyle = () => {
    const styles = ['classic', 'minimal', 'tank', 'spider'];
    const currentIndex = styles.indexOf(robotStyle);
    const nextIndex = (currentIndex + 1) % styles.length;
    setRobotStyle(styles[nextIndex]);
  };

  const ClassicRover = () => (
    <div className="relative">
      <div className="border-4 border-white/20 bg-black p-2 relative">
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-1 h-6 bg-yellow-400">
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
        </div>
        <div className="flex justify-center gap-2 mb-1">
          <div className="w-3 h-3 bg-yellow-400 animate-pulse"></div>
          <div className="w-3 h-3 bg-yellow-400 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        </div>
        <div className="w-16 h-8 border-2 border-white/20 flex items-center justify-center">
          <Cpu className="text-yellow-400" size={16} strokeWidth={3} />
        </div>
      </div>
      <div className="flex justify-between -mt-1">
        <div className="flex gap-1">
          <div className={`w-4 h-4 border-4 border-white/20 rounded-full bg-black ${isMoving ? 'animate-spin' : ''}`}></div>
          <div className={`w-4 h-4 border-4 border-white/20 rounded-full bg-black ${isMoving ? 'animate-spin' : ''}`} style={{ animationDelay: '0.1s' }}></div>
        </div>
        <div className="flex gap-1">
          <div className={`w-4 h-4 border-4 border-white/20 rounded-full bg-black ${isMoving ? 'animate-spin' : ''}`} style={{ animationDelay: '0.2s' }}></div>
          <div className={`w-4 h-4 border-4 border-white/20 rounded-full bg-black ${isMoving ? 'animate-spin' : ''}`} style={{ animationDelay: '0.3s' }}></div>
        </div>
      </div>
    </div>
  );


  return (
    <>
      <div 
      className="fixed bottom-4 left-0 z-50 rover-move hover:scale-110 cursor-pointer group"
    >
        {robotStyle === 'classic' && <ClassicRover />}
        
        {!isMoving && (
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black px-2 py-1 text-xs font-black whitespace-nowrap">
            PAUSED
          </div>
        )}
        
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white text-black px-2 py-1 text-xs font-black whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          {robotStyle.toUpperCase()}
        </div>
      </div>

      {/* Rover Assistant Console */}
      {showConsole && (
        <div className="fixed bottom-24 right-4 z-50 border-4 border-white/20 bg-black w-80 max-h-96 flex flex-col">
          <div className="flex items-center justify-between p-4 border-b-4 border-white/20">
            <div className="flex items-center gap-2">
              <Cpu className="text-yellow-400 animate-pulse" size={16} strokeWidth={3} />
              <span className="text-yellow-400 font-black text-xs">ROVER ASSISTANT</span>
            </div>
            <button onClick={(e) => { e.stopPropagation(); setShowConsole(false); }} className="text-white hover:text-yellow-400">
              <X size={16} strokeWidth={3} />
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-3 text-xs font-mono">
            <div className="text-yellow-400">🤖 Hello! I'm your portfolio assistant.</div>
            <div className="text-white/70">Try these commands:</div>
            <div className="space-y-1 text-white/50">
              <div>• show projects</div>
              <div>• show skills</div>
              <div>• show experience</div>
              <div>• open contact</div>
              <div>• view github</div>
            </div>
          </div>
          
          <div className="p-4 border-t-4 border-white/20 space-y-2">
            <div className="grid grid-cols-2 gap-2">
              <button 
                onClick={(e) => { 
                  e.stopPropagation(); 
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                  setShowConsole(false);
                }}
                className="py-2 border-2 border-white/20 text-yellow-400 hover:bg-yellow-400 hover:text-black font-black text-xs transition-all"
              >
                PROJECTS
              </button>
              <button 
                onClick={(e) => { 
                  e.stopPropagation(); 
                  document.querySelector('#skills')?.scrollIntoView({ behavior: 'smooth' });
                  setShowConsole(false);
                }}
                className="py-2 border-2 border-white/20 text-yellow-400 hover:bg-yellow-400 hover:text-black font-black text-xs transition-all"
              >
                SKILLS
              </button>
              <button 
                onClick={(e) => { 
                  e.stopPropagation(); 
                  document.querySelector('#github')?.scrollIntoView({ behavior: 'smooth' });
                  setShowConsole(false);
                }}
                className="py-2 border-2 border-white/20 text-yellow-400 hover:bg-yellow-400 hover:text-black font-black text-xs transition-all"
              >
                GITHUB
              </button>
              <button 
                onClick={(e) => { 
                  e.stopPropagation(); 
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                  setShowConsole(false);
                }}
                className="py-2 border-2 border-white/20 text-yellow-400 hover:bg-yellow-400 hover:text-black font-black text-xs transition-all"
              >
                CONTACT
              </button>
            </div>
            
            <div className="flex gap-2">
              <button 
                onClick={(e) => { e.stopPropagation(); setIsMoving(!isMoving); }}
                className="flex-1 py-2 border-2 border-white text-white hover:bg-white hover:text-black font-black text-xs transition-all"
              >
                {isMoving ? 'PAUSE' : 'RESUME'}
              </button>
              <button 
                onClick={(e) => { e.stopPropagation(); cycleStyle(); }}
                className="flex-1 py-2 border-2 border-white text-white hover:bg-white hover:text-black font-black text-xs transition-all"
              >
                STYLE
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// Scroll Progress Indicator
const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-1 bg-black">
      <div 
        className="h-full bg-yellow-400 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      ></div>
    </div>
  );
};

// Intersection Observer Hook
const useInView = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return [ref, isVisible];
};

// Header Component
const Header = memo(({ onTerminalOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['HOME', 'ABOUT', 'SKILLS', 'EXPERIENCE', 'PROJECTS', 'ACHIEVEMENTS', 'CONTACT'];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-black border-b-4 border-white/20' : 'bg-black/80'
    }`}>
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <nav className="hidden md:flex gap-8 ml-auto">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white hover:text-yellow-400 font-black text-sm tracking-wider transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            <button
              data-terminal-trigger
              onClick={onTerminalOpen}
              className="text-yellow-400 hover:text-white font-black text-sm tracking-wider transition-colors flex items-center gap-2"
            >
              <Terminal size={16} strokeWidth={3} />
              TERMINAL
            </button>
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-yellow-400 hover:text-white transition-colors"
          >
            {isOpen ? <X size={32} strokeWidth={3} /> : <Menu size={32} strokeWidth={3} />}
          </button>
        </div>

        {isOpen && (
          <nav className="md:hidden mt-6 space-y-4 pb-4">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="block text-white hover:text-yellow-400 font-black text-xl tracking-wider transition-colors"
              >
                {item}
              </a>
            ))}
            <button
              onClick={() => { onTerminalOpen(); setIsOpen(false); }}
              className="block text-yellow-400 hover:text-white font-black text-xl tracking-wider transition-colors"
            >
              TERMINAL
            </button>
          </nav>
        )}
      </div>
    </header>
  );
});

// Hero Section with Mission Control Dashboard
const Hero = memo(() => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [terminalLine, setTerminalLine] = useState(0);
  const typedText = useTypewriter(portfolioData.personal.taglines, 80);

  const bootMessages = [
    "> INITIALIZING ROBOTICS MODULES...",
    "> LOADING BACKEND SERVICES...",
    "> LAUNCHING MOBILE APPS...",
    "> CONNECTING TO GITHUB...",
    "> SYSTEM READY"
  ];

  const systemStatus = [
    { name: "ROBOTICS ENGINE", status: "ACTIVE", color: "#10b981" },
    { name: "BACKEND SERVER", status: "ONLINE", color: "#fbbf24" },
    { name: "MOBILE SYSTEMS", status: "READY", color: "#3b82f6" },
    { name: "AI MODULE", status: "TRAINING", color: "#f59e0b" }
  ];

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setTerminalLine(prev => (prev + 1) % bootMessages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-[85vh] flex items-center justify-center bg-black relative overflow-hidden px-4 md:px-6 py-16 md:py-20">
      {/* Animated Data Stream Background */}
      <div className="absolute inset-0 opacity-10 overflow-hidden">
        <div className="data-stream absolute top-0 left-0 text-yellow-400 text-xs font-mono whitespace-nowrap">
          0100101 1101010 0110110 JAVA SPRING NODE API ROBOTICS SENSOR DATA ARDUINO MQTT WEBSOCKET 0100101 1101010 0110110
        </div>
        <div className="data-stream absolute top-20 left-0 text-yellow-400 text-xs font-mono whitespace-nowrap" style={{ animationDelay: '5s' }}>
          REACT NATIVE TYPESCRIPT PYTHON C++ AUTOMATION IOT FIREBASE DATABASE 0110110 1101010 0100101
        </div>
        <div className="data-stream absolute top-40 left-0 text-yellow-400 text-xs font-mono whitespace-nowrap" style={{ animationDelay: '10s' }}>
          DOCKER KUBERNETES GIT RESTAPI MICROSERVICES MONGODB MYSQL REDIS 1101010 0100101 0110110
        </div>
      </div>

      {/* Grid pattern background */}
      <div className="absolute inset-0 opacity-5">
        <div className="animated-grid"></div>
      </div>

      <div className="w-full max-w-[1600px] mx-auto relative z-10">
        <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="glass-panel border-4 border-white/20 p-6 sm:p-8 md:p-10 bg-black/90 w-full">
            
            {/* System Header */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
              <span className="text-yellow-400 text-xs sm:text-sm font-black tracking-widest uppercase">MISSION CONTROL SYSTEM</span>
              <div className="flex-1 h-px bg-yellow-400/30"></div>
              <span className="text-yellow-400 text-xs font-mono">{new Date().toLocaleTimeString()}</span>
            </div>

            <div className="grid lg:grid-cols-5 gap-6 lg:gap-8">
              {/* Left: Main Info - Takes 3 columns */}
              <div className="lg:col-span-3">
                <div className="mb-4">
                  <div className="text-yellow-400 text-xs font-black tracking-wider mb-2">ENGINEER ID</div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-3 leading-none tracking-tighter break-words">                    {portfolioData.personal.name}
                  </h1>
                </div>
                
                <div className="mb-4">
                  <div className="text-yellow-400 text-xs font-black tracking-wider mb-2">ROLE</div>
                  <div className="text-white text-sm sm:text-base font-black tracking-wide">
                    {portfolioData.personal.title}
                  </div>
                  <div className="text-yellow-400 text-xs font-mono mt-1">
                    {portfolioData.personal.year}
                  </div>
                </div>

                <div className="mb-6">
                  <div className="text-yellow-400 text-xs font-black tracking-wider mb-2">SPECIALIZATION</div>
                  <div className="text-white text-base sm:text-lg md:text-xl font-black tracking-tight mb-2 h-7 flex items-center">
                    {typedText}
                    <span className="animate-pulse ml-1">|</span>
                  </div>
                  <div className="w-20 sm:w-32 h-1 bg-yellow-400"></div> 
                </div>

                {/* Terminal Output */}
                <div className="glass-panel border border-white/20/30 p-3 mb-6 bg-black/50">
                  <div className="flex items-center gap-2 mb-2 pb-2 border-b border-white/20/20">
                    <Terminal className="text-yellow-400" size={12} strokeWidth={3} />
                    <span className="text-yellow-400 text-xs font-black">SYSTEM LOG</span>
                  </div>
                  <div className="space-y-1 font-mono text-xs">
                    {bootMessages.map((msg, idx) => (
                      <div 
                        key={idx}
                        className={`transition-all duration-300 ${
                          idx <= terminalLine ? 'text-green-400' : 'text-white/20'
                        }`}
                      >
                        {msg}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                  <a
                    href="#projects"
                    className="group px-6 py-3 bg-yellow-400 text-black font-black text-xs sm:text-sm tracking-wider hover:bg-white transition-all duration-300 flex items-center justify-center gap-2 "
                  >
                    <Zap size={18} strokeWidth={3} />
                    VIEW PROJECTS
                    <ChevronDown className="group-hover:translate-y-1 transition-transform" size={18} strokeWidth={3} />
                  </a>
                  <button
                    onClick={() => document.querySelector('[data-terminal-trigger]')?.click()}
                    className="px-6 py-3 border-4 border-white/20 text-yellow-400 font-black text-xs sm:text-sm tracking-wider hover:bg-yellow-400 hover:text-black transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Terminal size={18} strokeWidth={3} />
                    OPEN TERMINAL
                  </button>
                </div>
              </div>

              {/* Right: System Status Panel - Takes 2 columns */}
              <div className="lg:col-span-2">
                <div className="glass-panel border-2 border-white/20 p-5 bg-black/70">
                  <div className="flex items-center gap-2 mb-4 pb-2 border-b-2 border-white/20">
                    <Activity className="text-yellow-400" size={16} strokeWidth={3} />
                    <h3 className="text-yellow-400 font-black text-xs tracking-wider">SYSTEM STATUS</h3>
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    {systemStatus.map((system, idx) => (
                      <div key={idx} className="flex items-center justify-between group">
                        <div className="flex items-center gap-2 flex-1">
                          <div 
                            className="w-2 h-2 rounded-full animate-pulse"
                            style={{ 
                              backgroundColor: system.color,
                              boxShadow: `0 0 8px ${system.color}`
                            }}
                          ></div>
                          <span className="text-white text-xs font-black tracking-wide">
                            {system.name}
                          </span>
                        </div>
                        <span 
                          className="text-xs font-black tracking-wider"
                          style={{ color: system.color }}
                        >
                          {system.status}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* GitHub Activity Indicator */}
                  <div className="border-t-2 border-white/20/30 pt-3 mb-3">
                    <div className="text-yellow-400 text-xs font-black mb-2">GITHUB ACTIVITY</div>
                    <div className="space-y-1.5 text-xs font-mono">
                      <div className="flex justify-between">
                        <span className="text-white/70">Commits/Week</span>
                        <span className="text-green-400 font-black">{portfolioData.githubStats.weeklyContributions.reduce((a, b) => a + b, 0)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/70">Total Stars</span>
                        <span className="text-yellow-400 font-black">{portfolioData.githubStats.stars}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/70">Repositories</span>
                        <span className="text-blue-400 font-black">{portfolioData.githubStats.repositories}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-white/70">Status</span>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                          <span className="text-green-400 font-black">ACTIVE</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Resume Download */}
                <div className="border-t-2 border-white/20 pt-4 mt-4">
                  <a
                      href="/resume.pdf"
                      download="Pritam_Thopate_Resume.pdf"
                      className="w-full flex items-center justify-center gap-2 px-4 py-3 border-2 border-yellow-400 text-yellow-400 font-black text-xs tracking-wider hover:bg-yellow-400 hover:text-black transition-all duration-300"
                    >
                      DOWNLOAD RESUME
                    </a>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block">
        <ChevronDown className="text-yellow-400 animate-bounce" size={40} strokeWidth={3} />
      </div>
    </section>
  );
});

// About Section
const About = memo(() => {
  const [ref, isVisible] = useInView();

  return (
    <section id="about" className="py-20 bg-black border-t-4 border-white/20">
      <div className="container mx-auto px-6 max-w-7xl">
        <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white mb-4 tracking-tighter">
            ABOUT
          </h2>
          <div className="w-20 sm:w-24 md:w-32 h-2 bg-yellow-400 mb-12 md:mb-16"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="glass-panel border border-white/20 p-8 hover:border-white/20 transition-all duration-300 group transform hover:scale-105 hover:glow-yellow h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 border-4 border-white/20 flex items-center justify-center bg-black group-hover:bg-yellow-400 transition-colors">
                  <GraduationCap className="text-yellow-400 group-hover:text-black transition-colors" size={32} strokeWidth={3} />
                </div>
                <h3 className="text-2xl font-black text-yellow-400 tracking-tight">EDUCATION</h3>
              </div>
              <div className="space-y-3">
                <h4 className="text-xl font-black text-white">{portfolioData.personal.education.degree}</h4>
                <p className="text-white font-medium">{portfolioData.personal.education.institution}</p>
                <div className="flex items-center gap-2 text-yellow-400 text-sm font-black">
                  <Calendar size={16} strokeWidth={3} />
                  {portfolioData.personal.education.year}
                </div>
                <div className="text-white font-black text-lg">CGPA: {portfolioData.personal.education.cgpa}</div>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="glass-panel border border-white/20 p-8 hover:border-white/20 transition-all duration-300 group transform hover:scale-105 hover:glow-yellow h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 border-4 border-white/20 flex items-center justify-center bg-black group-hover:bg-yellow-400 transition-colors">
                  <Zap className="text-yellow-400 group-hover:text-black transition-colors" size={32} strokeWidth={3} />
                </div>
                <h3 className="text-2xl font-black text-yellow-400 tracking-tight">FOCUS AREAS</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3 group/item">
                  <Cpu className="text-yellow-400 mt-1 flex-shrink-0" size={24} strokeWidth={3} />
                  <div>
                    <div className="text-white font-black">ROBOTICS & AUTOMATION</div>
                    <div className="text-white/70 text-sm font-medium">Arduino, Raspberry Pi, IoT</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 group/item">
                  <Smartphone className="text-yellow-400 mt-1 flex-shrink-0" size={24} strokeWidth={3} />
                  <div>
                    <div className="text-white font-black">MOBILE DEVELOPMENT</div>
                    <div className="text-white/70 text-sm font-medium">Flutter-Dart, Cross-platform</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 group/item">
                  <Database className="text-yellow-400 mt-1 flex-shrink-0" size={24} strokeWidth={3} />
                  <div>
                    <div className="text-white font-black">BACKEND SYSTEMS</div>
                    <div className="text-white/70 text-sm font-medium">Java, Spring Boot, APIs</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

// Skills Section with Modern Logo Grid
const Skills = memo(() => {
  const [ref, isVisible] = useInView();

  return (
    <section id="skills" className="py-20 bg-black border-t-4 border-white/20 relative">
      {/* Section Divider */}
      <div className="section-divider absolute top-0 left-0 right-0"></div>

      <div className="container mx-auto px-6 max-w-7xl">
        <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white mb-4 tracking-tighter">
            SKILLS
          </h2>
          <div className="w-20 sm:w-24 md:w-32 h-2 bg-yellow-400 mb-8"></div>
          <p className="text-white text-sm sm:text-base md:text-lg mb-12 md:mb-16 font-medium max-w-3xl">
            Technologies and tools I work with daily
          </p>
        </div>

        <div className="space-y-16">
          {portfolioData.skills.map((skillCategory, catIdx) => (
            <div
              key={catIdx}
              className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${catIdx * 150}ms` }}
            >
              {/* Category Header */}
              <div className="mb-8">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-yellow-400 tracking-tight mb-4">
                  {skillCategory.category}
                </h3>
                <div className="w-16 sm:w-20 md:w-24 h-1 bg-white"></div>
              </div>
              
              {/* Skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4 md:gap-6">
                {skillCategory.items.map((skill, skillIdx) => (
                  <SkillCard 
                    key={skillIdx} 
                    skill={skill} 
                    delay={catIdx * 200 + skillIdx * 50}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section Divider */}
      <div className="section-divider absolute bottom-0 left-0 right-0"></div>
    </section>
  );
});

// Experience Section
const Experience = memo(() => {
  const [ref, isVisible] = useInView();

  return (
    <section id="experience" className="py-20 bg-black">
      <div className="container mx-auto px-6 max-w-7xl">
        <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white mb-4 tracking-tighter">
            EXPERIENCE
          </h2>
          <div className="w-20 sm:w-24 md:w-32 h-2 bg-yellow-400 mb-12 md:mb-16"></div>
        </div>

        <div className="max-w-5xl space-y-8">
          {portfolioData.experiences.map((exp, idx) => (
            <div
              key={idx}
              className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${idx * 200}ms` }}
            >
              <div className="border-4 border-white bg-black hover:border-white/20 transition-all duration-300 group transform hover:scale-[1.02]">
                <div className="border-b-4 border-white group-hover:border-white/20 transition-colors p-6 bg-black">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-3">
                    <div>
                      <h3 className="text-2xl font-black text-white group-hover:text-yellow-400 transition-colors tracking-tight mb-2">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-3 text-yellow-400 font-black text-sm">
                        <span>{exp.company}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <MapPin size={14} strokeWidth={3} />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-white font-black text-sm tracking-wider border-2 border-white/20 px-4 py-2 whitespace-nowrap">
                      <Calendar size={16} strokeWidth={3} className="text-yellow-400" />
                      {exp.duration}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-white/90 font-medium leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  <div className="mb-6">
                    <div className="text-yellow-400 font-black text-xs tracking-wider mb-3">TECHNOLOGIES</div>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 border-2 border-white text-white text-xs font-black tracking-wide hover:bg-yellow-400 hover:text-black hover:border-white/20 transition-all"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="text-yellow-400 font-black text-xs tracking-wider mb-3">KEY ACHIEVEMENTS</div>
                    <div className="space-y-2">
                      {exp.achievements.map((achievement, achIdx) => (
                        <div key={achIdx} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-yellow-400 mt-2 flex-shrink-0"></div>
                          <span className="text-white/80 font-medium text-sm">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

// Projects Section with 3D Hover and Modal
const Projects = memo(() => {
  const [ref, isVisible] = useInView();
  const [filter, setFilter] = useState('ALL');
  const [selectedProject, setSelectedProject] = useState(null);
  const categories = ['ALL', 'ROBOTICS', 'BACKEND', 'MOBILE', 'FULLSTACK'];

  const filteredProjects = filter === 'ALL'
    ? portfolioData.projects
    : portfolioData.projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 bg-black border-t-4 border-white/20">
      <div className="container mx-auto px-6 max-w-7xl">
        <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white mb-4 tracking-tighter">
            PROJECTS
          </h2>
          <div className="w-20 sm:w-24 md:w-32 h-2 bg-yellow-400 mb-8"></div>
          <p className="text-white text-sm sm:text-base md:text-lg mb-12 font-medium max-w-3xl">
            A selection of projects spanning robotics, backend development, and mobile applications. Click to view details.
          </p>
        </div>

        <div className={`flex flex-wrap gap-4 mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-3 font-black text-sm tracking-wider transition-all duration-300 ${
                filter === cat
                  ? 'bg-yellow-400 text-black'
                  : 'border-4 border-white text-white hover:border-white/20 hover:text-yellow-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl">
          {filteredProjects.map((project, idx) => (
            <div
              key={idx}
              className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${idx * 100}ms` }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="project-card border-4 border-white bg-black hover:border-white/20 transition-all duration-300 group h-full flex flex-col cursor-pointer transform hover:scale-105">
                <div className="p-6 flex-1 flex flex-col">

                  {/* HEADER */}
                  <div className="flex items-center gap-5 border-b-2 border-white/20 pb-5 mb-5">

                    {/* LEFT : LOGO */}
                    <div className="w-30 h-30 border-2 border-white/20 flex items-center justify-center bg-black flex-shrink-0">
                      <img
                        src={project.logo}
                        alt={project.title}
                        className="w-20 h-20 object-contain"
                      />
                    </div>

                    {/* RIGHT : TITLE + CATEGORY */}
                    <div className="flex-1">
                      <h3 className="text-xl font-black text-white group-hover:text-yellow-400 transition-colors tracking-tight">
                        {project.title}
                      </h3>

                      <div className="text-xs font-black text-yellow-400 mt-2 tracking-wider">
                        {project.category}
                      </div>
                    </div>

                  </div>

                  {/* DESCRIPTION */}
                  <p className="text-white/80 mb-4 text-sm font-medium leading-relaxed flex-1">
                    {project.description}
                  </p>

                  {/* TECHNOLOGIES */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="px-3 py-1 bg-white/10 text-white text-xs font-black tracking-wide"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="text-yellow-400 font-black text-xs flex items-center gap-2">
                    CLICK FOR DETAILS <ChevronDown size={16} strokeWidth={3} />
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
});

// Achievements Section
const Achievements = memo(() => {
  const [ref, isVisible] = useInView();

  return (
    <section id="achievements" className="py-20 bg-black">
      <div className="container mx-auto px-6 max-w-7xl">
        <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white mb-4 tracking-tighter">
            ACHIEVEMENTS
          </h2>
          <div className="w-20 sm:w-24 md:w-32 h-2 bg-yellow-400 mb-12 md:mb-16"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {portfolioData.achievements.map((achievement, idx) => (
            <div
              key={idx}
              className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="border-4 border-white p-6 bg-black hover:border-white/20 transition-all duration-300 group transform hover:scale-[1.03] text-center flex flex-col items-center">

            {/* Image */}
            <div className="w-28 h-28 md:w-40 md:h-40 border-4 border-white/20 bg-black flex items-center justify-center overflow-hidden mb-4">
              <img
                src={achievement.image}
                alt={achievement.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Title */}
            <h3 className="text-xl font-black text-white group-hover:text-yellow-400 transition-colors tracking-tight mb-2">
              {achievement.title}
            </h3>

            {/* Organization */}
            <p className="text-yellow-400 font-black text-sm tracking-wide mb-2">
              {achievement.organization}
            </p>

            {/* Description */}
            <p className="text-white/80 font-medium text-sm leading-relaxed mb-3">
              {achievement.description}
            </p>

            {/* Date */}
            <span className="text-yellow-400 text-xs font-black tracking-wider">
              {achievement.date}
            </span>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

// Contact Section
const Contact = memo(() => {
  const [ref, isVisible] = useInView();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

      const handleSubmit = async (e) => {
        e.preventDefault();

        try {
          const { data, error } = await supabase
            .from("contact_messages")
            .insert([
              {
                name: formData.name,
                email: formData.email,
                message: formData.message
              }
            ]);

          if (error) throw error;

          alert("Message sent successfully!");

          setFormData({
            name: "",
            email: "",
            message: ""
          });

        } catch (error) {
          console.error(error);
          alert("Error sending message");
        }
      };

  return (
    <section id="contact" className="py-20 bg-black border-t-4 border-white/20">
      <div className="container mx-auto px-6 max-w-7xl">
        <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white mb-4 tracking-tighter">
            CONTACT
          </h2>
          <div className="w-20 sm:w-24 md:w-32 h-2 bg-yellow-400 mb-8"></div>
          <p className="text-white text-sm sm:text-base md:text-lg mb-12 md:mb-16 font-medium max-w-3xl">
            Got a project in mind? Let's build something great together. Drop me a message and I'll get back to you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl">
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-yellow-400 font-black mb-2 text-sm tracking-wider">NAME</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-4 bg-black border-4 border-white text-white focus:border-white/20 focus:outline-none transition-colors font-medium"
                  required
                />
              </div>
              <div>
                <label className="block text-yellow-400 font-black mb-2 text-sm tracking-wider">EMAIL</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-4 bg-black border-4 border-white text-white focus:border-white/20 focus:outline-none transition-colors font-medium"
                  required
                />
              </div>
              <div>
                <label className="block text-yellow-400 font-black mb-2 text-sm tracking-wider">MESSAGE</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  className="w-full px-4 py-4 bg-black border-4 border-white text-white focus:border-white/20 focus:outline-none transition-colors resize-none font-medium"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-yellow-400 text-black font-black text-sm tracking-wider hover:bg-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send size={20} strokeWidth={3} />
                SEND MESSAGE
              </button>
            </form>
          </div>

          <div className={`space-y-6 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="border-4 border-white p-6 bg-black hover:border-white/20 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 border-4 border-white/20 flex items-center justify-center bg-black flex-shrink-0">
                  <Mail size={28} className="text-yellow-400" strokeWidth={3} />
                </div>
                <div>
                  <h3 className="text-yellow-400 font-black mb-1 tracking-wide">EMAIL</h3>
                  <a href={`mailto:${portfolioData.personal.email}`} className="text-white hover:text-yellow-400 transition-colors font-medium break-all">
                    {portfolioData.personal.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="border-4 border-white p-6 bg-black hover:border-white/20 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 border-4 border-white/20 flex items-center justify-center bg-black flex-shrink-0">
                  <MapPin size={28} className="text-yellow-400" strokeWidth={3} />
                </div>
                <div>
                  <h3 className="text-yellow-400 font-black mb-1 tracking-wide">LOCATION</h3>
                  <p className="text-white font-medium">{portfolioData.personal.location}</p>
                </div>
              </div>
            </div>

            <div className="border-4 border-white p-6 bg-black">
              <h3 className="text-yellow-400 font-black mb-4 tracking-wide">CONNECT</h3>
              <div className="flex gap-4">
                <a
                  href={portfolioData.social.github}
                  className="flex-1 py-4 border-2 border-white flex items-center justify-center gap-2 text-white hover:bg-yellow-400 hover:border-white/20 hover:text-black transition-all font-black text-xs tracking-wider"
                >
                  <Github size={20} strokeWidth={3} />
                  GITHUB
                </a>
                <a
                  href={portfolioData.social.linkedin}
                  className="flex-1 py-4 border-2 border-white flex items-center justify-center gap-2 text-white hover:bg-yellow-400 hover:border-white/20 hover:text-black transition-all font-black text-xs tracking-wider"
                >
                  <Linkedin size={20} strokeWidth={3} />
                  LINKEDIN
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

// Footer Component
const Footer = memo(() => {
  return (
    <footer className="bg-black border-t-4 border-white/20 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
          <div>
            <h3 className="text-3xl font-black text-yellow-400 mb-2 tracking-tighter">
              PRITAM THOPATE
            </h3>
            <p className="text-white font-medium">DESIGNING SYSTEMS. WRITING CODE. SOLVING PROBLEMS</p>
          </div>

          <div className="flex gap-6">
            <a href={portfolioData.social.github} className="text-white hover:text-yellow-400 transition-colors">
              <Github size={28} strokeWidth={3} />
            </a>
            <a href={portfolioData.social.linkedin} className="text-white hover:text-yellow-400 transition-colors">
              <Linkedin size={28} strokeWidth={3} />
            </a>
            <a href={`mailto:${portfolioData.social.email}`} className="text-white hover:text-yellow-400 transition-colors">
              <Mail size={28} strokeWidth={3} />
            </a>
          </div>
        </div>

        <div className="border-t-2 border-white/20 pt-8 text-center">
          <p className="text-white font-black text-sm tracking-wider">
            © {new Date().getFullYear()} PRITAM THOPATE — ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </footer>
  );
});

// Main App Component
export default function Portfolio() {
  const [showSplash, setShowSplash] = useState(true);
  const [contentReady, setContentReady] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);

  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }, []);

  const handleSplashComplete = () => {
    setContentReady(true);
  };

  return (
    <div className="bg-black text-white min-h-screen relative overflow-hidden">
      {/* Global Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Cyber Grid */}
        <div className="cyber-grid"></div>
        
        {/* Scanline Effect */}
        <div className="scanline"></div>
        
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: 0,
              animation: `float ${15 + Math.random() * 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: 0.3,
            }}
          />
        ))}
        
        {/* Glow Orbs */}
        <div
          className="absolute w-96 h-96 rounded-full"
          style={{
            top: '10%',
            left: '10%',
            background: 'radial-gradient(circle, rgba(251,191,36,0.1) 0%, transparent 70%)',
            animation: 'orbFloat 20s ease-in-out infinite',
          }}
        />
        <div
          className="absolute w-96 h-96 rounded-full"
          style={{
            bottom: '10%',
            right: '10%',
            background: 'radial-gradient(circle, rgba(251,191,36,0.08) 0%, transparent 70%)',
            animation: 'orbFloat 25s ease-in-out infinite',
            animationDelay: '5s',
          }}
        />
      </div>

      
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      
      {contentReady && (
        <>
          <BackgroundParticles />
          <CustomCursor />
          <ScrollProgress />
          <Header onTerminalOpen={() => setTerminalOpen(true)} />
          <Hero />
          <About />
          <Skills />
          <Experience />
          <GitHubActivity />
          <Projects />
          <Achievements />
          <Contact />
          <Footer />
          <RoverRobot />
          <TerminalMode isOpen={terminalOpen} onClose={() => setTerminalOpen(false)} />
        </>
      )}
    </div>
  );
}


//Working--Finalizing
import React, { useState, useEffect } from 'react';
import { Mail, MapPin, Github, Linkedin, ChevronDown, Brain, Cloud, Database } from 'lucide-react';

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Loading animation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: true
          }));
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "AI Interview Simulator",
      tags: ["Python", "LangChain", "RAG", "GPT4All"],
      description: "Built an AI-driven interview simulator generating multi-round behavioral, technical, and coding questions for roles like Python Developer, Data Scientist, and ML Engineer.",
      highlights: [
        "Designed end-to-end LangChain workflow with Few-Shot and Chain-of-Thought prompts",
        "Custom memory module for performance tracking and contextual hints",
        "RAG component with ChromaDB and HuggingFace embeddings for real-time scoring (0-100)"
      ]
    },
    {
      title: "SmartSupport AI - Customer Service Chatbot",
      tags: ["Python", "GPT4All", "NLP"],
      description: "E-commerce customer service chatbot powered by local GPT4All LLM, handling 10 core support scenarios with 93/100 quality score.",
      highlights: [
        "Rule-based evaluation system with 6 objective criteria and automated JSON reporting",
        "Boosted chatbot quality from 2.6 to 9.3 through iterative prompt engineering",
        "Defined roadmap for multi-turn conversations, web UI, and sentiment analysis"
      ]
    },
    {
      title: "Multi-Object Tracking Framework",
      tags: ["YOLOv8", "ByteTrack", "OpenCV", "Computer Vision"],
      description: "Traffic monitoring system using YOLOv8 and ByteTrack to detect, track, and count heavy vehicles across 53,485 frames.",
      highlights: [
        "Achieved 95% detection accuracy using YOLOv8x with Re-ID logic",
        "ByteTrack achieving sub-30ms tracking association time",
        "90% counting accuracy with LineZone, extensible to multi-camera setups"
      ]
    },
    {
      title: "Microservices-Based Book Review Application",
      tags: ["Kubernetes", "Docker", "MongoDB", "REST APIs"],
      description: "Book review platform with 3 microservices deployed on Kubernetes with persistent MongoDB storage.",
      highlights: [
        "Achieved 99% uptime with horizontal pod autoscaling and health probes",
        "Sub-second API response times with independent scaling",
        "Extensible to recommendation engines and event-driven architecture"
      ]
    }
  ];

  const skills = {
    "Programming": ["Python", "C", "C++", "SQL"],
    "ML/DL": ["TensorFlow", "Keras", "PyTorch", "scikit-learn", "OpenCV", "YOLOv8"],
    "Cloud & DevOps": ["Kubernetes", "Docker", "REST APIs", "MongoDB", "Git/GitHub"],
    "AI/ML Tech": ["LangChain", "OpenAI", "Prompt Engineering", "RAG", "ChromaDB", "Embeddings"]
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Loading Screen */}
      <div className={`fixed inset-0 z-[9999] flex items-center justify-center transition-all duration-1000 ${isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} style={{ backgroundColor: '#0F172A' }}>
        <div className="text-center">
          <div className="relative mb-8">
            <div className="w-24 h-24 border-4 rounded-full animate-spin mx-auto" style={{ borderColor: 'rgba(56, 189, 248, 0.2)', borderTopColor: '#38BDF8' }}></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-4xl font-bold animate-pulse" style={{ 
                background: 'linear-gradient(to right, #38BDF8, #7DD3FC)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                BSR
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <div className="w-3 h-3 rounded-full animate-bounce" style={{ backgroundColor: '#38BDF8', animationDelay: '0s' }}></div>
            <div className="w-3 h-3 rounded-full animate-bounce" style={{ backgroundColor: '#38BDF8', animationDelay: '0.2s' }}></div>
            <div className="w-3 h-3 rounded-full animate-bounce" style={{ backgroundColor: '#38BDF8', animationDelay: '0.4s' }}></div>
          </div>
          <p className="mt-4 animate-pulse" style={{ color: '#9CA3AF' }}>Loading Portfolio...</p>
        </div>
      </div>

      {/* Main Content */}
      <div className={`min-h-screen text-white transition-all duration-1000 ease-out ${isLoading ? 'opacity-0' : 'opacity-100'}`} style={{ backgroundColor: '#0F172A', color: '#E5E7EB' }}>
        {/* Navigation */}
        <nav className="fixed top-0 w-full backdrop-blur-md z-50 border-b animate-fade-in" style={{ backgroundColor: 'rgba(15, 23, 42, 0.8)', borderColor: 'rgba(56, 189, 248, 0.3)' }}>
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <button
              onClick={() => scrollToSection('home')}
              className="text-xl font-bold cursor-pointer transition-all duration-300 hover:scale-110"
              style={{ 
                background: 'linear-gradient(to right, #38BDF8, #7DD3FC)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              BSR
            </button>
            <div className="flex gap-6">
              {['home', 'about', 'projects', 'skills', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="capitalize transition-all duration-300 hover:scale-110"
                  style={{ color: '#E5E7EB' }}
                  onMouseEnter={(e) => e.target.style.color = '#38BDF8'}
                  onMouseLeave={(e) => e.target.style.color = '#E5E7EB'}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
          <div className="max-w-4xl text-center">
            <div className={`mb-6 transition-all duration-700 ${!isLoading ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '0.3s' }}>
              <div className="inline-block px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-400 text-sm mb-4">
                AI/ML Engineer
              </div>
            </div>
            <h1 className={`text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-teal-400 to-amber-400 bg-clip-text text-transparent transition-all duration-700 ${!isLoading ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '0.5s' }}>
              Sujith Reddy Bommareddy
            </h1>
            <p className={`text-xl text-slate-300 mb-8 transition-all duration-700 ${!isLoading ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '0.7s' }}>
              Masters in Computer Science @ Blekinge Institute of Technology
            </p>
            <p className={`text-lg text-slate-400 max-w-2xl mx-auto mb-8 transition-all duration-700 ${!isLoading ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '0.9s' }}>
              Specializing in AI/ML, Computer Vision, and NLP. Building intelligent systems with LangChain, RAG, and deep learning frameworks.
            </p>
            <div className={`flex gap-4 justify-center mb-12 transition-all duration-700 ${!isLoading ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '1.1s' }}>
              <a href="https://github.com/sujith0303" target="_blank" rel="noopener noreferrer" 
                 className="flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
                 style={{ backgroundColor: '#111827', boxShadow: '0 0 20px rgba(56, 189, 248, 0.2)' }}
                 onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 0 40px rgba(56, 189, 248, 0.4)'}
                 onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 0 20px rgba(56, 189, 248, 0.2)'}
              >
                <Github size={20} />
                GitHub
              </a>
              <a href="https://linkedin.com/in/sujith-reddy-bommareddy-8b75572b8" target="_blank" rel="noopener noreferrer"
                 className="flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
                 style={{ backgroundColor: '#38BDF8', color: '#0F172A', boxShadow: '0 0 30px rgba(56, 189, 248, 0.4)' }}
                 onMouseEnter={(e) => {
                   e.currentTarget.style.backgroundColor = '#7DD3FC';
                   e.currentTarget.style.boxShadow = '0 0 50px rgba(56, 189, 248, 0.6)';
                 }}
                 onMouseLeave={(e) => {
                   e.currentTarget.style.backgroundColor = '#38BDF8';
                   e.currentTarget.style.boxShadow = '0 0 30px rgba(56, 189, 248, 0.4)';
                 }}
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"
                 className="flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
                 style={{ backgroundColor: '#111827', boxShadow: '0 0 20px rgba(56, 189, 248, 0.2)', border: '1px solid rgba(56, 189, 248, 0.3)' }}
                 onMouseEnter={(e) => {
                   e.currentTarget.style.boxShadow = '0 0 40px rgba(56, 189, 248, 0.4)';
                   e.currentTarget.style.borderColor = 'rgba(56, 189, 248, 0.6)';
                 }}
                 onMouseLeave={(e) => {
                   e.currentTarget.style.boxShadow = '0 0 20px rgba(56, 189, 248, 0.2)';
                   e.currentTarget.style.borderColor = 'rgba(56, 189, 248, 0.3)';
                 }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
                Resume
              </a>
            </div>
            <button 
              onClick={() => scrollToSection('projects')}
              className={`animate-bounce transition-all duration-700 ${!isLoading ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} 
              style={{ transitionDelay: '1.3s', color: '#9CA3AF' }}
              onMouseEnter={(e) => e.target.style.color = '#E5E7EB'}
              onMouseLeave={(e) => e.target.style.color = '#9CA3AF'}
            >
              <ChevronDown size={32} />
            </button>
          </div>
        </section>

        {/* About Section */}
        <section 
          id="about" 
          className={`min-h-screen flex items-center justify-center px-6 py-20 transition-all duration-1000 ${
            isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="max-w-4xl">
            <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
            <div className="backdrop-blur rounded-2xl p-8 border transition-all duration-300" style={{ 
              backgroundColor: 'rgba(17, 24, 39, 0.5)', 
              borderColor: 'rgba(56, 189, 248, 0.3)',
              boxShadow: '0 0 20px rgba(56, 189, 248, 0.2)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(56, 189, 248, 0.6)';
              e.currentTarget.style.boxShadow = '0 0 40px rgba(56, 189, 248, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(56, 189, 248, 0.3)';
              e.currentTarget.style.boxShadow = '0 0 20px rgba(56, 189, 248, 0.2)';
            }}
            >
              <p className="text-lg mb-6" style={{ color: '#E5E7EB' }}>
                I'm a Computer Science graduate student at Blekinge Institute of Technology in Sweden, with a strong foundation in AI/ML and software engineering from JNTU Hyderabad.
              </p>
              <p className="text-lg mb-6" style={{ color: '#E5E7EB' }}>
                My work focuses on building practical AI applications, from interview simulators using LangChain and RAG to real-time computer vision systems for traffic monitoring. I'm passionate about leveraging cutting-edge technologies like prompt engineering, vector embeddings, and transformer models to solve real-world problems.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <div className="flex items-start gap-3 p-4 rounded-lg transition-all duration-300 hover:scale-105" style={{ backgroundColor: 'rgba(17, 24, 39, 0.5)' }}>
                  <Brain style={{ color: '#38BDF8' }} className="mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold mb-1" style={{ color: '#E5E7EB' }}>AI/ML Focus</h3>
                    <p className="text-sm" style={{ color: '#9CA3AF' }}>Computer Vision, NLP, Deep Learning</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg transition-all duration-300 hover:scale-105" style={{ backgroundColor: 'rgba(17, 24, 39, 0.5)' }}>
                  <Cloud style={{ color: '#38BDF8' }} className="mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold mb-1" style={{ color: '#E5E7EB' }}>Cloud & DevOps</h3>
                    <p className="text-sm" style={{ color: '#9CA3AF' }}>Kubernetes, Docker, Microservices</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg transition-all duration-300 hover:scale-105" style={{ backgroundColor: 'rgba(17, 24, 39, 0.5)' }}>
                  <Database style={{ color: '#38BDF8' }} className="mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold mb-1" style={{ color: '#E5E7EB' }}>Data Engineering</h3>
                    <p className="text-sm" style={{ color: '#9CA3AF' }}>MongoDB, Vector DBs, REST APIs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section 
          id="projects" 
          className={`min-h-screen px-6 py-20 transition-all duration-1000 ${
            isVisible.projects ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, idx) => (
                <div 
                  key={idx} 
                  className="bg-slate-800/50 backdrop-blur rounded-2xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10"
                  style={{ 
                    animationDelay: `${idx * 0.1}s`,
                    animation: isVisible.projects ? 'fadeInUp 0.6s ease-out forwards' : 'none'
                  }}
                >
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs hover:bg-blue-500/20 transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-slate-300 mb-4">{project.description}</p>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="text-sm text-slate-400 flex items-start gap-2">
                        <span className="text-blue-400 mt-1">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section 
          id="skills" 
          className={`min-h-screen flex items-center justify-center px-6 py-20 transition-all duration-1000 ${
            isVisible.skills ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="max-w-4xl w-full">
            <h2 className="text-4xl font-bold mb-12 text-center">Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(skills).map(([category, items], idx) => (
                <div 
                  key={category} 
                  className="bg-slate-800/50 backdrop-blur rounded-2xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10"
                  style={{ 
                    animationDelay: `${idx * 0.1}s`,
                    animation: isVisible.skills ? 'fadeInUp 0.6s ease-out forwards' : 'none'
                  }}
                >
                  <h3 className="text-xl font-bold mb-4 text-blue-400">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill, i) => (
                      <span key={i} className="px-4 py-2 bg-slate-700/50 rounded-lg text-sm hover:bg-slate-700 hover:scale-110 transition-all duration-200">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section 
          id="contact" 
          className={`min-h-screen flex items-center justify-center px-6 py-20 transition-all duration-1000 ${
            isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="max-w-2xl w-full text-center">
            <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
            <p className="text-lg text-slate-300 mb-8">
              I'm currently open to opportunities in AI/ML engineering, computer vision, and software development. Let's connect!
            </p>
            <div className="backdrop-blur rounded-2xl p-8 border transition-all duration-300" style={{ 
              backgroundColor: 'rgba(17, 24, 39, 0.5)',
              borderColor: 'rgba(56, 189, 248, 0.3)',
              boxShadow: '0 0 20px rgba(56, 189, 248, 0.2)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(56, 189, 248, 0.6)';
              e.currentTarget.style.boxShadow = '0 0 40px rgba(56, 189, 248, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(56, 189, 248, 0.3)';
              e.currentTarget.style.boxShadow = '0 0 20px rgba(56, 189, 248, 0.2)';
            }}
            >
              <div className="flex flex-col gap-4">
                <a href="mailto:bsujithreddy@gmail.com" 
                   className="flex items-center justify-center gap-3 text-lg transition-all duration-300 hover:scale-110"
                   style={{ color: '#E5E7EB' }}
                   onMouseEnter={(e) => e.currentTarget.style.color = '#38BDF8'}
                   onMouseLeave={(e) => e.currentTarget.style.color = '#E5E7EB'}
                >
                  <Mail size={24} />
                  bsujithreddy@gmail.com
                </a>
                <div className="flex items-center justify-center gap-3 text-lg" style={{ color: '#9CA3AF' }}>
                  <MapPin size={24} />
                  Karlskrona, Sweden
                </div>
                <div className="flex gap-4 justify-center mt-4">
                  <a href="https://github.com/sujith0303" target="_blank" rel="noopener noreferrer"
                     className="p-3 rounded-lg transition-all duration-300 hover:scale-110"
                     style={{ backgroundColor: '#111827', boxShadow: '0 0 20px rgba(56, 189, 248, 0.2)' }}
                     onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 0 40px rgba(56, 189, 248, 0.5)'}
                     onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 0 20px rgba(56, 189, 248, 0.2)'}
                  >
                    <Github size={24} />
                  </a>
                  <a href="https://linkedin.com/in/sujith-reddy-bommareddy-8b75572b8" target="_blank" rel="noopener noreferrer"
                     className="p-3 rounded-lg transition-all duration-300 hover:scale-110"
                     style={{ backgroundColor: '#111827', boxShadow: '0 0 20px rgba(56, 189, 248, 0.2)' }}
                     onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 0 40px rgba(56, 189, 248, 0.5)'}
                     onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 0 20px rgba(56, 189, 248, 0.2)'}
                  >
                    <Linkedin size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t py-8 text-center" style={{ borderColor: 'rgba(56, 189, 248, 0.3)', color: '#9CA3AF' }}>
          <p>© 2025 Sujith Reddy Bommareddy. Built with Gatsby & React.</p>
        </footer>

        <style jsx>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fade-in {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          .animate-fade-in {
            animation: fade-in 0.6s ease-out;
          }

          .animate-fade-in-up {
            animation: fadeInUp 0.8s ease-out forwards;
            opacity: 0;
          }
        `}</style>
      </div>
    </>
  );
}
import React from 'react';
import { Mail, MapPin, Github, Linkedin, ChevronDown, Brain, Cloud, Database } from 'lucide-react';

export default function Portfolio() {
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
    "AI/ML Tech": ["LangChain", "GPT4All", "Prompt Engineering", "RAG", "ChromaDB", "Vector Embeddings"]
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-700">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            BRS
          </div>
          <div className="flex gap-6">
            {['home', 'about', 'projects', 'skills', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="capitalize hover:text-blue-400 transition-colors"
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl text-center">
          <div className="mb-6">
            <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-sm mb-4">
              AI/ML Engineer
            </div>
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Sujith Reddy Bommareddy
          </h1>
          <p className="text-xl text-slate-300 mb-8">
            Masters in Computer Science @ Blekinge Institute of Technology
          </p>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-8">
            Specializing in AI/ML, Computer Vision, and NLP. Building intelligent systems with LangChain, RAG, and deep learning frameworks.
          </p>
          <div className="flex gap-4 justify-center mb-12">
            <a href="https://github.com/sujith0303" target="_blank" rel="noopener noreferrer" 
               className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors">
              <Github size={20} />
              GitHub
            </a>
            <a href="https://linkedin.com/in/sujith-reddy-bommareddy-8b75572b8" target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
              <Linkedin size={20} />
              LinkedIn
            </a>
          </div>
          <button 
            onClick={() => scrollToSection('projects')}
            className="animate-bounce text-slate-400 hover:text-white transition-colors"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-4xl">
          <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
          <div className="bg-slate-800/50 backdrop-blur rounded-2xl p-8 border border-slate-700">
            <p className="text-lg text-slate-300 mb-6">
              I'm a Computer Science graduate student at Blekinge Institute of Technology in Sweden, with a strong foundation in AI/ML and software engineering from JNTU Hyderabad.
            </p>
            <p className="text-lg text-slate-300 mb-6">
              My work focuses on building practical AI applications, from interview simulators using LangChain and RAG to real-time computer vision systems for traffic monitoring. I'm passionate about leveraging cutting-edge technologies like prompt engineering, vector embeddings, and transformer models to solve real-world problems.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <div className="flex items-start gap-3">
                <Brain className="text-blue-400 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold mb-1">AI/ML Focus</h3>
                  <p className="text-sm text-slate-400">Computer Vision, NLP, Deep Learning</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Cloud className="text-purple-400 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold mb-1">Cloud & DevOps</h3>
                  <p className="text-sm text-slate-400">Kubernetes, Docker, Microservices</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Database className="text-pink-400 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold mb-1">Data Engineering</h3>
                  <p className="text-sm text-slate-400">MongoDB, Vector DBs, REST APIs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, idx) => (
              <div key={idx} className="bg-slate-800/50 backdrop-blur rounded-2xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs">
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
      <section id="skills" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-4xl w-full">
          <h2 className="text-4xl font-bold mb-12 text-center">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="bg-slate-800/50 backdrop-blur rounded-2xl p-6 border border-slate-700">
                <h3 className="text-xl font-bold mb-4 text-blue-400">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, i) => (
                    <span key={i} className="px-4 py-2 bg-slate-700/50 rounded-lg text-sm hover:bg-slate-700 transition-colors">
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
      <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-2xl w-full text-center">
          <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
          <p className="text-lg text-slate-300 mb-8">
            I'm currently open to opportunities in AI/ML engineering, computer vision, and software development. Let's connect!
          </p>
          <div className="bg-slate-800/50 backdrop-blur rounded-2xl p-8 border border-slate-700">
            <div className="flex flex-col gap-4">
              <a href="mailto:bsujithreddy@gmail.com" 
                 className="flex items-center justify-center gap-3 text-lg hover:text-blue-400 transition-colors">
                <Mail size={24} />
                bsujithreddy@gmail.com
              </a>
              <div className="flex items-center justify-center gap-3 text-lg text-slate-400">
                <MapPin size={24} />
                Karlskrona, Sweden
              </div>
              <div className="flex gap-4 justify-center mt-4">
                <a href="https://github.com/sujith0303" target="_blank" rel="noopener noreferrer"
                   className="p-3 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors">
                  <Github size={24} />
                </a>
                <a href="https://linkedin.com/in/sujith-reddy-bommareddy-8b75572b8" target="_blank" rel="noopener noreferrer"
                   className="p-3 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700 py-8 text-center text-slate-400">
        <p>© 2025 Sujith Reddy Bommareddy. Built with Gatsby & React.</p>
      </footer>
    </div>
  );
}
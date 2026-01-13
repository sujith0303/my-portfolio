import React, { useState, useEffect } from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function Portfolio() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [heroHover, setHeroHover] = useState(false);
  const [eduHover, setEduHover] = useState(false);

  useEffect(() => {
    // Add favicon dynamically
    const favicon = document.querySelector("link[rel*='icon']") || document.createElement('link');
    favicon.type = 'image/x-icon';
    favicon.rel = 'shortcut icon';
    favicon.href = '/favicon.ico';
    document.getElementsByTagName('head')[0].appendChild(favicon);

    // Add title
    document.title = 'BSR Portfolio - Sujith Reddy Bommareddy';

    // Loading animation
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => setShowContent(true), 100);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Loading Screen */}
      <div className={`fixed inset-0 z-[9999] flex items-center justify-center transition-all duration-1000 ${isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} style={{ backgroundColor: '#020617' }}>
        <div className="text-center">
          <div className="text-5xl font-bold mb-4 animate-pulse" style={{ color: '#22D3EE' }}>
            BSR
          </div>
          <div className="flex gap-2 justify-center">
            <div className="w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: '#22D3EE', animationDelay: '0s' }}></div>
            <div className="w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: '#38BDF8', animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: '#22D3EE', animationDelay: '0.4s' }}></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className={`min-h-screen transition-all duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`} style={{ backgroundColor: '#020617' }}>
        {/* Navigation */}
        <nav className={`fixed top-0 left-0 right-0 z-50 px-8 py-6 flex justify-between items-center transition-all duration-700 ${showContent ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`} style={{ backgroundColor: 'rgba(2, 6, 23, 0.8)', backdropFilter: 'blur(10px)' }}>
          <a href="#home" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-2xl font-bold cursor-pointer" style={{ color: '#22D3EE' }}>
            BSR
          </a>
          <div className="flex gap-8" style={{ color: '#94A3B8' }}>
            <a href="#home" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="transition-colors cursor-pointer" style={{ color: '#94A3B8' }} onMouseEnter={(e) => e.target.style.color = '#22D3EE'} onMouseLeave={(e) => e.target.style.color = '#94A3B8'}>Home</a>
            <a href="#projects" onClick={(e) => { e.preventDefault(); document.getElementById('projects').scrollIntoView({ behavior: 'smooth' }); }} className="transition-colors cursor-pointer" style={{ color: '#94A3B8' }} onMouseEnter={(e) => e.target.style.color = '#22D3EE'} onMouseLeave={(e) => e.target.style.color = '#94A3B8'}>Projects</a>
            <a href="#skills" onClick={(e) => { e.preventDefault(); document.getElementById('skills').scrollIntoView({ behavior: 'smooth' }); }} className="transition-colors cursor-pointer" style={{ color: '#94A3B8' }} onMouseEnter={(e) => e.target.style.color = '#22D3EE'} onMouseLeave={(e) => e.target.style.color = '#94A3B8'}>Skills</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }); }} className="transition-colors cursor-pointer" style={{ color: '#94A3B8' }} onMouseEnter={(e) => e.target.style.color = '#22D3EE'} onMouseLeave={(e) => e.target.style.color = '#94A3B8'}>Contact</a>
          </div>
        </nav>

        {/* Hero Section - Bento Grid */}
        <div className="pt-32 pb-20 px-8 max-w-7xl mx-auto" id="home">
          <div className="grid grid-cols-12 gap-4 auto-rows-auto">
            
            {/* Hero Card - Large */}
            <div 
                 className={`col-span-12 md:col-span-7 rounded-3xl p-8 relative overflow-hidden ${showContent ? 'opacity-100' : 'opacity-0'}`}
                 onMouseEnter={() => setHeroHover(true)}
                 onMouseLeave={() => setHeroHover(false)}
                 style={{ 
                   backgroundColor: '#0F172A',
                   boxShadow: heroHover ? '0 8px 40px rgba(34, 211, 238, 0.3)' : '0 4px 24px rgba(34, 211, 238, 0.1)',
                   minHeight: '400px',
                   transform: heroHover ? 'translateY(-4px)' : 'translateY(0)',
                   transition: 'all 0.3s ease, opacity 0.7s ease 0.1s'
                 }}>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl" style={{ backgroundColor: '#22D3EE', color: '#020617' }}>
                    B
                  </div>
                  <div>
                    <div className="font-semibold" style={{ color: '#E5E7EB' }}>Hi, I'm Sujith.</div>
                    <div className="text-sm" style={{ color: '#94A3B8' }}>AI/ML Engineer</div>
                  </div>
                </div>
                <h1 className="text-5xl font-bold mb-4 leading-tight" style={{ color: '#E5E7EB' }}>
                  Passionate to pursue<br />the technology.
                </h1>
                <p className="text-lg max-w-md" style={{ color: '#94A3B8' }}>
                  I enjoy learning new things and try to overcome new challenges while analyzing how I improved through them.
                </p>
                <div className="flex gap-4 mt-6">
                  <a href="https://github.com/sujith0303" target="_blank" rel="noopener noreferrer" 
                     className="transition-colors" style={{ color: '#94A3B8' }}
                     onMouseEnter={(e) => e.currentTarget.style.color = '#22D3EE'}
                     onMouseLeave={(e) => e.currentTarget.style.color = '#94A3B8'}>
                    <Github size={24} />
                  </a>
                  <a href="https://linkedin.com/in/sujith-reddy-bommareddy-8b75572b8" target="_blank" rel="noopener noreferrer"
                     className="transition-colors" style={{ color: '#94A3B8' }}
                     onMouseEnter={(e) => e.currentTarget.style.color = '#22D3EE'}
                     onMouseLeave={(e) => e.currentTarget.style.color = '#94A3B8'}>
                    <Linkedin size={24} />
                  </a>
                  <a href="mailto:bsujithreddy@gmail.com"
                     className="transition-colors" style={{ color: '#94A3B8' }}
                     onMouseEnter={(e) => e.currentTarget.style.color = '#22D3EE'}
                     onMouseLeave={(e) => e.currentTarget.style.color = '#94A3B8'}>
                    <Mail size={24} />
                  </a>
                  <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"
                     className="transition-colors" style={{ color: '#94A3B8' }}
                     onMouseEnter={(e) => e.currentTarget.style.color = '#22D3EE'}
                     onMouseLeave={(e) => e.currentTarget.style.color = '#94A3B8'}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                      <polyline points="14 2 14 8 20 8"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Education Card */}
            <div 
                 className={`col-span-12 md:col-span-5 rounded-3xl p-8 relative overflow-hidden ${showContent ? 'opacity-100' : 'opacity-0'}`}
                 onMouseEnter={() => setEduHover(true)}
                 onMouseLeave={() => setEduHover(false)}
                 style={{ 
                   backgroundColor: '#0F172A',
                   boxShadow: eduHover ? '0 8px 40px rgba(34, 211, 238, 0.3)' : '0 4px 24px rgba(34, 211, 238, 0.1)',
                   minHeight: '300px',
                   transform: eduHover ? 'translateY(-4px)' : 'translateY(0)',
                   transition: 'all 0.3s ease, opacity 0.7s ease 0.3s'
                 }}>
              <div className="text-xl mb-4" style={{ color: '#94A3B8' }}>Currently I'm</div>
              <h3 className="text-4xl font-bold mb-4" style={{ color: '#E5E7EB' }}>
                Pursuing Masters
              </h3>
              <p className="text-lg" style={{ color: '#94A3B8' }}>
                Building knowledge in AI/ML and Computer Vision at Blekinge Institute of Technology.
              </p>
              <div className="absolute bottom-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-20" style={{ backgroundColor: '#22D3EE' }}></div>
            </div>

          </div>
        </div>

        {/* Projects Section */}
        <div className={`py-20 px-8 max-w-7xl mx-auto transition-all duration-700 delay-500 ${showContent ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} id="projects">
          <h2 className="text-4xl font-bold mb-8" style={{ color: '#E5E7EB' }}>Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "AI Interview Simulator",
                desc: "LangChain-powered interview platform with RAG and GPT4All for real-time scoring",
                tags: ["Python", "LangChain", "RAG"]
              },
              {
                title: "SmartSupport AI Chatbot",
                desc: "E-commerce customer service with 93/100 quality score using GPT4All",
                tags: ["Python", "GPT4All", "NLP"]
              },
              {
                title: "Smart Surveillance System",
                desc: "Natural language querying for CCTV with YOLOv8 and ByteTrack integration",
                tags: ["Python", "YOLO", "ByteTrack"]
              },
              {
                title: "Microservices Book Review",
                desc: "Scalable platform with 99% uptime using Kubernetes and Docker",
                tags: ["Kubernetes", "Docker", "MongoDB"]
              }
            ].map((project, idx) => (
              <div key={idx} className="rounded-3xl p-8 transition-all group" 
                   style={{ 
                     backgroundColor: '#0F172A',
                     boxShadow: '0 4px 24px rgba(34, 211, 238, 0.05)',
                     border: '1px solid rgba(34, 211, 238, 0.1)'
                   }}
                   onMouseEnter={(e) => {
                     e.currentTarget.style.boxShadow = '0 8px 32px rgba(34, 211, 238, 0.15)';
                     e.currentTarget.style.borderColor = 'rgba(34, 211, 238, 0.3)';
                   }}
                   onMouseLeave={(e) => {
                     e.currentTarget.style.boxShadow = '0 4px 24px rgba(34, 211, 238, 0.05)';
                     e.currentTarget.style.borderColor = 'rgba(34, 211, 238, 0.1)';
                   }}>
                <h3 className="text-2xl font-bold mb-2" style={{ color: '#E5E7EB' }}>{project.title}</h3>
                <p className="mb-4" style={{ color: '#94A3B8' }}>{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full text-xs" 
                          style={{ backgroundColor: 'rgba(34, 211, 238, 0.1)', color: '#22D3EE' }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className={`py-20 px-8 max-w-7xl mx-auto transition-all duration-700 delay-700 ${showContent ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} id="skills">
          <div className="rounded-3xl p-8 transition-all" 
               style={{ 
                 backgroundColor: '#0F172A',
                 boxShadow: '0 4px 24px rgba(34, 211, 238, 0.1)'
               }}
               onMouseEnter={(e) => {
                 e.currentTarget.style.boxShadow = '0 8px 40px rgba(34, 211, 238, 0.3)';
                 e.currentTarget.style.transform = 'translateY(-4px)';
               }}
               onMouseLeave={(e) => {
                 e.currentTarget.style.boxShadow = '0 4px 24px rgba(34, 211, 238, 0.1)';
                 e.currentTarget.style.transform = 'translateY(0)';
               }}>
            <h2 className="text-4xl font-bold mb-8" style={{ color: '#E5E7EB' }}>Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl" style={{ backgroundColor: 'rgba(34, 211, 238, 0.05)' }}>
                <h4 className="font-bold mb-4" style={{ color: '#22D3EE' }}>Programming</h4>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'C', 'C++', 'SQL'].map(skill => (
                    <span key={skill} className="px-3 py-1 rounded-lg text-sm" style={{ backgroundColor: '#020617', color: '#94A3B8' }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-6 rounded-xl" style={{ backgroundColor: 'rgba(34, 211, 238, 0.05)' }}>
                <h4 className="font-bold mb-4" style={{ color: '#22D3EE' }}>ML/DL</h4>
                <div className="flex flex-wrap gap-2">
                  {['TensorFlow', 'Keras', 'PyTorch', 'scikit-learn', 'OpenCV', 'YOLOv8', 'ByteTrack'].map(skill => (
                    <span key={skill} className="px-3 py-1 rounded-lg text-sm" style={{ backgroundColor: '#020617', color: '#94A3B8' }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-6 rounded-xl" style={{ backgroundColor: 'rgba(34, 211, 238, 0.05)' }}>
                <h4 className="font-bold mb-4" style={{ color: '#22D3EE' }}>Cloud & DevOps</h4>
                <div className="flex flex-wrap gap-2">
                  {['Kubernetes', 'Docker', 'FastAPI', 'MongoDB', 'SQLite', 'Git/GitHub'].map(skill => (
                    <span key={skill} className="px-3 py-1 rounded-lg text-sm" style={{ backgroundColor: '#020617', color: '#94A3B8' }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-6 rounded-xl" style={{ backgroundColor: 'rgba(34, 211, 238, 0.05)' }}>
                <h4 className="font-bold mb-4" style={{ color: '#22D3EE' }}>AI/ML Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {['LangChain', 'GPT4All', 'Prompt Engineering', 'RAG', 'Few-Shot Learning', 'ChromaDB', 'Vector Embeddings'].map(skill => (
                    <span key={skill} className="px-3 py-1 rounded-lg text-sm" style={{ backgroundColor: '#020617', color: '#94A3B8' }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-6 rounded-xl md:col-span-2" style={{ backgroundColor: 'rgba(34, 211, 238, 0.05)' }}>
                <h4 className="font-bold mb-4" style={{ color: '#22D3EE' }}>Domains</h4>
                <div className="flex flex-wrap gap-2">
                  {['Computer Vision', 'NLP', 'CNNs', 'Object Detection/Tracking', 'Video Analytics', 'Semantic Search', 'AI Evaluation'].map(skill => (
                    <span key={skill} className="px-3 py-1 rounded-lg text-sm" style={{ backgroundColor: '#020617', color: '#94A3B8' }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className={`py-20 px-8 max-w-7xl mx-auto transition-all duration-700 delay-1000 ${showContent ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} id="contact">
          <div className="rounded-3xl p-12 relative overflow-hidden transition-all" 
               style={{ 
                 backgroundColor: '#0F172A',
                 boxShadow: '0 4px 24px rgba(34, 211, 238, 0.2)',
                 border: '1px solid rgba(34, 211, 238, 0.2)'
               }}
               onMouseEnter={(e) => {
                 e.currentTarget.style.boxShadow = '0 8px 40px rgba(34, 211, 238, 0.4)';
                 e.currentTarget.style.transform = 'translateY(-4px)';
               }}
               onMouseLeave={(e) => {
                 e.currentTarget.style.boxShadow = '0 4px 24px rgba(34, 211, 238, 0.2)';
                 e.currentTarget.style.transform = 'translateY(0)';
               }}>
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-4" style={{ color: '#E5E7EB' }}>Get In Touch</h2>
              <p className="text-lg mb-8 max-w-2xl" style={{ color: '#94A3B8' }}>
                I'm currently open to opportunities in AI/ML engineering, computer vision, and software development. Let's connect!
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
                <a href="mailto:bsujithreddy@gmail.com" 
                   className="flex items-center gap-4 p-6 rounded-2xl transition-all"
                   style={{ backgroundColor: 'rgba(34, 211, 238, 0.05)', border: '1px solid rgba(34, 211, 238, 0.1)' }}
                   onMouseEnter={(e) => {
                     e.currentTarget.style.backgroundColor = 'rgba(34, 211, 238, 0.1)';
                     e.currentTarget.style.borderColor = 'rgba(34, 211, 238, 0.3)';
                   }}
                   onMouseLeave={(e) => {
                     e.currentTarget.style.backgroundColor = 'rgba(34, 211, 238, 0.05)';
                     e.currentTarget.style.borderColor = 'rgba(34, 211, 238, 0.1)';
                   }}>
                  <div className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(34, 211, 238, 0.2)' }}>
                    <Mail size={24} style={{ color: '#22D3EE' }} />
                  </div>
                  <div>
                    <div className="text-sm" style={{ color: '#94A3B8' }}>Email</div>
                    <div className="font-medium" style={{ color: '#E5E7EB' }}>Get in touch</div>
                  </div>
                </a>
                <a href="https://linkedin.com/in/sujith-reddy-bommareddy-8b75572b8" 
                   target="_blank" rel="noopener noreferrer"
                   className="flex items-center gap-4 p-6 rounded-2xl transition-all"
                   style={{ backgroundColor: 'rgba(34, 211, 238, 0.05)', border: '1px solid rgba(34, 211, 238, 0.1)' }}
                   onMouseEnter={(e) => {
                     e.currentTarget.style.backgroundColor = 'rgba(34, 211, 238, 0.1)';
                     e.currentTarget.style.borderColor = 'rgba(34, 211, 238, 0.3)';
                   }}
                   onMouseLeave={(e) => {
                     e.currentTarget.style.backgroundColor = 'rgba(34, 211, 238, 0.05)';
                     e.currentTarget.style.borderColor = 'rgba(34, 211, 238, 0.1)';
                   }}>
                  <div className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(34, 211, 238, 0.2)' }}>
                    <Linkedin size={24} style={{ color: '#22D3EE' }} />
                  </div>
                  <div>
                    <div className="text-sm" style={{ color: '#94A3B8' }}>LinkedIn</div>
                    <div className="font-medium" style={{ color: '#E5E7EB' }}>Connect</div>
                  </div>
                </a>
                <a href="https://github.com/sujith0303" 
                   target="_blank" rel="noopener noreferrer"
                   className="flex items-center gap-4 p-6 rounded-2xl transition-all"
                   style={{ backgroundColor: 'rgba(34, 211, 238, 0.05)', border: '1px solid rgba(34, 211, 238, 0.1)' }}
                   onMouseEnter={(e) => {
                     e.currentTarget.style.backgroundColor = 'rgba(34, 211, 238, 0.1)';
                     e.currentTarget.style.borderColor = 'rgba(34, 211, 238, 0.3)';
                   }}
                   onMouseLeave={(e) => {
                     e.currentTarget.style.backgroundColor = 'rgba(34, 211, 238, 0.05)';
                     e.currentTarget.style.borderColor = 'rgba(34, 211, 238, 0.1)';
                   }}>
                  <div className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(34, 211, 238, 0.2)' }}>
                    <Github size={24} style={{ color: '#22D3EE' }} />
                  </div>
                  <div>
                    <div className="text-sm" style={{ color: '#94A3B8' }}>GitHub</div>
                    <div className="font-medium" style={{ color: '#E5E7EB' }}>View projects</div>
                  </div>
                </a>
              </div>
            </div>
            <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-10" style={{ backgroundColor: '#22D3EE' }}></div>
          </div>
        </div>

        {/* Footer */}
        <footer className="py-8 text-center" style={{ color: '#94A3B8', borderTop: '1px solid #0F172A' }}>
          <p>© 2026 Sujith Reddy Bommareddy.</p>
        </footer>
      </div>
    </>
  );
}
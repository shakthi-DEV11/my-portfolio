"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Download, Terminal, User, BookOpen, Briefcase, Award, Heart } from "lucide-react";
import FloatingSocials from "@/components/FloatingSocials";

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white p-6 sm:p-12 font-sans selection:bg-primary selection:text-black">
      <FloatingSocials />
      <div className="max-w-5xl mx-auto">
        <nav className="mb-12 flex justify-between items-center">
          <Link href="/" className="group flex items-center gap-2 text-gray-400 hover:text-primary transition-colors">
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-mono">cd ..</span>
          </Link>
          
          <a href="/resume/Shakthi_Nagarajan_Resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary border border-primary/30 hover:bg-primary hover:text-black transition-all rounded-sm font-mono text-sm">
            <Download className="w-4 h-4" />
            export_pdf
          </a>
        </nav>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <header className="mb-16 border-b border-glass-border pb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 mb-4">
                SHAKTHI NAGARAJAN
              </h1>
              <h2 className="text-xl md:text-2xl text-primary font-mono flex items-center gap-2">
                <Terminal className="w-5 h-5" /> WEB DEVELOPER
              </h2>
            </div>
            
            <div className="text-gray-400 font-mono text-sm space-y-1 text-left md:text-right flex flex-col items-start md:items-end">
              <a href="mailto:shakthi11.dev@gmail.com" className="hover:text-primary transition-colors">shakthi11.dev@gmail.com</a>
              <p>Tirupattur, Tamil Nadu, India</p>
            </div>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-12">
              
              <section>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-white border-b border-glass-border pb-2">
                  <User className="w-6 h-6 text-primary" /> About
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Motivated B.Tech Information Technology student seeking a Web Developer internship or entry-level Software Developer role.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Proficient in HTML, CSS, JavaScript, and Core Java with hands-on experience developing responsive and user-friendly web applications.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Passionate about Front-End Development, UI/UX Design, and creating intuitive digital experiences while continuously improving technical and problem-solving skills.
                </p>
                <div className="mt-6 p-4 glass-panel border-l-2 border-l-primary rounded-r-md">
                  <p className="font-mono text-xs text-gray-400">
                    <span className="text-green-500">➜</span> <span className="text-blue-400">~</span> cat status.txt<br/>
                    "Always learning. Always building. Always improving."
                  </p>
                </div>
              </section>

              <section>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-white border-b border-glass-border pb-2">
                  <Briefcase className="w-6 h-6 text-primary" /> Internship
                </h3>
                <div className="space-y-8">
                  <div className="relative pl-6 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-[2px] before:bg-glass-border after:absolute after:left-[-4px] after:top-2 after:w-[10px] after:h-[10px] after:bg-primary after:rounded-full">
                    <h4 className="text-xl font-bold text-white">Web Development Intern</h4>
                    <div className="text-primary font-mono text-sm mb-3">Crescent Infotech, Erode | 12 July 2025 – 27 July 2025</div>
                    <ul className="list-none space-y-2 text-gray-300 text-sm">
                      <li className="flex gap-2 items-start"><span className="text-secondary mt-1">▹</span> Completed hands-on training in web development.</li>
                      <li className="flex gap-2 items-start"><span className="text-secondary mt-1">▹</span> Developed responsive web pages using HTML, CSS and JavaScript.</li>
                      <li className="flex gap-2 items-start"><span className="text-secondary mt-1">▹</span> Applied front-end development concepts to build user-friendly interfaces.</li>
                      <li className="flex gap-2 items-start"><span className="text-secondary mt-1">▹</span> Gained practical experience in website layout creation and debugging.</li>
                      <li className="flex gap-2 items-start"><span className="text-secondary mt-1">▹</span> Improved teamwork, communication and problem-solving skills.</li>
                      <li className="flex gap-2 items-start"><span className="text-secondary mt-1">▹</span> Demonstrated enthusiasm, sincerity, leadership and self-discipline.</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-white border-b border-glass-border pb-2">
                  <BookOpen className="w-6 h-6 text-primary" /> Projects
                </h3>
                <div className="grid gap-6">
                  <div className="glass-panel p-6 rounded-lg">
                    <h4 className="text-xl font-bold text-white">Personal Portfolio Website</h4>
                    <p className="text-gray-400 text-sm mt-2 mb-4">
                      Designed and developed a responsive personal portfolio website using HTML, CSS and JavaScript.
                    </p>
                    <div className="mb-4">
                      <h5 className="text-xs text-secondary font-mono uppercase mb-2">Features</h5>
                      <ul className="text-sm text-gray-300 list-disc list-inside">
                        <li>Responsive Design</li>
                        <li>Modern UI</li>
                        <li>Mobile Friendly</li>
                        <li>Performance Optimized</li>
                      </ul>
                    </div>
                    <div className="flex gap-2 flex-wrap mb-4">
                      {["HTML5", "CSS3", "JavaScript"].map(t => (
                        <span key={t} className="text-xs font-mono bg-white/5 border border-white/10 px-2 py-1 rounded-sm text-gray-300">{t}</span>
                      ))}
                    </div>
                    <div className="flex gap-4 pt-4 border-t border-glass-border">
                      <a href="https://github.com/shakthi-DEV11" target="_blank" rel="noopener noreferrer" className="text-sm text-white hover:text-primary transition-colors flex items-center gap-1">
                        &lt;/&gt; Code
                      </a>
                      <a href="#" className="text-sm text-white hover:text-primary transition-colors flex items-center gap-1">
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-white border-b border-glass-border pb-2">
                  <Award className="w-6 h-6 text-primary" /> Certificates
                </h3>
                <div className="glass-panel p-5 rounded-lg border-l-2 border-l-primary">
                  <h4 className="font-bold text-white">Web Development Internship</h4>
                  <p className="text-gray-400 text-sm mt-1">Crescent Infotech, Rasipuram, Namakkal</p>
                  <p className="text-secondary font-mono text-xs mt-2">12 July 2025 – 27 July 2025</p>
                </div>
              </section>

            </div>

            {/* Right Column */}
            <div className="space-y-12">
              
              <section>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-white border-b border-glass-border pb-2">
                  <Award className="w-6 h-6 text-primary" /> Education
                </h3>
                <div className="space-y-6">
                  <div className="glass-panel p-5 rounded-lg border-l-2 border-l-secondary">
                    <h4 className="font-bold text-white">B.Tech Information Technology</h4>
                    <p className="text-gray-400 text-sm mt-1">Gnanamani College of Technology</p>
                    <p className="text-secondary font-mono text-xs mt-2">2023 - 2027 | CGPA: 6.5</p>
                  </div>
                  
                  <div className="glass-panel p-5 rounded-lg border-l-2 border-l-secondary/50">
                    <h4 className="font-bold text-white">Higher Secondary (HSC)</h4>
                    <p className="text-gray-400 text-sm mt-1">Hindu Higher Secondary School</p>
                    <p className="text-secondary font-mono text-xs mt-2">2022 - 2023 | Percentage: 55.3%</p>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-white border-b border-glass-border pb-2">
                  <Terminal className="w-6 h-6 text-primary" /> Skills
                </h3>
                <div className="space-y-6">
                  <div>
                    <h5 className="text-sm text-gray-400 mb-2 font-mono uppercase">Programming</h5>
                    <div className="flex flex-wrap gap-2">
                      {["Core Java (Primary)", "JavaScript", "HTML5", "CSS3"].map(s => (
                        <span key={s} className="bg-white/5 border border-white/10 px-3 py-1 rounded-sm text-sm">{s}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h5 className="text-sm text-gray-400 mb-2 font-mono uppercase">Frontend</h5>
                    <div className="flex flex-wrap gap-2">
                      {["HTML5", "CSS3", "JavaScript", "Responsive Web Design"].map(s => (
                        <span key={s} className="bg-white/5 border border-white/10 px-3 py-1 rounded-sm text-sm">{s}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h5 className="text-sm text-gray-400 mb-2 font-mono uppercase">Tools & Platforms</h5>
                    <div className="flex flex-wrap gap-2">
                      {["Git", "GitHub", "Visual Studio Code", "Postman (Basic)"].map(s => (
                        <span key={s} className="bg-white/5 border border-white/10 px-3 py-1 rounded-sm text-sm">{s}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h5 className="text-sm text-gray-400 mb-2 font-mono uppercase">Web Technologies</h5>
                    <div className="flex flex-wrap gap-2">
                      {["DOM Manipulation", "REST API (Basic)", "Responsive Design"].map(s => (
                        <span key={s} className="bg-white/5 border border-white/10 px-3 py-1 rounded-sm text-sm">{s}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h5 className="text-sm text-gray-400 mb-2 font-mono uppercase">CS Fundamentals</h5>
                    <div className="flex flex-wrap gap-2">
                      {["Object-Oriented Programming", "Data Structures & Algorithms (Basic)", "DBMS (Basic)"].map(s => (
                        <span key={s} className="bg-white/5 border border-white/10 px-3 py-1 rounded-sm text-sm">{s}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-white border-b border-glass-border pb-2">
                  <Heart className="w-6 h-6 text-primary" /> Interests
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["Front-End Development", "Web Development", "UI/UX Design", "Software Development"].map(s => (
                    <span key={s} className="bg-primary/10 text-primary border border-primary/20 px-3 py-1 rounded-sm text-sm">{s}</span>
                  ))}
                </div>
              </section>

            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

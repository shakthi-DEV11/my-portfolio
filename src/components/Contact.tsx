"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

type CommandHistory = {
  command: string;
  output: React.ReactNode;
};

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<CommandHistory[]>([]);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const commands: Record<string, React.ReactNode> = {
    help: (
      <div className="text-gray-300">
        <p>Available commands:</p>
        <ul className="list-disc list-inside mt-2 text-sm text-gray-400">
          <li><span className="text-primary">about</span> - Who am I?</li>
          <li><span className="text-primary">projects</span> - View my work</li>
          <li><span className="text-primary">resume</span> - Download my resume</li>
          <li><span className="text-primary">github</span> - Visit my GitHub profile</li>
          <li><span className="text-primary">linkedin</span> - Visit my LinkedIn profile</li>
          <li><span className="text-primary">contact</span> - Get in touch with me</li>
          <li><span className="text-primary">clear</span> - Clear the terminal</li>
        </ul>
      </div>
    ),
    about: "Frontend Developer & AI Automation Enthusiast based in Earth. Building digital experiences that matter.",
    projects: "Scroll up to see the Featured Projects section, or visit my GitHub for more.",
    resume: <a href="#" className="text-secondary hover:underline">Click here to download resume.pdf</a>,
    github: <a href="https://github.com" target="_blank" rel="noreferrer" className="text-secondary hover:underline">https://github.com/shakthi</a>,
    linkedin: <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-secondary hover:underline">https://linkedin.com/in/shakthi</a>,
    contact: (
      <div>
        <p>Email: <a href="mailto:hello@shakthi.dev" className="text-primary hover:underline">hello@shakthi.dev</a></p>
        <p className="mt-2 text-sm text-gray-400">Feel free to reach out for collaborations or just a friendly hello!</p>
      </div>
    ),
  };

  const handleCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const cmd = input.trim().toLowerCase();
      
      if (cmd === "clear") {
        setHistory([]);
      } else if (cmd === "") {
        setHistory([...history, { command: cmd, output: "" }]);
      } else if (commands[cmd]) {
        setHistory([...history, { command: cmd, output: commands[cmd] }]);
      } else {
        setHistory([
          ...history,
          { command: cmd, output: <span className="text-red-400">Command not found: {cmd}. Type 'help' for a list of commands.</span> }
        ]);
      }
      
      setInput("");
    }
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-4xl mx-auto" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl sm:text-5xl font-bold mb-12 text-center">
          Let&apos;s <span className="text-primary">Connect</span>
        </h2>

        <div className="space-y-6 flex-grow mb-12">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-white/5 border border-white/10 rounded-lg">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h4 className="text-sm font-mono text-gray-500 uppercase tracking-wider mb-1">Email</h4>
              <a href="mailto:shakthi11.dev@gmail.com" className="text-white hover:text-primary transition-colors text-lg">shakthi11.dev@gmail.com</a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 bg-white/5 border border-white/10 rounded-lg">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h4 className="text-sm font-mono text-gray-500 uppercase tracking-wider mb-1">Phone</h4>
              <a href="tel:+916374186403" className="text-white hover:text-primary transition-colors text-lg">+91 6374186403</a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 bg-white/5 border border-white/10 rounded-lg">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h4 className="text-sm font-mono text-gray-500 uppercase tracking-wider mb-1">Location</h4>
              <p className="text-white text-lg">Tirupattur - PIN 635601</p>
            </div>
          </div>
        </div>

        <div 
          className="glass-panel rounded-xl overflow-hidden shadow-[0_0_30px_rgba(0,245,255,0.05)] cursor-text"
          onClick={() => inputRef.current?.focus()}
        >
          {/* Terminal Header */}
          <div className="bg-white/5 border-b border-glass-border px-4 py-3 flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-red-500" />
            <div className="h-3 w-3 rounded-full bg-yellow-500" />
            <div className="h-3 w-3 rounded-full bg-green-500" />
            <div className="mx-auto text-xs font-mono text-gray-400">bash - contact</div>
          </div>

          {/* Terminal Body */}
          <div className="p-6 font-mono text-sm sm:text-base h-[400px] overflow-y-auto">
            <div className="text-gray-400 mb-6">
              Welcome to the contact terminal. Type <span className="text-primary">'help'</span> to see available commands.
            </div>

            {history.map((entry, i) => (
              <div key={i} className="mb-4">
                <div className="flex text-primary">
                  <span className="mr-2 text-green-500">➜</span>
                  <span className="mr-2 text-blue-400">~</span>
                  <span>{entry.command}</span>
                </div>
                {entry.output && <div className="mt-1 ml-6 text-gray-300">{entry.output}</div>}
              </div>
            ))}

            <div className="flex items-center text-primary mt-4">
              <span className="mr-2 text-green-500">➜</span>
              <span className="mr-2 text-blue-400">~</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleCommand}
                className="bg-transparent outline-none border-none flex-1 text-white"
                spellCheck={false}
                autoComplete="off"
              />
            </div>
            <div ref={bottomRef} />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

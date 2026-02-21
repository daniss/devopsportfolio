'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileDown, ChevronDown, Terminal as TerminalIcon } from 'lucide-react';

export const Hero = () => {
  const [text, setText] = useState('');
  const fullText = '$ whoami';
  
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(timer);
    }, 150);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background glowing effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-[20%] -translate-y-[80%] w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 flex flex-col items-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-2xl mb-12 group"
        >
          <div className="bg-[#0c0c0c]/80 backdrop-blur-xl rounded-xl shadow-2xl border border-white/10 overflow-hidden transition-all duration-300 hover:border-emerald-500/30">
            <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/5">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500/80 rounded-full shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
                <div className="w-3 h-3 bg-yellow-500/80 rounded-full shadow-[0_0_10px_rgba(234,179,8,0.5)]"></div>
                <div className="w-3 h-3 bg-green-500/80 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
              </div>
              <div className="flex items-center gap-2 text-slate-400 text-xs font-mono">
                <TerminalIcon size={14} />
                <span>danis@devops:~</span>
              </div>
              <div className="w-16"></div> {/* Spacer for centering */}
            </div>
            <div className="p-6 sm:p-8 font-mono text-sm sm:text-base text-left">
              <div className="text-emerald-400 mb-4 font-semibold">{text}<span className="inline-block w-2 bg-emerald-400 ml-1 animate-pulse">_</span></div>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: text.length >= fullText.length ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-slate-300 leading-relaxed grid grid-cols-[100px_1fr] gap-2"
              >
                <span className="text-slate-500">Name:</span> 
                <span className="text-white font-medium">Danis Cindrak</span>
                
                <span className="text-slate-500">Role:</span> 
                <span className="text-cyan-400">DevOps Engineer</span>
                
                <span className="text-slate-500">Education:</span> 
                <span>42 Student</span>
                
                <span className="text-slate-500">Experience:</span> 
                <span>LVMH Internship</span>
                
                <span className="text-slate-500 mt-2">Status:</span> 
                <span className="mt-2 text-emerald-400 flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  Available for opportunities
                </span>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6, delay: 0.2 }}
           className="text-center"
        >
          <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400 mb-6 tracking-tight">
            Danis Cindrak
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 mb-10 font-light max-w-3xl mx-auto leading-relaxed">
            Architecting scalable systems with <span className="text-cyan-400 font-medium font-mono">Kubernetes</span>, building robust 
            <span className="text-emerald-400 font-medium font-mono"> Cloud Infrastructure</span>, and automating everything.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <a 
              href="/cv_en.pdf" 
              className="group relative flex items-center gap-2 bg-white text-slate-900 font-medium py-3 px-8 rounded-full transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]"
            >
              <FileDown size={18} />
              <span>Resume (EN)</span>
            </a>
            
            <a 
              href="/cv_fr.pdf" 
              className="group flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 font-medium py-3 px-8 rounded-full transition-all hover:scale-105 active:scale-95 backdrop-blur-sm"
            >
              <FileDown size={18} />
              <span>CV (FR)</span>
            </a>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="animate-bounce">
            <ChevronDown className="w-6 h-6 text-slate-500" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

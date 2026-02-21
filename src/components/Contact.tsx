'use client';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';

const contactMethods = [
  {
    icon: <Mail className="w-8 h-8" />,
    label: "Email",
    value: "daniscin@gmail.com",
    link: "mailto:daniscin@gmail.com"
  },
  {
    icon: <Linkedin className="w-8 h-8" />,
    label: "LinkedIn",
    value: "linkedin.com/in/danis-cindrak",
    link: "https://linkedin.com/in/danis-cindrak"
  },
  {
    icon: <Github className="w-8 h-8" />,
    label: "GitHub",
    value: "github.com/daniss",
    link: "https://github.com/daniss"
  }
];

export const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 md:px-8 relative border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Connect
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Open to new opportunities and collaborations. Let&apos;s build something great.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.label}
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group block"
            >
              <div className="bg-[#0c0c0c]/80 backdrop-blur-md rounded-2xl p-8 border border-white/5 hover:border-emerald-500/30 transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden h-full">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 text-center flex flex-col items-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 text-slate-300 border border-white/10 mb-6 group-hover:bg-emerald-500/10 group-hover:text-emerald-400 group-hover:scale-110 group-hover:border-emerald-500/30 transition-all duration-500">
                    {method.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-200 mb-2 group-hover:text-white transition-colors">
                    {method.label}
                  </h3>
                  <p className="text-slate-400 text-sm font-medium group-hover:text-emerald-400 transition-colors">
                    {method.value}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center pb-8 border-t border-white/5 pt-12 mt-12"
        >
          <p className="text-slate-500 flex items-center justify-center gap-2 text-sm font-mono">
            <span>$</span> echo &quot;Build with ❤️ by Danis Cindrak&quot;
          </p>
        </motion.div>
      </div>
    </section>
  );
};

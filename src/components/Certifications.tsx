'use client';
import { motion } from 'framer-motion';
import { Award, Cloud, ShieldCheck, ExternalLink } from 'lucide-react';

const certifications = [
  {
    name: "Certified Kubernetes Administrator (CKA)",
    issuer: "Cloud Native Computing Foundation",
    date: "2025",
    icon: <Award className="w-10 h-10 text-cyan-400" />,
    description: "Advanced Kubernetes administration, networking, and troubleshooting.",
    credentialUrl: "https://www.credly.com/badges/c2b733d9-4ca7-4fc7-9ce4-880a226473c1/public_url"
  },
  {
    name: "Microsoft Azure Fundamentals",
    issuer: "Microsoft",
    date: "2023",
    icon: <Cloud className="w-10 h-10 text-blue-400" />,
    description: "Core cloud services, security, compliance, and Azure platform fundamentals.",
    credentialUrl: ""
  }
];

export const Certifications = () => {
  return (
    <section id="certifications" className="py-24 px-6 md:px-8 relative border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Certifications
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Industry-recognized credentials validating expertise in cloud native and DevOps technologies.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group bg-[#0c0c0c]/80 backdrop-blur-md rounded-2xl border border-white/5 hover:border-cyan-500/30 transition-all duration-300 w-full max-w-sm"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

              <div className="relative z-10 p-8 flex flex-col h-full">
                {/* Verified Badge */}
                <div className="absolute top-6 right-6 flex items-center gap-1.5 bg-emerald-500/10 text-emerald-400 text-xs font-semibold px-2.5 py-1 rounded-full border border-emerald-500/20">
                  <ShieldCheck size={14} />
                  Verified
                </div>

                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-500 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/30">
                    {cert.icon}
                  </div>
                </div>

                <div className="mb-8 flex-grow">
                  <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-cyan-400 transition-colors leading-tight">
                    {cert.name}
                  </h3>
                  <div className="flex items-center gap-3 mb-4 text-sm font-medium">
                    <span className="text-slate-300">{cert.issuer}</span>
                    <span className="w-1 h-1 rounded-full bg-slate-600"></span>
                    <span className="text-slate-500 font-mono">{cert.date}</span>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                {cert.credentialUrl ? (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-white/5 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-400 font-medium py-3 px-4 rounded-xl border border-white/10 hover:border-cyan-500/50 transition-all duration-300 group/btn"
                  >
                    Verify Credential
                    <ExternalLink size={16} className="transition-transform group-hover/btn:translate-x-1" />
                  </a>
                ) : (
                  <div className="w-full flex items-center justify-center gap-2 bg-white/5 text-slate-500 font-medium py-3 px-4 rounded-xl border border-white/10 opacity-50 cursor-not-allowed">
                    Credential Offline
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10">
            <span className="text-slate-400">Currently pursuing:</span>
            <span className="text-cyan-400 font-semibold font-mono">Azure Administrator Associate</span>
            <span className="text-slate-600 px-2">•</span>
            <span className="text-emerald-400 font-semibold font-mono">CKS</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

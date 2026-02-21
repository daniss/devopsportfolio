'use client';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Activity } from 'lucide-react';

const projects = [
  {
    name: "Azure Infrastructure as Code Automation (ft_iac)",
    description: "Designed and deployed a highly available web stack on Azure using Terraform. Automated multi-zone VM provisioning, load balancing with sticky sessions, autoscaling, secure secrets (Key Vault), and real-time alerts. Included modular IaC, region/size presets, and HA/scalability test scripts.",
    tech: ["Azure", "Terraform", "IaC", "Key Vault", "Azure Monitor", "Linux"],
    link: "https://github.com/daniss/ft_iac-azure-terraform",
    status: "Live"
  },
  {
    name: "Kubernetes GitOps Lab (Inception-of-Things)",
    description: "Built a Kubernetes lab with K3s/K3d: automated cluster setup via Vagrant, Ingress host routing for replicated apps, and GitOps deployment with Argo CD. Enabled auto-sync of app versions (v1→v2) from GitHub to cluster. Fully scripted, reproducible, and validated with live upgrades.",
    tech: ["Kubernetes", "K3s", "Argo CD", "Vagrant", "Docker", "GitOps"],
    link: "https://github.com/daniss/inception-of-things-k3s-k3d-argocd",
    status: "Live"
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 md:px-8 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              Featured Architecture
            </h2>
            <div className="h-[1px] flex-grow bg-gradient-to-r from-emerald-500/50 to-transparent"></div>
          </div>
          <p className="text-lg text-slate-400 max-w-2xl">
            Infrastructure automation, CI/CD pipelines, and cloud-native solutions designed for scale and resilience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative flex flex-col bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-white/5 hover:border-emerald-500/30 hover:bg-slate-800/50 transition-all duration-300 overflow-hidden"
            >
              {/* Subtle gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6 gap-4">
                  <h3 className="text-2xl font-bold text-slate-100 group-hover:text-emerald-400 transition-colors leading-tight">
                    {project.name}
                  </h3>
                  <div className="flex items-center gap-1.5 px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-semibold rounded-full border border-emerald-500/20 whitespace-nowrap">
                    <Activity size={12} className="animate-pulse" />
                    {project.status}
                  </div>
                </div>

                <p className="text-slate-400 mb-8 leading-relaxed flex-grow text-sm md:text-base">
                  {project.description}
                </p>

                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white/5 text-slate-300 text-xs font-mono rounded-md border border-white/10 group-hover:border-white/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-slate-300 hover:text-emerald-400 font-medium transition-colors group-hover:gap-3"
                  >
                    <Github size={20} />
                    <span>View Repository</span>
                    <ExternalLink size={16} className="opacity-50 group-hover:opacity-100 transition-opacity" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

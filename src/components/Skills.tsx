'use client';
import { motion } from 'framer-motion';
import { Cloud, Network, Blocks, GitMerge, Activity, Shield, Box, Code2 } from 'lucide-react';

const techStack = [
  {
    category: "Cloud Platforms",
    icon: <Cloud className="w-6 h-6" />,
    techs: ["Azure"]
  },
  {
    category: "Container Orchestration",
    icon: <Network className="w-6 h-6" />,
    techs: ["Kubernetes", "Helm", "Argo CD", "K3s/K3d"]
  },
  {
    category: "Infrastructure as Code",
    icon: <Blocks className="w-6 h-6" />,
    techs: ["Terraform", "Ansible"]
  },
  {
    category: "CI/CD & Automation",
    icon: <GitMerge className="w-6 h-6" />,
    techs: ["GitHub Actions", "Azure DevOps", "Playwright"]
  },
  {
    category: "Monitoring & Observability",
    icon: <Activity className="w-6 h-6" />,
    techs: ["OpenTelemetry", "Prometheus", "Grafana"]
  },
  {
    category: "Security & Compliance",
    icon: <Shield className="w-6 h-6" />,
    techs: ["HashiCorp Vault", "Key Vault", "RBAC"]
  },
  {
    category: "Containers",
    icon: <Box className="w-6 h-6" />,
    techs: ["Docker", "Docker Compose"]
  },
  {
    category: "Programming",
    icon: <Code2 className="w-6 h-6" />,
    techs: ["Python", "JavaScript", "Go", "Bash"]
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 md:px-8 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Technical Stack
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Building highly available infrastructure with modern DevOps tooling.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {techStack.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative rounded-2xl p-6 bg-white/5 border border-white/10 hover:border-emerald-500/30 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-slate-800 text-emerald-400 border border-white/5 group-hover:bg-emerald-500/10 group-hover:text-emerald-300 transition-colors">
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-200 group-hover:text-white transition-colors">
                  {category.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.techs.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-xs font-medium rounded-lg bg-[#0a0a0a] text-slate-300 border border-white/5 group-hover:border-emerald-500/20 transition-colors font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

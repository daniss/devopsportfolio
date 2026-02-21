'use client';
import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';

const timeline = [
  {
    year: "2025",
    title: "DevOps Engineer Intern",
    company: "LVMH",
    description: "Spearheaded GitOps & Compliance-as-Code. Automated infrastructure governance and built automated testing pipelines (Playwright) to block non-compliant deployments across 10+ luxury brands."
  },
  {
    year: "2024",
    title: "DevOps Engineer Intern",
    company: "Krafter",
    description: "Architected production Kubernetes clusters for a critical ERP. Refactored CI/CD pipelines, reducing build times by 45%, and implemented ephemeral preview environments."
  },
  {
    year: "2023",
    title: "42 School Student",
    company: "École 42",
    description: "Intensive software engineering program focusing on systems programming, algorithms, and collaborative learning."
  }
];

export const About = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-8 relative border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-3 mb-6 rounded-2xl bg-white/5 border border-white/10">
            <Terminal className="text-emerald-400 w-8 h-8" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            About Me
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Passionate about building scalable, reliable infrastructure and automating everything.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-[#0c0c0c]/50 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-white/10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-[80px] -mr-32 -mt-32 transition-opacity group-hover:opacity-100 opacity-50"></div>

              <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-3">
                <span className="text-emerald-400 font-mono text-xl">{'>'}</span> System Architect
              </h3>

              <div className="space-y-6 text-slate-400 leading-relaxed text-lg">
                <p>
                  I&apos;m a <span className="text-cyan-400 font-medium font-mono">23-year-old DevOps Engineer</span> with a passion for
                  cloud-native technologies and infrastructure automation. Currently studying at
                  <span className="text-cyan-400 font-medium"> École 42</span>, where I&apos;ve built a strong foundation in
                  systems programming and deep technical problem solving.
                </p>

                <p>
                  During my time at <span className="text-emerald-400 font-medium">LVMH</span>, I focused on
                  enterprise-scale infrastructure, orchestrating automated deployment pipelines
                  and managing resilient cloud resources for high-traffic global platforms.
                </p>

                <p>
                  My core philosophy centers on <span className="text-white font-medium">Infrastructure as Code</span>,
                  GitOps practices, and designing systems that scale gracefully. My objective is to architect robust,
                  secure, and hyper-efficient infrastructure that empowers engineering teams to ship faster.
                </p>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                <span className="px-4 py-1.5 bg-emerald-500/10 text-emerald-400 text-sm font-medium rounded-full border border-emerald-500/20">Available for hire</span>
                <span className="px-4 py-1.5 bg-cyan-500/10 text-cyan-400 text-sm font-medium rounded-full border border-cyan-500/20">Remote flexible</span>
                <span className="px-4 py-1.5 bg-white/5 text-slate-300 text-sm font-medium rounded-full border border-white/10">Open source</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-white mb-10 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-slate-600"></span>
              Career Timeline
            </h3>

            <div className="space-y-10 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-emerald-500/50 before:via-cyan-500/20 before:to-transparent">

              {timeline.map((item) => (
                <div key={item.year} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  {/* Timeline Dot */}
                  <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-[#020617] bg-emerald-500 text-white shadow shadow-emerald-500/20 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-transform group-hover:scale-110 duration-300">
                    <span className="font-mono text-sm font-bold">{item.year.slice(-2)}</span>
                  </div>

                  {/* Card */}
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 group-hover:border-emerald-500/30 transition-colors">
                    <div className="flex flex-col mb-3">
                      <span className="text-emerald-400 font-mono text-sm font-semibold mb-1">{item.year}</span>
                      <h4 className="text-xl font-bold text-slate-100 leading-tight">{item.title}</h4>
                    </div>
                    <p className="text-cyan-400 font-medium text-sm mb-4 leading-none">{item.company}</p>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

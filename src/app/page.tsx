import { Hero, Projects, Skills, Certifications, About, Contact, Navbar } from "@/components";

export default function Home() {
  return (
    <div className="font-sans bg-[#020617] text-slate-200 selection:bg-emerald-500/30">
      <Navbar />
      <main className="min-h-screen relative overflow-hidden">
        {/* Subtle grid background pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

        <div className="relative z-10">
          <Hero />
          <Projects />
          <Certifications />
          <Skills />
          <About />
          <Contact />
        </div>
      </main>
    </div>
  );
}


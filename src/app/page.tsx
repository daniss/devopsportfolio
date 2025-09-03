import { Hero, Projects, Skills, Certifications, About, Contact } from "@/components";

export default function Home() {
  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      <main className="min-h-screen">
        <Hero />
        <Projects />
        <Skills />
        <Certifications />
        <About />
        <Contact />
      </main>
    </div>
  );
}


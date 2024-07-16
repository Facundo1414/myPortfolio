import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { SparklesCore } from "@/components/ui/SparklesCore";
import info  from "../utils/info"; // Asegúrate de tener la ruta correcta para tu archivo info.js
import Proyectos2 from "@/components/ui/Proyectos2";


export default function Home() {
  const {navItems} = info

  return (
    <div className="bg-black relative min-h-screen overflow-hidden">
      <main className="relative z-10 flex flex-col items-center justify-between gap-14 min-h-screen">
        <Hero />
        <FloatingNav navItems={navItems} />
        <div className="flex flex-col items-center justify-between gap-14">
          <AboutMe />
          <Skills />
          <Proyectos2/>
          <Projects />
          <Contact />
        </div>
        <Footer />
      </main>
      <SparklesCore className="absolute inset-0 z-0" background="transparent" particleSize={0.2} particleDensity={10}/>
    </div>
  );
}

import React from 'react';
import AboutMe from '@/components/AboutMe';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import ProyectosGrandes from '@/components/ProyectosGrandes';
import Skills from '@/components/Skills';
import { FloatingNav } from '@/components/ui/FloatingNavbar';
import { SparklesCore } from '@/components/ui/SparklesCore';
import info from '../utils/info';
import BackToTopButton from '../components/extra/BackToTopButton'; 

const Home = () => {
  const { navItems } = info;

  return (
    <div className="dark-mode relative min-h-screen overflow-hidden">
      <main className="relative z-10 flex flex-col items-center justify-between gap-14 min-h-screen">
        <Hero />
        <div className="hidden md:flex">
          <FloatingNav navItems={navItems} />
        </div>
        <div className="flex flex-col items-center justify-between gap-14">
          <AboutMe />
          <Skills />
          <ProyectosGrandes />
          <Projects />
          <Contact />
        </div>
        <Footer />
        <BackToTopButton /> 
      </main>
      <SparklesCore className="absolute inset-0 z-0" background="transparent" particleSize={0.2} particleDensity={10} />
    </div>
  );
};

export default Home;

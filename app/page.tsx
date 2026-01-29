import React from 'react';
import AboutMe from '@/components/AboutMe';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ProyectosGrandes from '@/components/ProyectosGrandes';
import Skills from '@/components/Skills';
import Statistics from '@/components/Statistics';
import { FloatingNav } from '@/components/ui/FloatingNavbar';
import { MobileNav } from '@/components/ui/MobileNav';
import { SparklesCore } from '@/components/ui/SparklesCore';
import ClientLayout from '@/components/ClientLayout';
import info from '../utils/info';

export default function Home() {
  const { navItems } = info;

  return (
    <div className="dark-mode relative min-h-screen overflow-hidden">
      <main id="main-content" className="relative z-10 flex flex-col items-center justify-between min-h-screen">
        <ClientLayout>
          <Hero />
          <div className="hidden md:flex">
            <FloatingNav navItems={navItems} />
          </div>
          <div className="md:hidden">
            <MobileNav navItems={navItems} />
          </div>
          <div className="flex flex-col items-center justify-between gap-20 w-full py-16">
            <Statistics />
            <AboutMe />
            <Skills />
            <ProyectosGrandes />
            <Contact />
          </div>
          <Footer />
        </ClientLayout>
      </main>
      <SparklesCore className="absolute inset-0 z-0" background="transparent" particleSize={0.2} particleDensity={10} />
    </div>
  );
}

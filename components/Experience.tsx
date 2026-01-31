"use client";

import React from 'react';
import Timeline from './ui/Timeline';
import { AnimatedSection } from './ui/AnimatedSection';

const timelineItems = [
  {
    date: "2024 - Presente",
    title: "Full Stack Developer Freelance",
    description: "Desarrollo de sistemas empresariales en producción para múltiples clientes. Especializado en TypeScript, Next.js y arquitecturas de microservicios.",
    location: "Córdoba, Argentina",
    type: "work" as const,
  },
  {
    date: "2022 - 2024",
    title: "Full Stack Tech Developer",
    description: "Formación intensiva en desarrollo web full stack con proyectos prácticos. Tecnologías: React, Node.js, bases de datos SQL y NoSQL.",
    location: "Digital House",
    type: "education" as const,
  },
  {
    date: "2021 - 2024",
    title: "Certificación Inglés B2-C1",
    description: "Curso avanzado de inglés con enfoque en comunicación técnica y profesional.",
    location: "Universidad Nacional de Córdoba",
    type: "education" as const,
  },
  {
    date: "2020 - 2022",
    title: "Ingeniería en Sistemas de Información",
    description: "Fundamentos de programación, algoritmos, estructuras de datos y metodologías de desarrollo de software.",
    location: "UTN",
    type: "education" as const,
  },
];

const Experience = () => {
  return (
    <AnimatedSection className="w-full">
      <div id="experience-section" className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block mb-3 px-4 py-1.5 rounded-full text-xs font-medium bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 text-indigo-300">
            🚀 Mi Trayectoria
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Experiencia & Educación
          </h2>
          <p className="text-neutral-400 max-w-lg mx-auto">
            Mi camino en el desarrollo de software y formación continua
          </p>
        </div>

        <Timeline items={timelineItems} />
      </div>
    </AnimatedSection>
  );
};

export default Experience;

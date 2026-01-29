"use client";

import React, { useState } from 'react';
import info from '../utils/info';
import CardProyectComponent from './extra/CardProyectComponent';
import { AnimatedSection } from './ui/AnimatedSection';

type ProjectCategory = 'destacados' | 'empresariales' | 'academicos' | 'todos';

export const ThreeDCardDemoP: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('destacados');

  const allProjects = {
    destacados: [
      info.proyectos.aqua,
      info.proyectos.cbavapes,
      info.proyectos.canchasReserva,
      info.proyectos.meetingApp,
    ],
    empresariales: [
      info.proyectos.aqua,
      info.proyectos.cbavapes,
    ],
    academicos: [
      info.proyectos.rentstudio,
      info.proyectos.ncwinds,
      info.proyectos.clinicaOdontologica,
      info.proyectos.springEcommerce,
    ],
    todos: [
      info.proyectos.aqua,
      info.proyectos.cbavapes,
      info.proyectos.canchasReserva,
      info.proyectos.meetingApp,
      info.proyectos.rentstudio,
      info.proyectos.ncwinds,
      info.proyectos.clinicaOdontologica,
      info.proyectos.springEcommerce,
    ],
  };

  const projects = allProjects[activeFilter];

  const filterButtons: { key: ProjectCategory; label: string }[] = [
    { key: 'destacados', label: '⭐ Destacados' },
    { key: 'empresariales', label: '🏢 Empresariales' },
    { key: 'academicos', label: '🎓 Académicos' },
    { key: 'todos', label: '📁 Todos' },
  ];

  return (
    <AnimatedSection>
    <div id='proyectos-section' className="w-full">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
        Mis Proyectos
      </h1>
      <p className="text-center text-neutral-400 mb-8 max-w-2xl mx-auto px-4">
        Explora mi trabajo: desde sistemas empresariales en producción hasta proyectos académicos y personales
      </p>
      
      {/* Filtros */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10 px-4">
        {filterButtons.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setActiveFilter(key)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeFilter === key
                ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-500/25'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white border border-gray-700'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Contador de proyectos */}
      <p className="text-center text-neutral-500 text-sm mb-4">
        Mostrando {projects.length} proyecto{projects.length !== 1 ? 's' : ''}
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 md:gap-4 max-w-7xl mx-auto px-4">
        {projects.map((project, index) => (
          <CardProyectComponent
            key={`${activeFilter}-${index}`}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            linkUrl={project.demo}
            projectImages={project.projectImages}
            extraDetail={project.extraDetail}
            github={project.github}
            status={project.status}
            technologies={project.technologies}
          />
        ))}
      </div>
    </div>
    </AnimatedSection>
  );
}

export default ThreeDCardDemoP;

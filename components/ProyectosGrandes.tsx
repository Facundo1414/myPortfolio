"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import info from '../utils/info';
import CardProyectComponent from './extra/CardProyectComponent';
import { AnimatedSection } from './ui/AnimatedSection';

type ProjectCategory = 'destacados' | 'empresariales' | 'academicos' | 'todos';

export const ThreeDCardDemoP: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('destacados');

  const allProjects = {
    destacados: [
      info.proyectos.borvex,
      info.proyectos.aceroVeta,
      info.proyectos.aqua,
      info.proyectos.cbavapes,
      info.proyectos.marketingEngine,
      info.proyectos.evoTradingLab,
    ],
    empresariales: [
      info.proyectos.borvex,
      info.proyectos.aceroVeta,
      info.proyectos.aqua,
      info.proyectos.cbavapes,
      info.proyectos.marketingEngine,
      info.proyectos.evoTradingLab,
      info.proyectos.meetingApp,
    ],
    academicos: [
      info.proyectos.rentstudio,
      info.proyectos.ncwinds,
      info.proyectos.clinicaOdontologica,
      info.proyectos.springEcommerce,
    ],
    todos: [
      info.proyectos.borvex,
      info.proyectos.aceroVeta,
      info.proyectos.aqua,
      info.proyectos.cbavapes,
      info.proyectos.marketingEngine,
      info.proyectos.evoTradingLab,
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

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      }
    },
    exit: { 
      opacity: 0, 
      y: -20, 
      scale: 0.95,
      transition: { duration: 0.2 }
    },
  };

  return (
    <AnimatedSection>
    <div id='proyectos-section' className="w-full">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
        Mis Proyectos
      </h1>
      <p className="text-center text-neutral-400 mb-8 max-w-2xl mx-auto px-4">
        Explora mi trabajo: desde sistemas empresariales en producción hasta proyectos académicos y personales
      </p>
      
      {/* Filtros con indicador animado */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10 px-4">
        {filterButtons.map(({ key, label }) => (
          <motion.button
            key={key}
            onClick={() => setActiveFilter(key)}
            className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
              activeFilter === key
                ? 'text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white border border-gray-700'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {activeFilter === key && (
              <motion.div
                layoutId="activeFilterBg"
                className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full shadow-lg shadow-indigo-500/25"
                initial={false}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            <span className="relative z-10">{label}</span>
          </motion.button>
        ))}
      </div>

      {/* Contador de proyectos animado */}
      <motion.p 
        key={projects.length}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center text-neutral-500 text-sm mb-4"
      >
        Mostrando {projects.length} proyecto{projects.length !== 1 ? 's' : ''}
      </motion.p>

      {/* Grid con animaciones */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={activeFilter}
          variants={containerVariants}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="grid grid-cols-1 lg:grid-cols-2 gap-2 md:gap-4 max-w-7xl mx-auto px-4"
        >
          {projects.map((project, index) => (
            <motion.div
              key={`${activeFilter}-${project.title}-${index}`}
              variants={itemVariants}
              layout
            >
              <CardProyectComponent
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
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
    </AnimatedSection>
  );
}

export default ThreeDCardDemoP;

import React from 'react';
import info from "../utils/info";
import { InfiniteMovingCards } from './ui/InfiniteMovingCards';

const Skills = () => {
  const techsIUse = info.skillsUse.map(skill => ({
    name: skill.name,
    img: `https://skillicons.dev/icons?i=${skill.name}`,
  }));

  const techsIKnow = info.skillsKnown.map(skill => ({
    name: skill.name,
    img: `https://skillicons.dev/icons?i=${skill.name}`,
  }));

  return (
    <div id='skills-section' className="w-full relative overflow-hidden py-16">
      {/* Header */}
      <div className="flex flex-col items-center justify-center mb-12 px-4">
        <span className="inline-block mb-3 px-4 py-1.5 rounded-full text-xs font-medium bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 text-indigo-300">
          🛠️ Tecnologías
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
          Mi Stack Tecnológico
        </h2>
        <p className="text-neutral-400 max-w-lg text-center">
          Herramientas y tecnologías que utilizo para crear soluciones digitales de alto impacto
        </p>
      </div>

      <div className="space-y-10">
        {/* Tecnologías que uso */}
        <div className="relative">
          <div className="flex items-center justify-center gap-3 mb-6 px-4">
            <div className="h-px w-8 md:w-12 bg-gradient-to-r from-transparent to-indigo-500"></div>
            <h3 className="text-white text-lg md:text-xl font-semibold flex items-center gap-2 whitespace-nowrap">
              <span className="text-xl md:text-2xl">⚡</span> Uso Frecuente
            </h3>
            <div className="h-px w-8 md:w-12 bg-gradient-to-l from-transparent to-indigo-500"></div>
          </div>
          <InfiniteMovingCards
            items={techsIUse}
            direction="right"
            speed="slow"
          />
        </div>

        {/* Tecnologías que conozco */}
        <div className="relative">
          <div className="flex items-center justify-center gap-3 mb-6 px-4">
            <div className="h-px w-8 md:w-12 bg-gradient-to-r from-transparent to-purple-500"></div>
            <h3 className="text-white text-lg md:text-xl font-semibold flex items-center gap-2 whitespace-nowrap">
              <span className="text-xl md:text-2xl">📚</span> También Conozco
            </h3>
            <div className="h-px w-8 md:w-12 bg-gradient-to-l from-transparent to-purple-500"></div>
          </div>
          <InfiniteMovingCards
            items={techsIKnow}
            direction="left"
            speed="normal"
          />
        </div>
      </div>
    </div>
  );
}

export default Skills;

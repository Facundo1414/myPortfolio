"use client";

import React from 'react';
import { AnimatedCounter } from './ui/AnimatedSection';

const stats = [
  { value: 4, suffix: '+', label: 'Proyectos en Producción' },
  { value: 3, suffix: '+', label: 'Años de Experiencia' },
  { value: 15, suffix: '+', label: 'Tecnologías Dominadas' },
  { value: 100, suffix: '%', label: 'Compromiso' },
];

const Statistics = () => {
  return (
    <div className="w-full max-w-5xl mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-4 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-indigo-500/30 transition-all duration-300"
          >
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              <AnimatedCounter 
                end={stat.value} 
                suffix={stat.suffix}
                duration={2}
              />
            </div>
            <p className="text-xs md:text-sm text-neutral-400 mt-2 text-center">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Statistics;

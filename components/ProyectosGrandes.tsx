"use client";

import React from 'react';
import info from '../utils/info';
import CardProyectComponent from './extra/CardProyectComponent';

export const ThreeDCardDemoP: React.FC = () => {
  const projects = [info.proyectos.rentstudio, info.proyectos.ncwinds];

  return (
    <div id='proyectos-section'>
      <h1 className="text-3xl font-bold text-center text-white mb-[-2rem]">Proyectos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-[-4rem]">
        {projects.map((project, index) => (
          <CardProyectComponent
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            linkUrl={project.demo}
            projectImages={project.projectImages}
            extraDetail={project.extraDetail}
          />
        ))}
      </div>
    </div>
  );
}

export default ThreeDCardDemoP;

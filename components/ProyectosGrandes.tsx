"use client";

import React from 'react';
import info from '../utils/info'
import CardProyectComponent from './extra/CardProyectComponent';

export const ThreeDCardDemoP: React.FC = () => {
  const { title, description, extraDetail, demo, imageUrl, projectImages } = info.proyectos.rentstudio;

  return (
    <div id='proyectos-section'>
      <h1 className="text-3xl font-bold text-center text-white mb-[-2rem]">Proyectos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-[-4rem]">
        <CardProyectComponent
          title={title}
          description={description}
          imageUrl={imageUrl}
          linkUrl={demo}
          projectImages={projectImages}
          extraDetail={extraDetail}
        />
      </div>
    </div>
  );
}

export default ThreeDCardDemoP;

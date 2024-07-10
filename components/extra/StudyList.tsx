import React from 'react';
import info from '../../utils/info';
import { HoverEffect, HoverItem } from '../ui/HoverEffect';

const StudyList = () => {
  const { educacion } = info.aboutme;

  // Mapea los datos de educacion a la estructura de HoverItem
  const hoverItems: HoverItem[] = educacion.map(item => ({
    title: item.institute,
    description: item.degree,
    link: '#', // Puedes ajustar esto según sea necesario
  }));

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-0">
      <HoverEffect items={hoverItems} className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-10" />
    </div>
  );
};

export default StudyList;

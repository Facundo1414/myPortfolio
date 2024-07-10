import React from 'react';
import info from "../utils/info";
import { BentoGrid, BentoGridItem } from './ui/Bento-grid';
import { TimelineComponent } from './extra/DefaultTimeLine';
import StudyList from './extra/StudyList';

const AboutMe = () => {
  const { mainText, title, educacion, englishL, spanishL, subtitle } = info.aboutme;

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-0">
      <BentoGrid className="grid-cols-1 md:grid-cols-6 gap-4">
        {/* Primer BentoGridItem, ocupando la primera fila completa */}
        <BentoGridItem
          sectionType={1}
          className="md:col-span-6"
          title={title}
          description={
            <>
              <span className="text-highlight">¡Hola! Soy Facundo Allende</span>
              {mainText}
            </>
          }
        />

        {/* Segundo BentoGridItem en la segunda fila, ocupando 2/3 */}
        <BentoGridItem
          sectionType={2}
          className="md:col-span-4"
          title="Estudios"
          description={
            <>
              <StudyList/> 
            </>
          }
        >
        </BentoGridItem>

        {/* Tercer BentoGridItem en la segunda fila, ocupando 1/3 */}
        <BentoGridItem
          sectionType={3}
          className="md:col-span-2"
          title="Idiomas"
          description={englishL}
        >
        </BentoGridItem>
      </BentoGrid>
    </div>
  );
}

export default AboutMe;

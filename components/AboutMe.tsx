import React from 'react';
import info from "../utils/info";
import { BentoGrid, BentoGridItem } from './ui/Bento-grid';
import StudyList from './extra/StudyList';
import LanguageIcon from '@mui/icons-material/Language'; // Importa el icono de idioma
import EnglishIcon from '@mui/icons-material/Translate'; // Puedes usar cualquier icono que prefieras
import Redes from './extra/Redes';
import { SparklesCore } from './ui/SparklesCore';

const AboutMe = () => {
  const { mainText, title, educacion, englishL, spanishL, subtitle } = info.aboutme;

  return (
    <div id='aboutme-section' className="max-w-7xl mx-auto px-4 lg:px-0">
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
          description={
            <div className="space-y-2 mt-10 flex flex-col justify-between">
              <div className="flex items-center ">
                <LanguageIcon className="mr-2" />
                <span className='text-xl'>{spanishL}</span>
              </div>
              <div className="flex items-center">
                <EnglishIcon className="mr-2" />
                <span className='text-xl'>{englishL}</span>
              </div>
              <div className='mb-0 flex justify-center items-end pt-28'>
                
                <Redes/>
              </div>
            </div>
          }
        >
        </BentoGridItem>
      </BentoGrid>
    </div>
  );
}

export default AboutMe;

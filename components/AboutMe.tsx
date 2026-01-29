"use client";

import React from 'react';
import info from "../utils/info";
import { BentoGrid, BentoGridItem } from './ui/Bento-grid';
import StudyList from './extra/StudyList';
import LanguageIcon from '@mui/icons-material/Language';
import EnglishIcon from '@mui/icons-material/Translate';
import Redes from './extra/Redes';
import { AnimatedSection } from './ui/AnimatedSection';

const AboutMe = () => {
  const { mainText, title, educacion, englishL, spanishL, subtitle } = info.aboutme;

  return (
    <AnimatedSection className="w-full">
      <div id='aboutme-section' className="max-w-7xl mx-auto px-4 lg:px-0 w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <span className="inline-block mb-3 px-4 py-1.5 rounded-full text-xs font-medium bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 text-indigo-300">
            👋 Conóceme
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {title}
          </h2>
        </div>

      <BentoGrid className="grid-cols-1 md:grid-cols-6 gap-4">
        {/* Primer BentoGridItem, ocupando la primera fila completa */}
        <BentoGridItem
          sectionType={1}
          className="col-span-6"
          title=""
          description={
            <>
              <span className="text-highlight font-semibold">¡Hola! Soy Facundo Allende</span>
              {mainText}
            </>
          }
        />

        {/* Segundo BentoGridItem en la segunda fila, ocupando 2/3 */}
        <BentoGridItem
          sectionType={2}
          className="col-span-6 lg:col-span-4"
          title="📚 Formación Académica"
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
          className="col-span-6 lg:col-span-2"
          title="🌍 Idiomas"
          description={
            <div className="space-y-4 mt-6 flex flex-col">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                <LanguageIcon className="text-indigo-400" />
                <div>
                  <span className='text-lg text-white'>{spanishL}</span>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                <EnglishIcon className="text-indigo-400" />
                <div>
                  <span className='text-lg text-white'>{englishL}</span>
                </div>
              </div>
              <div className='flex justify-center items-end pt-8'>
                <Redes/>
              </div>
            </div>
          }
        >
        </BentoGridItem>
      </BentoGrid>
    </div>
    </AnimatedSection>
  );
}

export default AboutMe;

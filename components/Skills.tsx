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
    // Se le puede agregar un bg al div principal
    <div id='skills-section' className="mx-auto w-full  relative rounded-2xl overflow-hidden shadow-md">
      <div className="relative h-full bg-gradient-to-t sm:mx-0 sm:rounded-2xl overflow-hidden">
        <div className="h-full px-4 py-20 sm:px-10">
          <h1 className="text-3xl font-bold text-center text-white mb-4">Mis Skills</h1>

          <div className="h-[10rem] flex flex-col justify-center items-center">
            <h2 className="text-white text-2xl font-bold mb-4 text-center ">Tecnologías que uso</h2>
            <InfiniteMovingCards
              items={techsIUse}
              direction="right"
              speed="slow"
              
            />
          </div>

          <div className="h-[10rem] flex flex-col justify-center items-center">
            <h2 className="text-white text-2xl font-bold mb-4 text-center">Tecnologías que conozco</h2>
            <InfiniteMovingCards
              items={techsIKnow}
              direction="right"
              speed="normal"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;

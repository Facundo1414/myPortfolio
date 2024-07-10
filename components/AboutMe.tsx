import React from 'react';
import Image from 'next/image';
import info from "../utils/info";
import { BentoGrid, BentoGridItem } from './ui/Bento-grid';

const AboutMe = () => {
  const { mainText, title } = info.aboutme;

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-0">
      <BentoGrid className="grid-cols-1 md:grid-cols-2 gap-4">
        {/* Primer BentoGridItem, ocupando la primera fila completa */}
        <BentoGridItem
          className="md:col-span-2"
          title={title}
          description={
            <>
              <span className="text-highlight">¡Hola! Soy Facundo Allende</span>
              {mainText}
            </>
          }
        />

        {/* Segundo BentoGridItem en la segunda fila */}
        <BentoGridItem
          title="Estudios"
          description="With over 100,000 monthly active bot users, Gippity AI is the most popular AI platform for developers."
        >
          <Image
            src="/linear.webp"
            width={500}
            height={500}
            alt="linear demo image"
            className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
          />
        </BentoGridItem>

        {/* Tercer BentoGridItem en la segunda fila */}
        <BentoGridItem
          title="Signup for blazing-fast cutting-edge state of the art Gippity AI wrapper today!"
          description="With over 100,000 monthly active bot users, Gippity AI is the most popular AI platform for developers."
        >
          <Image
            src="/linear.webp"
            width={500}
            height={500}
            alt="linear demo image"
            className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
          />
        </BentoGridItem>
      </BentoGrid>
    </div>
  );
}

export default AboutMe;

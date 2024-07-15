import React from 'react'
import { SparklesCore } from './ui/SparklesCore'
import info from "../utils/info";

const Hero = () => {
  const { primerSubtitulo, tituloPrincipal, segundoSubitulo, btnText } = info.hero;

  return (
    <div className='w-full relative h-screen'>
      <SparklesCore 
        id="tsparticlesfullpage"
        background="transparent"
        minSize={0.6}
        maxSize={1.4}
        particleDensity={100}
        className="w-full h-full"
        particleColor="#FFFFFF"
      />
      <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center text-white gap-4 p-4'>
        <div className='relative h-4/6 w-full md:w-4/6 flex flex-col justify-center items-center rounded-full overflow-hidden'>
          <div className="absolute inset-0 rounded-full bg-gradient-radial opacity-100 clip-circle"></div>
          <div className="relative z-10 p-6 text-center">
            <h2 className='mb-4 text-sm md:text-lg'>{primerSubtitulo}</h2>
            <h1 className='text-3xl md:text-6xl font-bold mb-4'>{tituloPrincipal}</h1>
            <h2 className='text-sm md:text-lg'>{segundoSubitulo}</h2>
          </div>
        </div>
        <a href="#proyectos-section" className="p-[3px] relative">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
          <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
            {btnText}
          </div>
        </a>
      </div>
    </div>
  )
}

export default Hero

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
            {/* Badge */}
            <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs md:text-sm font-medium bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 text-indigo-300">
              ✨ {primerSubtitulo}
            </span>
            
            <h1 className='text-4xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-indigo-200 bg-clip-text text-transparent'>
              {tituloPrincipal}
            </h1>
            
            <h2 className='text-base md:text-xl text-neutral-300 max-w-lg mx-auto'>
              {segundoSubitulo}
            </h2>
            
            {/* Status indicator */}
            <div className="flex items-center justify-center gap-2 mt-4">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-sm text-green-400">Disponible para nuevos proyectos</span>
            </div>
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#proyectos-section" className="p-[3px] relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg group-hover:blur-sm transition-all duration-300" />
            <div className="px-8 py-3 bg-black rounded-[6px] relative transition duration-200 text-white hover:bg-transparent font-medium">
              {btnText} →
            </div>
          </a>
          <a href="#contact-section" className="px-8 py-3 rounded-lg border border-white/20 text-white hover:bg-white/10 transition-all duration-200 font-medium">
            Contactar
          </a>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Hero

import React from 'react'
import { SparklesCore } from './ui/SparklesCore'
import info from "../utils/info";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

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
        <a href="#projects" className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 mt-8">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            {btnText} <ArrowForwardIcon className="ml-2" />
          </span>
        </a>
      </div>
    </div>
  )
}

export default Hero

"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedSection } from './ui/AnimatedSection';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  text: string;
  image?: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Cliente Satisfecho",
    role: "CEO",
    company: "Empresa Tech",
    text: "Facundo demostró un nivel excepcional de profesionalismo y habilidad técnica. El proyecto fue entregado antes del plazo y superó todas nuestras expectativas.",
    image: "",
  },
  {
    name: "Colaborador",
    role: "Tech Lead",
    company: "Startup Innovation",
    text: "Trabajar con Facundo fue una experiencia increíble. Su capacidad para resolver problemas complejos y comunicar soluciones de manera clara es impresionante.",
    image: "",
  },
  {
    name: "Compañero de Equipo",
    role: "Senior Developer",
    company: "Digital Agency",
    text: "Su dedicación al código limpio y las mejores prácticas hace que sea un placer colaborar en cualquier proyecto. Siempre está dispuesto a ayudar.",
    image: "",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  return (
    <AnimatedSection className="w-full">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block mb-3 px-4 py-1.5 rounded-full text-xs font-medium bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 text-indigo-300">
            💬 Testimonios
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Lo que dicen de mí
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative h-[300px] md:h-[250px] overflow-hidden">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="absolute w-full"
            >
              <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6 md:p-8">
                {/* Quote icon */}
                <div className="text-4xl text-indigo-500 mb-4">&ldquo;</div>
                
                <p className="text-neutral-300 text-lg mb-6 italic">
                  {testimonials[currentIndex].text}
                </p>

                <div className="flex items-center gap-4">
                  {/* Avatar */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {testimonials[currentIndex].name.charAt(0)}
                    </span>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-semibold">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-sm text-neutral-400">
                      {testimonials[currentIndex].role} @ {testimonials[currentIndex].company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-indigo-500 w-8'
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Testimonials;

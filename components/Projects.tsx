import React from 'react'
import { StickyScroll } from './ui/StickyScroll'
import Image from 'next/image';

const content = [
  {
    title: "AQUA - Sistema de Gestión de Deudas (Cclip)",
    description:
      "Sistema empresarial completo en producción para la gestión automatizada de deudas de clientes de Aguas Cordobesas. Incluye web scraping para obtención de datos, gestión de base de datos completa por usuario, envío automatizado de documentos por WhatsApp y múltiples funcionalidades administrativas. Arquitectura de microservicios con TypeScript, Next.js y PostgreSQL.",
    content: (
      <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-cyan-500">
        <Image 
          src="/images/proyectos/aguasCba.png" 
          alt="AQUA System"
          width={300}
          height={300}
          className="h-full w-full object-cover" 
          />
      </div>
    ),
  },
  {
    title: "Cbavapx - E-commerce V2",
    description:
      "Segunda versión mejorada del e-commerce Cbavapes, actualmente en desarrollo. Sistema de stock centralizado para 3 canales de venta: minorista, mayorista y dropshipping. Integración completa con Mercado Pago, sistema de cadetería, panel de administración avanzado y reportes en tiempo real. Stack: TypeScript, Next.js, React, Tailwind CSS.",
    content: (
      <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-500">
        <div className="text-center text-white p-8">
          <h3 className="text-3xl font-bold mb-2">Cbavapx</h3>
          <p className="text-lg">E-commerce V2.0</p>
          <p className="text-sm mt-2">En Desarrollo</p>
        </div>
      </div>
    ),
  },
];

const Projects = () => {
  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold text-center text-white mb-8">Proyectos Empresariales</h1>
      <StickyScroll content={content}/>
    </div>
  )
}

export default Projects
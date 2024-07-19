import React from 'react'
import { StickyScroll } from './ui/StickyScroll'
import Image from 'next/image';

const content = [
  {
    title: "Reservas de canchas de futbol",
    description:
      "Este proyecto se enfoca en la gestión de canchas de fútbol en la ciudad de Córdoba. Actualmente, las reservas se realizan a través de WhatsApp. El objetivo es proporcionar una plataforma que permita a los clientes y a los propietarios de las canchas gestionar sus reservas de manera más eficiente.",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <Image 
          src="/images/proyectos/canchaReserva.avif" 
          alt="cancha"
          width={300}
          height={300}
          className="h-full w-full object-cover" 
          />
      </div>
    ),
  },
  {
    title: "Aguas Cordobesas",
    description:
      "El proyecto consiste en una aplicación para gestionar las deudas de los clientes. La aplicación toma datos cargados desde archivos Excel y utiliza web scraping para obtener las deudas de los clientes desde la página oficial de Aguas Cordobesas. Esta página proporciona un archivo de pago, que los empleados utilizan para enviárselo a los clientes. De esta manera, se agiliza el método tradicional de visitar a los clientes casa por casa.",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <Image 
          src="/images/proyectos/aguasCba.png" 
          alt="aguas"
          width={300}
          height={300}
          className="h-full w-full object-cover" 
          />
      </div>
    ),
  },
];

const Projects = () => {
  return (
    <div >
      <h1 className="text-3xl font-bold text-center text-white mb-8">Proyectos en Progreso</h1>
      <StickyScroll content={content}/>
    </div>
  )
}

export default Projects
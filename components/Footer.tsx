import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 w-full">
      <div className="container mx-auto px-4 flex justify-center items-center text-center">
        <p className="text-sm">
          {new Date().getFullYear()} Facundo Allende Portfolio | Creado con Aceternity UI
        </p>
      </div>
    </footer>
  );
};

export default Footer;

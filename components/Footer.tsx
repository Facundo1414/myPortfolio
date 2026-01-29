import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Logo/Name */}
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              FA
            </span>
            <span className="text-gray-400">|</span>
            <span className="text-gray-300">Facundo Allende</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a 
              href="https://github.com/Facundo1414" 
              target="_blank" 
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/facundoallendedev/" 
              target="_blank" 
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              LinkedIn
            </a>
            <a 
              href="#contact-section" 
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Contacto
            </a>
          </div>

          {/* Copyright */}
          <p className="text-gray-500 text-sm text-center md:text-right">
            © {currentYear} Facundo Allende. Hecho con 💜 y Next.js
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

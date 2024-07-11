import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 w-full mt-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center items-center">
          <p className="text-sm">
            {new Date().getFullYear()} Facundo Allende Portfolio | Made it with Aceternity UI
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

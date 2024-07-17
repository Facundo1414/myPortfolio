'use client'
import React from 'react';

const BackToTopButton = () => {
  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      className="Btn fixed bottom-6 right-6 z-50 flex items-center justify-center w-12 h-12 bg-gradient-to-br from-indigo-300 to-indigo-900 rounded-full cursor-pointer focus:outline-none"
      onClick={handleBackToTop}
      aria-label="Back to Top"
    >
      <svg
        height="1.2em"
        className="arrow text-white"
        viewBox="0 0 512 512"
        fill="currentColor"
      >
        <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"></path>
      </svg>
    </button>
  );
};

export default BackToTopButton;

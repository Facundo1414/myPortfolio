"use client";
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../ThemeProvider';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  
  // Prevent rendering on server
  if (typeof window === 'undefined') {
    return null;
  }

  const sunVariants = {
    initial: { scale: 0, rotate: -90 },
    animate: { scale: 1, rotate: 0 },
    exit: { scale: 0, rotate: 90 },
  };

  const moonVariants = {
    initial: { scale: 0, rotate: 90 },
    animate: { scale: 1, rotate: 0 },
    exit: { scale: 0, rotate: -90 },
  };

  const rayVariants = {
    initial: { opacity: 0, scale: 0 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0 },
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed top-6 left-6 z-[5001] p-3 rounded-full bg-black/50 backdrop-blur-sm border border-white/[0.2] hover:border-purple-500/50 transition-colors overflow-hidden"
      whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(139, 92, 246, 0.5)" }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <div className="relative w-5 h-5">
        <AnimatePresence mode="wait">
          {theme === 'dark' ? (
            <motion.div
              key="sun"
              variants={sunVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute inset-0"
            >
              {/* Sol con rayos animados */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                className="w-5 h-5"
              >
                {/* Centro del sol */}
                <motion.circle
                  cx="12"
                  cy="12"
                  r="4"
                  fill="#fbbf24"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                {/* Rayos */}
                {[...Array(8)].map((_, i) => (
                  <motion.line
                    key={i}
                    x1="12"
                    y1="1"
                    x2="12"
                    y2="3"
                    stroke="#fbbf24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    transform={`rotate(${i * 45} 12 12)`}
                    variants={rayVariants}
                    initial="initial"
                    animate="animate"
                    transition={{ delay: i * 0.05 }}
                  />
                ))}
              </svg>
            </motion.div>
          ) : (
            <motion.div
              key="moon"
              variants={moonVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute inset-0"
            >
              {/* Luna con estrellas */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                className="w-5 h-5"
              >
                <motion.path
                  d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                  fill="#a78bfa"
                  animate={{ 
                    fill: ["#a78bfa", "#c4b5fd", "#a78bfa"],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                {/* Estrellas pequeñas */}
                <motion.circle
                  cx="19"
                  cy="5"
                  r="1"
                  fill="#fbbf24"
                  animate={{ 
                    opacity: [0.5, 1, 0.5],
                    scale: [0.8, 1, 0.8] 
                  }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                <motion.circle
                  cx="15"
                  cy="3"
                  r="0.5"
                  fill="#fbbf24"
                  animate={{ 
                    opacity: [0.5, 1, 0.5],
                    scale: [0.8, 1, 0.8] 
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                />
              </svg>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.button>
  );
};

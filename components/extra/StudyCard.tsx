"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const StudyCard = ({ institute, degree, period }: { institute: string; degree: string; period: string; }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-2 mb-4 w-full max-w-sm mx-auto relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="absolute inset-0 bg-neutral-200 dark:bg-slate-800/[0.8] rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />
        )}
      </AnimatePresence>
      <div className="text-center relative z-10">
        <span className="text-sm text-gray-600 dark:text-gray-400">{period}</span>
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mt-2">{institute}</h3>
        <p className="text-gray-600 dark:text-gray-400 mt-1">{degree}</p>
      </div>
    </div>
  );
};

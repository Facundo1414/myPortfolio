"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface TimelineItem {
  date: string;
  title: string;
  description: string;
  location?: string;
  icon?: React.ReactNode;
  type?: 'work' | 'education' | 'achievement';
}

interface TimelineProps {
  items: TimelineItem[];
  className?: string;
}

const Timeline: React.FC<TimelineProps> = ({ items, className = "" }) => {
  const getTypeColor = (type?: string) => {
    switch (type) {
      case 'work':
        return 'from-indigo-500 to-purple-500';
      case 'education':
        return 'from-green-500 to-emerald-500';
      case 'achievement':
        return 'from-yellow-500 to-orange-500';
      default:
        return 'from-indigo-500 to-purple-500';
    }
  };

  const getTypeIcon = (type?: string) => {
    switch (type) {
      case 'work':
        return '💼';
      case 'education':
        return '🎓';
      case 'achievement':
        return '🏆';
      default:
        return '📌';
    }
  };

  return (
    <div className={`relative ${className}`}>
      {/* Línea central */}
      <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500" />

      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className={`relative flex items-center mb-8 ${
            index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
          }`}
        >
          {/* Contenido */}
          <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-4 md:p-6 rounded-xl bg-gray-800/50 border border-gray-700 hover:border-indigo-500/50 transition-all"
            >
              <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-indigo-500/20 text-indigo-300 mb-2">
                {item.date}
              </span>
              <h3 className="text-lg md:text-xl font-bold text-white mb-1">{item.title}</h3>
              {item.location && (
                <p className="text-sm text-indigo-400 mb-2">📍 {item.location}</p>
              )}
              <p className="text-neutral-400 text-sm">{item.description}</p>
            </motion.div>
          </div>

          {/* Punto central */}
          <motion.div
            whileHover={{ scale: 1.2 }}
            className={`absolute left-4 md:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-br ${getTypeColor(item.type)} flex items-center justify-center shadow-lg shadow-indigo-500/30 z-10`}
          >
            <span className="text-sm">{item.icon || getTypeIcon(item.type)}</span>
          </motion.div>

          {/* Espacio para el otro lado en desktop */}
          <div className="hidden md:block md:w-1/2" />
        </motion.div>
      ))}
    </div>
  );
};

export default Timeline;

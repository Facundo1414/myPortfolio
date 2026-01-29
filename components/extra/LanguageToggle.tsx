"use client";
import React from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

export const LanguageToggle = () => {
  const router = useRouter();
  const pathname = usePathname();
  
  const currentLocale = pathname.startsWith('/en') ? 'en' : 'es';
  
  const toggleLanguage = () => {
    const newLocale = currentLocale === 'es' ? 'en' : 'es';
    const newPath = pathname.replace(`/${currentLocale}`, `/${newLocale}`);
    router.push(newPath || `/${newLocale}`);
  };

  return (
    <motion.button
      onClick={toggleLanguage}
      className="fixed bottom-6 right-6 z-[5001] px-4 py-2 rounded-full bg-purple-600/80 backdrop-blur-sm border border-purple-400/30 hover:border-purple-400/60 transition-all text-white font-semibold"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle language"
    >
      <div className="flex items-center gap-2">
        <span className="text-lg">🌐</span>
        <span className="text-sm">{currentLocale === 'es' ? 'EN' : 'ES'}</span>
      </div>
    </motion.button>
  );
};

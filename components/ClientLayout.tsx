"use client";
import React from 'react';
import BackToTopButton from '@/components/extra/BackToTopButton';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <BackToTopButton />
    </>
  );
}

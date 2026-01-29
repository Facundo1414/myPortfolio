import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Facundo Allende - Full Stack Developer | TypeScript, React, Next.js",
  description: "Portfolio de Facundo Allende, Full Stack Developer en Córdoba, Argentina. Especializado en TypeScript, React, Next.js, Node.js y arquitecturas de microservicios. Proyectos empresariales en producción, e-commerce y sistemas de gestión.",
  keywords: [
    "Full Stack Developer",
    "Desarrollador Web",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Java",
    "Spring Boot",
    "PostgreSQL",
    "Córdoba",
    "Argentina",
    "Freelance",
    "E-commerce",
    "Microservicios",
  ],
  authors: [{ name: "Facundo Allende", url: "https://github.com/Facundo1414" }],
  creator: "Facundo Allende",
  openGraph: {
    title: "Facundo Allende - Full Stack Developer",
    description: "Portfolio de Facundo Allende. Desarrollo soluciones digitales que generan impacto real. TypeScript, React, Next.js y más.",
    type: "website",
    locale: "es_AR",
    siteName: "Facundo Allende Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Facundo Allende - Full Stack Developer",
    description: "Desarrollo soluciones digitales que generan impacto real. TypeScript, React, Next.js y más.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} dark-mode`}>
        <ThemeProvider>
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}

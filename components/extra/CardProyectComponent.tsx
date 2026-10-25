import React, { useState } from 'react';
import Image from "next/image";
import { motion } from 'framer-motion';
import { CardBody, CardContainer, CardItem } from "../extra/3d-card";
import ProjectModal from './ProjectModal';

interface CardProyectComponentProps {
  title: string;
  description: string;
  imageUrl: string;
  linkUrl: string | null;
  projectImages: string[];
  extraDetail: string;
  github?: string | null;
  status?: string;
  technologies?: string[];
}

const CardProyectComponent: React.FC<CardProyectComponentProps> = ({ 
  title, 
  description, 
  imageUrl, 
  linkUrl, 
  projectImages, 
  extraDetail,
  github,
  status,
  technologies 
}) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <>
      <CardContainer className="inter-var mx-auto w-full">
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
        <CardBody 
          className="bg-gray-900 relative group/card dark:hover:shadow-2xl dark:hover:shadow-indigo-500/[0.15] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-full rounded-xl p-6 border flex flex-col transition-all duration-300"
        >
          <div className="flex items-start justify-between mb-2">
            <CardItem translateZ="50" className="text-xl font-bold text-white">
              {title}
            </CardItem>
            {status && (
              <CardItem translateZ="50">
                <motion.span 
                  className="text-xs px-2 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30"
                  animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
                >
                  {status}
                </motion.span>
              </CardItem>
            )}
          </div>
          <CardItem as="p" translateZ="60" className="text-sm mt-2 text-neutral-300 flex-grow">
            {description}
          </CardItem>
          {technologies && technologies.length > 0 && (
            <CardItem translateZ="60" className="flex flex-wrap gap-1 mt-3">
              {technologies.slice(0, 4).map((tech, idx) => (
                <motion.span 
                  key={idx} 
                  className="text-xs px-2 py-1 bg-indigo-500/20 text-indigo-300 rounded"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(99, 102, 241, 0.4)" }}
                >
                  {tech}
                </motion.span>
              ))}
              {technologies.length > 4 && (
                <motion.span 
                  className="text-xs px-2 py-1 bg-gray-700 text-gray-300 rounded"
                  whileHover={{ scale: 1.1 }}
                >
                  +{technologies.length - 4}
                </motion.span>
              )}
            </CardItem>
          )}
          <CardItem translateZ="100" className="w-full mt-4 relative overflow-hidden rounded-xl">
            {imageUrl ? (
              <motion.div
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={imageUrl}
                  height={400}
                  width={600}
                  className="h-48 w-full object-cover rounded-xl group-hover/card:shadow-xl transition-all duration-300"
                  alt={title}
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
                {/* Overlay con iconos en hover */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end justify-center pb-4 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <div className="flex gap-3">
                    {github && (
                      <motion.a
                        href={github}
                        target="_blank"
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </motion.a>
                    )}
                    {linkUrl && (
                      <motion.a
                        href={linkUrl}
                        target="_blank"
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </motion.a>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            ) : (
              <div className="h-48 w-full rounded-xl bg-gradient-to-br from-indigo-600 to-purple-700 flex items-center justify-center">
                <span className="text-4xl font-bold text-white/80">{title.substring(0, 2).toUpperCase()}</span>
              </div>
            )}
          </CardItem>
          <div className="flex flex-wrap gap-2 justify-between items-center mt-6">
            <CardItem translateZ={20}>
              <motion.button 
                onClick={handleModalOpen} 
                className="px-4 py-2 rounded-xl text-sm bg-white text-black font-semibold hover:bg-gray-200 transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Ver detalle
              </motion.button>
            </CardItem>
            <div className="flex gap-2">
              {github && (
                <CardItem translateZ={20}>
                  <motion.a
                    href={github}
                    target="_blank"
                    className="inline-block px-4 py-2 rounded-xl bg-gray-700 text-white text-sm font-bold hover:bg-gray-600 transition"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    GitHub
                  </motion.a>
                </CardItem>
              )}
              {linkUrl && (
                <CardItem translateZ={20}>
                  <motion.a
                    href={linkUrl}
                    target="_blank"
                    className="inline-block px-4 py-2 rounded-xl bg-indigo-600 text-white text-sm font-bold hover:bg-indigo-700 transition"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    DEMO
                  </motion.a>
                </CardItem>
              )}
            </div>
          </div>
        </CardBody>
        </div>
      </CardContainer>
      {isModalOpen && (
        <ProjectModal
          isOpen={isModalOpen}
          onClose={handleModalClose}
          title={title}
          description={description}
          images={projectImages}
          extraDetail={extraDetail}
          technologies={technologies}
          github={github}
          demo={linkUrl}
        />
      )}
    </>
  );
};

export default CardProyectComponent;

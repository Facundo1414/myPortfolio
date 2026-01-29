import React, { useState } from 'react';
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "../extra/3d-card";
import Link from "next/link";
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

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <>
      <CardContainer className="inter-var mx-auto w-full">
        <CardBody className="bg-gray-900 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-full rounded-xl p-6 border flex flex-col">
          <div className="flex items-start justify-between mb-2">
            <CardItem translateZ="50" className="text-xl font-bold text-white">
              {title}
            </CardItem>
            {status && (
              <CardItem translateZ="50" className="text-xs px-2 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                {status}
              </CardItem>
            )}
          </div>
          <CardItem as="p" translateZ="60" className="text-sm mt-2 text-neutral-300 flex-grow">
            {description}
          </CardItem>
          {technologies && technologies.length > 0 && (
            <CardItem translateZ="60" className="flex flex-wrap gap-1 mt-3">
              {technologies.slice(0, 4).map((tech, idx) => (
                <span key={idx} className="text-xs px-2 py-1 bg-indigo-500/20 text-indigo-300 rounded">
                  {tech}
                </span>
              ))}
              {technologies.length > 4 && (
                <span className="text-xs px-2 py-1 bg-gray-700 text-gray-300 rounded">
                  +{technologies.length - 4}
                </span>
              )}
            </CardItem>
          )}
          <CardItem translateZ="100" className="w-full mt-4">
            {imageUrl ? (
              <Image
                src={imageUrl}
                height={400}
                width={600}
                className="h-48 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt={title}
                loading="lazy"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            ) : (
              <div className="h-48 w-full rounded-xl bg-gradient-to-br from-indigo-600 to-purple-700 flex items-center justify-center">
                <span className="text-4xl font-bold text-white/80">{title.substring(0, 2).toUpperCase()}</span>
              </div>
            )}
          </CardItem>
          <div className="flex flex-wrap gap-2 justify-between items-center mt-6">
            <CardItem translateZ={20} as="button" onClick={handleModalOpen} className="px-4 py-2 rounded-xl text-sm bg-white text-black font-semibold hover:bg-gray-200 transition">
              Ver detalle
            </CardItem>
            <div className="flex gap-2">
              {github && (
                <CardItem translateZ={20} as={Link} href={github} target="_blank" className="px-4 py-2 rounded-xl bg-gray-700 text-white text-sm font-bold hover:bg-gray-600 transition">
                  GitHub
                </CardItem>
              )}
              {linkUrl && (
                <CardItem translateZ={20} as={Link} href={linkUrl} target="_blank" className="px-4 py-2 rounded-xl bg-indigo-600 text-white text-sm font-bold hover:bg-indigo-700 transition">
                  DEMO
                </CardItem>
              )}
            </div>
          </div>
        </CardBody>
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

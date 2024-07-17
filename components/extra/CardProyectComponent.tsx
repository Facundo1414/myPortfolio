import React, { useState } from 'react';
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "../extra/3d-card";
import Link from "next/link";
import ProjectModal from './ProjectModal';

interface CardProyectComponentProps {
  title: string;
  description: string;
  imageUrl: string;
  linkUrl: string;
  projectImages: string[];
  extraDetail: string;
}

const CardProyectComponent: React.FC<CardProyectComponentProps> = ({ title, description, imageUrl, linkUrl, projectImages, extraDetail }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <>
      <CardContainer className="inter-var mx-auto max-w-sm sm:max-w-md md:max-w-md lg:max-w-md xl:max-w-lg">
        <CardBody className="bg-gray-900 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
          <CardItem translateZ="50" className="text-xl font-bold text-white">
            {title}
          </CardItem>
          <CardItem as="p" translateZ="60" className="text-sm mt-2 text-neutral-300">
            {description}
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src={imageUrl}
              height={1000}
              width={1000}
              className="h-60 w-full object-contain rounded-xl bg-white group-hover/card:shadow-xl"
              alt="logo"
            />
          </CardItem>
          <div className="flex flex-col sm:flex-row justify-between items-center mt-8 space-y-4 sm:space-y-0">
            <CardItem translateZ={20} as="button" onClick={handleModalOpen} className="px-4 py-2 rounded-xl text-sm  bg-white text-black font-semibold">
              Ver detalle
            </CardItem>
            <CardItem translateZ={20} as={Link} href={linkUrl} target="__blank" className="px-4 py-2 rounded-xl bg-indigo-600 dark:bg-white dark:text-black text-white text-sm font-bold">
              DEMO
            </CardItem>
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
        />
      )}
    </>
  );
};

export default CardProyectComponent;

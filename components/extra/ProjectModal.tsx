import React, { useState } from 'react';
import { Modal, Box, Typography, Grid, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  images: string[];
  extraDetail: string;
  technologies?: string[];
  github?: string | null;
  demo?: string | null;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ 
  isOpen, 
  onClose, 
  title, 
  description, 
  images, 
  extraDetail,
  technologies,
  github,
  demo 
}) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  const handleCloseImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <Modal open={isOpen} onClose={onClose}>
        <Box
          sx={{
            position: 'absolute', 
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '90%',
            maxWidth: '900px',
            maxHeight: '90vh',
            overflow: 'auto',
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
            bgcolor: 'background.paper',
          }}
          className="bg-gray-900"
        >
          <IconButton
            sx={{
              position: 'absolute',
              top: 8,
              right: 8,
              color: 'white',
            }}
            onClick={onClose}
          >
            <CloseIcon />
          </IconButton>
          <Typography variant="h4" component="h2" mb={2} className="text-white">
            {title}
          </Typography>
          <Typography variant="body1" mb={2} className="text-white">
            {description}
          </Typography>
          <Typography variant="body2" mb={3} className="text-gray-300">
            {extraDetail}
          </Typography>
          
          {technologies && technologies.length > 0 && (
            <Box mb={3}>
              <Typography variant="h6" className="text-white mb-2">Tecnologías:</Typography>
              <Box className="flex flex-wrap gap-2">
                {technologies.map((tech, idx) => (
                  <span key={idx} className="px-3 py-1 bg-indigo-500/30 text-indigo-200 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </Box>
            </Box>
          )}

          <Box className="flex gap-3 mb-4">
            {github && (
              <Link href={github} target="_blank" className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition">
                Ver en GitHub
              </Link>
            )}
            {demo && (
              <Link href={demo} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 bg-violet-400 text-slate-950 font-bold rounded-lg hover:bg-violet-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-300 transition-colors">
                Ver sitio ↗
              </Link>
            )}
          </Box>

          {images.length > 0 && (
            <>
              <Typography variant="h6" className="text-white mb-2">Galería de imágenes:</Typography>
              <Grid container spacing={2}>
                {images.map((image, index) => (
                  <Grid item xs={6} sm={4} md={3} key={index} onClick={() => handleImageClick(image)}>
                    <Image
                      src={image}
                      alt={`${title} - Imagen ${index + 1}`}
                      width={200}
                      height={200}
                      className="rounded cursor-pointer hover:opacity-80 transition object-cover w-full h-full"
                      loading="lazy"
                    />
                  </Grid>
                ))}
              </Grid>
            </>
          )}
        </Box>
      </Modal>

      {selectedImage && (
        <Modal open={Boolean(selectedImage)} onClose={handleCloseImageModal}>
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '95%',
              maxWidth: '1200px',
              maxHeight: '95vh',
              boxShadow: 24,
              p: 2,
              borderRadius: 2,
              bgcolor: 'background.paper',
            }}
          >
            <IconButton
              sx={{
                position: 'absolute',
                top: 8,
                right: 8,
                color: 'white',
                bgcolor: 'rgba(0,0,0,0.5)',
                '&:hover': { bgcolor: 'rgba(0,0,0,0.7)' }
              }}
              onClick={handleCloseImageModal}
            >
              <CloseIcon />
            </IconButton>
            <div className="relative w-full h-[80vh]">
              <Image
                src={selectedImage}
                alt="Imagen ampliada del proyecto"
                fill
                className="object-contain"
                loading="lazy"
              />
            </div>
          </Box>
        </Modal>
      )}
    </>
  );
};

export default ProjectModal;

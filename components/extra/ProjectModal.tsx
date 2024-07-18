import React, { useState } from 'react';
import { Modal, Box, Typography, Grid, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  images: string[];
  extraDetail: string;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ isOpen, onClose, title, description, images, extraDetail }) => {
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
            width: '80%',
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
          <Typography variant="body2" mb={4} className="text-white">
            {extraDetail}
          </Typography>
          <Grid container spacing={2}>
            {images.map((image, index) => (
              <Grid item xs={6} sm={4} md={3} key={index} onClick={() => handleImageClick(image)}>
                <Image
                  src={image}
                  alt={`Project Image ${index + 1}`}
                  layout="responsive"
                  width={100}
                  height={100}
                  objectFit="cover"
                  className="rounded cursor-pointer"
                />
              </Grid>
            ))}
          </Grid>
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
              width: '90%',
              maxHeight: '90%',
              boxShadow: 24,
              p: 4,
              borderRadius: 2,
              bgcolor: 'background.paper',
            }}
          >
            <IconButton
              sx={{
                position: 'absolute',
                top: 8,
                right: 8,
                color: 'black',
              }}
              onClick={handleCloseImageModal}
            >
              <CloseIcon />
            </IconButton>
            <Image
              src={selectedImage}
              alt="Enlarged Project Image"
              layout="responsive"
              width={1000}
              height={1000}
              objectFit="contain"
              className="rounded"
            />
          </Box>
        </Modal>
      )}
    </>
  );
};

export default ProjectModal;

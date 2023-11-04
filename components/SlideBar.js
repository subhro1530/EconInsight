// Slidebar.js
import React, { useState } from "react";
import { Box, Button, Image } from "@chakra-ui/react";

const ImageSlider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <Box position="relative" width="100%">
      <Image
        src={images[currentImageIndex]}
        alt={`Image ${currentImageIndex}`}
      />
      <Button
        onClick={prevImage}
        position="absolute"
        left="10px"
        top="50%"
        transform="translateY(-50%)"
      >
        Previous
      </Button>
      <Button
        onClick={nextImage}
        position="absolute"
        right="10px"
        top="50%"
        transform="translateY(-50%)"
      >
        Next
      </Button>
    </Box>
  );
};

export default ImageSlider;

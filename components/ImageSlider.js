import React, { useState } from "react";
import { Box, Button, Image } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

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
        <FontAwesomeIcon icon={faArrowLeft} />
      </Button>
      <Button
        onClick={nextImage}
        position="absolute"
        right="10px"
        top="50%"
        transform="translateY(-50%)"
      >
        <FontAwesomeIcon icon={faArrowRight} />
      </Button>
    </Box>
  );
};

export default ImageSlider;

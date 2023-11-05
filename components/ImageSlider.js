// ImageSlider.js
import React, { useState, useEffect, useRef } from "react";
import { Box, Button, Image } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import styles from "../styles/ImageSlider.module.css";

const ImageSlider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isManual, setIsManual] = useState(false);
  const imageChangeInterval = useRef();

  useEffect(() => {
    const startAutoRotation = () => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    };

    imageChangeInterval.current = setInterval(startAutoRotation, 5000);

    return () => {
      clearInterval(imageChangeInterval.current);
    };
  }, [images]);

  const handleManualChange = (direction) => {
    clearInterval(imageChangeInterval.current);
    setIsManual(true);

    setTimeout(() => {
      setCurrentImageIndex((prevIndex) =>
        direction === "prev" ? prevIndex - 1 : prevIndex + 1
      );
      setIsManual(false);
    }, 4000);
  };

  return (
    <Box className={styles.container}>
      <Box className={styles.imageSlider}>
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`Image ${index}`}
            className={`${styles.image} ${
              currentImageIndex === index ? "" : styles.hidden
            }`}
          />
        ))}
        <Button
          onClick={() => handleManualChange("prev")}
          className={styles.prevButton}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </Button>
        <Button
          onClick={() => handleManualChange("next")}
          className={styles.nextButton}
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </Button>
      </Box>
    </Box>
  );
};

export default ImageSlider;

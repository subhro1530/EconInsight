import React, { useState, useEffect, useRef, useCallback } from "react";
import { Box, Button, Image, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/imageSlider.module.css";

const WhatsNewSection = () => {
  return (
    <Box className={styles.whatsNewSection}>
      <Text fontSize="24px" fontWeight="bold">
        What&apos;s New
      </Text>
      <ul>
        <li>New Feature 1</li>
        <li>New Feature 2</li>
        <li>New Feature 3</li>
        {/* Add more items as needed */}
      </ul>
    </Box>
  );
};

const ImageSlider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imageChangeTime = 5000; // 5 seconds
  const imageChangeInterval = useRef();
  const [isTurningPage, setIsTurningPage] = useState(false);
  const [isManualorAuto, setIsManualorAuto] = useState(true); // true - Auto & false - Manual
  const [isImageLoaded, setIsImageLoaded] = useState(false); // Flag for image loading
  const [isCheckLoaded, setIsCheckLoaded] = useState(false); // Flag for image loading check

  const nextImage = useCallback(() => {
    if (isManualorAuto) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    } else {
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
        setIsTurningPage(false);
      }, 400);
    }
  }, [images, isManualorAuto]);

  const prevImage = useCallback(() => {
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
      setIsTurningPage(false);
    }, 400);
  }, [images]);

  useEffect(() => {
    // Function to start the automatic rotation after a 5-second delay
    const startAutoRotation = () => {
      if (isImageLoaded) {
        setIsTurningPage(true);
        setIsManualorAuto(true);
        setTimeout(() => {
          nextImage();
          setIsTurningPage(false);
          setIsManualorAuto(false);
        }, 400);
      }
    };

    const timerCallback = () => {
      if ((currentImageIndex === 0) & (isCheckLoaded === false)) {
        setTimeout(startAutoRotation, 1000);
        setIsCheckLoaded(true);
      } else {
        startAutoRotation();
      }
    };

    // Set up the timer to change images automatically
    imageChangeInterval.current = setInterval(timerCallback, imageChangeTime);
  }, [images, nextImage, isImageLoaded, currentImageIndex, isCheckLoaded]);

  const resetTimer = () => {
    clearInterval(imageChangeInterval.current);
    imageChangeInterval.current = setInterval(() => {
      if (isImageLoaded) {
        setIsTurningPage(true);
        setIsManualorAuto(true);
        setTimeout(() => {
          nextImage();
          setIsTurningPage(false);
          setIsManualorAuto(false);
        }, 400);
      }
    }, imageChangeTime);
  };

  return (
    <Box className={styles.container}>
      <Box className={styles.imageSlider}>
        <Image
          src={images[currentImageIndex]}
          alt={`Image ${currentImageIndex}`}
          className={`${styles.image} ${
            isTurningPage ? styles["page-turn"] : ""
          }`}
          onLoad={() => {
            setIsImageLoaded(true); // Set the flag when the image is loaded
          }}
        />
        <Button
          onClick={() => {
            setIsManualorAuto(false);
            prevImage();
            resetTimer();
            setIsTurningPage(true);
          }}
          style={{ left: 0 }}
          className={styles.changeButton}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </Button>
        <Button
          onClick={() => {
            setIsManualorAuto(false);
            nextImage();
            resetTimer();
            setIsTurningPage(true);
          }}
          style={{ right: 0 }}
          className={styles.changeButton}
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </Button>
      </Box>
      <WhatsNewSection />
    </Box>
  );
};

export default ImageSlider;

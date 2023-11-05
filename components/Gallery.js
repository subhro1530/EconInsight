// components/VideoGallery.js
import React, { useState } from "react";
import { Box, Button, Grid, Heading } from "@chakra-ui/react";
import { ArrowForwardIcon, ArrowBackIcon } from "@chakra-ui/icons";

const VideoGallery = () => {
  const [showAll, setShowAll] = useState(false);

  // Replace this with your list of YouTube video URLs
  const videoList = [
    "wfVMdvaH-w4?si=vul9ByuOloY83XGA",
    "EJHPltmAULA?si=0-lRghnixg4a7sQR",
    "UxNVOeP-_nE?si=5hsDigy12aXrrup5",
    "tyc5n_5xmWU?si=rydzBnSrf5V8QFVF",
    "_sFMEto7gdY?si=fFhnJkruu7TNeqQK",
    "pUqPuAXb4uA?si=TE0JFJF-VHDDMF8v",
    "fIJ86j0HIxM?si=0mMWJbsoj2Bsmvb3",
    "gVk-_J6GLz0?si=cXhwd7mqNYJ2z3z1",
  ];

  return (
    <Box>
      <Heading textAlign="center" fontWeight={300} fontSize="5xl" mb="8">
        Video Gallery
      </Heading>
      <Grid templateColumns="repeat(4, 1fr)" gap={4}>
        {showAll
          ? videoList.map((videoId, index) => (
              <Box key={index}>
                <iframe
                  width="100%"
                  height="200"
                  src={`https://www.youtube.com/embed/${videoId}`}
                  allowFullScreen
                  title={`YouTube Video ${index + 1}`}
                  style={{
                    boxShadow: "3px 3px 10px rgba(0, 0, 0, 0.2)",
                    padding: "10px",
                    borderRadius: "10px",
                  }}
                ></iframe>
              </Box>
            ))
          : videoList.slice(0, 4).map((videoId, index) => (
              <Box key={index}>
                <iframe
                  width="100%"
                  height="200"
                  src={`https://www.youtube.com/embed/${videoId}`}
                  allowFullScreen
                  title={`YouTube Video ${index + 1}`}
                  style={{
                    boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.2)",
                    padding: "10px",
                    borderRadius: "10px",
                  }}
                ></iframe>
              </Box>
            ))}
      </Grid>
      {!showAll && (
        <Button
          onClick={() => setShowAll(true)}
          mt={4}
          leftIcon={<ArrowForwardIcon />}
        >
          See All
        </Button>
      )}
      {showAll && (
        <Button
          onClick={() => setShowAll(false)}
          mt={4}
          leftIcon={<ArrowBackIcon />}
        >
          Show Less
        </Button>
      )}
    </Box>
  );
};

export default VideoGallery;

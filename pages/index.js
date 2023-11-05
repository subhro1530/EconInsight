// pages/index.js
import React from "react";
import { Box, ChakraProvider, CSSReset, extendTheme } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import ImageSlider from "../components/ImageSlider";
import Footer from "../components/Footer";
import ManageOptions from "@/components/ManageOptions";
import Gallery from "../components/Gallery";
import Programmes from "@/components/Programmes";

const images = [
  "img (1).jpg",
  "img (2).jpg",
  "img (3).jpg",
  "img (4).jpg",
  "img (5).jpg",
];

const Home = () => {
  const theme = extendTheme({
    styles: {
      global: {
        body: {
          bg: "gray.100",
        },
      },
    },
  });
  return (
    <div>
      {/* Your other page content goes here */}
      <ChakraProvider>
        <Navbar />
        <ImageSlider images={images} />
        <ManageOptions />
        <Programmes />
        <ChakraProvider theme={theme}>
          <CSSReset />
          <Gallery />
        </ChakraProvider>
        <Footer />
      </ChakraProvider>
    </div>
  );
};

export default Home;

// pages/index.js
import React from "react";
import { Box, ChakraProvider } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import ImageSlider from "../components/ImageSlider";
import Footer from "../components/Footer";
const images = [
  "img (1).jpg",
  "img (2).jpg",
  "img (3).jpg",
  "img (4).jpg",
  "img (5).jpg",
];

const Home = () => {
  return (
    <div>
      {/* Your other page content goes here */}
      <Navbar />
      <ChakraProvider>
        <ImageSlider images={images} />
      </ChakraProvider>
      <Footer />
    </div>
  );
};

export default Home;

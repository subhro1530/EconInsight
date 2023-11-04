// pages/index.js
import React from "react";
import { Box, ChakraProvider } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import SlideBar from "../components/SlideBar";
import Footer from "../components/Footer";
const images = ["img (1)", "img (2)", "img (3)", "img (4)", "img (5)"];

const Home = () => {
  return (
    <div>
      {/* Your other page content goes here */}
      <Navbar />
      <ChakraProvider>
          <SlideBar images={images} />
      </ChakraProvider>
      <Footer />
    </div>
  );
};

export default Home;

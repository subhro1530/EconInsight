// pages/_app.js

import Head from "next/head";
import "../styles/globals.css"; // Import your global styles
import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
  return (
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
  );
}

export default MyApp;
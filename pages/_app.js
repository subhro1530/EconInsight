// pages/_app.js

import Head from "next/head";
import "../styles/globals.css"; // Import your global styles

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </div>
  );
}

export default MyApp;
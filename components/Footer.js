// components/Footer.js
import React from "react";
import { Box, chakra, Flex, Link, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <chakra.footer bg="gray.800" color="white" py="4">
      <Flex direction="column" align="center">
        {/* Social Links */}
        <Box mb="2">
          <Link mx="2" href="#" target="_blank">
            Twitter
          </Link>
          <Link mx="2" href="#" target="_blank">
            LinkedIn
          </Link>
          <Link mx="2" href="#" target="_blank">
            GitHub
          </Link>
        </Box>

        {/* Copyright */}
        <Text fontSize="sm" opacity="0.8">
          © 2023 Your Company. All rights reserved.
        </Text>
      </Flex>
    </chakra.footer>
  );
};

export default Footer;
